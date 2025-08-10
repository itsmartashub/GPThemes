import browser from 'webextension-polyfill'

export const PFX = 'gpth'

export const EXT_CURRENT_VERSION = browser.runtime.getManifest().version
export const CHANGELOG_URL = `https://github.com/itsmartashub/GPThemes/releases/tag/v${EXT_CURRENT_VERSION}`

export const FLOATING_BTN_VISIBLE_KEY = 'floatingBtnVisible'

export const SELECTORS = {
	SUBHEADING: `${PFX}-subheading`,

	// Notification System
	NOTIFY: {
		CONTAINER: `${PFX}-notify-container`,
		ITEM: `${PFX}-notify`,
		SHOW_STATE: `${PFX}-notify--show`,
	},

	// Floating Button
	FLOATING_BTN: {
		ROOT: `${PFX}__floating`,
		OPTIONS: `${PFX}__options`,
		BTNS_CONTAINER: `${PFX}__options-btns`,
		OPEN_STATE: `${PFX}__options--shown`,
	},
	// Settings Panel
	SETTINGS: {
		ROOT: `${PFX}-settings`,
		OPEN_STATE: `${PFX}-settings--open`,
		OPEN_BTN: `${PFX}-open-settings`,
		TABS: {
			ROOT: `${PFX}-tabs`,
			BUTTONS: `${PFX}-tab-buttons`,
			BUTTON: `${PFX}-tab-button`,
			CONTENT: `${PFX}-tab-content`,
			PANE: `${PFX}-tab-pane`,
		},
	},

	// Accent Colors
	ACCENT: {
		LIGHT_ID: 'accentLight',
		DARK_ID: 'accentDark',
		RESET_BTN_ID: 'resetAllAccents',
	},

	// Width Controls
	WIDTH: {
		TOGGLE_FULL_ID: 'toggle-full-width',
		TOGGLE_SYNC_ID: 'toggle-sync-textarea',
		SLIDER_CHAT_ID: 'slider-chat-width',
		SLIDER_TEXTAREA_ID: 'slider-textarea-width',
		RESET_BTN_ID: 'resetWidths',
		DISPLAY_CHAT_VALUE_ID: 'display-chat-width-value',
		DISPLAY_CHAT_UNIT_ID: 'display-chat-width-unit',
		DISPLAY_TEXTAREA_VALUE_ID: 'display-textarea-width-value',
		DISPLAY_TEXTAREA_UNIT_ID: 'display-textarea-width-unit',
	},

	// Font Controls
	FONT: {
		FAMILY_ID: 'fontFamily',
		SIZE_ID: 'fontSize',
		LINE_HEIGHT_ID: 'lineHeight',
		LETTER_SPACING_ID: 'letterSpacing',
		SIZE_CLASS: 'fonts__size',
		LINE_HEIGHT_CLASS: 'fonts__lineHeight',
		LETTER_SPACING_CLASS: 'fonts__letterSpacing',
		RESET_BTN_ID: 'resetFont',
	},

	// Scroll Down
	SCROLLDOWN: {
		ROOT: `${PFX}-scrolldown`,
		BTN_CONTAINER: `${PFX}-scrolldown__btns`,
		BTN: `${PFX}-scrolldown__btn`,
		SCROLL_BTN: '[role="presentation"].composer-parent button:has(> svg.icon > path[d^="M9.33468"])',
	},

	// Bubbles
	BUBBLES: {
		ROOT: `${PFX}-bubbles`,
		ITEMS_CONTAINER: `${PFX}-bubbles__items`,
		ITEM: `${PFX}-bubbles__item`,
	},
}
