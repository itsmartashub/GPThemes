import browser from 'webextension-polyfill'
import { toggleFABVisibility } from '../custom-fab/index'

let removeMessageListener = null

function getFABHiddenState(msg) {
	if (typeof msg?.isHidden === 'boolean') return msg.isHidden
	if (typeof msg?.hidden === 'boolean') return msg.hidden
	if (typeof msg?.visible === 'boolean') return !msg.visible
	return false
}

/* Handles extension msgs for the FAB and other features */
function setupExtensionMessaging() {
	if (!browser?.runtime?.onMessage) return
	if (removeMessageListener) return removeMessageListener

	// browser.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	const listener = (msg) => {
		// console.log(msg)

		if (msg?.action === 'toggleFABVisibility') {
			toggleFABVisibility(getFABHiddenState(msg))
			// No need to update storage here - popup already did that
			return
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
