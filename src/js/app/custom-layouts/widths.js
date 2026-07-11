import { $, setVars } from '../../utils/dom.js'
import { getItems, removeItems, setItems } from '../../utils/storage.js'
import { icon_full_width, icon_sync } from '../components/icons.js'
import { renderButton } from '../components/renderButtons.js'
import { renderSliderCard } from '../components/renderSlider.js'
import { renderToggle } from '../components/renderToggles.js'
import {
	SK_DB_VERSION,
	SK_WIDTH_FLAGS_LEGACY_FORMAT,
	SK_WIDTH_IS_FULL_ENABLED,
	SK_WIDTH_IS_FULL_ENABLED_LEGACY,
	SK_WIDTH_IS_SYNC_ENABLED,
	SK_WIDTH_IS_SYNC_ENABLED_LEGACY,
	SK_WIDTH_SETTINGS,
	WIDTH_FLAGS_FORMAT_NAMED,
	WIDTH_FLAGS_FORMAT_SWAPPED,
} from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'

// ==========================================
// STATE/CONSTANTS
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
		syncEnabled: SK_WIDTH_IS_SYNC_ENABLED,
		fullWidthEnabled: SK_WIDTH_IS_FULL_ENABLED,
	},
}

let currentState = {
	settings: { ...WIDTH_CONFIG.defaults },
	syncEnabled: false,
	fullWidthEnabled: false,
}
let legacyFlagsFormat = WIDTH_FLAGS_FORMAT_NAMED

let eventListeners = []

// =====================================================
// UTILITIES
// =====================================================
const extractNumber = (v) => parseFloat(v) || 0
const extractCssUnit = (v) => (v?.toLowerCase?.().includes('rem') ? 'rem' : '%')
const extractDisplayUnit = (v) => (extractCssUnit(v) === 'rem' ? 'REM' : '%')
const validateValue = (v, min = WIDTH_CONFIG.ui.minWidth, max = WIDTH_CONFIG.ui.maxWidth) =>
	Number.isNaN(+v) ? min.toString() : Math.max(min, Math.min(max, +v)).toString()
