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
	SK_WIDTH_IS_FULL_ENABLED: 'widthIsFullEnabled',
	SK_WIDTH_IS_SYNC_ENABLED: 'widthIsSyncEnabled',
	SK_WIDTH_SETTINGS: 'widthSettings',
}

test('mount hydrates width controls after state initialized before settings DOM exists', async () => {
	const source = removeImports(
		await readFile(new URL('../src/js/app/custom-layouts/widths.js', import.meta.url), 'utf8'),
	).replace(
		/export \{[^}]+\}\s*$/,
		'globalThis.__widths = { init, mount }',
	)

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
		$: (selector) => (settingsDomMounted ? elements.get(selector) ?? null : null),
		SELECTORS: selectors,
		...storageKeys,
		console,
		getItems: async () => ({
			_dbVersion: '2.0',
			widthSettings: {
				w_chat_user: 'auto',
				max_w_chat_user: 'var(--user-chat-width,70%)',
				w_chat_gpt: '52rem',
				w_prompt_textarea: '46rem',
			},
			widthIsSyncEnabled: false,
			widthIsFullEnabled: false,
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
