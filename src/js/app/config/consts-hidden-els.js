import { icon_badge, icon_footer, icon_header, icon_upgrade } from '../components/icons'
import {
	ATTR_HIDE_FOOTER,
	ATTR_HIDE_GPTS_PILL,
	ATTR_HIDE_HEADER,
	ATTR_HIDE_RECENTS_PILL,
	ATTR_HIDE_UPGRADE_CHIP,
} from './consts-attr'
import {
	SK_TOGGLE_HIDE_FOOTER,
	SK_TOGGLE_HIDE_GPTS_PILL,
	SK_TOGGLE_HIDE_HEADER,
	SK_TOGGLE_HIDE_RECENTS_PILL,
	SK_TOGGLE_HIDE_UPGRADE_CHIP,
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
		id: SELECTORS.HIDE.FOOTER.TOGGLE_ID,
		label: 'Hide Footer',
		subtitle: 'Hide info below the message box for a cleaner view',
		icon: icon_footer,
		selector: SELECTORS.HIDE.FOOTER.SELECTOR,
		dataAttr: ATTR_HIDE_FOOTER,
		storageKey: SK_TOGGLE_HIDE_FOOTER,
		isHidden: false,
	},
	{
		id: SELECTORS.HIDE.RECENTS_PILL.TOGGLE_ID,
		label: 'Hide Recents Pill',
		subtitle: 'Remove the rounded background behind the RECENTS label in the sidebar.',
		icon: icon_badge,
		selector: SELECTORS.HIDE.RECENTS_PILL.SELECTOR,
		dataAttr: ATTR_HIDE_RECENTS_PILL,
		storageKey: SK_TOGGLE_HIDE_RECENTS_PILL,
		isHidden: false,
		allowMissing: true,
	},
	{
		id: SELECTORS.HIDE.GPTS_PILL.TOGGLE_ID,
		label: 'Hide GPTs Pill',
		subtitle: 'Remove the rounded background behind the GPTS label in the sidebar.',
		icon: icon_badge,
		selector: SELECTORS.HIDE.GPTS_PILL.SELECTOR,
		dataAttr: ATTR_HIDE_GPTS_PILL,
		storageKey: SK_TOGGLE_HIDE_GPTS_PILL,
		isHidden: false,
		allowMissing: true,
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
]
