import { SELECTORS } from './selectors'
import { ATTR_HIDE_HEADER, ATTR_HIDE_FOOTER } from './consts-attr'
import { icon_header, icon_footer } from '../components/icons'

export const ELEMENTS = [
	{
		id: SELECTORS.HIDE.HEADER.TOGGLE_ID,
		label: 'Hide Header',
		subtitle: 'Hide the top header section to maximize screen space.',
		icon: icon_header,
		selector: SELECTORS.HIDE.HEADER.SELECTOR,
		dataAttr: ATTR_HIDE_HEADER, // Changed from cssVar to dataAttr
		storageKey: 'hideHeader',
		isHidden: false, // OFF by default = no data attribute
	},
	{
		id: SELECTORS.HIDE.FOOTER.TOGGLE_ID,
		label: 'Hide Footer',
		subtitle: 'Hide info below the message box for a cleaner view',
		icon: icon_footer,
		selector: SELECTORS.HIDE.FOOTER.SELECTOR,
		dataAttr: ATTR_HIDE_FOOTER, // Changed from cssVar to dataAttr
		storageKey: 'hideFooter',
		isHidden: false, // OFF by default = no data attribute
	},
]
