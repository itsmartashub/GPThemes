import { runtime } from 'webextension-polyfill'
import {
	SK_DB_VERSION,
	SK_EXT_VERSION,
	SK_WIDTH_FLAGS_LEGACY_FORMAT,
	SK_WIDTH_IS_FULL_ENABLED_LEGACY,
	SK_WIDTH_IS_SYNC_ENABLED_LEGACY,
	WIDTH_FLAGS_FORMAT_NAMED,
	WIDTH_FLAGS_FORMAT_SWAPPED,
} from '../app/config/consts-storage'
import { getItem, getItemsStrict, setItem, setItems } from '../utils/storage'

export const DB_VERSION = '1.1'

function versionParts(version) {
	return String(version || '0')
		.split('.')
		.map((part) => Number.parseInt(part, 10) || 0)
}

function isBeforeVersion(currentVersion, targetVersion) {
	const current = versionParts(currentVersion)
	const target = versionParts(targetVersion)
	const length = Math.max(current.length, target.length)

	for (let i = 0; i < length; i++) {
		const currentPart = current[i] || 0
		const targetPart = target[i] || 0
		if (currentPart < targetPart) return true
		if (currentPart > targetPart) return false
	}

	return false
}

export async function checkAndCleanStorage() {
	const storedMigrationState = await getItemsStrict([
		SK_DB_VERSION,
		SK_WIDTH_IS_FULL_ENABLED_LEGACY,
		SK_WIDTH_IS_SYNC_ENABLED_LEGACY,
	])
	const dbStoredVersion = storedMigrationState[SK_DB_VERSION]

	if (!dbStoredVersion || isBeforeVersion(dbStoredVersion, DB_VERSION)) {
		console.log(`⚠️ Storage migration needed: ${dbStoredVersion || 'none'} → ${DB_VERSION}`)
		const hasLegacyWidthFlags =
			typeof storedMigrationState[SK_WIDTH_IS_FULL_ENABLED_LEGACY] === 'boolean' ||
			typeof storedMigrationState[SK_WIDTH_IS_SYNC_ENABLED_LEGACY] === 'boolean'
		const updates = {
			[SK_DB_VERSION]: DB_VERSION,
			[SK_WIDTH_FLAGS_LEGACY_FORMAT]:
				dbStoredVersion === '1.0' || (!dbStoredVersion && hasLegacyWidthFlags)
					? WIDTH_FLAGS_FORMAT_SWAPPED
					: WIDTH_FLAGS_FORMAT_NAMED,
		}

		await setItems(updates)
		console.log(`✅ Storage migrated | storage=${DB_VERSION}`)
		return true // Indicates migration happened
	}

	console.log('✓ Storage version OK')
	return false // No migration needed
}

export const getExtCurrVersion = () => runtime.getManifest().version
export const getExtStoredVersion = () => getItem(SK_EXT_VERSION)
export const setExtStoredVersion = (version) => setItem(SK_EXT_VERSION, version)
