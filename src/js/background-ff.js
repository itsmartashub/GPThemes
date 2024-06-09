import { handleUpdateAvailable, browserUpdateNotification } from './background/handleUpdateAvailable'

browser.runtime.onInstalled.addListener((details) => {
	if (details.reason === 'update') {
		console.log('FIREFOX - Update available')

		handleUpdateAvailable(details)
		// Your update-related code here
	}
})

browserUpdateNotification()
