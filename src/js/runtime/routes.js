import { subscribeDomMutations } from './domMutations.js'

const subscribers = new Set()
let currentPath = null
let routeFrame = null
let removeDomSubscription = null
let listening = false

function reportSubscriberError(error) {
	console.error('[GPThemes] Route subscriber failed:', error)
}

function notifySubscribers(path, previousPath) {
	for (const subscriber of [...subscribers]) {
		try {
			subscriber({ path, previousPath })
		} catch (error) {
			reportSubscriberError(error)
		}
	}
}

function readRoute() {
	const path = location.pathname
	if (path === currentPath) return

	const previousPath = currentPath
	currentPath = path
	notifySubscribers(path, previousPath)
}

function scheduleRouteCheck() {
	if (routeFrame) return

	routeFrame = window.requestAnimationFrame(() => {
		routeFrame = null
		readRoute()
	})
}

function startListening() {
	if (listening) return
	listening = true
	currentPath = location.pathname

	window.addEventListener('popstate', scheduleRouteCheck)
	window.addEventListener('hashchange', scheduleRouteCheck)
	globalThis.navigation?.addEventListener?.('navigatesuccess', scheduleRouteCheck)
	removeDomSubscription = subscribeDomMutations(scheduleRouteCheck)
}

function stopListening() {
	if (!listening) return
	listening = false

	if (routeFrame) {
		window.cancelAnimationFrame(routeFrame)
		routeFrame = null
	}

	window.removeEventListener('popstate', scheduleRouteCheck)
	window.removeEventListener('hashchange', scheduleRouteCheck)
	globalThis.navigation?.removeEventListener?.('navigatesuccess', scheduleRouteCheck)
	removeDomSubscription?.()
	removeDomSubscription = null
	currentPath = null
}

function subscribeRouteChanges(subscriber, { emitCurrent = true } = {}) {
	if (typeof subscriber !== 'function') {
		throw new TypeError('Route subscriber must be a function')
	}

	subscribers.add(subscriber)
	startListening()

	if (emitCurrent) {
		try {
			subscriber({ path: currentPath, previousPath: null })
		} catch (error) {
			reportSubscriberError(error)
		}
	}

	let active = true
	return () => {
		if (!active) return
		active = false
		subscribers.delete(subscriber)
		if (subscribers.size === 0) stopListening()
	}
}

export { subscribeRouteChanges }
