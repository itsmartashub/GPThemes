import { runtime, action } from 'webextension-polyfill'
import { getItem, setItem, removeItems } from './utils/storage'

const BADGE_COLOR = '#ca93fb'
const NEW_BADGE_TEXT = 'NEW'
const SK_EXT_VERSION = 'extPrevVersion'
const SK_BADGE_SEEN = 'isBadgeSeen'

const setVersionBadge = async () => {
	const version = runtime.getManifest().version
	await action.setBadgeText({ text: version })
}

const handleInstallation = async (details) => {
	try {
		const currVersion = runtime.getManifest().version
		const prevVersion = await getItem(SK_EXT_VERSION)

		console.log(`Installation event: ${details.reason}, prev: ${prevVersion}, curr: ${currVersion}`)

		if (details.reason === 'update' && prevVersion !== currVersion) {
			await Promise.all([action.setBadgeText({ text: NEW_BADGE_TEXT }), removeItems(['gptheme', SK_BADGE_SEEN])])
			console.log(`✅ Extension updated - NEW badge set`)
		} else if (details.reason === 'install') {
			// Fresh install - show version immediately
			await setVersionBadge()
			await setItem(SK_BADGE_SEEN, true)
			console.log(`✅ Fresh install - version badge set`)
		}

		await setItem(SK_EXT_VERSION, currVersion)
	} catch (error) {
		console.error('Error handling installation:', error)
	}
}

const updateBadgeToVersion = async () => {
	const seen = await getItem(SK_BADGE_SEEN)
	if (seen) {
		console.log('Badge already seen, skipping update')
		return
	}

	await Promise.all([setVersionBadge(), setItem(SK_BADGE_SEEN, true)])
	console.log('✅ Badge changed from NEW to version - now persistent')
}

const handleMessage = (message, sender, sendResponse) => {
	if (message.action === 'setBadge') {
		updateBadgeToVersion()
			.then(() => sendResponse({ status: 'success' }))
			.catch((error) => {
				console.error('Error handling message:', error)
				sendResponse({ status: 'error', message: error.message })
			})
		return true
	}
}

const initBackgroundScript = async () => {
	console.log('=== BACKGROUND SCRIPT INIT ===')

	const seen = await getItem(SK_BADGE_SEEN)
	const storedVersion = await getItem(SK_EXT_VERSION)
	const currentVersion = runtime.getManifest().version
	const currentBadge = await action.getBadgeText({})

	console.log('Current badge:', currentBadge)
	console.log('isBadgeSeen:', seen)
	console.log('Stored version:', storedVersion)
	console.log('Current version:', currentVersion)

	await action.setBadgeBackgroundColor({ color: BADGE_COLOR })

	// Handle version mismatch (update happened but badge is empty)
	if (storedVersion !== currentVersion && !currentBadge) {
		console.log('⚠️ Version mismatch detected - setting NEW badge')
		await action.setBadgeText({ text: NEW_BADGE_TEXT })
		await removeItems([SK_BADGE_SEEN])
		await setItem(SK_EXT_VERSION, currentVersion)
	} else if (seen) {
		// Restore version badge if already seen
		await setVersionBadge()
		console.log('✅ Version badge restored')
	}

	runtime.onInstalled.addListener(handleInstallation)

	if (!globalThis.hasSetBadgeListener) {
		runtime.onMessage.addListener(handleMessage)
		globalThis.hasSetBadgeListener = true
	}
}

initBackgroundScript()
