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
// HELPERS
// =====================================================
function normalizeValue(value) {
	const numericValue = Number(value)
	if (!Number.isFinite(numericValue)) return CONFIG.defaultValue
	return roundToStep(numericValue, CONFIG.step, CONFIG.min, CONFIG.max)
}

// =====================================================
// TEMPLATE
// =====================================================
function templateHTML() {
	return `
		<h4 class="${SELECTORS.SUBHEADING}">Element sizes</h4>
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
// STORAGE
// =====================================================
async function loadState() {
	try {
		const storedValue = await getItem(STORAGE_KEY)
		return storedValue == null ? CONFIG.defaultValue : normalizeValue(storedValue)
	} catch (error) {
		console.error('[↔️ GPThemes] Failed to load sidebar width:', error)
		return CONFIG.defaultValue
	}
}

async function saveState(value) {
	try {
		await setItem(STORAGE_KEY, normalizeValue(value))
	} catch (error) {
		console.error('[↔️ GPThemes] Failed to save sidebar width:', error)
	}
}

// =====================================================
// CSS / DOM
// =====================================================
function applyVars(value) {
	setVar(CSS_VAR, `${value}${CONFIG.unit}`)
}

function updateSlider(value) {
	const slider = $(`#${SELECTORS.WIDTH.SLIDER_SIDEBAR_ID}`)
	if (!slider) return

	slider.value = value
	paintSlider(slider, value, CONFIG.min, CONFIG.max, CONFIG.step)
}

function applyState(value) {
	applyVars(value)
	updateSlider(value)
}

// =====================================================
// EVENTS
// =====================================================
function onInput({ currentTarget }) {
	const value = normalizeValue(currentTarget.value)

	applyVars(value)
	paintSlider(currentTarget, value, CONFIG.min, CONFIG.max, CONFIG.step)
}

function onChange({ currentTarget }) {
	void saveState(currentTarget.value)
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

	const value = await loadState()
	applyState(value)

	slider.addEventListener('input', onInput)
	slider.addEventListener('change', onChange)
}

// =====================================================
// EXPORTS
// =====================================================
export { templateHTML as renderCustomSidebarWidth, mount }
