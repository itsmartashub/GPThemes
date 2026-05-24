import { runtime } from 'webextension-polyfill'
import {
	SK_DB_VERSION,
	SK_EXT_VERSION,
	SK_WIDTH_IS_FULL_ENABLED,
	SK_WIDTH_IS_SYNC_ENABLED,
} from '../app/config/consts-storage'
import { getItem, getStorage, setItem, setItems } from '../utils/storage'

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

async function migrateWidthFlagKeys(allStorage) {
	const legacySyncValue = allStorage[SK_WIDTH_IS_FULL_ENABLED]
	const legacyFullValue = allStorage[SK_WIDTH_IS_SYNC_ENABLED]
	const migrated = {}

	if (typeof legacyFullValue === 'boolean') {
		migrated[SK_WIDTH_IS_FULL_ENABLED] = legacyFullValue
	}

	if (typeof legacySyncValue === 'boolean') {
		migrated[SK_WIDTH_IS_SYNC_ENABLED] = legacySyncValue
	}

	if (Object.keys(migrated).length > 0) {
		await setItems(migrated)
		console.log('✅ Migrated width full/sync storage flags')
	}
}

const MIGRATIONS = [
	{
		version: '1.1',
		migrate: migrateWidthFlagKeys,
	},
]

export async function checkAndCleanStorage() {
	const dbStoredVersion = await getItem(SK_DB_VERSION)

	if (!dbStoredVersion || isBeforeVersion(dbStoredVersion, DB_VERSION)) {
		console.log(`⚠️ Storage migration needed: ${dbStoredVersion || 'none'} → ${DB_VERSION}`)

		const allStorage = await getStorage()

		for (const { version, migrate } of MIGRATIONS) {
			if (!dbStoredVersion || isBeforeVersion(dbStoredVersion, version)) {
				await migrate(allStorage)
			}
		}

		await setItems({
			[SK_DB_VERSION]: DB_VERSION,
		})
		console.log(`✅ Storage migrated | storage=${DB_VERSION}`)
		return true // Indicates migration happened
	}

	console.log('✓ Storage version OK')
	return false // No migration needed
}

export const getExtCurrVersion = () => runtime.getManifest().version
export const getExtStoredVersion = () => getItem(SK_EXT_VERSION)
export const setExtStoredVersion = (version) => setItem(SK_EXT_VERSION, version)
