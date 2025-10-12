// =============================================
// STORAGE KEYS - Centralized constant definitions
// =============================================

// Color Settings
export const SK_COLOR_ACCENT_DARK = 'colorAccentDark'
export const SK_COLOR_ACCENT_LIGHT = 'colorAccentLight'

// Layout Toggles
export const SK_TOGGLE_HIDE_HEADER = 'hideHeader'
export const SK_TOGGLE_HIDE_FOOTER = 'hideFooter'
export const SK_TOGGLE_CHATBOX_HEIGHT = 'toggleChatboxHeightState'
export const SK_TOGGLE_FAB_HIDDEN = 'toggleFABHidden'

// Position Settings
export const SK_SCROLL_BUTTON_POSITION = 'scrollButtonPosition'

// Width Settings
export const SK_WIDTH_SETTINGS = 'widthSettings'
export const SK_WIDTH_IS_FULL_ENABLED = 'widthIsFullEnabled'
export const SK_WIDTH_IS_SYNC_ENABLED = 'widthIsSyncEnabled'

// Typography Settings
export const SK_TEXT_FONT_FAMILY = 'textFontFamily'
export const SK_TEXT_FONT_SIZE = 'textFontSize'
export const SK_TEXT_LETTER_SPACING = 'textLetterSpacing'
export const SK_TEXT_LINE_HEIGHT = 'textLineHeight'

// Chat Bubble Settings
export const SK_TOGGLE_CHAT_BUBBLES_STATE = 'toggleChatBubblesState'
export const SK_TOGGLE_USER_BUBBLE_ACCENT = 'toggleUserBubbleAccentState'

// Extension Metadata
export const SK_EXT_VERSION = '_extVersion'
export const SK_DB_VERSION = '_dbVersion'
export const SK_BADGE_SEEN = '_isBadgeSeen'

// =============================================
// EXPORT CONFIG - For backup/restore functionality
// =============================================

export const EXPORT_CONFIG = Object.freeze({
	// Settings to include in exports (user preferences)
	INCLUDE: [
		SK_COLOR_ACCENT_DARK,
		SK_COLOR_ACCENT_LIGHT,

		SK_TOGGLE_CHATBOX_HEIGHT,
		SK_TOGGLE_HIDE_HEADER,
		SK_TOGGLE_HIDE_FOOTER,
		SK_TOGGLE_FAB_HIDDEN,

		SK_SCROLL_BUTTON_POSITION,

		SK_WIDTH_IS_FULL_ENABLED,
		SK_WIDTH_IS_SYNC_ENABLED,
		SK_WIDTH_SETTINGS,

		SK_TEXT_FONT_FAMILY,
		SK_TEXT_FONT_SIZE,
		SK_TEXT_LETTER_SPACING,
		SK_TEXT_LINE_HEIGHT,

		SK_TOGGLE_CHAT_BUBBLES_STATE,
		SK_TOGGLE_USER_BUBBLE_ACCENT,
	],

	// Settings to exclude from exports (system data)
	EXCLUDE: [SK_EXT_VERSION, SK_DB_VERSION, SK_BADGE_SEEN],
})
