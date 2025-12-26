import { PFX } from './consts'

const chatboxRoot = "form[data-type='unified-composer'] .contain-inline-size[class*='bg-[\\#303030]'"

export const SELECTORS = {
	SUBHEADING: `${PFX}-subheading`,

	// Notification System
	NOTIFY: {
		CONTAINER: `${PFX}-notify-container`,
		ITEM: `${PFX}-notify`,
		CLOSE_BTN: `${PFX}-notify__close-btn`,
		SHOW_STATE: `${PFX}-notify--show`,
	},

	// Floating Button
	FAB: {
		ROOT: `${PFX}-fab`,
		DOCK: `${PFX}-dock`,
		DOCK_BTNS: `${PFX}-dock__btns`,
		OPEN_STATE: `${PFX}-dock--shown`,
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
		LIGHT_ID: `${PFX}-accent-light-id`,
		DARK_ID: `${PFX}-accent-dark-id`,
		RESET_BTN_ID: `${PFX}ResetAllColors`,
		TOGGLE_ACCENT_TEXT_ID: `${PFX}-toggle-accent-text`,
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
		SCROLL_BTN:
			'[role="presentation"].composer-parent div[style*="opacity: 1;"]>button[class*="end-1/2 translate-x-1/2"].absolute.rounded-full.w-8.h-8',
	},

	// Bubbles
	TOGGLE_BUBBLES: {
		ROOT: `${PFX}-bubbles`,
		ITEMS_CONTAINER: `${PFX}-bubbles__items`,
		ITEM: `${PFX}-bubbles__item`,
	},

	// Chats
	CHATS: {
		USER: 'user-message-bubble-color',
		GPT: 'agent-turn',
		TOGGLE_USER_BUBBLE_ACCENT_ID: `${PFX}-toggle-user-accent`,
	},

	// Chatbox
	CHATBOX: {
		ROOT: chatboxRoot,
		TEMP: `${chatboxRoot}.dark:bg-[#303030].dark `,
		HEIGHT: `#thread-bottom-container:not([class*="@lg/thread:grow"]) form[data-type="unified-composer"] .contain-inline-size.overflow-clip[class*='bg-[\\#303030]'] [class*="_prosemirror-parent"][class*="max-h-52"]`,
		TOGGLE_MAX_HEIGHT_ID: 'toggle-chatbox-max-height',
	},

	HIDE: {
		CONTAINER_ID: `${PFX}-hide-toggles`,
		HEADER: {
			TOGGLE_ID: `${PFX}-hide-header`,
			SELECTOR: `header#page-header`,
			// SELECTOR: `#page-header, .h-header-height.top-0`,
		},
		FOOTER: {
			TOGGLE_ID: `${PFX}-hide-footer`,
			SELECTOR: `#thread-bottom-container > #thread-bottom ~ div.min-h-8 > div`,
		},
		UPGRADE: {
			TOGGLE_ID: `${PFX}-hide-upgrade-chip`,
			SELECTOR: '.h-header-height.top-0 .rounded-full.bg-\\[\\#F1F1FB\\].dark\\:bg-\\[\\#373669\\]',
		},
	},
}
