import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import vm from 'node:vm'

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

function createElement() {
	const attributes = new Map()
	const listeners = new Map()
	const card = {
		classList: {
			states: new Map(),
			toggle(name, enabled) {
				this.states.set(name, enabled)
			},
		},
	}

	return {
		checked: false,
		classList: card.classList,
		dataset: {},
		disabled: false,
		textContent: '',
		value: '',
		addEventListener(type, handler) {
			listeners.set(type, handler)
		},
		closest(selector) {
			return selector === '.card' ? card : null
		},
		getAttribute(name) {
			return attributes.get(name)
		},
		removeEventListener(type, handler) {
			if (listeners.get(type) === handler) listeners.delete(type)
		},
		setAttribute(name, value) {
			attributes.set(name, String(value))
		},
	}
}

const selectors = {
	WIDTH: {
		TOGGLE_FULL_ID: 'toggle-full-width',
		TOGGLE_SYNC_ID: 'toggle-sync-textarea',
		SLIDER_CHAT_ID: 'slider-chat-width',
		SLIDER_TEXTAREA_ID: 'slider-textarea-width',
		RESET_BTN_ID: 'resetWidths',
		DISPLAY_CHAT_VALUE_ID: 'display-chat-width-value',
		DISPLAY_CHAT_UNIT_ID: 'display-chat-width-unit',
		DISPLAY_TEXTAREA_VALUE_ID: 'display-textarea-width-value',
		DISPLAY_TEXTAREA_UNIT_ID: 'display-textarea-width-unit',
	},
}

const storageKeys = {
	SK_DB_VERSION: '_dbVersion',
	SK_WIDTH_FLAGS_LEGACY_FORMAT: '_widthFlagsLegacyFormat',
	SK_WIDTH_IS_FULL_ENABLED: 'widthIsFullEnabledV2',
	SK_WIDTH_IS_SYNC_ENABLED: 'widthIsSyncEnabledV2',
	SK_WIDTH_IS_FULL_ENABLED_LEGACY: 'widthIsFullEnabled',
	SK_WIDTH_IS_SYNC_ENABLED_LEGACY: 'widthIsSyncEnabled',
	SK_WIDTH_SETTINGS: 'widthSettings',
	WIDTH_FLAGS_FORMAT_NAMED: 'named',
	WIDTH_FLAGS_FORMAT_SWAPPED: 'swapped',
}

test('mount hydrates width controls after state initialized before settings DOM exists', async () => {
	const source = removeImports(
		await readFile(new URL('../src/js/app/custom-layouts/widths.js', import.meta.url), 'utf8'),
	).replace(/export \{[^}]+\}\s*$/, 'globalThis.__widths = { init, mount }')

	const elements = new Map([
		['#slider-chat-width', createElement()],
		['#display-chat-width-value', createElement()],
		['#display-chat-width-unit', createElement()],
		['#slider-textarea-width', createElement()],
		['#display-textarea-width-value', createElement()],
		['#display-textarea-width-unit', createElement()],
		['#toggle-full-width', createElement()],
		['#toggle-sync-textarea', createElement()],
		['#resetWidths', createElement()],
	])
	let settingsDomMounted = false
	const appliedVariables = []

	const context = {
		$: (selector) => (settingsDomMounted ? (elements.get(selector) ?? null) : null),
		SELECTORS: selectors,
		...storageKeys,
		console,
		getItems: async () => ({
			widthSettings: {
				w_chat_user: 'auto',
				max_w_chat_user: 'var(--user-chat-width,70%)',
				w_chat_gpt: '52rem',
				w_prompt_textarea: '46rem',
			},
			widthIsSyncEnabledV2: false,
			widthIsFullEnabledV2: false,
		}),
		icon_full_width: '',
		icon_sync: '',
		removeItems: async () => {},
		renderButton: () => '',
		renderSliderCard: () => '',
		renderToggle: () => '',
		requestAnimationFrame: (callback) => {
			callback()
			return 1
		},
		setItems: async () => {},
		setVars: (variables) => appliedVariables.push({ ...variables }),
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(source, context)

	await context.__widths.init()
	assert.equal(elements.get('#slider-chat-width').value, '')
	assert.equal(appliedVariables.at(-1).w_chat_gpt, '52rem')

	settingsDomMounted = true
	context.__widths.mount()

	assert.equal(elements.get('#slider-chat-width').value, 52)
	assert.equal(elements.get('#slider-chat-width').dataset.unit, 'rem')
	assert.equal(elements.get('#slider-chat-width').getAttribute('aria-valuenow'), '52')
	assert.equal(elements.get('#display-chat-width-value').textContent, 52)
	assert.equal(elements.get('#display-chat-width-unit').textContent, 'REM')
	assert.equal(elements.get('#slider-textarea-width').value, 46)
	assert.equal(elements.get('#display-textarea-width-value').textContent, 46)
	assert.equal(elements.get('#toggle-full-width').checked, false)
	assert.equal(elements.get('#toggle-sync-textarea').checked, false)
})

