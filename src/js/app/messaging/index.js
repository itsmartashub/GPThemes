import browser from 'webextension-polyfill'
// import { toggleFloatingBtnVisibility } from './floatingBtn'
// import { SELECTORS } from './config/selectors'
import { toggleFloatingBtnVisibility } from '../floatingBtn'

/* Handles extension messages for the floating button and other features */
function setupExtensionMessaging() {
	if (!browser?.runtime?.onMessage) return

	browser.runtime.onMessage.addListener((msg, sender, sendResponse) => {
		console.log(msg)

		// Not used for now
		/* if (msg?.action === 'isFloatingBtnExists') {
			sendResponse({ exists: !!document.querySelector(`.${SELECTORS.FLOATING_BTN.ROOT}`) })
			return
		} */

		if (msg?.action === 'toggleFloatingBtnVisibility') {
			toggleFloatingBtnVisibility(msg.visible)
			// No need to update storage here - popup already did that
			return
		}
	})
}

export { setupExtensionMessaging }
