// Generates per-browser manifest.json files from a shared base and browser-specific overrides. The extension version is read once from package.json, keeping a single source of truth.

const ROOT = new URL('..', import.meta.url)
const BROWSERS = [{ dir: 'src/manifests/chromium-mv3' }, { dir: 'src/manifests/firefox-mv3' }]

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

function packageDefaults(pkg) {
	const defaults = {}
	if (pkg.version) defaults.version = pkg.version
	if (pkg.displayName) defaults.name = pkg.displayName
	if (pkg.description) defaults.description = pkg.description
	if (typeof pkg.author === 'string') defaults.author = pkg.author
	else if (pkg.author?.name) defaults.author = pkg.author.name
	if (pkg.homepage) defaults.homepage_url = String(pkg.homepage).replace(/\/$/, '')
	return defaults
}

async function generateManifests() {
	const pkg = await readJson('package.json')
	const base = await readJson('src/manifests/base.json')
	const defaults = packageDefaults(pkg)

	for (const browser of BROWSERS) {
		const override = await readJson(`${browser.dir}/override.json`)

		/* Merge order: package.json defaults -> shared base -> browser override. Later layers override earlier ones, so base/override always win when present */
		const manifest = merge(merge(defaults, base), override)
		await writeJson(`${browser.dir}/manifest.json`, manifest)
		console.log(`✅ Generated ${browser.dir}/manifest.json (v${manifest.version})`)
	}
}

await generateManifests()
