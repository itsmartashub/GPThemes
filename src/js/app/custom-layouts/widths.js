import { getItems, setItems, removeItems } from '../../utils/storage.js'
import { $, setVars } from '../../utils/dom.js'
import { SELECTORS } from '../config/selectors.js'
import { SK_WIDTH_SETTINGS, SK_WIDTH_IS_FULL_ENABLED, SK_WIDTH_IS_SYNC_ENABLED } from '../config/consts-storage.js'
import { icon_full_width, icon_sync } from '../components/icons.js'
import { renderSliderCard } from '../components/renderSlider.js'
import { renderToggle } from '../components/renderToggles.js'
import { renderButton } from '../components/renderButtons.js'

// ==========================================
// CONSTANTS
// ==========================================
const WIDTH_CONFIG = {
	defaults: {
		w_chat_user: 'auto',
		max_w_chat_user: 'var(--user-chat-width,70%)',
		w_chat_gpt: '48rem',
		w_prompt_textarea: '48rem',
	},
	fullWidth: {
		w_chat_user: '100%',
		max_w_chat_user: '100%',
		w_chat_gpt: '100%',
	},
	ui: {
		minWidth: 0,
		maxWidth: 100,
	},
	storageKeys: {
		widthSettings: SK_WIDTH_SETTINGS,
		syncEnabled: SK_WIDTH_IS_FULL_ENABLED,
		fullWidthEnabled: SK_WIDTH_IS_SYNC_ENABLED,
	},
}

let currentState = {
	settings: { ...WIDTH_CONFIG.defaults },
	syncEnabled: false,
	fullWidthEnabled: false,
}

let eventListeners = []

// ==========================================
// UTILITIES
// ==========================================
const extractNumber = (v) => parseFloat(v) || 0
const extractUnit = (v) => (v?.includes('rem') ? 'REM' : '%')
const validateValue = (v, min = WIDTH_CONFIG.ui.minWidth, max = WIDTH_CONFIG.ui.maxWidth) =>
	isNaN(+v) ? min.toString() : Math.max(min, Math.min(max, +v)).toString()
const formatWithUnit = (val, unit) => `${validateValue(val)}${unit}`

// --- TEMPLATE ---
function templateHTML() {
	const chatUnit = extractUnit(WIDTH_CONFIG.defaults.w_chat_gpt)
	const promptUnit = extractUnit(WIDTH_CONFIG.defaults.w_prompt_textarea)

	return `
    <div class="gpth-layouts__custom-width mb-4">
      ${renderSliderCard({
			name: 'Chats Width',
			inputType: 'range',
			inputId: SELECTORS.WIDTH.SLIDER_CHAT_ID,
			inputValue: extractNumber(WIDTH_CONFIG.defaults.w_chat_gpt),
			displayValue: SELECTORS.WIDTH.DISPLAY_CHAT_VALUE_ID,
			displayUnit: SELECTORS.WIDTH.DISPLAY_CHAT_UNIT_ID,
			min: WIDTH_CONFIG.ui.minWidth,
			max: WIDTH_CONFIG.ui.maxWidth,
			unit: chatUnit,
		})}
      ${renderSliderCard({
			name: 'Prompt Width',
			inputType: 'range',
			inputId: SELECTORS.WIDTH.SLIDER_TEXTAREA_ID,
			inputValue: extractNumber(WIDTH_CONFIG.defaults.w_prompt_textarea),
			displayValue: SELECTORS.WIDTH.DISPLAY_TEXTAREA_VALUE_ID,
			displayUnit: SELECTORS.WIDTH.DISPLAY_TEXTAREA_UNIT_ID,
			min: WIDTH_CONFIG.ui.minWidth,
			max: WIDTH_CONFIG.ui.maxWidth,
			unit: promptUnit,
		})}
    </div>

    <div class="gpth-layouts__toggle-widths">
      ${renderToggle({
			id: SELECTORS.WIDTH.TOGGLE_FULL_ID,
			checked: false,
			label: 'Chat Full Width',
			subtitle: "Expand chats to screen's edge for wider conversation view",
			icon: icon_full_width,
			card: true,
			className: '',
		})}
      ${renderToggle({
			id: SELECTORS.WIDTH.TOGGLE_SYNC_ID,
			checked: false,
			label: 'Sync Prompt Width',
			subtitle: 'Adjust prompt field to match the chat width for a more consistent view',
			icon: icon_sync,
			card: true,
			className: '',
		})}
    </div>
    <div class="flex justify-center mt-8">
      ${renderButton({
			id: SELECTORS.WIDTH.RESET_BTN_ID,
			content: 'Reset Widths',
			className: 'btn-primary',
		})}
    </div>`
}

