console.log('background.js')
import browser from 'webextension-polyfill'

browser.runtime.onInstalled.addListener((details) => {
	browser.action.setBadgeBackgroundColor({ color: '#ca93fb' })

	// Listen for updates
	if (details.reason === 'update') {
		browser.action.setBadgeText({ text: 'NEW' })
		browser.storage.sync.remove('gptheme')
	} else {
		browser.action.setBadgeText({ text: browser.runtime.getManifest().version })
	}
})

// Listen for messages from the popup
browser.runtime.onMessage.addListener(async (message, sender) => {
	if (message.action === 'setBadge') {
		// Clear the badge text
		await browser.action.setBadgeText({ text: browser.runtime.getManifest().version })
		return { status: 'Badge set' }
	}
})
