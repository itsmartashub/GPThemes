import { SELECTORS } from './selectors'
import { PFX } from './constants'
import { icon_header, icon_footer } from '../components/icons'

export const ELEMENTS = [
	{
		id: SELECTORS.HIDE.HEADER.TOGGLE_ID,
		label: 'Hide Header',
		subtitle: 'Remove the top bar',
		icon: icon_header,
		selector: SELECTORS.HIDE.HEADER.SELECTOR,
		cssVar: `--${PFX}HideHeader`,
		isHidden: false,
	},
	{
		id: SELECTORS.HIDE.FOOTER.TOGGLE_ID,
		label: 'Hide Footer',
		subtitle: 'Hide info below the message box',
		icon: icon_footer,
		selector: SELECTORS.HIDE.FOOTER.SELECTOR,
		cssVar: `--${PFX}HideFooter`,
		isHidden: false,
	},
]
