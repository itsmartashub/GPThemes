import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import vm from 'node:vm'

const expectedFontFamilies = [
	'Bricolage Grotesque',
	'DM Sans',
	'FK Grotesk',
	'FK Grotesk Neue',
	'Golos Text',
	'Google Sans Flex',
	'Hedvig Letters Serif',
	'Inter',
	'JetBrains Mono',
	'Lato',
	'Libre Baskerville',
	'Literata',
	'Lora',
	'Manrope',
	'Noto Sans',
	'Outfit',
	'Poppins',
	'Quicksand',
	'Raleway',
	'Reddit Mono',
	'Roboto',
	'Roboto Mono',
	'Roboto Serif',
	'Share Tech Mono',
	'Sora',
	'Syne',
	'Work Sans',
].sort()

function removeImports(source) {
	const lines = source.split('\n')
	const kept = []
	let skipping = false

	for (const line of lines) {
		if (!skipping && /^import\s/.test(line)) {
			skipping = !/from\s+['"][^'"]+['"]\s*$/.test(line) && !/^import\s+['"]/.test(line)
			continue
		}
		if (skipping) {
			if (/from\s+['"][^'"]+['"]\s*$/.test(line)) skipping = false
			continue
		}
		kept.push(line)
	}

	return kept.join('\n')
}

async function read(relativePath) {
	return readFile(new URL(`../${relativePath}`, import.meta.url), 'utf8')
}

test('font settings preserve every existing family without runtime font requests', async () => {
	const source = await read('src/js/app/custom-fonts/index.js')
	const runtimeFontHosts = /fonts\.(?:googleapis|gstatic)\.com/

	assert.doesNotMatch(source, runtimeFontHosts)
	assert.doesNotMatch(source, /createElement\(['"]link['"]\)|rel\s*=\s*['"]stylesheet['"]/)

	const executable = removeImports(source)
		.replace(/export \{[\s\S]*?\}\s*$/, '')
		.concat(
			'\nglobalThis.__fonts = { families: FONT_OPTIONS.slice(1).map(({ name }) => name), resetAll }',
		)
	const unrelatedHostLink = {
		removed: false,
		remove() {
			this.removed = true
		},
	}
	const context = {
		$: () => null,
		FONT_CATALOG_FINGERPRINT: 'test-catalog',
		FONT_CATALOG_FILES: {},
		Notify: { error() {}, success() {} },
		SELECTORS: {
			FONT: {
				FAMILY_ID: 'font-family',
				FAMILY_SECONDARY_ID: 'font-family-secondary',
				SIZE_ID: 'font-size',
				LINE_HEIGHT_ID: 'line-height',
				LETTER_SPACING_ID: 'letter-spacing',
				RESET_BTN_ID: 'reset-fonts',
			},
		},
		SK_TEXT_FONT_FAMILY: 'textFontFamily',
		SK_TEXT_FONT_FAMILY_SECONDARY: 'textFontFamilySecondary',
		SK_TEXT_FONT_SIZE: 'textFontSize',
		SK_TEXT_LETTER_SPACING: 'textLetterSpacing',
		SK_TEXT_LINE_HEIGHT: 'textLineHeight',
		document: {
			fonts: { add() {}, delete() {} },
			getElementById: () => null,
		},
		removeVar() {},
		setItems: async () => {},
		setVars() {},
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(executable, context)

	assert.deepEqual([...context.__fonts.families].sort(), expectedFontFamilies)
	await context.__fonts.resetAll()
	assert.equal(unrelatedHostLink.removed, false)
})

test('popup and manifests permit only self-hosted fonts', async () => {
	const [popup, popupSass, chromiumManifest, firefoxManifest] = await Promise.all([
		read('src/popup/popup.html'),
		read('src/popup/scss/popup.scss'),
		read('src/manifests/chromium-mv3/manifest.json').then(JSON.parse),
		read('src/manifests/firefox-mv2/manifest.json').then(JSON.parse),
	])

	assert.doesNotMatch(popup, /fonts\.(?:googleapis|gstatic)\.com|rel="preconnect"/)
	assert.match(popupSass, /generated\/font-faces/)
	assert.doesNotMatch(
		chromiumManifest.content_security_policy.extension_pages,
		/https?:|fonts\.(?:googleapis|gstatic)\.com/,
	)
	assert.doesNotMatch(
		firefoxManifest.content_security_policy,
		/https?:|fonts\.(?:googleapis|gstatic)\.com/,
	)
	assert.deepEqual(
		firefoxManifest.browser_specific_settings.gecko.data_collection_permissions.required,
		['none'],
	)
	assert.deepEqual(chromiumManifest.web_accessible_resources[0].resources, [
		'../../assets/fonts/NOTICE.md',
		'../../assets/fonts/licenses/*.txt',
		'../../assets/fonts/files/*.woff2',
		'../../js/app/custom-fonts/generated/*.generated.txt',
	])
	assert.deepEqual(firefoxManifest.web_accessible_resources.slice(0, 4), [
		'../../assets/fonts/NOTICE.md',
		'../../assets/fonts/licenses/*.txt',
		'../../assets/fonts/files/*.woff2',
		'../../js/app/custom-fonts/generated/*.generated.txt',
	])
})

test('generated catalogs are compact, extension-relative, and FK asset-free', async () => {
	const lock = JSON.parse(await read('src/assets/fonts/font-assets.lock.json'))
	const [contentCatalog, runtimeIndex, popupCatalog, ...runtimeFamilies] = await Promise.all([
		read('src/sass/generated/_font-faces.scss'),
		read('src/js/app/custom-fonts/fontCatalog.generated.js'),
		read('src/popup/scss/generated/_font-faces.scss'),
		...lock.generated.contentRuntime.families.map(({ path }) => read(path)),
	])
	const runtimeCatalog = runtimeFamilies.join('\n')
	const catalogs = `${contentCatalog}\n${runtimeIndex}\n${runtimeCatalog}\n${popupCatalog}`

	assert.doesNotMatch(catalogs, /https?:\/\//)
	assert.doesNotMatch(catalogs, /font-family:\s*['"]FK Grotesk(?: Neue)?['"]/)
	assert.doesNotMatch(contentCatalog, /url\(|\.woff2/)
	assert.match(runtimeIndex, /"Inter": "inter\.generated\.txt"/)
	assert.doesNotMatch(runtimeIndex, /new URL|fetch\(|\.woff2/)
	assert.doesNotMatch(runtimeFamilies.join(''), /new URL|https?:/)
	const descriptorAssets = runtimeFamilies.flatMap((catalog) =>
		JSON.parse(catalog).map(({ asset }) => asset),
	)
	assert.equal(descriptorAssets.length, lock.generated.contentRuntime.descriptorCount)
	assert.equal(new Set(descriptorAssets).size, descriptorAssets.length)
	for (const [index, output] of lock.generated.contentRuntime.families.entries()) {
		const actualAssets = JSON.parse(runtimeFamilies[index])
			.map(({ asset }) => asset)
			.sort()
		const expectedAssets = lock.assets
			.filter(({ faces }) =>
				faces.some(({ family, scope }) => family === output.family && scope === 'content'),
			)
			.map(({ file }) => file)
			.sort()
		assert.deepEqual(actualAssets, expectedAssets, `${output.family} asset association drifted`)
	}
	assert.ok(Buffer.byteLength(runtimeIndex) < 2_000)
	for (const family of ['Instrument Serif', 'Newsreader']) {
		assert.match(popupCatalog, new RegExp(`font-family:\\s*(?:['"]${family}['"]|${family});`))
	}
})

test('content fonts register once from extension URLs and clean up safely', async () => {
	const source = await read('src/js/app/custom-fonts/index.js')
	const executable = removeImports(source)
		.replace(/export \{[\s\S]*?\}\s*$/, '')
		.concat('\nglobalThis.__fontRuntime = { cleanup, init, syncBundledFontFamilies }')
	const added = []
	const deleted = []
	class FontFaceMock {
		constructor(family, sourceValue, descriptors) {
			this.family = family
			this.source = sourceValue
			this.descriptors = descriptors
		}
	}
	const context = {
		$: () => null,
		FONT_CATALOG_FINGERPRINT: 'runtime-test',
		FONT_CATALOG_FILES: {
			Inter: 'inter.generated.txt',
			Poppins: 'poppins.generated.txt',
		},
		browser: {
			runtime: {
				getManifest: () => ({
					manifest_version: 3,
					web_accessible_resources: [
						{
							resources: [
								'inter.generated.abc123.txt',
								'poppins.generated.abc123.txt',
								'inter-test.abc123.woff2',
								'poppins-test.abc123.woff2',
							],
						},
					],
				}),
				getURL: (resource) => `chrome-extension://test/${resource}`,
			},
		},
		fetch: async (url) => ({
			ok: true,
			json: async () => [
				{
					asset: url.includes('inter')
						? 'files/inter-test.woff2'
						: 'files/poppins-test.woff2',
					style: 'normal',
					weight: '400',
					unicodeRange: 'U+0000-00FF',
				},
			],
		}),
		FontFace: FontFaceMock,
		Notify: { success() {} },
		SELECTORS: {
			FONT: {
				FAMILY_ID: 'font-family',
				FAMILY_SECONDARY_ID: 'font-family-secondary',
				SIZE_ID: 'font-size',
				LINE_HEIGHT_ID: 'line-height',
				LETTER_SPACING_ID: 'letter-spacing',
				RESET_BTN_ID: 'reset-fonts',
			},
		},
		SK_TEXT_FONT_FAMILY: 'textFontFamily',
		SK_TEXT_FONT_FAMILY_SECONDARY: 'textFontFamilySecondary',
		SK_TEXT_FONT_SIZE: 'textFontSize',
		SK_TEXT_LETTER_SPACING: 'textLetterSpacing',
		SK_TEXT_LINE_HEIGHT: 'textLineHeight',
		URL,
		document: {
			fonts: {
				add(face) {
					added.push(face)
				},
				delete(face) {
					deleted.push(face)
				},
			},
			getElementById: () => null,
		},
		getItems: async () => ({
			textFontFamily: 'Inter',
			textFontFamilySecondary: 'Inter',
		}),
		removeVar() {},
		setVar() {},
		setVars() {},
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(executable, context)

	await context.__fontRuntime.init()
	await context.__fontRuntime.init()
	assert.equal(added.length, 1)
	assert.match(added[0].source, /^url\("chrome-extension:\/\//)
	assert.equal(added[0].family, 'Inter')
	await context.__fontRuntime.syncBundledFontFamilies(['Poppins'])
	await context.__fontRuntime.syncBundledFontFamilies(['Poppins'])
	assert.equal(added.length, 2)
	assert.equal(added[1].family, 'Poppins')
	assert.deepEqual(deleted, [added[0]])
	context.__fontRuntime.cleanup()
	assert.deepEqual(deleted, added)
})

test('Default and local-only FK selections never load a bundled catalog', async () => {
	const source = await read('src/js/app/custom-fonts/index.js')
	const executable = removeImports(source)
		.replace(/export \{[\s\S]*?\}\s*$/, '')
		.concat('\nglobalThis.__fontRuntime = { init }')
	let loaderCalls = 0
	const context = {
		$: () => null,
		FONT_CATALOG_FINGERPRINT: 'runtime-test',
		FONT_CATALOG_FILES: { Inter: 'inter.generated.txt' },
		browser: {
			runtime: {
				getManifest: () => {
					loaderCalls += 1
					return { manifest_version: 2, web_accessible_resources: [] }
				},
				getURL: () => '',
			},
		},
		Notify: { error() {}, success() {} },
		SELECTORS: {
			FONT: {
				FAMILY_ID: 'font-family',
				FAMILY_SECONDARY_ID: 'font-family-secondary',
				SIZE_ID: 'font-size',
				LINE_HEIGHT_ID: 'line-height',
				LETTER_SPACING_ID: 'letter-spacing',
				RESET_BTN_ID: 'reset-fonts',
			},
		},
		SK_TEXT_FONT_FAMILY: 'textFontFamily',
		SK_TEXT_FONT_FAMILY_SECONDARY: 'textFontFamilySecondary',
		SK_TEXT_FONT_SIZE: 'textFontSize',
		SK_TEXT_LETTER_SPACING: 'textLetterSpacing',
		SK_TEXT_LINE_HEIGHT: 'textLineHeight',
		document: { fonts: { add() {}, delete() {} }, getElementById: () => null },
		getItems: async () => ({
			textFontFamily: 'Default',
			textFontFamilySecondary: 'FK Grotesk',
		}),
		removeVar() {},
		setVar() {},
		setVars() {},
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(executable, context)

	await context.__fontRuntime.init()
	assert.equal(loaderCalls, 0)
	assert.equal(context.__gpthBundledFontRegistry, undefined)
})

test('packaged resource resolution rejects missing, duplicate, and non-extension entries', async () => {
	const source = await read('src/js/app/custom-fonts/index.js')
	const executable = removeImports(source)
		.replace(/export \{[\s\S]*?\}\s*$/, '')
		.concat('\nglobalThis.__resolvePackagedResource = resolvePackagedResource')
	const scenarios = [
		{ resources: [], url: 'chrome-extension://test/value', error: /found 0/ },
		{
			resources: ['inter.generated.one.txt', 'inter.generated.two.txt'],
			url: 'chrome-extension://test/value',
			error: /found 2/,
		},
		{
			resources: ['inter.generated.one.txt'],
			url: 'https://example.com/value',
			error: /Invalid packaged resource URL/,
		},
	]

	for (const scenario of scenarios) {
		const context = {
			$: () => null,
			FONT_CATALOG_FILES: {},
			FONT_CATALOG_FINGERPRINT: 'resolver-test',
			browser: {
				runtime: {
					getManifest: () => ({
						manifest_version: 3,
						web_accessible_resources: [{ resources: scenario.resources }],
					}),
					getURL: () => scenario.url,
				},
			},
			Notify: { error() {}, success() {} },
			SELECTORS: {
				FONT: {
					FAMILY_ID: 'font-family',
					FAMILY_SECONDARY_ID: 'font-family-secondary',
					SIZE_ID: 'font-size',
					LINE_HEIGHT_ID: 'line-height',
					LETTER_SPACING_ID: 'letter-spacing',
					RESET_BTN_ID: 'reset-fonts',
				},
			},
			SK_TEXT_FONT_FAMILY: 'textFontFamily',
			SK_TEXT_FONT_FAMILY_SECONDARY: 'textFontFamilySecondary',
			SK_TEXT_FONT_SIZE: 'textFontSize',
			SK_TEXT_LETTER_SPACING: 'textLetterSpacing',
			SK_TEXT_LINE_HEIGHT: 'textLineHeight',
			URL,
			document: { fonts: { add() {}, delete() {} }, getElementById: () => null },
		}
		context.globalThis = context
		vm.createContext(context)
		vm.runInContext(executable, context)
		assert.throws(
			() => context.__resolvePackagedResource('inter.generated.txt'),
			scenario.error,
		)
	}
})

test('failed reset preserves inputs, CSS, and registered font faces atomically', async () => {
	const source = await read('src/js/app/custom-fonts/index.js')
	const executable = removeImports(source)
		.replace(/export \{[\s\S]*?\}\s*$/, '')
		.concat('\nglobalThis.__fontRuntime = { handleNumeric, init, mount, resetAll }')
	const added = []
	const deleted = []
	const writes = []
	const numericWrites = []
	const errors = []
	const styles = new Map()
	const elements = {
		'#font-family': { value: '' },
		'#font-family-secondary': { value: '' },
		'#font-size': { value: '' },
		'#line-height': { value: '' },
		'#letter-spacing': { value: '' },
		'#reset-fonts': {},
	}
	class FontFaceMock {
		constructor(family) {
			this.family = family
		}
	}
	const catalog = (family) => [
		{ asset: `files/${family.toLowerCase()}-test.woff2`, style: 'normal', weight: '400' },
	]
	const context = {
		$: (selector) => elements[selector],
		bind() {},
		FONT_CATALOG_FINGERPRINT: 'runtime-test',
		FONT_CATALOG_FILES: {
			Inter: 'inter.generated.txt',
			Poppins: 'poppins.generated.txt',
		},
		browser: {
			runtime: {
				getManifest: () => ({
					manifest_version: 2,
					web_accessible_resources: [
						'inter.generated.hash.txt',
						'poppins.generated.hash.txt',
						'inter-test.hash.woff2',
						'poppins-test.hash.woff2',
					],
				}),
				getURL: (resource) => `moz-extension://test/${resource}`,
			},
		},
		fetch: async (url) => ({
			ok: true,
			json: async () => catalog(url.includes('inter') ? 'Inter' : 'Poppins'),
		}),
		FontFace: FontFaceMock,
		Notify: { error: (message) => errors.push(message), success() {} },
		SELECTORS: {
			FONT: {
				FAMILY_ID: 'font-family',
				FAMILY_SECONDARY_ID: 'font-family-secondary',
				SIZE_ID: 'font-size',
				LINE_HEIGHT_ID: 'line-height',
				LETTER_SPACING_ID: 'letter-spacing',
				RESET_BTN_ID: 'reset-fonts',
			},
		},
		SK_TEXT_FONT_FAMILY: 'textFontFamily',
		SK_TEXT_FONT_FAMILY_SECONDARY: 'textFontFamilySecondary',
		SK_TEXT_FONT_SIZE: 'textFontSize',
		SK_TEXT_LETTER_SPACING: 'textLetterSpacing',
		SK_TEXT_LINE_HEIGHT: 'textLineHeight',
		URL,
		console: { error() {} },
		document: {
			fonts: {
				add: (face) => added.push(face),
				delete: (face) => {
					deleted.push(face)
					throw new Error('font cleanup unavailable')
				},
			},
			getElementById: (id) => (id === 'fontChangerPopover' ? {} : null),
		},
		getItems: async () => ({
			textFontFamily: 'Inter',
			textFontFamilySecondary: 'Poppins',
			textFontSize: 18,
			textLineHeight: 30,
			textLetterSpacing: 1,
		}),
		removeVar: (name) => styles.delete(name),
		setItem: async (key, value) => numericWrites.push([key, value]),
		setItems: async (values) => writes.push({ ...values }),
		setVar: (name, value) => styles.set(name, value),
		setVars: (values) => {
			for (const [name, value] of Object.entries(values)) styles.set(name, value)
		},
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(executable, context)

	await context.__fontRuntime.init()
	context.__fontRuntime.mount()
	elements['#font-size'].value = '20'
	elements['#line-height'].value = '35'
	elements['#letter-spacing'].value = '2'
	await context.__fontRuntime.handleNumeric(
		{ target: elements['#font-size'] },
		'fontSize',
	)
	await context.__fontRuntime.handleNumeric(
		{ target: elements['#line-height'] },
		'lineHeight',
	)
	await context.__fontRuntime.handleNumeric(
		{ target: elements['#letter-spacing'] },
		'letterSpacing',
	)
	const inputSnapshot = Object.fromEntries(
		Object.entries(elements).map(([selector, element]) => [selector, element.value]),
	)
	const styleSnapshot = [...styles]
	const registeredSnapshot = [...added]

	assert.equal(await context.__fontRuntime.resetAll(), false)
	assert.deepEqual(
		Object.fromEntries(
			Object.entries(elements).map(([selector, element]) => [selector, element.value]),
		),
		inputSnapshot,
	)
	assert.deepEqual([...styles], styleSnapshot)
	assert.deepEqual(added, registeredSnapshot)
	assert.equal(deleted.length, 1)
	assert.deepEqual(numericWrites, [
		['textFontSize', '20'],
		['textLineHeight', '35'],
		['textLetterSpacing', '2'],
	])
	assert.deepEqual(writes, [
		{
			textFontFamily: 'Default',
			textFontFamilySecondary: 'Default',
			textFontSize: 16,
			textLineHeight: 28,
			textLetterSpacing: 0,
		},
		{
			textFontFamily: 'Inter',
			textFontFamilySecondary: 'Poppins',
			textFontSize: '20',
			textLineHeight: '35',
			textLetterSpacing: '2',
		},
	])
	assert.deepEqual(errors, ['Failed to reset fonts'])
})

test('a stale slow font selection cannot overwrite a newer selection', async () => {
	const source = await read('src/js/app/custom-fonts/index.js')
	const executable = removeImports(source)
		.replace(/export \{[\s\S]*?\}\s*$/, '')
		.concat('\nglobalThis.__fontRuntime = { handleFontFamilyChange, init }')
	let resolveInter
	const writes = []
	const styles = new Map()
	const added = []
	const resources = [
		'inter.generated.hash.txt',
		'poppins.generated.hash.txt',
		'inter-test.hash.woff2',
		'poppins-test.hash.woff2',
	]
	const responseFor = (family) => ({
		ok: true,
		json: async () => [
			{ asset: `files/${family.toLowerCase()}-test.woff2`, style: 'normal', weight: '400' },
		],
	})
	class FontFaceMock {
		constructor(family) {
			this.family = family
		}
	}
	const context = {
		$: () => null,
		FONT_CATALOG_FILES: {
			Inter: 'inter.generated.txt',
			Poppins: 'poppins.generated.txt',
		},
		FONT_CATALOG_FINGERPRINT: 'race-test',
		browser: {
			runtime: {
				getManifest: () => ({ manifest_version: 2, web_accessible_resources: resources }),
				getURL: (resource) => `moz-extension://test/${resource}`,
			},
		},
		fetch: (url) =>
			url.includes('inter')
				? new Promise((resolve) => {
						resolveInter = () => resolve(responseFor('Inter'))
					})
				: Promise.resolve(responseFor('Poppins')),
		FontFace: FontFaceMock,
		Notify: { error() {}, success() {} },
		SELECTORS: {
			FONT: {
				FAMILY_ID: 'font-family',
				FAMILY_SECONDARY_ID: 'font-family-secondary',
				SIZE_ID: 'font-size',
				LINE_HEIGHT_ID: 'line-height',
				LETTER_SPACING_ID: 'letter-spacing',
				RESET_BTN_ID: 'reset-fonts',
			},
		},
		SK_TEXT_FONT_FAMILY: 'textFontFamily',
		SK_TEXT_FONT_FAMILY_SECONDARY: 'textFontFamilySecondary',
		SK_TEXT_FONT_SIZE: 'textFontSize',
		SK_TEXT_LETTER_SPACING: 'textLetterSpacing',
		SK_TEXT_LINE_HEIGHT: 'textLineHeight',
		URL,
		document: {
			fonts: { add: (face) => added.push(face), delete() {} },
			getElementById: () => null,
		},
		getItems: async () => ({
			textFontFamily: 'Default',
			textFontFamilySecondary: 'Default',
		}),
		removeVar: (name) => styles.delete(name),
		setItems: async (values) => writes.push({ ...values }),
		setVar: (name, value) => styles.set(name, value),
		setVars() {},
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(executable, context)
	await context.__fontRuntime.init()

	const slow = context.__fontRuntime.handleFontFamilyChange(
		{ target: { value: 'Inter' } },
		'fontFamily',
	)
	await Promise.resolve()
	const fast = context.__fontRuntime.handleFontFamilyChange(
		{ target: { value: 'Poppins' } },
		'fontFamily',
	)
	resolveInter()
	await Promise.all([slow, fast])

	assert.deepEqual(writes, [{ textFontFamily: 'Poppins', textFontFamilySecondary: 'Default' }])
	assert.equal(styles.get('--gpthFontFamily'), 'Poppins')
	assert.deepEqual(
		added.map(({ family }) => family),
		['Poppins'],
	)
})

test('a failed latest write compensates an older stale committed write', async () => {
	const source = await read('src/js/app/custom-fonts/index.js')
	const executable = removeImports(source)
		.replace(/export \{[\s\S]*?\}\s*$/, '')
		.concat(
			'\nglobalThis.__fontRuntime = { handleFontFamilyChange, init, state: () => ({ desired: desiredFontPair(), stored: { ...storedValues } }) }',
		)
	let resolveOlderWrite
	let writeCall = 0
	const writes = []
	const errors = []
	const styles = new Map()
	const context = {
		$: () => null,
		FONT_CATALOG_FILES: {
			Inter: 'inter.generated.txt',
			Poppins: 'poppins.generated.txt',
		},
		FONT_CATALOG_FINGERPRINT: 'compensation-test',
		browser: {
			runtime: {
				getManifest: () => ({
					manifest_version: 2,
					web_accessible_resources: [
						'inter.generated.hash.txt',
						'poppins.generated.hash.txt',
					],
				}),
				getURL: (resource) => `moz-extension://test/${resource}`,
			},
		},
		fetch: async () => ({ ok: true, json: async () => [] }),
		Notify: { error: (message) => errors.push(message), success() {} },
		SELECTORS: {
			FONT: {
				FAMILY_ID: 'font-family',
				FAMILY_SECONDARY_ID: 'font-family-secondary',
				SIZE_ID: 'font-size',
				LINE_HEIGHT_ID: 'line-height',
				LETTER_SPACING_ID: 'letter-spacing',
				RESET_BTN_ID: 'reset-fonts',
			},
		},
		SK_TEXT_FONT_FAMILY: 'textFontFamily',
		SK_TEXT_FONT_FAMILY_SECONDARY: 'textFontFamilySecondary',
		SK_TEXT_FONT_SIZE: 'textFontSize',
		SK_TEXT_LETTER_SPACING: 'textLetterSpacing',
		SK_TEXT_LINE_HEIGHT: 'textLineHeight',
		URL,
		console: { error() {} },
		document: { fonts: { add() {}, delete() {} }, getElementById: () => null },
		getItems: async () => ({
			textFontFamily: 'Default',
			textFontFamilySecondary: 'Default',
		}),
		removeVar: (name) => styles.delete(name),
		setItems: async (values) => {
			writeCall += 1
			writes.push({ ...values })
			if (writeCall === 1) {
				await new Promise((resolve) => {
					resolveOlderWrite = resolve
				})
			} else if (writeCall === 2) {
				throw new Error('newer write rejected')
			}
		},
		setVar: (name, value) => styles.set(name, value),
		setVars() {},
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(executable, context)
	await context.__fontRuntime.init()

	const older = context.__fontRuntime.handleFontFamilyChange(
		{ target: { value: 'Inter' } },
		'fontFamily',
	)
	await new Promise((resolve) => setImmediate(resolve))
	const newer = context.__fontRuntime.handleFontFamilyChange(
		{ target: { value: 'Poppins' } },
		'fontFamily',
	)
	resolveOlderWrite()
	await Promise.all([older, newer])

	assert.deepEqual(writes, [
		{ textFontFamily: 'Inter', textFontFamilySecondary: 'Default' },
		{ textFontFamily: 'Poppins', textFontFamilySecondary: 'Default' },
		{ textFontFamily: 'Default', textFontFamilySecondary: 'Default' },
	])
	const state = context.__fontRuntime.state()
	assert.equal(state.desired.fontFamily, 'Default')
	assert.equal(state.desired.fontFamilySecondary, 'Default')
	assert.equal(state.stored.fontFamily, 'Default')
	assert.equal(styles.has('--gpthFontFamily'), false)
	assert.deepEqual(errors, ['Failed to update font'])
})

test('combined font mutations retain both slots and serialize delayed writes and reset', async () => {
	const source = await read('src/js/app/custom-fonts/index.js')
	const executable = removeImports(source)
		.replace(/export \{[\s\S]*?\}\s*$/, '')
		.concat('\nglobalThis.__fontRuntime = { handleFontFamilyChange, init, resetAll }')
	const writes = []
	const styles = new Map()
	let delayNextWrite = false
	let resolveWrite
	const context = {
		$: () => null,
		FONT_CATALOG_FILES: {},
		FONT_CATALOG_FINGERPRINT: 'combined-test',
		browser: {
			runtime: {
				getManifest: () => ({ manifest_version: 2, web_accessible_resources: [] }),
				getURL: () => '',
			},
		},
		Notify: { error() {}, success() {} },
		SELECTORS: {
			FONT: {
				FAMILY_ID: 'font-family',
				FAMILY_SECONDARY_ID: 'font-family-secondary',
				SIZE_ID: 'font-size',
				LINE_HEIGHT_ID: 'line-height',
				LETTER_SPACING_ID: 'letter-spacing',
				RESET_BTN_ID: 'reset-fonts',
			},
		},
		SK_TEXT_FONT_FAMILY: 'textFontFamily',
		SK_TEXT_FONT_FAMILY_SECONDARY: 'textFontFamilySecondary',
		SK_TEXT_FONT_SIZE: 'textFontSize',
		SK_TEXT_LETTER_SPACING: 'textLetterSpacing',
		SK_TEXT_LINE_HEIGHT: 'textLineHeight',
		document: { fonts: { add() {}, delete() {} }, getElementById: () => null },
		getItems: async () => ({
			textFontFamily: 'Default',
			textFontFamilySecondary: 'Default',
		}),
		removeVar: (name) => styles.delete(name),
		setItems: async (values) => {
			writes.push({ ...values })
			if (!delayNextWrite) return
			delayNextWrite = false
			await new Promise((resolve) => {
				resolveWrite = resolve
			})
		},
		setVar: (name, value) => styles.set(name, value),
		setVars: (values) => {
			for (const [name, value] of Object.entries(values)) styles.set(name, value)
		},
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(executable, context)
	await context.__fontRuntime.init()

	const primary = context.__fontRuntime.handleFontFamilyChange(
		{ target: { value: 'FK Grotesk' } },
		'fontFamily',
	)
	const secondary = context.__fontRuntime.handleFontFamilyChange(
		{ target: { value: 'FK Grotesk Neue' } },
		'fontFamilySecondary',
	)
	await Promise.all([primary, secondary])
	assert.deepEqual(writes, [
		{ textFontFamily: 'FK Grotesk', textFontFamilySecondary: 'FK Grotesk Neue' },
	])

	writes.length = 0
	delayNextWrite = true
	const older = context.__fontRuntime.handleFontFamilyChange(
		{ target: { value: 'FK Grotesk Neue' } },
		'fontFamily',
	)
	await new Promise((resolve) => setImmediate(resolve))
	const newer = context.__fontRuntime.handleFontFamilyChange(
		{ target: { value: 'FK Grotesk' } },
		'fontFamily',
	)
	resolveWrite()
	await Promise.all([older, newer])
	assert.deepEqual(writes, [
		{ textFontFamily: 'FK Grotesk Neue', textFontFamilySecondary: 'FK Grotesk Neue' },
		{ textFontFamily: 'FK Grotesk', textFontFamilySecondary: 'FK Grotesk Neue' },
	])
	assert.match(styles.get('--gpthFontFamily'), /^"FK Grotesk"/)

	writes.length = 0
	delayNextWrite = true
	const pendingChange = context.__fontRuntime.handleFontFamilyChange(
		{ target: { value: 'FK Grotesk' } },
		'fontFamilySecondary',
	)
	await new Promise((resolve) => setImmediate(resolve))
	const reset = context.__fontRuntime.resetAll()
	resolveWrite()
	await Promise.all([pendingChange, reset])
	assert.equal(writes.length, 2)
	assert.deepEqual(writes.at(-1), {
		textFontFamily: 'Default',
		textFontFamilySecondary: 'Default',
		textFontSize: 16,
		textLineHeight: 28,
		textLetterSpacing: 0,
	})
	assert.equal(styles.has('--gpthFontFamily'), false)
	assert.equal(styles.has('--gpthFontFamilySecondary'), false)
})

test('cleanup during a pending catalog fetch prevents late faces and CSS', async () => {
	const source = await read('src/js/app/custom-fonts/index.js')
	const executable = removeImports(source)
		.replace(/export \{[\s\S]*?\}\s*$/, '')
		.concat('\nglobalThis.__fontRuntime = { cleanup, init }')
	let resolveCatalog
	const added = []
	const styles = []
	const context = {
		$: () => null,
		FONT_CATALOG_FILES: { Inter: 'inter.generated.txt' },
		FONT_CATALOG_FINGERPRINT: 'cleanup-test',
		browser: {
			runtime: {
				getManifest: () => ({
					manifest_version: 2,
					web_accessible_resources: ['inter.generated.hash.txt', 'inter-test.hash.woff2'],
				}),
				getURL: (resource) => `moz-extension://test/${resource}`,
			},
		},
		fetch: () =>
			new Promise((resolve) => {
				resolveCatalog = () =>
					resolve({
						ok: true,
						json: async () => [
							{ asset: 'files/inter-test.woff2', style: 'normal', weight: '400' },
						],
					})
			}),
		FontFace: class {},
		Notify: { error() {}, success() {} },
		SELECTORS: {
			FONT: {
				FAMILY_ID: 'font-family',
				FAMILY_SECONDARY_ID: 'font-family-secondary',
				SIZE_ID: 'font-size',
				LINE_HEIGHT_ID: 'line-height',
				LETTER_SPACING_ID: 'letter-spacing',
				RESET_BTN_ID: 'reset-fonts',
			},
		},
		SK_TEXT_FONT_FAMILY: 'textFontFamily',
		SK_TEXT_FONT_FAMILY_SECONDARY: 'textFontFamilySecondary',
		SK_TEXT_FONT_SIZE: 'textFontSize',
		SK_TEXT_LETTER_SPACING: 'textLetterSpacing',
		SK_TEXT_LINE_HEIGHT: 'textLineHeight',
		URL,
		document: {
			fonts: { add: (face) => added.push(face), delete() {} },
			getElementById: () => null,
		},
		getItems: async () => ({
			textFontFamily: 'Inter',
			textFontFamilySecondary: 'Default',
		}),
		removeVar: (...args) => styles.push(['remove', ...args]),
		setVar: (...args) => styles.push(['set', ...args]),
		setVars: (...args) => styles.push(['setAll', ...args]),
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(executable, context)

	const initialization = context.__fontRuntime.init()
	await new Promise((resolve) => setImmediate(resolve))
	context.__fontRuntime.cleanup()
	resolveCatalog()
	await initialization

	assert.deepEqual(added, [])
	assert.deepEqual(styles, [])
	assert.equal(context.__gpthBundledFontRegistry, undefined)
})

test('reinjection detaches a stale font mutation queue before reading storage', async () => {
	const source = await read('src/js/app/custom-fonts/index.js')
	const body = removeImports(source).replace(/export \{[\s\S]*?\}\s*$/, '')
	const executable = `(function () { ${body}\nglobalThis.__fontRuntimes.push({ cleanup, handleFontFamilyChange, init }) })()`
	let resolveInter
	let storageRead = 0
	const added = []
	const writes = []
	const styles = new Map()
	const storage = {
		textFontFamily: 'Default',
		textFontFamilySecondary: 'Default',
	}
	const context = {
		$: () => null,
		__fontRuntimes: [],
		FONT_CATALOG_FILES: {
			Inter: 'inter.generated.txt',
			Poppins: 'poppins.generated.txt',
		},
		FONT_CATALOG_FINGERPRINT: 'reinjection-queue-test',
		browser: {
			runtime: {
				getManifest: () => ({
					manifest_version: 2,
					web_accessible_resources: [
						'inter.generated.hash.txt',
						'poppins.generated.hash.txt',
						'inter-test.hash.woff2',
						'poppins-test.hash.woff2',
					],
				}),
				getURL: (resource) => `moz-extension://test/${resource}`,
			},
		},
		fetch: (url) => {
			const family = url.includes('inter') ? 'Inter' : 'Poppins'
			const response = {
				ok: true,
				json: async () => [
					{
						asset: `files/${family.toLowerCase()}-test.woff2`,
						style: 'normal',
						weight: '400',
					},
				],
			}
			if (family === 'Poppins') return Promise.resolve(response)
			return new Promise((resolve) => {
				resolveInter = () => resolve(response)
			})
		},
		FontFace: class {
			constructor(family) {
				this.family = family
			}
		},
		Notify: { error() {}, success() {} },
		SELECTORS: {
			FONT: {
				FAMILY_ID: 'font-family',
				FAMILY_SECONDARY_ID: 'font-family-secondary',
				SIZE_ID: 'font-size',
				LINE_HEIGHT_ID: 'line-height',
				LETTER_SPACING_ID: 'letter-spacing',
				RESET_BTN_ID: 'reset-fonts',
			},
		},
		SK_TEXT_FONT_FAMILY: 'textFontFamily',
		SK_TEXT_FONT_FAMILY_SECONDARY: 'textFontFamilySecondary',
		SK_TEXT_FONT_SIZE: 'textFontSize',
		SK_TEXT_LETTER_SPACING: 'textLetterSpacing',
		SK_TEXT_LINE_HEIGHT: 'textLineHeight',
		URL,
		document: {
			fonts: { add: (face) => added.push(face), delete() {} },
			getElementById: () => null,
		},
		getItems: async () => {
			storageRead += 1
			return { ...storage }
		},
		removeVar: (name) => styles.delete(name),
		setItems: async (values) => {
			writes.push({ ...values })
			Object.assign(storage, values)
		},
		setVar: (name, value) => styles.set(name, value),
		setVars() {},
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(executable, context)
	await context.__fontRuntimes[0].init()

	const staleMutation = context.__fontRuntimes[0].handleFontFamilyChange(
		{ target: { value: 'Inter' } },
		'fontFamily',
	)
	await new Promise((resolve) => setImmediate(resolve))
	const queuedMutation = context.__fontRuntimes[0].handleFontFamilyChange(
		{ target: { value: 'FK Grotesk' } },
		'fontFamily',
	)
	context.__fontRuntimes[0].cleanup()

	vm.runInContext(executable, context)
	const newInitialization = context.__fontRuntimes[1].init()
	await new Promise((resolve) => setImmediate(resolve))
	const readStorageBeforeStaleQueueSettled = storageRead === 2
	const appliedQueuedPreferenceBeforeStaleQueueSettled =
		styles.get('--gpthFontFamily')?.startsWith('"FK Grotesk"') === true

	resolveInter()
	await Promise.all([staleMutation, queuedMutation, newInitialization])

	assert.equal(readStorageBeforeStaleQueueSettled, true)
	assert.equal(appliedQueuedPreferenceBeforeStaleQueueSettled, true)
	assert.deepEqual(writes, [
		{ textFontFamily: 'FK Grotesk', textFontFamilySecondary: 'Default' },
	])
	assert.deepEqual(added, [])
})

test('reinjection compensates a carried font mutation when registration fails', async () => {
	const source = await read('src/js/app/custom-fonts/index.js')
	const body = removeImports(source).replace(/export \{[\s\S]*?\}\s*$/, '')
	const executable = `(function () { ${body}\nglobalThis.__fontRuntimes.push({ cleanup, handleFontFamilyChange, init }) })()`
	let resolveInter
	const writes = []
	const styles = new Map()
	const storage = {
		textFontFamily: 'Default',
		textFontFamilySecondary: 'Default',
	}
	const responseFor = (family) => ({
		ok: true,
		json: async () => [
			{ asset: `files/${family.toLowerCase()}-missing.woff2`, style: 'normal', weight: '400' },
		],
	})
	const context = {
		$: () => null,
		__fontRuntimes: [],
		FONT_CATALOG_FILES: {
			Inter: 'inter.generated.txt',
			Poppins: 'poppins.generated.txt',
		},
		FONT_CATALOG_FINGERPRINT: 'reinjection-compensation-test',
		browser: {
			runtime: {
				getManifest: () => ({
					manifest_version: 2,
					web_accessible_resources: [
						'inter.generated.hash.txt',
						'poppins.generated.hash.txt',
					],
				}),
				getURL: (resource) => `moz-extension://test/${resource}`,
			},
		},
		fetch: (url) => {
			if (url.includes('poppins')) return Promise.resolve(responseFor('Poppins'))
			return new Promise((resolve) => {
				resolveInter = () => resolve(responseFor('Inter'))
			})
		},
		FontFace: class {},
		Notify: { error() {}, success() {} },
		SELECTORS: {
			FONT: {
				FAMILY_ID: 'font-family',
				FAMILY_SECONDARY_ID: 'font-family-secondary',
				SIZE_ID: 'font-size',
				LINE_HEIGHT_ID: 'line-height',
				LETTER_SPACING_ID: 'letter-spacing',
				RESET_BTN_ID: 'reset-fonts',
			},
		},
		SK_TEXT_FONT_FAMILY: 'textFontFamily',
		SK_TEXT_FONT_FAMILY_SECONDARY: 'textFontFamilySecondary',
		SK_TEXT_FONT_SIZE: 'textFontSize',
		SK_TEXT_LETTER_SPACING: 'textLetterSpacing',
		SK_TEXT_LINE_HEIGHT: 'textLineHeight',
		URL,
		console: { error() {} },
		document: { fonts: { add() {}, delete() {} }, getElementById: () => null },
		getItems: async () => ({ ...storage }),
		removeVar: (name) => styles.delete(name),
		setItems: async (values) => {
			writes.push({ ...values })
			Object.assign(storage, values)
		},
		setVar: (name, value) => styles.set(name, value),
		setVars() {},
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(executable, context)
	await context.__fontRuntimes[0].init()

	const staleMutation = context.__fontRuntimes[0].handleFontFamilyChange(
		{ target: { value: 'Inter' } },
		'fontFamily',
	)
	await new Promise((resolve) => setImmediate(resolve))
	const queuedMutation = context.__fontRuntimes[0].handleFontFamilyChange(
		{ target: { value: 'Poppins' } },
		'fontFamily',
	)
	context.__fontRuntimes[0].cleanup()

	vm.runInContext(executable, context)
	await context.__fontRuntimes[1].init()
	resolveInter()
	await Promise.all([staleMutation, queuedMutation])

	assert.deepEqual(writes, [
		{ textFontFamily: 'Poppins', textFontFamilySecondary: 'Default' },
		{ textFontFamily: 'Default', textFontFamilySecondary: 'Default' },
	])
	assert.deepEqual(storage, {
		textFontFamily: 'Default',
		textFontFamilySecondary: 'Default',
	})
	assert.equal(styles.has('--gpthFontFamily'), false)
})

test('reinjection waits for an in-flight font storage write before reading preferences', async () => {
	const source = await read('src/js/app/custom-fonts/index.js')
	const body = removeImports(source).replace(/export \{[\s\S]*?\}\s*$/, '')
	const executable = `(function () { ${body}\nglobalThis.__fontRuntimes.push({ cleanup, handleFontFamilyChange, init }) })()`
	let resolveStorageWrite
	let storageRead = 0
	const storage = {
		textFontFamily: 'Default',
		textFontFamilySecondary: 'Default',
	}
	const styles = new Map()
	const context = {
		$: () => null,
		__fontRuntimes: [],
		FONT_CATALOG_FILES: {},
		FONT_CATALOG_FINGERPRINT: 'reinjection-storage-test',
		browser: {
			runtime: {
				getManifest: () => ({ manifest_version: 2, web_accessible_resources: [] }),
				getURL: () => '',
			},
		},
		Notify: { error() {}, success() {} },
		SELECTORS: {
			FONT: {
				FAMILY_ID: 'font-family',
				FAMILY_SECONDARY_ID: 'font-family-secondary',
				SIZE_ID: 'font-size',
				LINE_HEIGHT_ID: 'line-height',
				LETTER_SPACING_ID: 'letter-spacing',
				RESET_BTN_ID: 'reset-fonts',
			},
		},
		SK_TEXT_FONT_FAMILY: 'textFontFamily',
		SK_TEXT_FONT_FAMILY_SECONDARY: 'textFontFamilySecondary',
		SK_TEXT_FONT_SIZE: 'textFontSize',
		SK_TEXT_LETTER_SPACING: 'textLetterSpacing',
		SK_TEXT_LINE_HEIGHT: 'textLineHeight',
		document: { fonts: { add() {}, delete() {} }, getElementById: () => null },
		getItems: async () => {
			storageRead += 1
			return { ...storage }
		},
		removeVar: (name) => styles.delete(name),
		setItems: (values) =>
			new Promise((resolve) => {
				resolveStorageWrite = () => {
					Object.assign(storage, values)
					resolve()
				}
			}),
		setVar: (name, value) => styles.set(name, value),
		setVars() {},
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(executable, context)
	await context.__fontRuntimes[0].init()

	const staleMutation = context.__fontRuntimes[0].handleFontFamilyChange(
		{ target: { value: 'FK Grotesk' } },
		'fontFamily',
	)
	await new Promise((resolve) => setImmediate(resolve))
	context.__fontRuntimes[0].cleanup()

	vm.runInContext(executable, context)
	const newInitialization = context.__fontRuntimes[1].init()
	await new Promise((resolve) => setImmediate(resolve))
	const waitedBeforeReadingStorage = storageRead === 1

	resolveStorageWrite()
	await Promise.all([staleMutation, newInitialization])

	assert.equal(waitedBeforeReadingStorage, true)
	assert.equal(storageRead, 2)
	assert.match(styles.get('--gpthFontFamily'), /^"FK Grotesk"/)
})

test('cleanup during a delayed storage read prevents stale init from resuming', async () => {
	const source = await read('src/js/app/custom-fonts/index.js')
	const executable = removeImports(source)
		.replace(/export \{[\s\S]*?\}\s*$/, '')
		.concat('\nglobalThis.__fontRuntime = { cleanup, init }')
	let resolveStorage
	let fetchCalls = 0
	const added = []
	const styles = []
	const context = {
		$: () => null,
		FONT_CATALOG_FILES: { Inter: 'inter.generated.txt' },
		FONT_CATALOG_FINGERPRINT: 'delayed-read-test',
		browser: {
			runtime: {
				getManifest: () => ({
					manifest_version: 2,
					web_accessible_resources: ['inter.generated.hash.txt', 'inter-test.hash.woff2'],
				}),
				getURL: (resource) => `moz-extension://test/${resource}`,
			},
		},
		fetch: async () => {
			fetchCalls += 1
			return { ok: true, json: async () => [] }
		},
		FontFace: class {},
		Notify: { error() {}, success() {} },
		SELECTORS: {
			FONT: {
				FAMILY_ID: 'font-family',
				FAMILY_SECONDARY_ID: 'font-family-secondary',
				SIZE_ID: 'font-size',
				LINE_HEIGHT_ID: 'line-height',
				LETTER_SPACING_ID: 'letter-spacing',
				RESET_BTN_ID: 'reset-fonts',
			},
		},
		SK_TEXT_FONT_FAMILY: 'textFontFamily',
		SK_TEXT_FONT_FAMILY_SECONDARY: 'textFontFamilySecondary',
		SK_TEXT_FONT_SIZE: 'textFontSize',
		SK_TEXT_LETTER_SPACING: 'textLetterSpacing',
		SK_TEXT_LINE_HEIGHT: 'textLineHeight',
		URL,
		document: {
			fonts: { add: (face) => added.push(face), delete() {} },
			getElementById: () => null,
		},
		getItems: () =>
			new Promise((resolve) => {
				resolveStorage = resolve
			}),
		removeVar: (...args) => styles.push(['remove', ...args]),
		setVar: (...args) => styles.push(['set', ...args]),
		setVars: (...args) => styles.push(['setAll', ...args]),
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(executable, context)

	const initialization = context.__fontRuntime.init()
	await new Promise((resolve) => setImmediate(resolve))
	context.__fontRuntime.cleanup()
	resolveStorage({ textFontFamily: 'Inter', textFontFamilySecondary: 'Default' })
	await initialization

	assert.equal(fetchCalls, 0)
	assert.deepEqual(added, [])
	assert.deepEqual(styles, [])
	assert.equal(context.__gpthBundledFontRegistry, undefined)
})

test('old runtime cleanup cannot delete a newer runtime registry', async () => {
	const source = await read('src/js/app/custom-fonts/index.js')
	const body = removeImports(source).replace(/export \{[\s\S]*?\}\s*$/, '')
	const executable = `(function () { ${body}\nglobalThis.__fontRuntimes.push({ cleanup, init }) })()`
	const added = []
	const deleted = []
	let storageRead = 0
	class FontFaceMock {
		constructor(family) {
			this.family = family
		}
	}
	const context = {
		$: () => null,
		__fontRuntimes: [],
		FONT_CATALOG_FILES: {
			Inter: 'inter.generated.txt',
			Poppins: 'poppins.generated.txt',
		},
		FONT_CATALOG_FINGERPRINT: 'owner-test',
		browser: {
			runtime: {
				getManifest: () => ({
					manifest_version: 2,
					web_accessible_resources: [
						'inter.generated.hash.txt',
						'poppins.generated.hash.txt',
						'inter-test.hash.woff2',
						'poppins-test.hash.woff2',
					],
				}),
				getURL: (resource) => `moz-extension://test/${resource}`,
			},
		},
		fetch: async (url) => ({
			ok: true,
			json: async () => {
				const family = url.includes('inter') ? 'Inter' : 'Poppins'
				return [
					{
						asset: `files/${family.toLowerCase()}-test.woff2`,
						style: 'normal',
						weight: '400',
					},
				]
			},
		}),
		FontFace: FontFaceMock,
		Notify: { error() {}, success() {} },
		SELECTORS: {
			FONT: {
				FAMILY_ID: 'font-family',
				FAMILY_SECONDARY_ID: 'font-family-secondary',
				SIZE_ID: 'font-size',
				LINE_HEIGHT_ID: 'line-height',
				LETTER_SPACING_ID: 'letter-spacing',
				RESET_BTN_ID: 'reset-fonts',
			},
		},
		SK_TEXT_FONT_FAMILY: 'textFontFamily',
		SK_TEXT_FONT_FAMILY_SECONDARY: 'textFontFamilySecondary',
		SK_TEXT_FONT_SIZE: 'textFontSize',
		SK_TEXT_LETTER_SPACING: 'textLetterSpacing',
		SK_TEXT_LINE_HEIGHT: 'textLineHeight',
		URL,
		document: {
			fonts: { add: (face) => added.push(face), delete: (face) => deleted.push(face) },
			getElementById: () => null,
		},
		getItems: async () => {
			storageRead += 1
			return {
				textFontFamily:
					storageRead === 1 ? 'Inter' : storageRead === 2 ? 'Poppins' : 'Default',
				textFontFamilySecondary: 'Default',
			}
		},
		removeVar() {},
		setVar() {},
		setVars() {},
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(executable, context)
	await context.__fontRuntimes[0].init()
	vm.runInContext(executable, context)
	await context.__fontRuntimes[1].init()

	assert.deepEqual(
		added.map(({ family }) => family),
		['Inter', 'Poppins'],
	)
	assert.deepEqual(
		deleted.map(({ family }) => family),
		['Inter'],
	)
	context.__fontRuntimes[0].cleanup()
	assert.deepEqual(
		deleted.map(({ family }) => family),
		['Inter'],
	)
	assert.equal(context.__gpthBundledFontRegistry.owner != null, true)

	vm.runInContext(executable, context)
	await context.__fontRuntimes[2].init()
	assert.deepEqual(
		deleted.map(({ family }) => family),
		['Inter', 'Poppins'],
	)
	assert.equal(context.__gpthBundledFontRegistry, undefined)
	context.__fontRuntimes[1].cleanup()
	assert.deepEqual(
		deleted.map(({ family }) => family),
		['Inter', 'Poppins'],
	)
})

test('an old slow init cannot replace a newer runtime registry after catalog await', async () => {
	const source = await read('src/js/app/custom-fonts/index.js')
	const body = removeImports(source).replace(/export \{[\s\S]*?\}\s*$/, '')
	const executable = `(function () { ${body}\nglobalThis.__fontRuntimes.push({ cleanup, init }) })()`
	const added = []
	const deleted = []
	let resolveInter
	let storageRead = 0
	class FontFaceMock {
		constructor(family) {
			this.family = family
		}
	}
	const responseFor = (family) => ({
		ok: true,
		json: async () => [
			{ asset: `files/${family.toLowerCase()}-test.woff2`, style: 'normal', weight: '400' },
		],
	})
	const context = {
		$: () => null,
		__fontRuntimes: [],
		FONT_CATALOG_FILES: {
			Inter: 'inter.generated.txt',
			Poppins: 'poppins.generated.txt',
		},
		FONT_CATALOG_FINGERPRINT: 'overlap-owner-test',
		browser: {
			runtime: {
				getManifest: () => ({
					manifest_version: 2,
					web_accessible_resources: [
						'inter.generated.hash.txt',
						'poppins.generated.hash.txt',
						'inter-test.hash.woff2',
						'poppins-test.hash.woff2',
					],
				}),
				getURL: (resource) => `moz-extension://test/${resource}`,
			},
		},
		fetch: (url) =>
			url.includes('inter')
				? new Promise((resolve) => {
						resolveInter = () => resolve(responseFor('Inter'))
					})
				: Promise.resolve(responseFor('Poppins')),
		FontFace: FontFaceMock,
		Notify: { error() {}, success() {} },
		SELECTORS: {
			FONT: {
				FAMILY_ID: 'font-family',
				FAMILY_SECONDARY_ID: 'font-family-secondary',
				SIZE_ID: 'font-size',
				LINE_HEIGHT_ID: 'line-height',
				LETTER_SPACING_ID: 'letter-spacing',
				RESET_BTN_ID: 'reset-fonts',
			},
		},
		SK_TEXT_FONT_FAMILY: 'textFontFamily',
		SK_TEXT_FONT_FAMILY_SECONDARY: 'textFontFamilySecondary',
		SK_TEXT_FONT_SIZE: 'textFontSize',
		SK_TEXT_LETTER_SPACING: 'textLetterSpacing',
		SK_TEXT_LINE_HEIGHT: 'textLineHeight',
		URL,
		document: {
			fonts: { add: (face) => added.push(face), delete: (face) => deleted.push(face) },
			getElementById: () => null,
		},
		getItems: async () => {
			storageRead += 1
			return {
				textFontFamily: storageRead === 1 ? 'Inter' : 'Poppins',
				textFontFamilySecondary: 'Default',
			}
		},
		removeVar() {},
		setVar() {},
		setVars() {},
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(executable, context)
	const oldInitialization = context.__fontRuntimes[0].init()
	await new Promise((resolve) => setImmediate(resolve))

	vm.runInContext(executable, context)
	await context.__fontRuntimes[1].init()
	assert.deepEqual(
		added.map(({ family }) => family),
		['Poppins'],
	)
	assert.deepEqual(deleted, [])

	resolveInter()
	await oldInitialization
	assert.deepEqual(
		added.map(({ family }) => family),
		['Poppins'],
	)
	assert.deepEqual(deleted, [])
	assert.deepEqual([...context.__gpthBundledFontRegistry.families.keys()], ['Poppins'])

	context.__fontRuntimes[0].cleanup()
	assert.deepEqual(deleted, [])
	assert.deepEqual([...context.__gpthBundledFontRegistry.families.keys()], ['Poppins'])
})
