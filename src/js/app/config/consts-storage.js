// Hide storage keys live in consts-hidden-els.js (single source of truth). Import HIDE_STORAGE_KEYS from there instead of listing them here
import { HIDE_STORAGE_KEYS } from './consts-hidden-els'

// Color Settings
export const SK_COLOR_ACCENT_DARK = 'colorAccentDark'
export const SK_COLOR_ACCENT_LIGHT = 'colorAccentLight'
export const SK_TOGGLE_ACCENT_TEXT = 'toggleAccentTextState'
export const SK_TOGGLE_AMOLED = 'toggleAmoledState'

// FAB
export const SK_TOGGLE_FAB_HIDDEN = 'toggleFABHidden'

// FAB drag position (local only bcs its device-specific, excluded from export)
export const SK_FAB_POSITION = 'fabPosition'

// Position settings - TODO: don't forget to remove this from storage.sync in future, unless you fix the scrolldown alignement feat !!!
export const SK_SCROLL_BUTTON_POSITION = 'scrollButtonPosition'

// Width Settings
export const SK_WIDTH_SETTINGS = 'widthSettings'
export const SK_WIDTH_IS_FULL_ENABLED = 'widthIsFullEnabled'
export const SK_WIDTH_IS_SYNC_ENABLED = 'widthIsSyncEnabled'
// export const SK_WIDTH_SIDEBAR = 'widthSidebar'

// Typography Settings
export const SK_TEXT_FONT_FAMILY = 'textFontFamily'
export const SK_TEXT_FONT_SIZE = 'textFontSize'
export const SK_TEXT_LETTER_SPACING = 'textLetterSpacing'
export const SK_TEXT_LINE_HEIGHT = 'textLineHeight'

// Chat Bubble Settings
export const SK_TOGGLE_CHAT_BUBBLES_STATE = 'toggleChatBubblesState'
export const SK_TOGGLE_USER_BUBBLE_ACCENT = 'toggleUserBubbleAccentState'
export const SK_TOGGLE_USER_BUBBLE_FULLWIDTH = 'toggleUserBubbleFullWidthState'

// Extension Metadata
export const SK_EXT_VERSION = '_extVersion'
export const SK_DB_VERSION = '_dbVersion'
export const SK_BADGE_SEEN = '_isBadgeSeen'

export const EXPORT_CONFIG = Object.freeze({
	// Settings to include in exports (user prefs)
	INCLUDE: [
		SK_COLOR_ACCENT_DARK,
		SK_COLOR_ACCENT_LIGHT,
		SK_TOGGLE_ACCENT_TEXT,
		SK_TOGGLE_AMOLED,

		// All hide element keys are derived from ELEMENTS. No manual list to maintain
		...HIDE_STORAGE_KEYS,

		SK_TOGGLE_FAB_HIDDEN,

		// SK_SCROLL_BUTTON_POSITION,

		SK_WIDTH_IS_FULL_ENABLED,
		SK_WIDTH_IS_SYNC_ENABLED,
		SK_WIDTH_SETTINGS,

		// SK_WIDTH_SIDEBAR,

		SK_TEXT_FONT_FAMILY,
		SK_TEXT_FONT_SIZE,
		SK_TEXT_LETTER_SPACING,
		SK_TEXT_LINE_HEIGHT,

		SK_TOGGLE_CHAT_BUBBLES_STATE,
		SK_TOGGLE_USER_BUBBLE_ACCENT,
		SK_TOGGLE_USER_BUBBLE_FULLWIDTH,
	],

	// Settings to exclude from exports (system data + device-specific data)
	EXCLUDE: [SK_EXT_VERSION, SK_DB_VERSION, SK_BADGE_SEEN, SK_FAB_POSITION],
})
