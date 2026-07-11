import assert from 'node:assert/strict'
import test from 'node:test'

class FakeMutationObserver {
	static instances = []

	constructor(callback) {
		this.active = false
		this.callback = callback
		this.disconnectCount = 0
		FakeMutationObserver.instances.push(this)
	}

	observe(target, options) {
		this.active = true
		this.options = options
		this.target = target
	}

	disconnect() {
		this.active = false
		this.disconnectCount++
	}

	trigger(mutations = [{ addedNodes: [] }]) {
		if (this.active) this.callback(mutations)
	}
}

test('shares one document observer and reports SPA route changes', async () => {
	globalThis.MutationObserver = FakeMutationObserver
	globalThis.document = { body: { nodeName: 'BODY' } }
	globalThis.location = { pathname: '/' }
	globalThis.window = new EventTarget()
	globalThis.navigation = new EventTarget()

	let nextFrame = 1
	const frameTimers = new Map()
	window.requestAnimationFrame = (callback) => {
		const id = nextFrame++
		frameTimers.set(
			id,
			setTimeout(() => {
				frameTimers.delete(id)
				callback(Date.now())
			}, 0),
		)
		return id
	}
	window.cancelAnimationFrame = (id) => {
		const timer = frameTimers.get(id)
		if (timer) clearTimeout(timer)
		frameTimers.delete(id)
	}

	const runtimeRoot = new URL('../src/js/runtime/', import.meta.url)
	const { subscribeDomMutations } = await import(new URL('domMutations.js', runtimeRoot))
	const { subscribeRouteChanges } = await import(new URL('routes.js', runtimeRoot))

	const receivedA = []
	const receivedB = []
	const removeA = subscribeDomMutations((mutations) => receivedA.push(mutations.length))
	const removeB = subscribeDomMutations((mutations) => receivedB.push(mutations.length))

	assert.equal(FakeMutationObserver.instances.length, 1)
	assert.deepEqual(FakeMutationObserver.instances[0].options, {
		childList: true,
		subtree: true,
	})

	FakeMutationObserver.instances[0].trigger([{ addedNodes: [] }, { addedNodes: [] }])
	assert.deepEqual(receivedA, [2])
	assert.deepEqual(receivedB, [2])

	removeA()
	assert.equal(FakeMutationObserver.instances[0].active, true)
	removeB()
	assert.equal(FakeMutationObserver.instances[0].active, false)

	const routes = []
	const removeRoute = subscribeRouteChanges((event) => routes.push(event))
	assert.deepEqual(routes, [{ path: '/', previousPath: null }])
	assert.equal(FakeMutationObserver.instances.length, 2)

	location.pathname = '/library'
	FakeMutationObserver.instances[1].trigger([{ addedNodes: [{}] }])
	await new Promise((resolve) => setTimeout(resolve, 10))
	assert.deepEqual(routes.at(-1), { path: '/library', previousPath: '/' })

	location.pathname = '/pulse'
	window.dispatchEvent(new Event('popstate'))
	await new Promise((resolve) => setTimeout(resolve, 10))
	assert.deepEqual(routes.at(-1), { path: '/pulse', previousPath: '/library' })

	removeRoute()
	assert.equal(FakeMutationObserver.instances[1].active, false)
})

test('skips a subscriber removed earlier in the same mutation dispatch', async () => {
	FakeMutationObserver.instances = []
	globalThis.MutationObserver = FakeMutationObserver
	globalThis.document = { body: { nodeName: 'BODY' } }

	const runtimeRoot = new URL('../src/js/runtime/', import.meta.url)
	const moduleUrl = new URL(`domMutations.js?dispatch=${Date.now()}`, runtimeRoot)
	const { subscribeDomMutations } = await import(moduleUrl)
	const received = []
	let removeSecond

	const removeFirst = subscribeDomMutations(() => {
		received.push('first')
		removeSecond()
	})
	removeSecond = subscribeDomMutations(() => received.push('second'))

	FakeMutationObserver.instances[0].trigger()
	assert.deepEqual(received, ['first'])

	removeFirst()
	assert.equal(FakeMutationObserver.instances[0].active, false)
})
