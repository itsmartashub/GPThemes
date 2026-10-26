// Generates per-browser manifest.json files from a shared base and browser-specific overrides. The extension version is read once from package.json, keeping a single source of truth.

const ROOT = new URL('..', import.meta.url)
const BROWSERS = [{ dir: 'src/manifests/chromium-mv3' }, { dir: 'src/manifests/firefox-mv2' }]

function merge(base, override) {
	const result = { ...base }
	for (const [key, value] of Object.entries(override)) {
		const current = result[key]
		if (
			value &&
			typeof value === 'object' &&
			!Array.isArray(value) &&
			current &&
			typeof current === 'object' &&
			!Array.isArray(current)
		) {
			result[key] = merge(current, value)
		} else {
			result[key] = value
		}
	}
	return result
}

async function readJson(path) {
	return JSON.parse(await Deno.readTextFile(new URL(path, ROOT)))
}

async function writeJson(path, value) {
	await Deno.writeTextFile(new URL(path, ROOT), `${JSON.stringify(value, null, '\t')}\n`)
}

async function generateManifests() {
	const { version } = await readJson('package.json')
	const base = await readJson('src/manifests/base.json')

	for (const browser of BROWSERS) {
		const override = await readJson(`${browser.dir}/override.json`)
		const manifest = merge(base, override)
		manifest.version = version
		await writeJson(`${browser.dir}/manifest.json`, manifest)
		console.log(`✅ Generated ${browser.dir}/manifest.json (v${version})`)
	}
}

await generateManifests()
