import { SELECTORS } from './selectors'
import { PFX } from './constants'

export const ELEMENTS = [
	{
		id: SELECTORS.HIDE.HEADER.TOGGLE_ID,
		label: 'Hide Header',
		subtitle: 'Remove the top bar',
		icon: '📋',
		selector: SELECTORS.HIDE.HEADER.SELECTOR,
		cssVar: `--${PFX}HideHeader`,
		isHidden: false,
	},
	{
		id: SELECTORS.HIDE.FOOTER.TOGGLE_ID,
		label: 'Hide Footer',
		subtitle: 'Hide info below the message box',
		icon: '🚫',
		selector: SELECTORS.HIDE.FOOTER.SELECTOR,
		cssVar: `--${PFX}HideFooter`,
		isHidden: false,
	},
]
