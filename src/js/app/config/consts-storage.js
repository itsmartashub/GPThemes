// =============================================
// STORAGE KEYS - Centralized constant definitions
// =============================================

// Color Settings
export const SK_COLOR_ACCENT_DARK = 'colorAccentDark'
export const SK_COLOR_ACCENT_LIGHT = 'colorAccentLight'
export const SK_TOGGLE_ACCENT_TEXT = 'toggleAccentTextState'

// Layout Toggles
export const SK_TOGGLE_HIDE_HEADER = 'hideHeader'
export const SK_TOGGLE_HIDE_FOOTER = 'hideFooter'
export const SK_TOGGLE_HIDE_RECENTS_PILL = 'hideRecentsPill'
export const SK_TOGGLE_HIDE_GPTS_PILL = 'hideGPTsPill'
export const SK_TOGGLE_HIDE_UPGRADE_CHIP = 'hideUpgradeChip'
export const SK_TOGGLE_CHATBOX_HEIGHT = 'toggleChatboxHeightState'
export const SK_TOGGLE_EXPAND_PULSE_CARDS = 'toggleExpandPulseCardsState'
export const SK_TOGGLE_FAB_HIDDEN = 'toggleFABHidden'

// Position Settings - TODO: don't forget to remove this from storage.sync in future, unless you fix the scrolldown alignement feat !!!
export const SK_SCROLL_BUTTON_POSITION = 'scrollButtonPosition'

// Width Settings
export const SK_WIDTH_SETTINGS = 'widthSettings'
export const SK_WIDTH_IS_FULL_ENABLED = 'widthIsFullEnabledV2'
export const SK_WIDTH_IS_SYNC_ENABLED = 'widthIsSyncEnabledV2'
export const SK_WIDTH_IS_FULL_ENABLED_LEGACY = 'widthIsFullEnabled'
export const SK_WIDTH_IS_SYNC_ENABLED_LEGACY = 'widthIsSyncEnabled'
export const SK_WIDTH_FLAGS_LEGACY_FORMAT = '_widthFlagsLegacyFormat'
export const WIDTH_FLAGS_FORMAT_NAMED = 'named'
export const WIDTH_FLAGS_FORMAT_SWAPPED = 'swapped'

// Typography Settings
export const SK_TEXT_FONT_FAMILY = 'textFontFamily'
export const SK_TEXT_FONT_FAMILY_SECONDARY = 'textFontFamilySecondary'
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
	// Settings to include in exports (user prefs)
	INCLUDE: [
		SK_COLOR_ACCENT_DARK,
		SK_COLOR_ACCENT_LIGHT,
		SK_TOGGLE_ACCENT_TEXT,

		SK_TOGGLE_CHATBOX_HEIGHT,
		SK_TOGGLE_HIDE_HEADER,
		SK_TOGGLE_HIDE_FOOTER,
		SK_TOGGLE_HIDE_RECENTS_PILL,
		SK_TOGGLE_HIDE_GPTS_PILL,
		SK_TOGGLE_HIDE_UPGRADE_CHIP,
		SK_TOGGLE_EXPAND_PULSE_CARDS,
		SK_TOGGLE_FAB_HIDDEN,

		SK_SCROLL_BUTTON_POSITION,

		SK_WIDTH_IS_FULL_ENABLED,
		SK_WIDTH_IS_SYNC_ENABLED,
		SK_WIDTH_IS_FULL_ENABLED_LEGACY,
		SK_WIDTH_IS_SYNC_ENABLED_LEGACY,
		SK_WIDTH_SETTINGS,

		SK_TEXT_FONT_FAMILY,
		SK_TEXT_FONT_FAMILY_SECONDARY,
		SK_TEXT_FONT_SIZE,
		SK_TEXT_LETTER_SPACING,
		SK_TEXT_LINE_HEIGHT,

		SK_TOGGLE_CHAT_BUBBLES_STATE,
		SK_TOGGLE_USER_BUBBLE_ACCENT,
	],

	// Settings to exclude from exports (system data)
	EXCLUDE: [SK_EXT_VERSION, SK_DB_VERSION, SK_BADGE_SEEN, SK_WIDTH_FLAGS_LEGACY_FORMAT],
})
