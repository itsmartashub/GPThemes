// storage-constants.js

// =============================================
// STORAGE KEYS - Centralized constant definitions
// =============================================

// Color Settings
export const SK_COLOR_ACCENT_DARK = 'colorAccentDark'
export const SK_COLOR_ACCENT_LIGHT = 'colorAccentLight'

// Layout Toggles
export const SK_TOGGLE_CUSTOM_CHATBOX_HEIGHT = 'customChatboxHeightState'
export const SK_TOGGLE_HIDE_HEADER = 'hideHeader'
export const SK_TOGGLE_HIDE_FOOTER = 'hideFooter'
export const SK_TOGGLE_WIDTH_FULL_ENABLED = 'widthIsFullEnabled'
export const SK_TOGGLE_WIDTH_SYNC_ENABLED = 'widthIsSyncEnabled'

// Position Settings
export const SK_SCROLL_BUTTON_POSITION = 'scrollButtonPosition'

// Width Settings
export const SK_WIDTH_SETTINGS = 'widthSettings'

// Typography Settings
export const SK_TEXT_FONT_FAMILY = 'textFontFamily'
export const SK_TEXT_FONT_SIZE = 'textFontSize'
export const SK_TEXT_LETTER_SPACING = 'textLetterSpacing'
export const SK_TEXT_LINE_HEIGHT = 'textLineHeight'

// Chat Bubble Settings
export const SK_TOGGLE_CHAT_BUBBLES_STATE = 'toggleChatBubblesState'
export const SK_TOGGLE_USER_BUBBLE_ACCENT = 'toggleUserBubbleAccentState'

// Extension Metadata
export const SK_EXT_PREV_VERSION = 'extPrevVersion'
export const SK_STORAGE_VERSION = 'storageVersion'
export const SK_HAS_SEEN_NEW_BADGE = 'hasSeenNewBadge'

// =============================================
// EXPORT CONFIG - For backup/restore functionality
// =============================================

export const EXPORT_CONFIG = Object.freeze({
	// Settings to include in exports (user preferences)
	INCLUDE: [
		SK_COLOR_ACCENT_DARK,
		SK_COLOR_ACCENT_LIGHT,
		SK_TOGGLE_CUSTOM_CHATBOX_HEIGHT,
		SK_TOGGLE_HIDE_HEADER,
		SK_TOGGLE_HIDE_FOOTER,
		SK_SCROLL_BUTTON_POSITION,
		SK_TOGGLE_WIDTH_FULL_ENABLED,
		SK_TOGGLE_WIDTH_SYNC_ENABLED,
		SK_WIDTH_SETTINGS,
		SK_TEXT_FONT_FAMILY,
		SK_TEXT_FONT_SIZE,
		SK_TEXT_LETTER_SPACING,
		SK_TEXT_LINE_HEIGHT,
		SK_TOGGLE_CHAT_BUBBLES_STATE,
		SK_TOGGLE_USER_BUBBLE_ACCENT,
	],

	// Settings to exclude from exports (system data)
	EXCLUDE: [SK_EXT_PREV_VERSION, SK_STORAGE_VERSION, SK_HAS_SEEN_NEW_BADGE],
})

// =============================================
// VALIDATION RULES - For settings validation
// =============================================

// export const VALIDATION_RULES = Object.freeze({
//   [SK_COLOR_ACCENT_DARK]: (value) => typeof value === 'string' && value.startsWith('#'),
//   [SK_COLOR_ACCENT_LIGHT]: (value) => typeof value === 'string' && value.startsWith('#'),
//   [SK_TEXT_FONT_SIZE]: (value) => typeof value === 'number' && value >= 8 && value <= 72,
//   [SK_TEXT_LETTER_SPACING]: (value) => typeof value === 'number' && value >= 0 && value <= 10,
//   [SK_TEXT_LINE_HEIGHT]: (value) => typeof value === 'number' && value >= 10 && value <= 50,
//   [SK_SCROLL_BUTTON_POSITION]: (value) => ['left', 'center', 'right'].includes(value)
// });

// =============================================
// HELPER FUNCTIONS - For common operations
// =============================================

// Get all storage keys as an array
export function getAllStorageKeys() {
	return [
		SK_COLOR_ACCENT_DARK,
		SK_COLOR_ACCENT_LIGHT,
		SK_TOGGLE_CUSTOM_CHATBOX_HEIGHT,
		SK_TOGGLE_HIDE_HEADER,
		SK_TOGGLE_HIDE_FOOTER,
		SK_SCROLL_BUTTON_POSITION,
		SK_TOGGLE_WIDTH_FULL_ENABLED,
		SK_TOGGLE_WIDTH_SYNC_ENABLED,
		SK_WIDTH_SETTINGS,
		SK_TEXT_FONT_FAMILY,
		SK_TEXT_FONT_SIZE,
		SK_TEXT_LETTER_SPACING,
		SK_TEXT_LINE_HEIGHT,
		SK_TOGGLE_CHAT_BUBBLES_STATE,
		SK_TOGGLE_USER_BUBBLE_ACCENT,
		SK_EXT_PREV_VERSION,
		SK_STORAGE_VERSION,
		SK_HAS_SEEN_NEW_BADGE,
	]
}

// Get all user-configurable keys (for export/import)
export function getUserSettingKeys() {
	return EXPORT_CONFIG.INCLUDE
}

// Get all metadata keys (system data)
export function getMetaKeys() {
	return EXPORT_CONFIG.EXCLUDE
}

// Check if a key is user-configurable
export function isUserSetting(key) {
	return EXPORT_CONFIG.INCLUDE.includes(key)
}

// Check if a key is metadata (not for export)
export function isMetaKey(key) {
	return EXPORT_CONFIG.EXCLUDE.includes(key)
}

// Get default value for a key
export function getDefaultValue(key) {
	return DEFAULT_VALUES[key] !== undefined ? DEFAULT_VALUES[key] : null
}

// Validate a value for a specific key
export function validateSetting(key, value) {
	const validator = VALIDATION_RULES[key]
	return validator ? validator(value) : true
}
