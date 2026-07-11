import browser from 'webextension-polyfill'

let removeMessageListener = null

function getFABHiddenState(message) {
	if (typeof message?.isHidden === 'boolean') return message.isHidden
	if (typeof message?.hidden === 'boolean') return message.hidden
	if (typeof message?.visible === 'boolean') return !message.visible
	return false
}

function setupExtensionMessaging(setFABVisibility) {
	if (!browser?.runtime?.onMessage || typeof setFABVisibility !== 'function') return
	if (removeMessageListener) return removeMessageListener

	const listener = (message) => {
		if (message?.action === 'toggleFABVisibility') {
			setFABVisibility(getFABHiddenState(message))
		}
	}

	browser.runtime.onMessage.addListener(listener)
	removeMessageListener = () => {
		browser.runtime.onMessage.removeListener(listener)
		removeMessageListener = null
	}

	return removeMessageListener
}

export { setupExtensionMessaging }
