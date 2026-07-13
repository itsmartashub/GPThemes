#!/usr/bin/env node

import { createHash } from 'node:crypto'
import { access, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import * as fontkit from 'fontkit'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const FONT_ROOT = path.join(ROOT, 'src/assets/fonts')
const FILES_ROOT = path.join(FONT_ROOT, 'files')
const LICENSES_ROOT = path.join(FONT_ROOT, 'licenses')
const LOCK_PATH = path.join(FONT_ROOT, 'font-assets.lock.json')
const NOTICE_PATH = path.join(FONT_ROOT, 'NOTICE.md')
const CONTENT_SCSS_PATH = path.join(ROOT, 'src/sass/generated/_font-faces.scss')
const POPUP_SCSS_PATH = path.join(ROOT, 'src/popup/scss/generated/_font-faces.scss')
const CONTENT_RUNTIME_PATH = path.join(ROOT, 'src/js/app/custom-fonts/fontCatalog.generated.js')
const CONTENT_RUNTIME_ROOT = path.join(ROOT, 'src/js/app/custom-fonts/generated')

const GOOGLE_FONTS_COMMIT = 'ec0464b978de222073645d6d3366f3fdf03376d8'
const CSS_API_BASE = 'https://fonts.googleapis.com/css2'
const CSS_USER_AGENT =
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36'
const SELECTABLE_QUERY =
	'ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,900'

const SELECTABLE_FAMILIES = [
	['Inter', 'inter'],
	['Roboto', 'roboto'],
	['Roboto Mono', 'robotomono'],
	['Roboto Serif', 'robotoserif'],
	['DM Sans', 'dmsans'],
	['Reddit Mono', 'redditmono'],
	['Poppins', 'poppins'],
	['Raleway', 'raleway'],
	['Noto Sans', 'notosans'],
	['Lato', 'lato'],
	['Quicksand', 'quicksand'],
	['Outfit', 'outfit'],
	['Share Tech Mono', 'sharetechmono'],
	['JetBrains Mono', 'jetbrainsmono'],
	['Work Sans', 'worksans'],
	['Lora', 'lora'],
	['Manrope', 'manrope'],
	['Libre Baskerville', 'librebaskerville'],
	['Bricolage Grotesque', 'bricolagegrotesque'],
	['Hedvig Letters Serif', 'hedviglettersserif'],
	['Literata', 'literata'],
	['Syne', 'syne'],
	['Sora', 'sora'],
	['Golos Text', 'golostext'],
	['Google Sans Flex', 'googlesansflex'],
]

const POPUP_FAMILIES = [
	['Instrument Serif', 'instrumentserif', 'ital@0;1'],
	['Newsreader', 'newsreader', 'ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500'],
	['Inter', 'inter', 'wght@400;500;600'],
]

const GOOGLE_SANS_METADATA_URL = 'https://fonts.google.com/metadata/fonts/Google%20Sans%20Flex'
const GOOGLE_SANS_COPYRIGHT_NOTICE = 'Copyright 2015 Google LLC. All Rights Reserved.'
const GOOGLE_SANS_LICENSE_URL = 'https://openfontlicense.org'

const sha256 = (value) => createHash('sha256').update(value).digest('hex')
const toPosix = (value) => value.split(path.sep).join('/')
const currentLocalDate = () => {
	const now = new Date()
	const year = now.getFullYear()
	const month = String(now.getMonth() + 1).padStart(2, '0')
	const day = String(now.getDate()).padStart(2, '0')
	return `${year}-${month}-${day}`
}

function assertGoogleSansNameTable(bytes, label) {
	let font
	try {
		font = fontkit.create(bytes)
	} catch (error) {
		throw new Error(
			`Could not parse Google Sans Flex name table for ${label}: ${error.message}`,
		)
	}

	const copyrights = Object.values(font.name?.records?.copyright ?? {})
	const licenseUrls = Object.values(font.name?.records?.licenseURL ?? {})
	if (
		copyrights.length === 0 ||
		copyrights.some((value) => value !== GOOGLE_SANS_COPYRIGHT_NOTICE)
	) {
		throw new Error(`Google Sans Flex nameID 0 mismatch for ${label}`)
	}
	if (
		licenseUrls.length === 0 ||
		licenseUrls.some((value) => value !== GOOGLE_SANS_LICENSE_URL)
	) {
		throw new Error(`Google Sans Flex nameID 14 mismatch for ${label}`)
	}

	return {
		copyright: GOOGLE_SANS_COPYRIGHT_NOTICE,
		licenseUrl: GOOGLE_SANS_LICENSE_URL,
	}
}

function usage() {
	console.error(
		'Usage: node scripts/sync-font-assets.mjs --verify | --refresh [--accept-upstream-changes]',
	)
}

function parseArgs() {
	const args = new Set(process.argv.slice(2))
	const refresh = args.has('--refresh')
	const verify = args.has('--verify')
	const acceptChanges = args.has('--accept-upstream-changes')

	if (
		refresh === verify ||
		[...args].some(
			(arg) => !['--refresh', '--verify', '--accept-upstream-changes'].includes(arg),
		)
	) {
		usage()
		process.exit(2)
	}

	if (acceptChanges && !refresh) {
		usage()
		process.exit(2)
	}

	return { refresh, verify, acceptChanges }
}

async function exists(target) {
	try {
		await access(target)
		return true
	} catch {
		return false
	}
}

async function fetchBytes(url) {
	const response = await fetch(url, {
		headers: { 'user-agent': CSS_USER_AGENT },
	})

	if (!response.ok) {
		throw new Error(`Fetch failed (${response.status}) for ${url}`)
	}

	return Buffer.from(await response.arrayBuffer())
}

async function fetchText(url) {
	return (await fetchBytes(url)).toString('utf8').replaceAll('\r\n', '\n')
}

async function mapLimit(values, concurrency, mapper) {
	const results = new Array(values.length)
	let nextIndex = 0

	async function worker() {
		while (nextIndex < values.length) {
			const index = nextIndex
			nextIndex += 1
			results[index] = await mapper(values[index], index)
		}
	}

	await Promise.all(Array.from({ length: Math.min(concurrency, values.length) }, worker))
	return results
}

function cssUrl(family, query) {
	return `${CSS_API_BASE}?family=${encodeURIComponent(family)}:${query}&display=swap`
}

function parseFaces(css, request) {
	const faces = []
	const expression = /(?:\/\*\s*([^*]+?)\s*\*\/\s*)?@font-face\s*\{([\s\S]*?)\n\}/g

	for (const match of css.matchAll(expression)) {
		const body = match[2].trim()
		const sourceUrl = body.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/)?.[1]
		if (!sourceUrl) {
			throw new Error(`Could not find an official WOFF2 source in ${request.cssUrl}`)
		}

		const property = (name) =>
			body.match(new RegExp(`(?:^|\\n)\\s*${name}:\\s*([^;]+);`))?.[1].trim() ?? null

		faces.push({
			body,
			display: property('font-display'),
			family: property('font-family')?.replace(/^['"]|['"]$/g, '') ?? request.family,
			fontStretch: property('font-stretch'),
			style: property('font-style'),
			subset: match[1]?.trim() ?? 'default',
			unicodeRange: property('unicode-range'),
			weight: property('font-weight'),
			sourceUrl,
			scope: request.scope,
		})
	}

	if (faces.length === 0) {
		throw new Error(`No @font-face rules returned by ${request.cssUrl}`)
	}

	return faces
}

function googleFontsRawUrl(slug, filename) {
	return `https://raw.githubusercontent.com/google/fonts/${GOOGLE_FONTS_COMMIT}/ofl/${slug}/${filename}`
}

function createRequests() {
	return [
		...SELECTABLE_FAMILIES.map(([family, slug]) => ({
			family,
			slug,
			query: SELECTABLE_QUERY,
			scope: 'content',
			cssUrl: cssUrl(family, SELECTABLE_QUERY),
		})),
		...POPUP_FAMILIES.map(([family, slug, query]) => ({
			family,
			slug,
			query,
			scope: 'popup',
			cssUrl: cssUrl(family, query),
		})),
	]
}

function generatedScssHeader(scope) {
	return `// Generated by scripts/sync-font-assets.mjs. Do not edit.\n// Scope: ${scope}. Font binaries are committed and release builds are offline.\n\n`
}

function renderFaces(faces, urlToAsset, relativePrefix, scope) {
	const rules = faces
		.filter((face) => face.scope === scope)
		.map((face) => {
			const asset = urlToAsset.get(face.sourceUrl)
			if (!asset) throw new Error(`Missing local asset for ${face.sourceUrl}`)
			const localUrl = `${relativePrefix}/${asset.file}`
			const familyName = face.family.includes(' ') ? `'${face.family}'` : face.family
			const body = face.body
				.replace(/font-family:\s*['"][^'"]+['"];/, `font-family: ${familyName};`)
				.replace(`url(${face.sourceUrl})`, `url("${localUrl}")`)
				.split('\n')
				.map((line) => `\t${line.trim()}`)
				.join('\n')
			return `/* ${face.family} — ${face.subset} */\n@font-face {\n${body}\n}`
		})

	return `${generatedScssHeader(scope)}${rules.join('\n\n')}\n`
}

function renderContentRuntime(faces, urlToAsset) {
	const catalog = {}

	for (const [family] of SELECTABLE_FAMILIES) {
		const groups = new Map()
		for (const face of faces.filter(
			(item) => item.scope === 'content' && item.family === family,
		)) {
			const asset = urlToAsset.get(face.sourceUrl)
			if (!asset) throw new Error(`Missing local asset for ${face.sourceUrl}`)
			const nonWeight = {
				asset: asset.file,
				...(face.display ? { display: face.display } : {}),
				style: face.style,
				...(face.fontStretch ? { stretch: face.fontStretch } : {}),
				...(face.unicodeRange ? { unicodeRange: face.unicodeRange } : {}),
			}
			const existing = groups.get(asset.file)
			if (existing && JSON.stringify(existing.nonWeight) !== JSON.stringify(nonWeight)) {
				throw new Error(`One ${family} binary has incompatible non-weight descriptors`)
			}
			const group = existing ?? { nonWeight, weights: new Set() }
			group.weights.add(face.weight)
			groups.set(asset.file, group)
		}

		catalog[family] = [...groups.values()]
			.map(({ nonWeight, weights }) => {
				const numericWeights = [...weights].map(Number).sort((a, b) => a - b)
				if (numericWeights.some(Number.isNaN)) {
					throw new Error(`Non-numeric ${family} weight cannot be consolidated`)
				}
				const weight =
					numericWeights.length === 1
						? String(numericWeights[0])
						: `${numericWeights[0]} ${numericWeights.at(-1)}`
				return { ...nonWeight, weight }
			})
			.sort((a, b) => a.asset.localeCompare(b.asset))
	}

	const descriptorCount = Object.values(catalog).reduce((sum, entries) => sum + entries.length, 0)
	const uniqueAssetCount = new Set(
		Object.values(catalog).flatMap((entries) => entries.map(({ asset }) => asset)),
	).size
	if (descriptorCount !== uniqueAssetCount) {
		throw new Error('Content catalog must contain exactly one descriptor per unique asset')
	}

	const fingerprint = sha256(JSON.stringify(catalog))
	const modules = SELECTABLE_FAMILIES.map(([family, slug]) => {
		const descriptors = catalog[family]
		const text = `${JSON.stringify(descriptors)}\n`
		return {
			family,
			slug,
			path: path.join(CONTENT_RUNTIME_ROOT, `${slug}.generated.txt`),
			text,
		}
	})

	const catalogLines = SELECTABLE_FAMILIES.map(
		([family, slug]) =>
			`\t${JSON.stringify(family)}: ${JSON.stringify(`${slug}.generated.txt`)},`,
	).join('\n')
	const indexText = `// biome-ignore-all format: generated lazy catalog index\n// Generated by scripts/sync-font-assets.mjs. Do not edit.\n\nconst FONT_CATALOG_FILES = {\n${catalogLines}\n}\n\nconst FONT_CATALOG_FINGERPRINT = '${fingerprint}'\n\nexport { FONT_CATALOG_FILES, FONT_CATALOG_FINGERPRINT }\n`

	return { descriptorCount, fingerprint, indexText, modules }
}

function assetFingerprint(lock) {
	const fingerprint = {
		css: lock.requests.map(({ cssSha256, cssUrl }) => ({ cssSha256, cssUrl })),
		assets: lock.assets.map(({ sha256: hash, sourceUrls }) => ({ sha256: hash, sourceUrls })),
		licenses: lock.families.map(({ licenseSha256, licenseSource, licenseTextSource }) => ({
			licenseSha256,
			licenseSource,
			licenseTextSource,
		})),
		googleSansFlex: lock.googleSansFlex,
	}

	return sha256(JSON.stringify(fingerprint))
}

async function buildRefreshState() {
	const retrievedOn = currentLocalDate()
	const requests = createRequests()
	const responses = await mapLimit(requests, 6, async (request) => {
		const css = await fetchText(request.cssUrl)
		return {
			...request,
			css,
			cssSha256: sha256(css),
			faces: parseFaces(css, request),
		}
	})

	const faces = responses.flatMap(({ faces: requestFaces }) => requestFaces)
	const uniqueUrls = [...new Set(faces.map(({ sourceUrl }) => sourceUrl))].sort()
	const downloaded = await mapLimit(uniqueUrls, 12, async (sourceUrl) => {
		const bytes = await fetchBytes(sourceUrl)
		if (bytes.subarray(0, 4).toString('ascii') !== 'wOF2') {
			throw new Error(`Expected WOFF2 data from ${sourceUrl}`)
		}
		return { bytes, sha256: sha256(bytes), size: bytes.length, sourceUrl }
	})

	const slugByFamily = new Map(
		[...SELECTABLE_FAMILIES, ...POPUP_FAMILIES].map(([family, slug]) => [family, slug]),
	)
	const assetByKey = new Map()
	const urlToAsset = new Map()

	for (const item of downloaded) {
		const sourceFaces = faces.filter(({ sourceUrl }) => sourceUrl === item.sourceUrl)
		const slugs = [...new Set(sourceFaces.map(({ family }) => slugByFamily.get(family)))].sort()
		if (slugs.length !== 1 || !slugs[0]) {
			throw new Error(`Could not determine one family slug for ${item.sourceUrl}`)
		}
		const slug = slugs[0]
		const key = `${slug}:${item.sha256}`
		let asset = assetByKey.get(key)
		if (!asset) {
			asset = {
				bytes: item.bytes,
				file: `files/${slug}-${item.sha256.slice(0, 16)}.woff2`,
				sha256: item.sha256,
				size: item.size,
				sourceUrls: [],
				faces: [],
			}
			assetByKey.set(key, asset)
		}
		asset.sourceUrls.push(item.sourceUrl)
		asset.faces.push(
			...sourceFaces.map(
				({ display, family, fontStretch, scope, style, subset, unicodeRange, weight }) => ({
					display,
					family,
					fontStretch,
					scope,
					style,
					subset,
					unicodeRange,
					weight,
				}),
			),
		)
		urlToAsset.set(item.sourceUrl, asset)
	}

	const allFamilies = [
		...new Map(
			[...SELECTABLE_FAMILIES, ...POPUP_FAMILIES].map(([family, slug]) => [
				family,
				{ family, slug },
			]),
		).values(),
	].sort((a, b) => a.family.localeCompare(b.family))

	const googleSansMetadataRaw = await fetchText(GOOGLE_SANS_METADATA_URL)
	const googleSansMetadataJson = googleSansMetadataRaw.replace(/^\)\]\}'\s*/, '')
	const googleSansMetadata = JSON.parse(googleSansMetadataJson)
	if (googleSansMetadata.family !== 'Google Sans Flex' || googleSansMetadata.license !== 'ofl') {
		throw new Error('Official Google Sans Flex metadata no longer identifies the family as OFL')
	}

	const licenses = new Map()
	await mapLimit(allFamilies, 6, async ({ family, slug }) => {
		if (family === 'Google Sans Flex') return
		const source = googleFontsRawUrl(slug, 'OFL.txt')
		licenses.set(family, {
			source,
			textSource: source,
			text: await fetchText(source),
		})
	})

	const canonicalOfl = licenses.get('Inter').text
	const canonicalOflSource = licenses.get('Inter').textSource
	const canonicalLicenseBody = canonicalOfl.slice(canonicalOfl.indexOf('This Font Software'))
	licenses.set('Google Sans Flex', {
		source: GOOGLE_SANS_METADATA_URL,
		textSource: canonicalOflSource,
		text: [
			GOOGLE_SANS_COPYRIGHT_NOTICE,
			'',
			'Google Sans Flex',
			'',
			`Official Google Fonts metadata retrieved ${retrievedOn} identifies this family as license "ofl".`,
			`Metadata: ${GOOGLE_SANS_METADATA_URL}`,
			`Every pinned Google Sans Flex WOFF2 shard records the copyright above in nameID 0 and ${GOOGLE_SANS_LICENSE_URL} in nameID 14.`,
			`Canonical OFL 1.1 text source: ${canonicalOflSource}`,
			'',
			canonicalLicenseBody,
		].join('\n'),
	})

	const assets = [...assetByKey.values()]
		.sort((a, b) => a.file.localeCompare(b.file))
		.map((asset) => ({
			...asset,
			sourceUrls: [...new Set(asset.sourceUrls)].sort(),
			faces: [
				...new Map(asset.faces.map((face) => [JSON.stringify(face), face])).values(),
			].sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b))),
		}))

	const contentScss = `${generatedScssHeader('content')}// Content-page faces are registered lazily by fontCatalog.generated.js.\n`
	const popupScss = renderFaces(faces, urlToAsset, '../../assets/fonts', 'popup')
	const contentRuntime = renderContentRuntime(faces, urlToAsset)
	const googleSansAssets = assets.filter(({ faces: assetFaces }) =>
		assetFaces.some(({ family }) => family === 'Google Sans Flex'),
	)
	const googleSansNameTableEvidence = googleSansAssets.map(({ bytes, file, sha256: hash }) => ({
		file,
		sha256: hash,
		...assertGoogleSansNameTable(bytes, file),
	}))

	const families = allFamilies.map(({ family, slug }) => {
		const license = licenses.get(family)
		const familyAssets = assets.filter(({ faces: assetFaces }) =>
			assetFaces.some(({ family: faceFamily }) => faceFamily === family),
		)
		return {
			family,
			slug,
			license: 'OFL-1.1',
			licenseFile: `licenses/${slug}-OFL.txt`,
			licenseSha256: sha256(license.text),
			licenseSource: license.source,
			licenseTextSource: license.textSource,
			metadataSource:
				family === 'Google Sans Flex'
					? GOOGLE_SANS_METADATA_URL
					: googleFontsRawUrl(slug, 'METADATA.pb'),
			assetFiles: familyAssets.map(({ file }) => file),
			assetBytes: familyAssets.reduce((sum, { size }) => sum + size, 0),
		}
	})

	const lock = {
		schemaVersion: 2,
		retrievedOn,
		googleFontsCommit: GOOGLE_FONTS_COMMIT,
		cssApi: {
			baseUrl: CSS_API_BASE,
			userAgent: CSS_USER_AGENT,
		},
		googleSansFlex: {
			metadataSource: GOOGLE_SANS_METADATA_URL,
			metadataSha256: sha256(googleSansMetadataRaw),
			license: googleSansMetadata.license,
			lastModified: googleSansMetadata.lastModified,
			axes: googleSansMetadata.axes,
			coverageSubsets: Object.keys(googleSansMetadata.coverage ?? {}).sort(),
			binaryNameTableEvidence: {
				copyrightNameId: 0,
				copyrightNotice: GOOGLE_SANS_COPYRIGHT_NOTICE,
				licenseUrlNameId: 14,
				licenseUrl: GOOGLE_SANS_LICENSE_URL,
				assets: googleSansNameTableEvidence,
			},
		},
		requests: responses.map(({ cssSha256, cssUrl: source, family, query, scope, faces }) => ({
			family,
			scope,
			query,
			cssUrl: source,
			cssSha256,
			faceCount: faces.length,
		})),
		families,
		assets: assets.map(({ bytes: _bytes, ...asset }) => asset),
		totals: {
			families: families.length,
			selectableFamilies: SELECTABLE_FAMILIES.length,
			assets: assets.length,
			bytes: assets.reduce((sum, { size }) => sum + size, 0),
		},
		generated: {
			contentScss: {
				path: toPosix(path.relative(ROOT, CONTENT_SCSS_PATH)),
				sha256: sha256(contentScss),
			},
			contentRuntime: {
				descriptorCount: contentRuntime.descriptorCount,
				fingerprint: contentRuntime.fingerprint,
				index: {
					path: toPosix(path.relative(ROOT, CONTENT_RUNTIME_PATH)),
					sha256: sha256(contentRuntime.indexText),
				},
				families: contentRuntime.modules.map(({ family, path: outputPath, text }) => ({
					family,
					path: toPosix(path.relative(ROOT, outputPath)),
					sha256: sha256(text),
				})),
			},
			popupScss: {
				path: toPosix(path.relative(ROOT, POPUP_SCSS_PATH)),
				sha256: sha256(popupScss),
			},
		},
	}
	lock.sourceFingerprint = assetFingerprint(lock)

	const noticeLines = [
		'# Bundled Font Notices',
		'',
		'GPThemes self-hosts the font files listed below so extension use does not contact a font CDN.',
		'Every bundled family is distributed under the SIL Open Font License 1.1; a corresponding family license or provenance notice with the complete OFL text is stored in `licenses/`.',
		'FK Grotesk and FK Grotesk Neue are not bundled because no redistribution license is included in this repository.',
		'',
		`Google Fonts repository revision: \`${GOOGLE_FONTS_COMMIT}\``,
		`Official assets and metadata retrieved: ${retrievedOn}`,
		'',
		'| Family | License | Upstream metadata | Bundled bytes |',
		'| --- | --- | --- | ---: |',
		...families.map(
			({ family, licenseFile, metadataSource, assetBytes }) =>
				`| ${family} | [OFL-1.1](./${licenseFile}) | [source](${metadataSource}) | ${assetBytes} |`,
		),
		'',
		`Google Sans Flex provenance is additionally pinned in the source repository's \`src/assets/fonts/font-assets.lock.json\` to the official Google Fonts family metadata response, including its \`ofl\` license declaration, coverage, axes, response hash, served binary hashes, and the ${googleSansAssets.length}-shard name-table verification of \`${GOOGLE_SANS_COPYRIGHT_NOTICE}\` plus \`${GOOGLE_SANS_LICENSE_URL}\`.`,
		'',
	]
	const notice = noticeLines.join('\n')
	lock.generated.notice = {
		path: toPosix(path.relative(ROOT, NOTICE_PATH)),
		sha256: sha256(notice),
	}

	return { assets, contentRuntime, contentScss, licenses, lock, notice, popupScss }
}

