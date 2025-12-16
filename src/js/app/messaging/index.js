import browser from 'webextension-polyfill'
import { toggleFABVisibility } from '../custom-fab/index'

/* Handles extension msgs for the FAB and other features */
function setupExtensionMessaging() {
	if (!browser?.runtime?.onMessage) return

	// browser.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	browser.runtime.onMessage.addListener((msg) => {
		console.log(msg)

		if (msg?.action === 'toggleFABVisibility') {
			toggleFABVisibility(msg.visible)
			// No need to update storage here - popup already did that
			return
		}
	})
}

export { setupExtensionMessaging }
