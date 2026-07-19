import { $, setVar } from '../../utils/dom'
import { getItem, setItem } from '../../utils/storage'
import { renderSlider, paintSlider, roundToStep } from '../components/renderSlider.js'
import { SK_WIDTH_SIDEBAR } from '../config/consts-storage'
import { SELECTORS } from '../config/selectors'

// =====================================================
// CONFIG
// =====================================================
const STORAGE_KEY = SK_WIDTH_SIDEBAR
const CSS_VAR = '--sidebar-width'

const CONFIG = Object.freeze({
	defaultValue: 260,
	min: 150,
	max: 600,
	step: 1,
	unit: 'px',
})

// =====================================================
// TEMPLATE
// =====================================================
function templateHTML() {
	return `
		<h4 class="${SELECTORS.SUBHEADING}">More Options</h4>
		${renderSlider({
			name: 'Sidebar Width',
			inputId: SELECTORS.WIDTH.SLIDER_SIDEBAR_ID,
			inputValue: CONFIG.defaultValue,
			displayValueId: SELECTORS.WIDTH.DISPLAY_SIDEBAR_VALUE_ID,
			displayUnitId: SELECTORS.WIDTH.DISPLAY_SIDEBAR_UNIT_ID,
			min: CONFIG.min,
			max: CONFIG.max,
			step: CONFIG.step,
			unit: CONFIG.unit,
		})}
	`
}

// =====================================================
// EVENTS
// =====================================================
function onInput({ currentTarget }) {
	console.log('onInput', currentTarget.value)
}
function onChange({ currentTarget }) {
	console.log('onChange', currentTarget.value)
}

// =====================================================
// LIFECYCLE
// =====================================================
async function mount() {
	const slider = $(`#${SELECTORS.WIDTH.SLIDER_SIDEBAR_ID}`)

	if (!slider) {
		console.warn(`Element with ID "${SELECTORS.WIDTH.SLIDER_SIDEBAR_ID}" not found`)
		return
	}

	slider.addEventListener('input', onInput)
	slider.addEventListener('change', onChange)
}

// =====================================================
// EXPORTS
// =====================================================
export { templateHTML as renderCustomSidebarWidth, mount }
