import { getItem, setItem, setItems, removeItems, getStorage, clearStorage } from '../utils/storage'
import { runtime } from 'webextension-polyfill'

const STORAGE_VERSION = '1.0'
const SK_STORAGE_VERSION = '_storageVersion'
const SK_EXT_VERSION = '_extPrevVersion'

export const checkAndCleanStorage = async () => {
	const storedVersion = await getItem(SK_STORAGE_VERSION)
	const currentExtVersion = getCurrentVersion()

	// If storage version doesn't exist or doesn't match, clean everything
	if (!storedVersion || storedVersion !== STORAGE_VERSION) {
		console.log(`⚠️ Storage version mismatch: ${storedVersion} → ${STORAGE_VERSION}`)

		// Get all keys and nuke everything
		const allStorage = await getStorage()
		const allKeys = Object.keys(allStorage)

		if (allKeys.length > 0) {
			await clearStorage()
			console.log(`🗑️ Cleared ${allKeys.length} storage keys`)
		}

		// Set both versions immediately after cleanup
		await setItems({
			[SK_STORAGE_VERSION]: STORAGE_VERSION,
			[SK_EXT_VERSION]: currentExtVersion,
		})

		console.log(`✅ Storage reset | storage=${STORAGE_VERSION}, ext=${currentExtVersion}`)
		return true // Indicates cleanup happened
	}

	console.log('✓ Storage version OK')
	return false // No cleanup needed
}

export const getCurrentVersion = () => runtime.getManifest().version

export const getStoredVersion = () => getItem(SK_EXT_VERSION)

export const setStoredVersion = (version) => setItem(SK_EXT_VERSION, version)

export { SK_EXT_VERSION, SK_STORAGE_VERSION, STORAGE_VERSION }
