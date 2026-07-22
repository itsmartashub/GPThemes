import { createSliderSetting } from '../components/createSliderSetting.js'
import { SK_WIDTH_SIDEBAR } from '../config/consts-storage'
import { SELECTORS } from '../config/selectors'

const sidebarWidth = createSliderSetting({
	storageKey: SK_WIDTH_SIDEBAR,
	cssVar: '--sidebar-width',
	sliderId: SELECTORS.WIDTH.SLIDER_SIDEBAR_ID,
	displayValueId: SELECTORS.WIDTH.DISPLAY_SIDEBAR_VALUE_ID,
	displayUnitId: SELECTORS.WIDTH.DISPLAY_SIDEBAR_UNIT_ID,
	name: 'Sidebar Width',
	min: 150,
	max: 500,
	step: 1,
	unit: 'px',
	defaultValue: 260,
	// no toCssValue bcs slider unit and CSS unit are both "px", default is fine
})

export const renderCustomSidebarWidth = () => `
	<h4 class="${SELECTORS.SUBHEADING}">More sizes</h4>
	${sidebarWidth.templateHTML()}
`
export const mount = sidebarWidth.mount