async function writeRefreshState(state) {
	await rm(FILES_ROOT, { recursive: true, force: true })
	await rm(LICENSES_ROOT, { recursive: true, force: true })
	await rm(CONTENT_RUNTIME_ROOT, { recursive: true, force: true })
	await mkdir(FILES_ROOT, { recursive: true })
	await mkdir(LICENSES_ROOT, { recursive: true })
	await mkdir(path.dirname(CONTENT_SCSS_PATH), { recursive: true })
	await mkdir(path.dirname(POPUP_SCSS_PATH), { recursive: true })
	await mkdir(CONTENT_RUNTIME_ROOT, { recursive: true })

	await Promise.all(
		state.assets.map(({ bytes, file }) => writeFile(path.join(FONT_ROOT, file), bytes)),
	)

	const familyByName = new Map(state.lock.families.map((family) => [family.family, family]))
	await Promise.all(
		[...state.licenses].map(([family, { text }]) => {
			const licenseFile = familyByName.get(family).licenseFile
			return writeFile(path.join(FONT_ROOT, licenseFile), text)
		}),
	)

	await Promise.all([
		writeFile(CONTENT_RUNTIME_PATH, state.contentRuntime.indexText),
		...state.contentRuntime.modules.map(({ path: outputPath, text }) =>
			writeFile(outputPath, text),
		),
		writeFile(CONTENT_SCSS_PATH, state.contentScss),
		writeFile(POPUP_SCSS_PATH, state.popupScss),
		writeFile(NOTICE_PATH, state.notice),
		writeFile(LOCK_PATH, `${JSON.stringify(state.lock, null, 2)}\n`),
	])
}

