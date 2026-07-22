import {
	icon_footer,
	icon_header,
	icon_upgrade,
	icon_header_model,
	icon_header_btns,
	icon_profile,
} from '../components/icons'
import {
	ATTR_HIDE_FOOTER,
	ATTR_HIDE_HEADER,
	ATTR_HIDE_HEADER_MODEL_BTN,
	ATTR_HIDE_HEADER_ACTIONS_BTN,
	ATTR_HIDE_UPGRADE_CHIP,
	ATTR_HIDE_PROFILE_BTN,
} from './consts-attr'
import {
	SK_TOGGLE_HIDE_FOOTER,
	SK_TOGGLE_HIDE_HEADER,
	SK_TOGGLE_HIDE_HEADER_MODEL_BTN,
	SK_TOGGLE_HIDE_HEADER_ACTIONS_BTN,
	SK_TOGGLE_HIDE_UPGRADE_CHIP,
	SK_TOGGLE_HIDE_PROFILE_BTN,
} from './consts-storage'
import { SELECTORS } from './selectors'

export const ELEMENTS = [
	{
		id: SELECTORS.HIDE.HEADER.TOGGLE_ID,
		label: 'Hide Header',
		subtitle: 'Hide the top header section to maximize screen space.',
		icon: icon_header,
		selector: SELECTORS.HIDE.HEADER.SELECTOR,
		dataAttr: ATTR_HIDE_HEADER,
		storageKey: SK_TOGGLE_HIDE_HEADER,
		isHidden: false, // OFF by default = no data attribute
	},
	{
		id: SELECTORS.HIDE.HEADER_MODEL_BTN.TOGGLE_ID,
		label: 'Hide Header ChatGPT',
		subtitle: 'Hide the top header ChatGPT button only. This is more useful on mobiles',
		icon: icon_header_model,
		selector: SELECTORS.HIDE.HEADER_MODEL_BTN.SELECTOR,
		dataAttr: ATTR_HIDE_HEADER_MODEL_BTN,
		storageKey: SK_TOGGLE_HIDE_HEADER_MODEL_BTN,
		isHidden: false,
	},
	{
		id: SELECTORS.HIDE.HEADER_ACTIONS_BTN.TOGGLE_ID,
		label: 'Hide Header Actions',
		subtitle: 'Hide the top header action buttons on top right (e.g. "Share", "Open canvas", etc.)',
		icon: icon_header_btns,
		selector: SELECTORS.HIDE.HEADER_ACTIONS_BTN.SELECTOR,
		dataAttr: ATTR_HIDE_HEADER_ACTIONS_BTN,
		storageKey: SK_TOGGLE_HIDE_HEADER_ACTIONS_BTN,
		isHidden: false,
	},
	{
		id: SELECTORS.HIDE.FOOTER.TOGGLE_ID,
		label: 'Hide AI Disclaimer',
		subtitle: 'Hide info above the chatbox for a cleaner view',
		icon: icon_footer,
		selector: SELECTORS.HIDE.FOOTER.SELECTOR,
		dataAttr: ATTR_HIDE_FOOTER,
		storageKey: SK_TOGGLE_HIDE_FOOTER,
		isHidden: false,
	},
	{
		id: SELECTORS.HIDE.UPGRADE.TOGGLE_ID,
		label: 'Hide Upgrade Chips',
		subtitle: 'Hide upgrade chips from the top header and sidebar for a cleaner view',
		icon: icon_upgrade,
		selector: SELECTORS.HIDE.UPGRADE.SELECTOR,
		dataAttr: ATTR_HIDE_UPGRADE_CHIP,
		storageKey: SK_TOGGLE_HIDE_UPGRADE_CHIP,
		isHidden: false,
	},
	{
		id: SELECTORS.HIDE.PROFILE.TOGGLE_ID,
		label: 'Hide Profile Button',
		subtitle: 'Hide profile button from the sidebar',
		icon: icon_profile,
		selector: SELECTORS.HIDE.PROFILE.SELECTOR,
		dataAttr: ATTR_HIDE_PROFILE_BTN,
		storageKey: SK_TOGGLE_HIDE_PROFILE_BTN,
		isHidden: false,
	},
]
