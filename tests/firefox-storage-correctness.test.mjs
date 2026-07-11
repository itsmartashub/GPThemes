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

async function loadVersionControl(
	initialStorage,
	{ beforeWrite = null, readError = null, writeError = null } = {},
) {
	const source = removeImports(
		await readFile(new URL('../src/js/background/versionControl.js', import.meta.url), 'utf8'),
	)
		.replaceAll('export ', '')
		.concat('\nglobalThis.__versionControl = { checkAndCleanStorage, DB_VERSION }')
	const storage = { ...initialStorage }
	const calls = {
		getItem: [],
		getItemsStrict: [],
		setItems: [],
	}
	const context = {
		SK_DB_VERSION: '_dbVersion',
		SK_EXT_VERSION: '_extVersion',
		SK_WIDTH_FLAGS_LEGACY_FORMAT: '_widthFlagsLegacyFormat',
		SK_WIDTH_IS_FULL_ENABLED_LEGACY: 'widthIsFullEnabled',
		SK_WIDTH_IS_SYNC_ENABLED_LEGACY: 'widthIsSyncEnabled',
		WIDTH_FLAGS_FORMAT_NAMED: 'named',
		WIDTH_FLAGS_FORMAT_SWAPPED: 'swapped',
		console: { log() {} },
		getItem: async (key) => {
			calls.getItem.push(key)
			return storage[key] ?? null
		},
		getItemsStrict: async (keys) => {
			calls.getItemsStrict.push([...keys])
			if (readError) throw readError
			return Object.fromEntries(
				keys.filter((key) => key in storage).map((key) => [key, storage[key]]),
			)
		},
		runtime: { getManifest: () => ({ version: '0.0.0-test' }) },
		setItem: async (key, value) => {
			storage[key] = value
		},
		setItems: async (updates) => {
			calls.setItems.push({ ...updates })
			if (writeError) throw writeError
			await beforeWrite?.(updates, storage)
			Object.assign(storage, updates)
		},
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(source, context)

	return { calls, module: context.__versionControl, storage }
}

test('toolbar action resolver prefers MV3 and falls back to MV2', async () => {
	const { resolveToolbarAction } = await import(
		new URL('../src/js/background/toolbarAction.js', import.meta.url)
	)
	const action = { kind: 'mv3' }
	const browserAction = { kind: 'mv2' }

	assert.equal(resolveToolbarAction({ action }), action)
	assert.equal(resolveToolbarAction({ browserAction }), browserAction)
	assert.equal(resolveToolbarAction({ action, browserAction }), action)
	assert.throws(() => resolveToolbarAction({}), /does not expose a toolbar action API/)
	assert.throws(() => resolveToolbarAction(), /does not expose a toolbar action API/)
})

test('Parcel keeps extension execution contexts self-contained', async () => {
	const packageJson = JSON.parse(
		await readFile(new URL('../package.json', import.meta.url), 'utf8'),
	)

	assert.equal(packageJson['@parcel/bundler-default']?.disableSharedBundles, true)
})

test('strict storage reads preserve browser API failures', async () => {
	const readError = new Error('sync storage read failed')
	const source = removeImports(
		await readFile(new URL('../src/js/utils/storage.js', import.meta.url), 'utf8'),
	)
		.replace(/export \{[\s\S]*?\}\s*$/, '')
		.concat('\nglobalThis.__storage = { getItemsStrict }')
	const context = {
		browser: {
			storage: {
				sync: {
					get: async () => {
						throw readError
					},
				},
			},
		},
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(source, context)

	await assert.rejects(context.__storage.getItemsStrict(['_dbVersion']), readError)
})

test('1.0 schema advances without rewriting legacy width flags and a rerun is a no-op', async () => {
	const harness = await loadVersionControl({
		_dbVersion: '1.0',
		widthIsFullEnabled: true,
		widthIsSyncEnabled: false,
	})

	assert.equal(await harness.module.checkAndCleanStorage(), true)
	assert.deepEqual(harness.calls.setItems, [
		{
			_dbVersion: '1.1',
			_widthFlagsLegacyFormat: 'swapped',
		},
	])
	assert.deepEqual(harness.storage, {
		_dbVersion: '1.1',
		_widthFlagsLegacyFormat: 'swapped',
		widthIsFullEnabled: true,
		widthIsSyncEnabled: false,
	})
	assert.equal(harness.calls.getItemsStrict.length, 1)

	assert.equal(await harness.module.checkAndCleanStorage(), false)
	assert.equal(harness.calls.setItems.length, 1)
	assert.equal(harness.calls.getItemsStrict.length, 2)
})

test('missing schema metadata classifies tagged-release legacy flags as swapped', async () => {
	const harness = await loadVersionControl({
		widthIsFullEnabled: true,
		widthIsSyncEnabled: false,
	})

	assert.equal(await harness.module.checkAndCleanStorage(), true)
	assert.deepEqual(harness.calls.setItems, [
		{ _dbVersion: '1.1', _widthFlagsLegacyFormat: 'swapped' },
	])
	assert.deepEqual(harness.storage, {
		_dbVersion: '1.1',
		_widthFlagsLegacyFormat: 'swapped',
		widthIsFullEnabled: true,
		widthIsSyncEnabled: false,
	})
	assert.equal(harness.calls.getItemsStrict.length, 1)
})

test('a fresh dataset without metadata or legacy flags is classified as named', async () => {
	const harness = await loadVersionControl({})

	assert.equal(await harness.module.checkAndCleanStorage(), true)
	assert.deepEqual(harness.storage, {
		_dbVersion: '1.1',
		_widthFlagsLegacyFormat: 'named',
	})
})

test('unknown older metadata is upgraded without assuming swapped width keys', async () => {
	const harness = await loadVersionControl({
		_dbVersion: '0.9',
		widthIsFullEnabled: true,
		widthIsSyncEnabled: false,
	})

	assert.equal(await harness.module.checkAndCleanStorage(), true)
	assert.deepEqual(harness.calls.setItems, [
		{ _dbVersion: '1.1', _widthFlagsLegacyFormat: 'named' },
	])
	assert.deepEqual(harness.storage, {
		_dbVersion: '1.1',
		_widthFlagsLegacyFormat: 'named',
		widthIsFullEnabled: true,
		widthIsSyncEnabled: false,
	})
	assert.equal(harness.calls.getItemsStrict.length, 1)
})

test('schema advancement cannot overwrite an interleaved versioned width save', async () => {
	const harness = await loadVersionControl(
		{
			_dbVersion: '1.0',
			widthIsFullEnabled: true,
			widthIsSyncEnabled: false,
		},
		{
			beforeWrite: async (_updates, storage) => {
				Object.assign(storage, {
					widthIsFullEnabledV2: true,
					widthIsSyncEnabledV2: false,
				})
			},
		},
	)

	await harness.module.checkAndCleanStorage()
	assert.deepEqual(harness.storage, {
		_dbVersion: '1.1',
		_widthFlagsLegacyFormat: 'swapped',
		widthIsFullEnabled: true,
		widthIsSyncEnabled: false,
		widthIsFullEnabledV2: true,
		widthIsSyncEnabledV2: false,
	})
})

test('migration read failures reject without stamping a new schema marker', async () => {
	const readError = new Error('sync storage read failed')
	const harness = await loadVersionControl(
		{
			_dbVersion: '1.0',
			widthIsFullEnabled: true,
			widthIsSyncEnabled: false,
		},
		{ readError },
	)

	await assert.rejects(harness.module.checkAndCleanStorage(), readError)
	assert.deepEqual(harness.calls.setItems, [])
	assert.deepEqual(harness.storage, {
		_dbVersion: '1.0',
		widthIsFullEnabled: true,
		widthIsSyncEnabled: false,
	})
})

test('failed migration write rejects without advancing the stored schema marker', async () => {
	const writeError = new Error('sync storage unavailable')
	const harness = await loadVersionControl(
		{
			_dbVersion: '1.0',
			widthIsFullEnabled: true,
			widthIsSyncEnabled: false,
		},
		{ writeError },
	)

	await assert.rejects(harness.module.checkAndCleanStorage(), writeError)
	assert.deepEqual(harness.calls.setItems, [
		{
			_dbVersion: '1.1',
			_widthFlagsLegacyFormat: 'swapped',
		},
	])
	assert.deepEqual(harness.storage, {
		_dbVersion: '1.0',
		widthIsFullEnabled: true,
		widthIsSyncEnabled: false,
	})
})

test('rafThrottle cancellation drops queued work and allows a later schedule', async () => {
	const queuedFrames = new Map()
	let nextFrame = 0
	globalThis.requestAnimationFrame = (callback) => {
		const id = nextFrame++
		queuedFrames.set(id, callback)
		return id
	}
	globalThis.cancelAnimationFrame = (id) => queuedFrames.delete(id)

	try {
		const { rafThrottle } = await import(
			new URL(`../src/js/utils/dom.js?cancel=${Date.now()}`, import.meta.url)
		)
		const received = []
		const throttled = rafThrottle((value) => received.push(value))

		throttled('cancelled')
		throttled('still-cancelled')
		assert.equal(queuedFrames.size, 1)
		throttled.cancel()
		assert.equal(queuedFrames.size, 0)
		assert.deepEqual(received, [])

		throttled('later')
		assert.equal(queuedFrames.size, 1)
		const [[id, callback]] = queuedFrames
		queuedFrames.delete(id)
		callback()
		assert.deepEqual(received, ['later'])
	} finally {
		delete globalThis.requestAnimationFrame
		delete globalThis.cancelAnimationFrame
	}
})

test('sidebar disconnect cancels pending marker sync before removing attributes', async () => {
	const domSource = (
		await readFile(new URL('../src/js/utils/dom.js', import.meta.url), 'utf8')
	).replaceAll('export ', '')
	const sidebarSource = removeImports(
		await readFile(
			new URL('../src/js/app/custom-hide/sidebarPills.js', import.meta.url),
			'utf8',
		),
	)
		.replace(/export \{[^}]+\}\s*$/, '')
		.concat(
			'\nglobalThis.__sidebarPills = { observeSidebarPillMarkers, disconnectSidebarPillMarkers }',
		)
	const queuedFrames = new Map()
	const cancelledFrames = []
	let nextFrame = 1
	const labelAttributes = new Map()
	const wrapperAttributes = new Map()
	const root = {
		isConnected: true,
		querySelector: () => label,
	}
	const wrapper = {
		removeAttribute: (name) => wrapperAttributes.delete(name),
		setAttribute: (name, value) => wrapperAttributes.set(name, value),
	}
	const label = {
		textContent: 'Recents',
		closest(selector) {
			if (selector === 'button') return wrapper
			if (selector === 'nav, aside') return root
			return null
		},
		removeAttribute: (name) => labelAttributes.delete(name),
		setAttribute: (name, value) => labelAttributes.set(name, value),
	}
	let rootGuardRemoved = 0
	const context = {
		MutationObserver: class {
			disconnect() {}
			observe() {}
		},
		cancelAnimationFrame(id) {
			cancelledFrames.push(id)
			queuedFrames.delete(id)
		},
		document: {
			body: {},
			documentElement: { style: {} },
			querySelector: () => label,
			querySelectorAll(selector) {
				return selector === '.__menu-label' ? [label] : [label, wrapper]
			},
		},
		requestAnimationFrame(callback) {
			const id = nextFrame++
			queuedFrames.set(id, callback)
			return id
		},
		subscribeDomMutations: () => () => rootGuardRemoved++,
	}
	context.globalThis = context
	vm.createContext(context)
	vm.runInContext(`${domSource}\n${sidebarSource}`, context)

	context.__sidebarPills.observeSidebarPillMarkers()
	assert.equal(queuedFrames.size, 1)
	context.__sidebarPills.disconnectSidebarPillMarkers()

	assert.equal(cancelledFrames.length, 1)
	assert.equal(queuedFrames.size, 0)
	assert.equal(rootGuardRemoved, 1)
	assert.equal(labelAttributes.has('data-gpth-sidebar-pill'), false)
	assert.equal(wrapperAttributes.has('data-gpth-sidebar-pill-wrapper'), false)

	for (const callback of queuedFrames.values()) callback()
	assert.equal(labelAttributes.has('data-gpth-sidebar-pill'), false)
	assert.equal(wrapperAttributes.has('data-gpth-sidebar-pill-wrapper'), false)
})
