import browser from 'webextension-polyfill'
import { toggleFABVisibility } from '../custom-fab/index'

let removeMessageListener = null

/* Handles extension msgs for the FAB and other features */
function setupExtensionMessaging() {
	if (!browser?.runtime?.onMessage) return
	if (removeMessageListener) return removeMessageListener

	// browser.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	const listener = (msg) => {
		// console.log(msg)

		if (msg?.action === 'toggleFABVisibility') {
			toggleFABVisibility(msg.visible)
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
