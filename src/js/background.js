import browser from 'webextension-polyfill'

browser.runtime.onInstalled.addListener(() => {
	console.log('Extension Installed')
})
