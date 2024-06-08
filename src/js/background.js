// console.log('background.js')

import browser from 'webextension-polyfill'
import icon from 'url:../assets/icons/128.png'

// const currentVersion = browser.runtime.getManifest().version
// const changelogURL = `https://github.com/itsmartashub/GPThemes/releases/tag/v${currentVersion}`

// console.log('Current version:', currentVersion)

// async function checkForUpdates() {
// 	const { gpth_version: previousVersion } = await browser.storage.local.get('gpth_version')

// 	console.log({ previousVersion })

// 	if (previousVersion && previousVersion !== currentVersion) {
// 		// Notify the user about the update
// 		const options = {
// 			type: 'basic',
// 			iconUrl: icon,
// 			title: 'Extension Updated',
// 			message: `Updated to version ${currentVersion}. Click to see what's new.`,
// 			priority: 2,
// 		}
// 		browser.notifications.create('update-notification', options)

// 		// Store the current version in storage
// 		await browser.storage.local.set({ gpth_version: currentVersion })
// 	} else if (!previousVersion) {
// 		// First installation, set the version in storage
// 		await browser.storage.local.set({ gpth_version: currentVersion })
// 	}
// }

// // Listen for the notification click
// browser.notifications.onClicked.addListener((notificationId) => {
// 	if (notificationId === 'update-notification') {
// 		browser.tabs.create({ url: browser.runtime.getURL(changelogURL) })
// 	}
// })

// checkForUpdates()

console.log('background.js')

const currentVersion = '3.0.1'
// const currentVersion = browser.runtime.getManifest().version
const changelogURL = `https://github.com/itsmartashub/GPThemes/releases/tag/v${currentVersion}`
/* const mainChanges = `
    - 🔠 Custom fonts
    - ⚙️ Tab view in GPThemes settings
    - ✨ Many improvements and bug fixes
` */

// console.log('Current version:', currentVersion)

async function checkForUpdates() {
	try {
		const { gpth_version: previousVersion } = await browser.storage.local.get('gpth_version')
		console.log({ previousVersion })

		if (previousVersion && previousVersion !== currentVersion) {
			// Notify the user about the update
			const options = {
				type: 'basic',
				iconUrl: icon,
				title: '📢 Extension Updated',
				message: `Updated to 🚀 v${currentVersion}. Click to see what's new.`,
				priority: 1,
			}

			browser.notifications.create('update-notification', options)

			// Automatically open the changelog URL
			browser.tabs.create({ url: changelogURL })

			// Store the current version in storage
			await browser.storage.local.set({ gpth_version: currentVersion })
		} else if (!previousVersion) {
			// First installation, set the version in storage
			await browser.storage.local.set({ gpth_version: currentVersion })
		}
	} catch (error) {
		console.error('Error getting version from storage:', error)
	}
}

// Listen for the notification click
browser.notifications.onClicked.addListener((notificationId) => {
	if (notificationId === 'update-notification') {
		browser.tabs.create({ url: browser.runtime.getURL(changelogURL) })
	}
})
// Reset the stored version for testing
// browser.storage.local.remove('gpth_version')

checkForUpdates()
