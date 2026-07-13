import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const LOCK_PATH = path.join(ROOT, 'src/assets/fonts/font-assets.lock.json')
const PACKAGE_DIRS = ['build/prod/gpthemes-chromium-mv3', 'build/prod/gpthemes-firefox-mv2']

async function listFiles(directory) {
	const entries = await readdir(directory, { withFileTypes: true })
	const nested = await Promise.all(
		entries.map(async (entry) => {
			const entryPath = path.join(directory, entry.name)
			return entry.isDirectory() ? listFiles(entryPath) : [entryPath]
		}),
	)
	return nested.flat()
}

function relativeToPackage(packageDirectory, file) {
	return path.relative(packageDirectory, file).split(path.sep).join('/')
}

const lock = JSON.parse(await readFile(LOCK_PATH, 'utf8'))
const expectedAssetStems = lock.assets.map(({ file }) => path.basename(file, '.woff2'))
const expectedAssetHashes = lock.assets.map(({ sha256 }) => sha256).sort()
const expectedLicenses = lock.families.map(({ licenseFile }) => path.basename(licenseFile))
const expectedCatalogs = new Map(
	lock.generated.contentRuntime.families.map(({ path: catalogPath, sha256: hash }) => [
		path.basename(catalogPath),
		hash,
	]),
)
const expectedNotice = await readFile(path.join(ROOT, lock.generated.notice.path))
const sha256 = (value) => createHash('sha256').update(value).digest('hex')

assert.equal(sha256(expectedNotice), lock.generated.notice.sha256)
assert.match(
	expectedNotice.toString('utf8'),
	/source repository's `src\/assets\/fonts\/font-assets\.lock\.json`/,
)

for (const relativePackageDirectory of PACKAGE_DIRS) {
	const packageDirectory = path.join(ROOT, relativePackageDirectory)
	const files = await listFiles(packageDirectory)
	const relativeFiles = files.map((file) => relativeToPackage(packageDirectory, file))
	const fontFiles = relativeFiles.filter((file) => file.endsWith('.woff2'))
	const licenseFiles = relativeFiles.filter((file) => file.endsWith('-OFL.txt'))
	const noticeFiles = relativeFiles.filter((file) => file.endsWith('/NOTICE.md'))
	const catalogFiles = relativeFiles.filter((file) => file.endsWith('.generated.txt'))

	assert.equal(
		fontFiles.length,
		lock.totals.assets,
		`${relativePackageDirectory} must contain every pinned font asset exactly once`,
	)
	assert.equal(
		licenseFiles.length,
		lock.totals.families,
		`${relativePackageDirectory} must contain one license per bundled family`,
	)
	assert.equal(
		noticeFiles.length,
		1,
		`${relativePackageDirectory} must contain the bundled-font notice`,
	)
	assert.equal(
		catalogFiles.length,
		expectedCatalogs.size,
		`${relativePackageDirectory} must contain every generated family catalog exactly once`,
	)
	for (const catalogFile of catalogFiles) {
		const expectedHash = expectedCatalogs.get(path.basename(catalogFile))
		assert.ok(
			expectedHash,
			`${relativePackageDirectory} contains unexpected catalog ${catalogFile}`,
		)
		assert.equal(
			sha256(await readFile(path.join(packageDirectory, catalogFile))),
			expectedHash,
			`${relativePackageDirectory} catalog hash mismatch: ${catalogFile}`,
		)
	}
	for (const catalog of expectedCatalogs.keys()) {
		assert.equal(
			catalogFiles.filter((file) => path.basename(file) === catalog).length,
			1,
			`${relativePackageDirectory} is missing or duplicates ${catalog}`,
		)
	}
	const packagedAssetHashes = (
		await Promise.all(fontFiles.map((file) => readFile(path.join(packageDirectory, file))))
	)
		.map(sha256)
		.sort()
	assert.deepEqual(
		packagedAssetHashes,
		expectedAssetHashes,
		`${relativePackageDirectory} font binary hashes must exactly match the source lock`,
	)
	assert.deepEqual(
		licenseFiles.map((file) => path.basename(file)).sort(),
		[...expectedLicenses].sort(),
		`${relativePackageDirectory} must not omit or add font license files`,
	)
	assert.equal(
		sha256(await readFile(path.join(packageDirectory, noticeFiles[0]))),
		lock.generated.notice.sha256,
		`${relativePackageDirectory} notice must exactly match the source lock`,
	)

	for (const stem of expectedAssetStems) {
		assert.equal(
			fontFiles.filter((file) => path.basename(file).startsWith(`${stem}.`)).length,
			1,
			`${relativePackageDirectory} is missing or duplicates ${stem}`,
		)
	}
	for (const license of expectedLicenses) {
		assert.equal(
			licenseFiles.filter((file) => path.basename(file) === license).length,
			1,
			`${relativePackageDirectory} is missing or duplicates ${license}`,
		)
	}

	const runtimeTextFiles = files.filter((file) => /\.(?:css|html|js|json)$/.test(file))
	const runtimeText = (
		await Promise.all(runtimeTextFiles.map((file) => readFile(file, 'utf8')))
	).join('\n')
	assert.doesNotMatch(
		runtimeText,
		/fonts\.(?:googleapis|gstatic)\.com/,
		`${relativePackageDirectory} must not contact a remote font host`,
	)

	const fontReferenceText = (
		await Promise.all(
			files
				.filter((file) => /\.(?:css|js|json)$/.test(file))
				.map((file) => readFile(file, 'utf8')),
		)
	).join('\n')
	for (const fontFile of fontFiles) {
		assert.match(
			fontReferenceText,
			new RegExp(path.basename(fontFile).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
			`${relativePackageDirectory} contains an unreferenced font file: ${fontFile}`,
		)
	}

	const manifest = JSON.parse(
		await readFile(path.join(packageDirectory, 'manifest.json'), 'utf8'),
	)
	const csp =
		typeof manifest.content_security_policy === 'string'
			? manifest.content_security_policy
			: manifest.content_security_policy.extension_pages
	assert.equal(csp, "script-src 'self'; style-src 'self'; font-src 'self';")
	if (manifest.manifest_version === 2) {
		assert.deepEqual(
			manifest.browser_specific_settings.gecko.data_collection_permissions.required,
			['none'],
		)
	}

	const bytes = await Promise.all(files.map((file) => stat(file).then(({ size }) => size)))
	console.log(
		`✓ ${relativePackageDirectory}: ${fontFiles.length} fonts, ${catalogFiles.length} catalogs, ${licenseFiles.length} licenses, ${bytes.reduce((sum, size) => sum + size, 0)} bytes`,
	)
}
