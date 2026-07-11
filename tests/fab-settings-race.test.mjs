import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import vm from 'node:vm'

const source = (await readFile(new URL('../src/js/app/custom-fab/index.js', import.meta.url), 'utf8'))
	.replace(/import[\s\S]*?from\s+['"][^'"]+['"]\n/g, '')
	.replace(/export\s+\{[^}]+\}\s*$/m, '')
	.concat('\nglobalThis.__fabTest = { init, onDockButtonClick, toggleFABVisibility: setFABVisibility }')

function createDeferred() {
	let resolve
	const promise = new Promise((promiseResolve) => {
		resolve = promiseResolve
	})
	return { promise, resolve }
}

async function flushMicrotasks(limit = 12) {
	for (let index = 0; index < limit; index++) await Promise.resolve()
}

function createRuntime({ settingsPromise = null } = {}) {
	const hydration = createDeferred()
	const state = {
		closeCalls: 0,
		createCalls: 0,
		toggleCalls: 0,
	}
	let currentFab = null

	function createClassList() {
		const values = new Set()
		return {
			toggle(name, enabled) {
				enabled ? values.add(name) : values.delete(name)
			},
		}
	}

	function createEventTarget() {
		return {
			addEventListener() {},
			classList: createClassList(),
			removeEventListener() {},
		}
	}

	function createFab() {
		const dock = createEventTarget()
		const dockButtons = createEventTarget()
		return {
			...createEventTarget(),
			contains() {
				return false
			},
			innerHTML: '',
			isConnected: false,
			querySelector(selector) {
				return selector.includes('dock-buttons') ? dockButtons : dock
			},
			remove() {
				this.isConnected = false
			},
		}
	}

	const context = {
		$: (selector, root) => root?.querySelector(selector) ?? null,
		SELECTORS: {
			FAB: {
				DOCK: 'gpth-dock',
				DOCK_BTNS: 'gpth-dock-buttons',
				OPEN_STATE: 'is-open',
				ROOT: 'gpth-fab',
			},
			SETTINGS: { OPEN_BTN: 'gpth-open-settings' },
		},
		SK_TOGGLE_FAB_HIDDEN: 'fabHidden',
		console,
		createSettings: async () => {
			state.createCalls++
			return settingsPromise ? settingsPromise : {}
		},
		destroySettings() {},
		document: {
			addEventListener() {},
			body: {
				appendChild(element) {
					element.isConnected = true
					currentFab = element
				},
			},
			createElement: createFab,
			querySelector() {
				return currentFab?.isConnected ? currentFab : null
			},
			removeEventListener() {},
		},
		getItem: async () => false,
		icon_kofi_cup: '',
		icon_moon: '',
		icon_moon_full: '',
		icon_paint: '',
		icon_settings: '',
		icon_sun: '',
		initializeSettingsRuntime: () => hydration.promise,
		onChangeTheme() {},
		onCloseSettings() {
			state.closeCalls++
		},
		onToggleSettings() {
			state.toggleCalls++
		},
		setupExtensionMessaging: () => () => {},
		watchStorageChanges: () => () => {},
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(source, context)

	return { context, hydration, state }
}

function settingsClickEvent() {
	const settingsButton = { id: 'gpth-open-settings' }
	return {
		target: {
			closest() {
				return settingsButton
			},
		},
	}
}

test('hiding the FAB cancels an in-flight settings open even after it is shown again', async () => {
	const runtime = createRuntime()
	await runtime.context.__fabTest.init()
	const event = settingsClickEvent()

	runtime.context.__fabTest.onDockButtonClick(event)
	runtime.context.__fabTest.toggleFABVisibility(true)
	runtime.context.__fabTest.toggleFABVisibility(false)
	runtime.hydration.resolve()
	await flushMicrotasks()

	assert.equal(runtime.state.createCalls, 0)
	assert.equal(runtime.state.toggleCalls, 0)

	runtime.context.__fabTest.onDockButtonClick(event)
	await flushMicrotasks()

	assert.equal(runtime.state.createCalls, 1)
	assert.equal(runtime.state.toggleCalls, 1)
})

test('hiding the FAB while settings DOM creation is pending leaves the panel closed', async () => {
	const settings = createDeferred()
	const runtime = createRuntime({ settingsPromise: settings.promise })
	await runtime.context.__fabTest.init()
	runtime.hydration.resolve()
	await flushMicrotasks()

	runtime.context.__fabTest.onDockButtonClick(settingsClickEvent())
	await flushMicrotasks()
	assert.equal(runtime.state.createCalls, 1)

	runtime.context.__fabTest.toggleFABVisibility(true)
	settings.resolve({})
	await flushMicrotasks()

	assert.equal(runtime.state.toggleCalls, 0)
	assert.equal(runtime.state.closeCalls, 1)
})
