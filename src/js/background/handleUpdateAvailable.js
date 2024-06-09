// const currentVersion = browser.runtime.getManifest().version
// const changelogURL = `https://github.com/itsmartashub/GPThemes/releases/tag/v${currentVersion}`
import browser from 'webextension-polyfill'
import icon from 'url:../../assets/icons/128.png'
import { EXT_CURRENT_VERSION, CHANGELOG_URL } from '../app/config'

function handleUpdateAvailable(details) {
	console.log('handleUpdateAvailable() update to: ', details.version)

	// Notify the user about the update
	const options = {
		type: 'basic',
		iconUrl: icon,
		title: '📢 GPThemes Update',
		message: `A new version 🚀(${EXT_CURRENT_VERSION}) is available. Click to see what's new.`,
		priority: 1,
	}
	browser.notifications.create('update-notification', options)

	// Automatically open the changelog URL
	browser.tabs.create({ url: CHANGELOG_URL })
}

function browserUpdateNotification() {
	browser.notifications.onClicked.addListener((notificationId) => {
		if (notificationId === 'update-notification') {
			browser.tabs.create({ url: browser.runtime.getURL(CHANGELOG_URL) })
		}
	})
}
export { handleUpdateAvailable, browserUpdateNotification }