// ==========================================
// STORAGE & STATE MANAGEMENT
// ==========================================
async function saveState(state) {
	try {
		await setItems({
			[WIDTH_CONFIG.storageKeys.widthSettings]: state.settings,
			[WIDTH_CONFIG.storageKeys.syncEnabled]: state.syncEnabled,
			[WIDTH_CONFIG.storageKeys.fullWidthEnabled]: state.fullWidthEnabled,
		})
	} catch (err) {
		console.error('[↔️ GPThemes] Save failed:', err)
	}
}

// ==========================================
// UI UPDATES
// ==========================================
function updateSlider({ sliderId, outputId, unitId, value, disabled = false }) {
	const numericValue = extractNumber(value)
	const unit = extractUnit(value)

	const slider = $(sliderId)
	const output = $(outputId)
	const unitEl = $(unitId)

	if (slider) {
		slider.value = numericValue
		slider.disabled = disabled
	}
	if (output) output.textContent = numericValue
	if (unitEl) unitEl.textContent = unit
}

function updateUI({ settings, syncEnabled, fullWidthEnabled }) {
	const chatSliderDisabled = fullWidthEnabled && settings.w_chat_gpt === '100%'
	const textareaSliderDisabled = syncEnabled

	const sliderData = [
		{
			sliderId: `#${SELECTORS.WIDTH.SLIDER_CHAT_ID}`,
			outputId: `#${SELECTORS.WIDTH.DISPLAY_CHAT_VALUE_ID}`,
			unitId: `#${SELECTORS.WIDTH.DISPLAY_CHAT_UNIT_ID}`,
			value: settings.w_chat_gpt,
			disabled: chatSliderDisabled,
		},
		{
			sliderId: `#${SELECTORS.WIDTH.SLIDER_TEXTAREA_ID}`,
			outputId: `#${SELECTORS.WIDTH.DISPLAY_TEXTAREA_VALUE_ID}`,
			unitId: `#${SELECTORS.WIDTH.DISPLAY_TEXTAREA_UNIT_ID}`,
			value: settings.w_prompt_textarea,
			disabled: textareaSliderDisabled,
		},
	]

	sliderData.forEach(updateSlider)

	// Update toggle states
	const fullWidthToggle = $(`#${SELECTORS.WIDTH.TOGGLE_FULL_ID}`)
	const syncWidthsToggle = $(`#${SELECTORS.WIDTH.TOGGLE_SYNC_ID}`)

	if (fullWidthToggle) fullWidthToggle.checked = fullWidthEnabled
	if (syncWidthsToggle) syncWidthsToggle.checked = syncEnabled

	// Update card locked states
	requestAnimationFrame(() => {
		const chatCard = $(`#${SELECTORS.WIDTH.SLIDER_CHAT_ID}`)?.closest('.card')
		const textareaCard = $(`#${SELECTORS.WIDTH.SLIDER_TEXTAREA_ID}`)?.closest('.card')

		if (chatCard) chatCard.classList.toggle('is-locked', chatSliderDisabled)
		if (textareaCard) textareaCard.classList.toggle('is-locked', textareaSliderDisabled)
	})
}

// ==========================================
// WIDTH LOGIC
// ==========================================
function syncTextareaWithChatWidth() {
	if (currentState.syncEnabled) {
		currentState.settings.w_prompt_textarea = currentState.settings.w_chat_gpt
	}
}

function handleWidthChange({ event, key, shouldSave = false }) {
	const val = formatWithUnit(event.target.value, event.target.dataset.unit || '%')
	currentState.settings[key] = val

	if (key === 'w_chat_gpt' && currentState.fullWidthEnabled && val !== '100%') {
		currentState.fullWidthEnabled = false
	}

	if (key === 'w_chat_gpt') {
		syncTextareaWithChatWidth()
	}

	if (key === 'w_prompt_textarea' && currentState.syncEnabled && val !== currentState.settings.w_chat_gpt) {
		currentState.syncEnabled = false
	}

	setVars(currentState.settings)
	updateUI(currentState)

	if (shouldSave) {
		saveState(currentState)
	}
}

