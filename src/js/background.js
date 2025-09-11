import browser from 'webextension-polyfill'

// Constants
const BADGE_COLOR = '#ca93fb'
const NEW_BADGE_TEXT = 'NEW'

const handleInstallation = async (details) => {
	try {
		const currentVersion = browser.runtime.getManifest().version
		// Get previously stored version
		const { lastVersion } = await browser.storage.sync.get('lastVersion')

		// Handle update scenario - show NEW badge and reset theme
		if (details.reason === 'update' && lastVersion !== currentVersion) {
			await browser.action.setBadgeText({ text: NEW_BADGE_TEXT })
			await browser.storage.sync.remove('gptheme')
			console.log(`Extension updated from ${lastVersion} to ${currentVersion}`)
		}

		// Store the current version to track updates
		await browser.storage.sync.set({ lastVersion: currentVersion })
		console.log(`Installation event: ${details.reason}, version: ${currentVersion}`)
	} catch (error) {
		console.error('Error handling installation:', error)
	}
}

const handleBadgeUpdate = async () => {
	try {
		const version = browser.runtime.getManifest().version
		await browser.action.setBadgeText({ text: version })
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
	browser.action.setBadgeBackgroundColor({ color: BADGE_COLOR })

	// Register installation handler
	browser.runtime.onInstalled.addListener(handleInstallation)

	// Register message handler (ensuring it's only added once)
	if (!globalThis.hasSetBadgeListener) {
		browser.runtime.onMessage.addListener(handleMessage)
		globalThis.hasSetBadgeListener = true
	}
}

// Start the background script
initBackgroundScript()
