import { getItem, setItem, setItems, getStorage, clearStorage } from '../utils/storage'
import { SK_EXT_VERSION, SK_DB_VERSION } from '../app/config/consts-storage'
import { runtime } from 'webextension-polyfill'

const DB_VERSION = '1.0'

export async function checkAndCleanStorage() {
	const dbStoredVersion = await getItem(SK_DB_VERSION)
	const currExtVersion = getExtCurrVersion()

	// If storage version doesn't exist or doesn't match, clean everything
	if (!dbStoredVersion || dbStoredVersion !== DB_VERSION) {
		console.log(`⚠️ Storage version mismatch: ${dbStoredVersion} → ${DB_VERSION}`)

		// Get all keys and nuke everything
		const allStorage = await getStorage()
		const allKeys = Object.keys(allStorage)

		if (allKeys.length > 0) {
			await clearStorage()
			console.log(`🗑️ Cleared ${allKeys.length} storage keys`)
		}

		// Set both versions immediately after cleanup
		await setItems({
			[SK_DB_VERSION]: DB_VERSION,
			[SK_EXT_VERSION]: currExtVersion,
		})

		console.log(`✅ Storage reset | storage=${DB_VERSION}, ext=${currExtVersion}`)
		return true // Indicates cleanup happened
	}

	console.log('✓ Storage version OK')
	return false // No cleanup needed
}

export const getExtCurrVersion = () => runtime.getManifest().version
export const getExtStoredVersion = () => getItem(SK_EXT_VERSION)
export const setExtStoredVersion = (version) => setItem(SK_EXT_VERSION, version)

export { SK_EXT_VERSION, SK_DB_VERSION, DB_VERSION }