function handleToggleFullWidth() {
	currentState.fullWidthEnabled = !currentState.fullWidthEnabled

	if (currentState.fullWidthEnabled) {
		Object.assign(currentState.settings, WIDTH_CONFIG.fullWidth)
	} else {
		Object.assign(currentState.settings, {
			w_chat_user: WIDTH_CONFIG.defaults.w_chat_user,
			max_w_chat_user: WIDTH_CONFIG.defaults.max_w_chat_user,
			w_chat_gpt: WIDTH_CONFIG.defaults.w_chat_gpt,
		})
	}

	syncTextareaWithChatWidth()
	setVars(currentState.settings)
	updateUI(currentState)
	saveState(currentState)
}

function handleToggleSyncWidths() {
	currentState.syncEnabled = !currentState.syncEnabled

	currentState.settings.w_prompt_textarea = currentState.syncEnabled
		? currentState.settings.w_chat_gpt
		: WIDTH_CONFIG.defaults.w_prompt_textarea

	setVars(currentState.settings)
	updateUI(currentState)
	saveState(currentState)
}

// ==========================================
// EVENT MANAGEMENT
// ==========================================
function addListener(element, event, handler) {
	if (!element) return
	element.addEventListener(event, handler)
	eventListeners.push({ element, event, handler })
}

function removeAllListeners() {
	eventListeners.forEach(({ element, event, handler }) => {
		element.removeEventListener(event, handler)
	})
	eventListeners = []
}

function setupSliderListeners(selector, key) {
	const slider = $(selector)
	if (slider) {
		addListener(slider, 'input', (e) => handleWidthChange({ event: e, key, shouldSave: false }))
		addListener(slider, 'change', () => saveState(currentState))
	}
}

function setupListeners() {
	removeAllListeners()

	addListener($(`#${SELECTORS.WIDTH.TOGGLE_FULL_ID}`), 'change', handleToggleFullWidth)
	addListener($(`#${SELECTORS.WIDTH.TOGGLE_SYNC_ID}`), 'change', handleToggleSyncWidths)

	setupSliderListeners(`#${SELECTORS.WIDTH.SLIDER_CHAT_ID}`, 'w_chat_gpt')
	setupSliderListeners(`#${SELECTORS.WIDTH.SLIDER_TEXTAREA_ID}`, 'w_prompt_textarea')

	addListener($(`#${SELECTORS.WIDTH.RESET_BTN_ID}`), 'click', resetAll)
}

// ==========================================
// RESET
// ==========================================
async function resetAll() {
	currentState = {
		settings: { ...WIDTH_CONFIG.defaults },
		syncEnabled: false,
		fullWidthEnabled: false,
	}

	setVars(currentState.settings)
	updateUI(currentState)
	await removeItems(Object.values(WIDTH_CONFIG.storageKeys))
}

// ==========================================
// INIT & MOUNT
// ==========================================
async function init() {
	try {
		const result = await getItems(Object.values(WIDTH_CONFIG.storageKeys))

		currentState = {
			settings: result[WIDTH_CONFIG.storageKeys.widthSettings] || { ...WIDTH_CONFIG.defaults },
			syncEnabled: result[WIDTH_CONFIG.storageKeys.syncEnabled] || false,
			fullWidthEnabled: result[WIDTH_CONFIG.storageKeys.fullWidthEnabled] || false,
		}

		if (currentState.fullWidthEnabled) {
			Object.assign(currentState.settings, WIDTH_CONFIG.fullWidth)
			if (currentState.syncEnabled) {
				currentState.settings.w_prompt_textarea = WIDTH_CONFIG.fullWidth.w_chat_gpt
			}
		} else if (currentState.syncEnabled) {
			currentState.settings.w_prompt_textarea = currentState.settings.w_chat_gpt
		}

		setVars(currentState.settings)
		updateUI(currentState)
	} catch (err) {
		console.error('[↔️ GPThemes] Init error:', err)
	}
}

function mount() {
	setupListeners()
}

// --- EXPORTS ---
export { templateHTML, init, mount, resetAll }