async function hydrateWidthFlags(storedValues) {
	const source = removeImports(
		await readFile(new URL('../src/js/app/custom-layouts/widths.js', import.meta.url), 'utf8'),
	).replace(/export \{[^}]+\}\s*$/, 'globalThis.__widths = { init, saveState }')
	const elements = new Map([
		['#slider-chat-width', createElement()],
		['#display-chat-width-value', createElement()],
		['#display-chat-width-unit', createElement()],
		['#slider-textarea-width', createElement()],
		['#display-textarea-width-value', createElement()],
		['#display-textarea-width-unit', createElement()],
		['#toggle-full-width', createElement()],
		['#toggle-sync-textarea', createElement()],
	])
	const appliedVariables = []
	const writes = []
	const context = {
		$: (selector) => elements.get(selector) ?? null,
		SELECTORS: selectors,
		...storageKeys,
		console,
		getItems: async () => ({
			widthSettings: {
				w_chat_user: 'auto',
				max_w_chat_user: 'var(--user-chat-width,70%)',
				w_chat_gpt: '55rem',
				w_prompt_textarea: '42rem',
			},
			...storedValues,
		}),
		icon_full_width: '',
		icon_sync: '',
		removeItems: async () => {},
		renderButton: () => '',
		renderSliderCard: () => '',
		renderToggle: () => '',
		requestAnimationFrame: (callback) => {
			callback()
			return 1
		},
		setItems: async (updates) => writes.push({ ...updates }),
		setVars: (variables) => appliedVariables.push({ ...variables }),
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(source, context)
	await context.__widths.init()

	return {
		fullWidth: elements.get('#toggle-full-width').checked,
		saveState: context.__widths.saveState,
		sync: elements.get('#toggle-sync-textarea').checked,
		variables: appliedVariables.at(-1),
		writes,
	}
}

test('width hydration preserves swapped legacy semantics before and after schema advancement', async () => {
	const legacy = await hydrateWidthFlags({
		_dbVersion: '1.0',
		widthIsFullEnabled: true,
		widthIsSyncEnabled: false,
	})
	assert.equal(legacy.fullWidth, false)
	assert.equal(legacy.sync, true)
	assert.equal(legacy.variables.w_chat_gpt, '55rem')
	assert.equal(legacy.variables.w_prompt_textarea, '55rem')

	const sparseLegacy = await hydrateWidthFlags({
		_dbVersion: '1.0',
		widthIsFullEnabled: true,
	})
	assert.equal(sparseLegacy.fullWidth, false)
	assert.equal(sparseLegacy.sync, true)

	const advanced = await hydrateWidthFlags({
		_dbVersion: '1.1',
		_widthFlagsLegacyFormat: 'swapped',
		widthIsFullEnabled: true,
		widthIsSyncEnabled: false,
	})
	assert.equal(advanced.fullWidth, false)
	assert.equal(advanced.sync, true)
})

test('missing legacy provenance follows tagged releases while known named schemas stay named', async () => {
	const missing = await hydrateWidthFlags({
		widthIsFullEnabled: true,
		widthIsSyncEnabled: false,
	})
	assert.equal(missing.fullWidth, false)
	assert.equal(missing.sync, true)

	for (const dbVersion of ['0.9', '1.1']) {
		const named = await hydrateWidthFlags({
			_dbVersion: dbVersion,
			widthIsFullEnabled: true,
			widthIsSyncEnabled: false,
		})
		assert.equal(named.fullWidth, true, `full flag at schema ${dbVersion}`)
		assert.equal(named.sync, false, `sync flag at schema ${dbVersion}`)
	}
})

test('versioned width keys take precedence over legacy writes', async () => {
	const current = await hydrateWidthFlags({
		widthIsFullEnabled: true,
		widthIsSyncEnabled: true,
		widthIsFullEnabledV2: true,
		widthIsSyncEnabledV2: false,
	})

	assert.equal(current.fullWidth, true)
	assert.equal(current.sync, false)
	assert.equal(current.variables.w_chat_gpt, '100%')
	assert.equal(current.variables.w_prompt_textarea, '42rem')

	const sparseCurrent = await hydrateWidthFlags({
		_widthFlagsLegacyFormat: 'swapped',
		widthIsFullEnabled: true,
		widthIsSyncEnabled: false,
		widthIsFullEnabledV2: true,
	})
	assert.equal(sparseCurrent.fullWidth, true)
	assert.equal(sparseCurrent.sync, true)
})

test('width saves preserve the active legacy encoding and recovery semantics', async () => {
	const harness = await hydrateWidthFlags({
		_widthFlagsLegacyFormat: 'named',
		widthIsFullEnabled: true,
		widthIsSyncEnabled: false,
	})
	await harness.saveState({
		fullWidthEnabled: true,
		settings: { w_chat_gpt: '100%' },
		syncEnabled: false,
	})

	assert.deepEqual(harness.writes, [
		{
			widthSettings: { w_chat_gpt: '100%' },
			widthIsSyncEnabledV2: false,
			widthIsFullEnabledV2: true,
			widthIsFullEnabled: true,
			widthIsSyncEnabled: false,
			_widthFlagsLegacyFormat: 'named',
		},
	])

	const saved = harness.writes[0]
	const recovery = await hydrateWidthFlags({
		_dbVersion: '1.1',
		_widthFlagsLegacyFormat: saved._widthFlagsLegacyFormat,
		widthIsFullEnabled: saved.widthIsFullEnabled,
		widthIsSyncEnabled: saved.widthIsSyncEnabled,
	})
	assert.equal(recovery.fullWidth, true)
	assert.equal(recovery.sync, false)

	const swappedHarness = await hydrateWidthFlags({
		_dbVersion: '1.0',
		widthIsFullEnabled: true,
		widthIsSyncEnabled: false,
	})
	await swappedHarness.saveState({
		fullWidthEnabled: true,
		settings: { w_chat_gpt: '100%' },
		syncEnabled: false,
	})
	assert.deepEqual(swappedHarness.writes.at(-1), {
		widthSettings: { w_chat_gpt: '100%' },
		widthIsSyncEnabledV2: false,
		widthIsFullEnabledV2: true,
		widthIsFullEnabled: false,
		widthIsSyncEnabled: true,
		_widthFlagsLegacyFormat: 'swapped',
	})
})
