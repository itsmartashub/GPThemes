import { runtime } from 'webextension-polyfill'
import { getItem, removeItems, setItems } from '../utils/storage'
import {
	initBadgeColor,
	setVersionBadge,
	setNewBadge,
	updateBadgeToVersion,
	isBadgeSeen,
	markBadgeAsSeen,
	getCurrentBadge,
} from './updateBadge'
import {
	checkAndCleanStorage,
	getCurrentVersion,
	getStoredVersion,
	setStoredVersion,
	SK_EXT_VERSION,
} from './versionControl'

const handleInstallation = async (details) => {
	try {
		const currVersion = getCurrentVersion()
		const prevVersion = await getStoredVersion()

		console.log(`📦 Install event: ${details.reason}`)
		console.log(`   Previous: ${prevVersion} → Current: ${currVersion}`)

		if (details.reason === 'update') {
			// Only show NEW badge if version actually changed
			if (prevVersion !== currVersion) {
				await setNewBadge()
				await removeItems(['gptheme']) // Theme-specific cleanup
				console.log('✅ Update detected - NEW badge set')
			} else {
				console.log('⚠️ Update event but same version, keeping current badge')
			}

			// Always update stored version on update
			await setStoredVersion(currVersion)
		} else if (details.reason === 'install') {
			// Fresh install - show version immediately
			await setVersionBadge()
			await markBadgeAsSeen()
			await setStoredVersion(currVersion)
			console.log('✅ Fresh install - version badge set')
		}
	} catch (error) {
		console.error('❌ Installation error:', error)
	}
}

const handleMessage = (message, sender, sendResponse) => {
	if (message.action === 'setBadge') {
		updateBadgeToVersion()
			.then(() => sendResponse({ status: 'success' }))
			.catch((error) => {
				console.error('❌ Message handler error:', error)
				sendResponse({ status: 'error', message: error.message })
			})
		return true // Keep channel open for async response
	}
}

const initBackgroundScript = async () => {
	console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
	console.log('🚀 BACKGROUND SCRIPT INIT')
	console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

	try {
		// STEP 1: Check storage version and cleanup if needed
		const wasCleanedUp = await checkAndCleanStorage()

		// STEP 2: Initialize badge color
		await initBadgeColor()

		// STEP 3: Get current state
		const seen = await isBadgeSeen()
		const storedVersion = await getStoredVersion()
		const currentVersion = getCurrentVersion()
		const currentBadge = await getCurrentBadge()

		console.log('📊 Current State:')
		console.log(`   Badge: "${currentBadge}" | Seen: ${seen}`)
		console.log(`   Stored: ${storedVersion} | Current: ${currentVersion}`)
		console.log(`   Cleanup: ${wasCleanedUp}`)

		// STEP 4: Handle badge state based on current situation
		if (wasCleanedUp) {
			// Storage was just cleaned, this is like a fresh start
			// Don't set badge here, let onInstalled handle it
			console.log('⏳ Waiting for onInstalled event...')
		} else if (storedVersion !== currentVersion && !currentBadge) {
			// Edge case: version mismatch but badge is empty
			console.log('⚠️ Version mismatch detected - setting NEW badge')
			await setNewBadge()
			await setStoredVersion(currentVersion)
		} else if (seen && currentBadge !== currentVersion) {
			// Restore version badge if it was already seen
			await setVersionBadge()
			console.log('✅ Version badge restored')
		}

		// STEP 5: Register event listeners
		runtime.onInstalled.addListener(handleInstallation)

		if (!globalThis.hasSetBadgeListener) {
			runtime.onMessage.addListener(handleMessage)
			globalThis.hasSetBadgeListener = true
			console.log('✅ Message listener registered')
		}

		console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
		console.log('✅ Background script ready')
		console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

		// SET_TESTING_ITEMS()
	} catch (error) {
		console.error('❌ Init error:', error)
	}
}

/* REMOVE AFTER TESTING !!! */
async function SET_TESTING_ITEMS() {
	const items = {
		accent_dark: '#ffa8a8',
		accent_light: '#476c4e',
		chat_user_edit_icon_right: 'calc(0% + 2rem)',
		chat_user_edit_icon_top: '100%',
		chat_user_edit_icon_transform: 'translateY(-1.25rem)',
		customChatboxHeightState: true,
		fontFamily: 'Bricolage Grotesque',
		fontSize: 20,
		fullWidthEnabled: true,
		'gpth-hide-footer': true,
		'gpth-hide-header': true,
		lastVersion: '5.3.0',
		letterSpacing: 3,
		lineHeight: 27,
		max_w_chat_user: '84%',
		scrollButtonPosition: 'left',
		w_chat_gpt: '84%',
		w_chat_user: '84%',
		w_prompt_textarea: '48rem',
		widthSettings: {
			max_w_chat_user: '100%',
			w_chat_gpt: '100%',
			w_chat_user: '100%',
			w_prompt_textarea: '100%',
		},
		widthSyncEnabled: true,
	}
	await setItems(items)
}

initBackgroundScript()
