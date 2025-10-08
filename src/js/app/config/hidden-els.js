import { SELECTORS } from './selectors'
import { PFX } from './constants'
import { icon_header, icon_footer } from '../components/icons'

export const ELEMENTS = [
	{
		id: SELECTORS.HIDE.HEADER.TOGGLE_ID,
		label: 'Hide Header',
		subtitle: 'Hide the top header section to maximize screen space.',
		icon: icon_header,
		selector: SELECTORS.HIDE.HEADER.SELECTOR,
		cssVar: `--${PFX}HideHeader`,
		storageKey: 'hideHeader',
		isHidden: false,
	},
	{
		id: SELECTORS.HIDE.FOOTER.TOGGLE_ID,
		label: 'Hide Footer',
		subtitle: 'Hide info below the message box for a cleaner view',
		icon: icon_footer,
		selector: SELECTORS.HIDE.FOOTER.SELECTOR,
		cssVar: `--${PFX}HideFooter`,
		storageKey: 'hideFooter',
		isHidden: false,
	},
]