async function verify() {
	const lock = JSON.parse(await readFile(LOCK_PATH, 'utf8'))
	const errors = []
	let bytes = 0
	const expectedFiles = new Set(lock.assets.map(({ file }) => path.basename(file)))
	const expectedLicenses = new Set(
		lock.families.map(({ licenseFile }) => path.basename(licenseFile)),
	)
	const generatedOutputs = [
		lock.generated.contentScss,
		lock.generated.contentRuntime.index,
		...lock.generated.contentRuntime.families,
		lock.generated.popupScss,
		lock.generated.notice,
	]
	const today = currentLocalDate()

	if (lock.schemaVersion !== 2) errors.push('Unsupported font lock schema')
	if (!/^\d{4}-\d{2}-\d{2}$/.test(lock.retrievedOn) || lock.retrievedOn > today) {
		errors.push('Lock retrieval date is invalid or in the future')
	}

	for (const asset of lock.assets) {
		const target = path.join(FONT_ROOT, asset.file)
		if (!(await exists(target))) {
			errors.push(`Missing asset: ${asset.file}`)
			continue
		}
		const data = await readFile(target)
		const actualHash = sha256(data)
		if (actualHash !== asset.sha256) errors.push(`Hash mismatch: ${asset.file}`)
		if (data.length !== asset.size) errors.push(`Size mismatch: ${asset.file}`)
		bytes += data.length
	}

	if (await exists(FILES_ROOT)) {
		for (const filename of await readdir(FILES_ROOT)) {
			if (!expectedFiles.has(filename)) errors.push(`Untracked asset: files/${filename}`)
		}
	}

	for (const family of lock.families) {
		const target = path.join(FONT_ROOT, family.licenseFile)
		if (!(await exists(target))) {
			errors.push(`Missing license: ${family.licenseFile}`)
			continue
		}
		if (sha256(await readFile(target)) !== family.licenseSha256) {
			errors.push(`License hash mismatch: ${family.licenseFile}`)
		}
	}
	if (await exists(LICENSES_ROOT)) {
		for (const filename of await readdir(LICENSES_ROOT)) {
			if (!expectedLicenses.has(filename))
				errors.push(`Untracked license: licenses/${filename}`)
		}
	}

	for (const output of generatedOutputs) {
		const target = path.join(ROOT, output.path)
		if (!(await exists(target))) {
			errors.push(`Missing generated output: ${output.path}`)
			continue
		}
		const text = await readFile(target, 'utf8')
		if (sha256(text) !== output.sha256) errors.push(`Generated hash mismatch: ${output.path}`)
		if (output.path !== lock.generated.notice.path && /https?:\/\//.test(text)) {
			errors.push(`Remote URL in generated runtime output: ${output.path}`)
		}
	}

	const expectedRuntimeFiles = new Set(
		lock.generated.contentRuntime.families.map(({ path: outputPath }) =>
			path.basename(outputPath),
		),
	)
	if (await exists(CONTENT_RUNTIME_ROOT)) {
		for (const filename of await readdir(CONTENT_RUNTIME_ROOT)) {
			if (!expectedRuntimeFiles.has(filename)) {
				errors.push(
					`Untracked generated catalog: ${toPosix(path.relative(ROOT, path.join(CONTENT_RUNTIME_ROOT, filename)))}`,
				)
			}
		}
	}
	const expectedRuntimeFamilies = SELECTABLE_FAMILIES.map(([family]) => family).sort()
	const actualRuntimeFamilies = lock.generated.contentRuntime.families
		.map(({ family }) => family)
		.sort()
	if (JSON.stringify(actualRuntimeFamilies) !== JSON.stringify(expectedRuntimeFamilies)) {
		errors.push('Generated family catalog set does not match selectable families')
	}
	const uniqueContentAssets = new Set(
		lock.assets
			.filter(({ faces }) => faces.some(({ scope }) => scope === 'content'))
			.map(({ file }) => file),
	)
	if (lock.generated.contentRuntime.descriptorCount !== uniqueContentAssets.size) {
		errors.push('Generated descriptor count is not one per unique content asset')
	}
	const expectedAssetsByFamily = new Map(
		expectedRuntimeFamilies.map((family) => [family, new Set()]),
	)
	for (const asset of lock.assets) {
		for (const face of asset.faces) {
			if (face.scope === 'content' && expectedAssetsByFamily.has(face.family)) {
				expectedAssetsByFamily.get(face.family).add(asset.file)
			}
		}
	}
	for (const output of lock.generated.contentRuntime.families) {
		try {
			const descriptors = JSON.parse(await readFile(path.join(ROOT, output.path), 'utf8'))
			if (!Array.isArray(descriptors)) throw new Error('catalog is not an array')
			const actualAssets = descriptors.map(({ asset }) => asset).sort()
			const expectedAssets = [...(expectedAssetsByFamily.get(output.family) ?? [])].sort()
			if (
				new Set(actualAssets).size !== actualAssets.length ||
				JSON.stringify(actualAssets) !== JSON.stringify(expectedAssets)
			) {
				errors.push(`Generated family-to-asset mismatch: ${output.family}`)
			}
		} catch (error) {
			errors.push(
				`Invalid generated family catalog ${output.path}: ${error instanceof Error ? error.message : String(error)}`,
			)
		}
	}

	const googleSansAssets = lock.assets.filter(({ faces }) =>
		faces.some(({ family }) => family === 'Google Sans Flex'),
	)
	const googleEvidence = lock.googleSansFlex.binaryNameTableEvidence
	if (
		googleEvidence.copyrightNameId !== 0 ||
		googleEvidence.copyrightNotice !== GOOGLE_SANS_COPYRIGHT_NOTICE ||
		googleEvidence.licenseUrlNameId !== 14 ||
		googleEvidence.licenseUrl !== GOOGLE_SANS_LICENSE_URL
	) {
		errors.push('Google Sans Flex name-table evidence declaration is invalid')
	}
	const evidenceByFile = new Map(
		googleEvidence.assets.map((evidence) => [evidence.file, evidence]),
	)
	if (evidenceByFile.size !== googleSansAssets.length) {
		errors.push('Google Sans Flex name-table evidence set is incomplete or duplicated')
	}
	for (const asset of googleSansAssets) {
		const evidence = evidenceByFile.get(asset.file)
		if (
			!evidence ||
			evidence.sha256 !== asset.sha256 ||
			evidence.copyright !== GOOGLE_SANS_COPYRIGHT_NOTICE ||
			evidence.licenseUrl !== GOOGLE_SANS_LICENSE_URL
		) {
			errors.push(`Google Sans Flex evidence mismatch: ${asset.file}`)
			continue
		}
		try {
			assertGoogleSansNameTable(await readFile(path.join(FONT_ROOT, asset.file)), asset.file)
		} catch (error) {
			errors.push(error instanceof Error ? error.message : String(error))
		}
	}
	for (const evidence of googleEvidence.assets) {
		if (!googleSansAssets.some(({ file }) => file === evidence.file)) {
			errors.push(`Unexpected Google Sans Flex evidence: ${evidence.file}`)
		}
	}

	if (lock.totals.assets !== lock.assets.length)
		errors.push('Asset count does not match lock totals')
	if (lock.totals.bytes !== bytes) errors.push('Asset byte total does not match lock totals')
	if (assetFingerprint(lock) !== lock.sourceFingerprint)
		errors.push('Lock source fingerprint mismatch')

	if (errors.length > 0) {
		throw new Error(`Font asset verification failed:\n- ${errors.join('\n- ')}`)
	}

	console.log(
		`Verified ${lock.totals.assets} WOFF2 assets across ${lock.totals.families} families (${lock.totals.bytes} bytes).`,
	)
}

async function refresh({ acceptChanges }) {
	const previousLock = (await exists(LOCK_PATH))
		? JSON.parse(await readFile(LOCK_PATH, 'utf8'))
		: null
	const state = await buildRefreshState()

	if (
		previousLock &&
		previousLock.sourceFingerprint !== state.lock.sourceFingerprint &&
		!acceptChanges
	) {
		throw new Error(
			'Official font sources changed. Inspect the new CSS, licenses, metadata, and binaries, then rerun with --refresh --accept-upstream-changes.',
		)
	}

	await writeRefreshState(state)
	await verify()
}

const options = parseArgs()
try {
	if (options.refresh) await refresh(options)
	else await verify()
} catch (error) {
	console.error(error instanceof Error ? error.message : error)
	process.exit(1)
}