const formatWithUnit = (val, unit) => `${validateValue(val)}${unit === 'rem' ? 'rem' : '%'}`
// =====================================================
// TEMPLATE
// =====================================================
function templateHTML() {
	const chatUnit = extractCssUnit(WIDTH_CONFIG.defaults.w_chat_gpt)
	const promptUnit = extractCssUnit(WIDTH_CONFIG.defaults.w_prompt_textarea)

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
				dataUnit: chatUnit,
				unit: extractDisplayUnit(WIDTH_CONFIG.defaults.w_chat_gpt),
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
				dataUnit: promptUnit,
				unit: extractDisplayUnit(WIDTH_CONFIG.defaults.w_prompt_textarea),
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

// =====================================================
// STORAGE
// =====================================================
async function saveState(state) {
	try {
		const legacyFlagsAreSwapped = legacyFlagsFormat === WIDTH_FLAGS_FORMAT_SWAPPED
		await setItems({
			[WIDTH_CONFIG.storageKeys.widthSettings]: state.settings,
			[WIDTH_CONFIG.storageKeys.syncEnabled]: state.syncEnabled,
			[WIDTH_CONFIG.storageKeys.fullWidthEnabled]: state.fullWidthEnabled,
			[SK_WIDTH_IS_FULL_ENABLED_LEGACY]: legacyFlagsAreSwapped
				? state.syncEnabled
				: state.fullWidthEnabled,
			[SK_WIDTH_IS_SYNC_ENABLED_LEGACY]: legacyFlagsAreSwapped
				? state.fullWidthEnabled
				: state.syncEnabled,
			[SK_WIDTH_FLAGS_LEGACY_FORMAT]: legacyFlagsFormat,
		})
		return true
	} catch (err) {
		console.error('[↔️ GPThemes] Save failed:', err)
		return false
	}
}

// =====================================================
// CSS/DOM UPDATES
// =====================================================
function updateSlider({ sliderId, outputId, unitId, value, disabled = false }) {
	const numericValue = extractNumber(value)
	const cssUnit = extractCssUnit(value)
	const displayUnit = extractDisplayUnit(value)

	const slider = $(sliderId)
	const output = $(outputId)
	const unitEl = $(unitId)

	if (slider) {
		slider.value = numericValue
		slider.dataset.unit = cssUnit
		slider.disabled = disabled
		slider.setAttribute('aria-valuenow', numericValue)
	}
	if (output) output.textContent = numericValue
	if (unitEl) unitEl.textContent = displayUnit
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

// =====================================================
// EVENTS (width logics)
// =====================================================
function onSyncTextareaWithChatWidth() {
	if (currentState.syncEnabled) {
		currentState.settings.w_prompt_textarea = currentState.settings.w_chat_gpt
	}
}
function onWidthChange({ event, key, shouldSave = false }) {
	const val = formatWithUnit(event.target.value, event.target.dataset.unit || 'rem')
	currentState.settings[key] = val

	if (key === 'w_chat_gpt' && currentState.fullWidthEnabled && val !== '100%') {
		currentState.fullWidthEnabled = false
	}

	if (key === 'w_chat_gpt') {
		onSyncTextareaWithChatWidth()
	}

	if (
		key === 'w_prompt_textarea' &&
		currentState.syncEnabled &&
		val !== currentState.settings.w_chat_gpt
	) {
		currentState.syncEnabled = false
	}

	setVars(currentState.settings)
	updateUI(currentState)

	if (shouldSave) {
		saveState(currentState)
	}
}

// Toggle full width
function onToggleFullWidth() {
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

	onSyncTextareaWithChatWidth()
	setVars(currentState.settings)
	updateUI(currentState)
	saveState(currentState)
}

// Toggle sync chatbox and textarea
function onToggleSyncWidths() {
	currentState.syncEnabled = !currentState.syncEnabled

	currentState.settings.w_prompt_textarea = currentState.syncEnabled
		? currentState.settings.w_chat_gpt
		: WIDTH_CONFIG.defaults.w_prompt_textarea

	setVars(currentState.settings)
	updateUI(currentState)
	saveState(currentState)
}

// =====================================================
// EVENTS
// =====================================================

// TODO: Should be moved on some utils fn
function addListener(element, event, handler) {
	if (!element) return
	element.addEventListener(event, handler)
	eventListeners.push({ element, event, handler })
}
// TODO: Should be moved on some utils fn
function removeAllListeners() {
	eventListeners.forEach(({ element, event, handler }) => {
		element.removeEventListener(event, handler)
	})
	eventListeners = []
}

// Attach slider width listeners (inputs)
function setupSliderListeners(selector, key) {
	const slider = $(selector)
	if (slider) {
		addListener(slider, 'input', (e) => onWidthChange({ event: e, key, shouldSave: false }))
		addListener(slider, 'change', () => saveState(currentState))
	}
}
// Attach all width listeners
function setupListeners() {
	removeAllListeners()

	addListener($(`#${SELECTORS.WIDTH.TOGGLE_FULL_ID}`), 'change', onToggleFullWidth)
	addListener($(`#${SELECTORS.WIDTH.TOGGLE_SYNC_ID}`), 'change', onToggleSyncWidths)

	setupSliderListeners(`#${SELECTORS.WIDTH.SLIDER_CHAT_ID}`, 'w_chat_gpt')
	setupSliderListeners(`#${SELECTORS.WIDTH.SLIDER_TEXTAREA_ID}`, 'w_prompt_textarea')

	addListener($(`#${SELECTORS.WIDTH.RESET_BTN_ID}`), 'click', onResetAll)
}

// ==========================================
// RESET
// ==========================================
async function onResetAll() {
	currentState = {
		settings: { ...WIDTH_CONFIG.defaults },
		syncEnabled: false,
		fullWidthEnabled: false,
	}

	setVars(currentState.settings)
	updateUI(currentState)
	await removeItems([
		...Object.values(WIDTH_CONFIG.storageKeys),
		SK_WIDTH_IS_FULL_ENABLED_LEGACY,
		SK_WIDTH_IS_SYNC_ENABLED_LEGACY,
	])
}

// =====================================================
// Lifecycle: INIT
// =====================================================
async function init() {
	try {
		const result = await getItems([
			...new Set([
				...Object.values(WIDTH_CONFIG.storageKeys),
				SK_DB_VERSION,
				SK_WIDTH_FLAGS_LEGACY_FORMAT,
				SK_WIDTH_IS_FULL_ENABLED_LEGACY,
				SK_WIDTH_IS_SYNC_ENABLED_LEGACY,
			]),
		])
		const hasLegacyWidthFlags =
			typeof result[SK_WIDTH_IS_FULL_ENABLED_LEGACY] === 'boolean' ||
			typeof result[SK_WIDTH_IS_SYNC_ENABLED_LEGACY] === 'boolean'
		const legacyFlagsAreSwapped =
			result[SK_WIDTH_FLAGS_LEGACY_FORMAT] === WIDTH_FLAGS_FORMAT_SWAPPED ||
			(!result[SK_WIDTH_FLAGS_LEGACY_FORMAT] &&
				(result[SK_DB_VERSION] === '1.0' ||
					(!result[SK_DB_VERSION] && hasLegacyWidthFlags)))
		legacyFlagsFormat = legacyFlagsAreSwapped
			? WIDTH_FLAGS_FORMAT_SWAPPED
			: WIDTH_FLAGS_FORMAT_NAMED
		const legacySyncEnabled =
			result[
				legacyFlagsAreSwapped
					? SK_WIDTH_IS_FULL_ENABLED_LEGACY
					: SK_WIDTH_IS_SYNC_ENABLED_LEGACY
			]
		const legacyFullWidthEnabled =
			result[
				legacyFlagsAreSwapped
					? SK_WIDTH_IS_SYNC_ENABLED_LEGACY
					: SK_WIDTH_IS_FULL_ENABLED_LEGACY
			]
		const syncEnabled = result[WIDTH_CONFIG.storageKeys.syncEnabled]
		const fullWidthEnabled = result[WIDTH_CONFIG.storageKeys.fullWidthEnabled]

		currentState = {
			settings: result[WIDTH_CONFIG.storageKeys.widthSettings] || {
				...WIDTH_CONFIG.defaults,
			},
			syncEnabled:
				typeof syncEnabled === 'boolean' ? syncEnabled : (legacySyncEnabled ?? false),
			fullWidthEnabled:
				typeof fullWidthEnabled === 'boolean'
					? fullWidthEnabled
					: (legacyFullWidthEnabled ?? false),
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

// =====================================================
// Lifecycle: MOUNT
// =====================================================
function mount() {
	updateUI(currentState)
	setupListeners()
}

// =====================================================
// Exports
// =====================================================
export { templateHTML, init, mount, removeAllListeners as cleanup, onResetAll as resetAll }
