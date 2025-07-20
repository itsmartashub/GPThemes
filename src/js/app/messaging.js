import browser from 'webextension-polyfill'
import { toggleFloatingBtnVisibility, FLOATING_CLASS_NAME } from './floatingBtn'

/* Handles extension messages for the floating button and other features */
function setupExtensionMessaging() {
	if (!browser?.runtime?.onMessage) return

	browser.runtime.onMessage.addListener((msg, sender, sendResponse) => {
		console.log(msg)

		if (msg?.action === 'isFloatingBtnExists') {
			sendResponse({ exists: !!document.querySelector(`.${FLOATING_CLASS_NAME}`) })
			return
		}

		if (msg?.action === 'toggleFloatingBtnVisibility') {
			toggleFloatingBtnVisibility(msg.visible)
			// No need to update storage here - popup already did that
			return
		}
	})
}

export { setupExtensionMessaging }
