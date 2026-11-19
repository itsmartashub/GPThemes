import { EXT_CURR_VERSION, EXT_NAME } from './config/consts.js'
import { EXPORT_CONFIG } from './config/consts-storage.js'
import { storageSync } from '../utils/storage.js'
import { Notify } from './components/renderNotify.js'
import { showConfirm } from './components/renderConfirm.js'

// =====================================================
// CONSTANTS
// =====================================================

/* Schema versioning is separate from the extension version! Bump SCHEMA_VERSION only when the payload structure itself changes (added envelope fields, renamed top-level keys, etc), not for every release
Migrations below map old schema versions to transform functions so that any file the user saved in the past can still be imported cleanly */
const SCHEMA_VERSION = 1

// Known-good storage keys at the time of this schema version. Keys that are commented-out in EXPORT_CONFIG.INCLUDE are intentionally absent here
const KNOWN_KEYS = new Set(EXPORT_CONFIG.INCLUDE)

// =====================================================
// EXPORT
// =====================================================

/*
Reads only the keys listed in EXPORT_CONFIG.INCLUDE from sync storage, skips anything in EXPORT_CONFIG.EXCLUDE (system/device-specific data), then serialises the result to a JSON file and triggers a browser downdload
Legacy keys that happen to exist in storage but are absent from KNOWN_KEYS are silently dropped. The user's live settings still work, but they won't pollute the backup */
export async function exportSettings() {
	try {
		const stored = await storageSync.getItems(EXPORT_CONFIG.INCLUDE)

		// Drop keys that are not in the curr canonical set (legacy / renamed)
		const settings = {}
		for (const key of EXPORT_CONFIG.INCLUDE) {
			if (Object.hasOwn(stored, key) && stored[key] !== undefined && stored[key] !== null) {
				settings[key] = stored[key]
			}
		}

		const payload = {
			_meta: {
				schema: SCHEMA_VERSION,
				ext: EXT_NAME,
				version: EXT_CURR_VERSION,
				exportedAt: new Date().toISOString(),
			},
			settings,
		}

		const json = JSON.stringify(payload, null, 2)
		const blob = new Blob([json], { type: 'application/json' })
		const url = URL.createObjectURL(blob)

		const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
		const filename = `${EXT_NAME}-v${EXT_CURR_VERSION}-${timestamp}.json`

		const a = document.createElement('a')
		a.href = url
		a.download = filename
		a.click()

		// Revoke on next tick - the click needs one event loop cycle to fire
		setTimeout(() => URL.revokeObjectURL(url), 0)

		Notify.success(`Settings exported as ${filename}`)
	} catch (err) {
		console.error('[GPThemes:export]', err)
		Notify.error('Export failed. Please try again.')
	}
}

// =====================================================
// IMPORT
// =====================================================

/* Validates and applies a backup file the user selects.

Validation layers (in order):
  1. File must be a valid JSON doc
  2. Root must be an obj with _meta and settings fields
  3. _meta.ext must equal EXT_NAME - rejects files from other extensions
  4. _meta.schema must be a known integer - rejects future formats this build cannot handle
  5. settings must be a plain object
  6. Every key in settings is checked against KNOWN_KEYS - unknown/legacy keys are stripped before writing

After passing all checks, a migration function matching the file's schema version runs (if one exists), and only the sanitised, migrated subset is written to storage */
export function importSettings(onSuccess) {
	const input = document.createElement('input')
	input.type = 'file'
	input.accept = '.json,application/json'

	input.addEventListener(
		'change',
		async (e) => {
			const file = e.target.files?.[0]
			if (!file) return

			try {
				const raw = await file.text()
				const payload = parseJSON(raw)

				const validationError = validatePayload(payload)
				if (validationError) {
					Notify.error(validationError)
					return
				}

				const migrated = migratePayload(payload)
				const sanitised = sanitiseSettings(migrated.settings)

				if (Object.keys(sanitised).length === 0) {
					Notify.warning(
						'The file contained no recognised settings. Nothing was imported.',
					)
					return
				}

				await storageSync.setItems(sanitised)
				Notify.success('Settings imported. Reloading…')

				// Give the notification a moment to render before the page reloads
				setTimeout(() => {
					onSuccess?.()
					window.location.reload()
				}, 1200)
			} catch (err) {
				console.error('[GPThemes:import]', err)
				Notify.error('Import failed. The file may be corrupted.')
			}
		},
		{ once: true },
	)

	input.click()
}

