import { createToggleSetting } from '../components/createToggleSetting.js'
import { icon_moon_full } from '../components/icons.js'
import { ATTR_AMOLED } from '../config/consts-attr.js'
import { SK_TOGGLE_AMOLED } from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'

// Pure preference: the toggle always writes data-gpth-amoled, and the SCSS gates the styling to dark mode (html[data-theme="dark"] and html.dark), so it simply has no effect until ChatGPT is in dark mode. No JS theme tracking is needed for this
const amoledToggle = createToggleSetting({
	id: SELECTORS.ACCENT.TOGGLE_AMOLED_ID,
	storageKey: SK_TOGGLE_AMOLED,
	dataAttr: ATTR_AMOLED,
	label: 'AMOLED',
	notifyLabel: 'AMOLED',
	subtitle: 'Pure black surfaces for OLED screens (dark mode only)',
	icon: icon_moon_full,
	badge: 'new',
})

export const renderAmoledToggle = amoledToggle.templateHTML
export const mount = amoledToggle.mount
