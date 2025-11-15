import { SELECTORS } from './selectors'
import { ATTR_HIDE_HEADER, ATTR_HIDE_FOOTER, ATTR_HIDE_UPGRADE_CHIP } from './consts-attr'
import { SK_TOGGLE_HIDE_HEADER, SK_TOGGLE_HIDE_FOOTER, SK_TOGGLE_HIDE_UPGRADE_CHIP } from './consts-storage'
import { icon_header, icon_footer } from '../components/icons'

export const ELEMENTS = [
	{
		id: SELECTORS.HIDE.HEADER.TOGGLE_ID,
		label: 'Hide Header',
		subtitle: 'Hide the top header section to maximize screen space.',
		icon: icon_header,
		selector: SELECTORS.HIDE.HEADER.SELECTOR,
		dataAttr: ATTR_HIDE_HEADER, // Changed from cssVar to dataAttr
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
		id: SELECTORS.HIDE.UPGRADE.TOGGLE_ID,
		label: 'Hide Upgrade Chip',
		subtitle: 'Hide the upgrade chip from the top header for a cleaner view',
		icon: icon_footer,
		selector: SELECTORS.HIDE.UPGRADE.SELECTOR,
		dataAttr: ATTR_HIDE_UPGRADE_CHIP,
		storageKey: SK_TOGGLE_HIDE_UPGRADE_CHIP,
		isHidden: false,
	},
]