// =====================================================
// VALIDATION
// =====================================================

function parseJSON(raw) {
	try {
		return JSON.parse(raw)
	} catch {
		throw new Error('Invalid JSON')
	}
}

// Returns a human-readable error string on failure, null on success
function validatePayload(payload) {
	if (!isPlainObject(payload)) return 'Invalid backup file: root must be a JSON object.'
	if (!isPlainObject(payload._meta)) return 'Invalid backup file: missing _meta block.'
	if (!isPlainObject(payload.settings)) return 'Invalid backup file: missing settings block.'

	const { ext, schema } = payload._meta

	if (ext !== EXT_NAME) return `This backup is for "${ext}", not ${EXT_NAME}. Cannot import.`

	if (typeof schema !== 'number' || schema < 1 || schema > SCHEMA_VERSION) {
		return `Unsupported backup format (schema v${schema}). Please update the extension and try again.`
	}

	return null
}

// =====================================================
// MIGRATION
// =====================================================

/* Add a fn per schema version that needs a transform. Each fn receives the full payload and returns a transformed copy. Never mutates in place
When the schema version jumps by more than one (eg user skipped a release), migrations run in sequence

Example for a hypothetical v1 → v2 migration:
  migrations[1] = (payload) => {
    const s = { ...payload.settings }
    if ('oldKey' in s) { s.newKey = s.oldKey; delete s.oldKey }
    return { ...payload, settings: s, _meta: { ...payload._meta, schema: 2 } }
  }
*/
const migrations = {}

function migratePayload(payload) {
	let current = payload
	let version = current._meta.schema

	while (version < SCHEMA_VERSION) {
		const migrate = migrations[version]
		if (migrate) current = migrate(current)
		version++
	}

	return current
}

// =====================================================
// SANITISATION
// =====================================================

/*
Strips any key that isn't in KNOWN_KEYS (removed keys, legacy names, injected props). This runs after migration so that migration functions can rename keys before we check membership */
function sanitiseSettings(settings) {
	const clean = {}
	for (const key of Object.keys(settings)) {
		if (KNOWN_KEYS.has(key)) clean[key] = settings[key]
	}
	return clean
}

// =====================================================
// RESET
// =====================================================

/*
Removes all exportable user preference keys from sync storage, then reloads.
Keys in EXPORT_CONFIG.EXCLUDE (system metadata, device-specific data) are intentionally left untouched — they must survive a reset so the extension stays operational.
A confirm dialog guards the action; the function is a no-op if the user cancels.
*/
export async function resetSettings() {
	const confirmed = await showConfirm({
		title: 'Reset all settings?',
		message:
			'This will remove all your customizations and restore the extension defaults. This cannot be undone.',
		confirmLabel: 'Reset',
		cancelLabel: 'Cancel',
		danger: true,
	})

	if (!confirmed) return

	try {
		await storageSync.removeItems(EXPORT_CONFIG.INCLUDE)
		Notify.success('Settings reset. Reloading…')

		setTimeout(() => window.location.reload(), 1200)
	} catch (err) {
		console.error('[GPThemes:reset]', err)
		Notify.error('Reset failed. Please try again.')
	}
}

// =====================================================
// UTILS
// =====================================================

function isPlainObject(val) {
	return val !== null && typeof val === 'object' && !Array.isArray(val)
}
