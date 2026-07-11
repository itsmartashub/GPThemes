const subscribers = new Set()
let observer = null

function reportSubscriberError(error) {
	console.error('[GPThemes] DOM mutation subscriber failed:', error)
}

function notifySubscribers(mutations) {
	for (const subscriber of [...subscribers]) {
		if (!subscribers.has(subscriber)) continue

		try {
			subscriber(mutations)
		} catch (error) {
			reportSubscriberError(error)
		}
	}
}

function startObserver() {
	if (observer || !document.body || subscribers.size === 0) return

	observer = new MutationObserver(notifySubscribers)
	observer.observe(document.body, {
		childList: true,
		subtree: true,
	})
}

function stopObserver() {
	observer?.disconnect()
	observer = null
}

function subscribeDomMutations(subscriber) {
	if (typeof subscriber !== 'function') {
		throw new TypeError('DOM mutation subscriber must be a function')
	}

	subscribers.add(subscriber)
	startObserver()

	let active = true
	return () => {
		if (!active) return
		active = false
		subscribers.delete(subscriber)
		if (subscribers.size === 0) stopObserver()
	}
}

export { subscribeDomMutations }
