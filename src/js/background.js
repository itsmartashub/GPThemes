console.log('background.js')
import browser from 'webextension-polyfill'

browser.runtime.onInstalled.addListener((details) => {
	if (details.reason === 'update') {
		// browser.action.setBadgeText({ text: 'NEW' })
		browser.action.setBadgeText({ text: browser.runtime.getManifest().version })
		browser.action.setBadgeBackgroundColor({ color: '#ca93fb' })
	}
})

browser.action.onClicked.addListener(() => {
	browser.action.setBadgeText({ text: '' })
	browser.action.setBadgeBackgroundColor({ color: [0, 0, 0, 0] }) // Transparent
})
