import { runtime, action } from 'webextension-polyfill'

import { getItem, setItem, removeItems } from './utils/storage'

// Constants
const BADGE_COLOR = '#ca93fb'
const NEW_BADGE_TEXT = 'NEW'
const VERSION_STORAGE_KEY = 'lastVersion'

const handleInstallation = async (details) => {
	try {
		const currentVersion = runtime.getManifest().version
		// Get previously stored version
		const { lastVersion } = await getItem(VERSION_STORAGE_KEY)

		// Handle update scenario - show NEW badge and reset theme
		if (details.reason === 'update' && lastVersion !== currentVersion) {
			await action.setBadgeText({ text: NEW_BADGE_TEXT })
			await removeItems('gptheme')
			console.log(`Extension updated from ${lastVersion} to ${currentVersion}`)
		}

		// Store the current version to track updates
		await setItem(VERSION_STORAGE_KEY, currentVersion)
		console.log(`Installation event: ${details.reason}, version: ${currentVersion}`)
	} catch (error) {
		console.error('Error handling installation:', error)
	}
}

const handleBadgeUpdate = async () => {
	try {
		const version = runtime.getManifest().version
		await action.setBadgeText({ text: version })
		return { status: 'Badge updated successfully' }
	} catch (error) {
		console.error('Error updating badge:', error)
		return { status: 'Badge update failed', error: error.message }
	}
}

const handleMessage = async (message, sender, sendResponse) => {
	try {
		if (message.action === 'setBadge') {
			const response = await handleBadgeUpdate()
			sendResponse(response)
		}
	} catch (error) {
		console.error('Error handling message:', error)
		sendResponse({ status: 'error', message: error.message })
	}
	return true // Keep message channel open for async response
}

// Initialize listeners
const initBackgroundScript = () => {
	console.log('Initializing GPThemes background script')

	// Set badge background color once
	action.setBadgeBackgroundColor({ color: BADGE_COLOR })

	// Register installation handler
	runtime.onInstalled.addListener(handleInstallation)

	// Register message handler (ensuring it's only added once)
	if (!globalThis.hasSetBadgeListener) {
		runtime.onMessage.addListener(handleMessage)
		globalThis.hasSetBadgeListener = true
	}
}

// Start the background script
initBackgroundScript()
