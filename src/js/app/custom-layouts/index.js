import { getItems, setItems, removeItems } from '../../utils/storage.js'
import { $, setVars } from '../../utils/dom.js'
import { SELECTORS } from '../config/selectors.js'
import { icon_full_width, icon_sync } from '../components/icons.js'
import { renderSliderCard } from '../components/renderSlider.js'
import { renderToggle } from '../components/renderToggles.js'
import { renderButton } from '../components/renderButtons.js'
import { renderSeparator } from '../components/renderUtils.js'
// import { renderCustomScrolldown, init as initScrolldown, mount as mountScrolldown } from './scrolldown.js'
import { renderCustomScrolldown, mount as mountScrolldown } from './scrolldown.js'
import { renderCustomChatBubbles, mount as mountChatBubbles } from './toggleChatBubbles.js'
import { renderCustomChatboxHeight, mount as mountCustomChatboxHeight } from './toggleChatboxHeight.js'
import { renderCustomHides, mount as mountCustomHides } from '../custom-hide/index.js'

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
		// resizingBreakpoint: 768,
		minWidth: 0,
		maxWidth: 100,
	},
	storageKeys: {
		widthSettings: 'widthSettings',
		syncEnabled: 'widthIsSyncEnabled',
		fullWidthEnabled: 'widthIsFullEnabled',
	},
}

let currentState = {
	settings: { ...WIDTH_CONFIG.defaults },
	syncEnabled: false,
	fullWidthEnabled: false,
}

// ==========================================
// UTILITIES
// ==========================================
const extractNumber = (v) => parseFloat(v) || 0
const extractUnit = (v) => (v?.includes('rem') ? 'REM' : '%')
const validateValue = (v, min = WIDTH_CONFIG.ui.minWidth, max = WIDTH_CONFIG.ui.maxWidth) =>
	isNaN(+v) ? min.toString() : Math.max(min, Math.min(max, +v)).toString()
const formatWithUnit = (val, unit) => `${validateValue(val)}${unit}`

// ==========================================
// MAIN FUNCTIONS - CREATE WIDTH LAYOUT
// ==========================================

function templateHTML() {
	const chatUnit = extractUnit(WIDTH_CONFIG.defaults.w_chat_gpt)
	const promptUnit = extractUnit(WIDTH_CONFIG.defaults.w_prompt_textarea)
	return `
	<section id="sectionLayouts" class="gpth-layouts">
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
		</div>

		${renderSeparator}
		${renderCustomHides()}
		${renderSeparator}
		${renderCustomChatboxHeight()}
		${renderSeparator}
		${renderCustomChatBubbles()}
		${renderSeparator}
		${renderCustomScrolldown()}

	</section>
	`
}

// ==========================================
// SETUP DOM AND CSS FN UPDATES
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

	// Cache DOM elements once
	const elements = {
		chatSlider: $(`#${SELECTORS.WIDTH.SLIDER_CHAT_ID}`),
		textareaSlider: $(`#${SELECTORS.WIDTH.SLIDER_TEXTAREA_ID}`),
		fullWidthToggle: $(`#${SELECTORS.WIDTH.TOGGLE_FULL_ID}`),
		syncWidthsToggle: $(`#${SELECTORS.WIDTH.TOGGLE_SYNC_ID}`),
	}

	const sliderData = [
		{
			sliderId: `#${SELECTORS.WIDTH.SLIDER_CHAT_ID}`,
			outputId: `#${SELECTORS.WIDTH.DISPLAY_CHAT_VALUE_ID}`,
			unitId: `#${SELECTORS.WIDTH.DISPLAY_CHAT_UNIT_ID}`,
			value: settings.w_chat_gpt,
			disabled: fullWidthEnabled && settings.w_chat_gpt === '100%',
		},
		{
			sliderId: `#${SELECTORS.WIDTH.SLIDER_TEXTAREA_ID}`,
			outputId: `#${SELECTORS.WIDTH.DISPLAY_TEXTAREA_VALUE_ID}`,
			unitId: `#${SELECTORS.WIDTH.DISPLAY_TEXTAREA_UNIT_ID}`,
			value: settings.w_prompt_textarea,
			disabled: syncEnabled,
		},
	]

	sliderData.forEach(updateSlider)

	// Update toggle states - preserve user's actual preferences
	if (elements.fullWidthToggle) elements.fullWidthToggle.checked = fullWidthEnabled
	if (elements.syncWidthsToggle) elements.syncWidthsToggle.checked = syncEnabled

	// Add is-locked class to cards - batch these operations
	requestAnimationFrame(() => {
		const chatCard = elements.chatSlider?.closest('.card')
		const textareaCard = elements.textareaSlider?.closest('.card')

		if (chatCard) chatCard.classList.toggle('is-locked', chatSliderDisabled)
		if (textareaCard) textareaCard.classList.toggle('is-locked', textareaSliderDisabled)
	})
}

// ==========================================
// STORAGE SAVING
// ==========================================
// Save state to storage
async function saveState(state) {
	try {
		await setItems({
			[WIDTH_CONFIG.storageKeys.widthSettings]: state.settings,
			[WIDTH_CONFIG.storageKeys.syncEnabled]: state.syncEnabled,
			[WIDTH_CONFIG.storageKeys.fullWidthEnabled]: state.fullWidthEnabled,
		})
		// console.log('[↔️ GPThemes] Settings saved')
	} catch (err) {
		console.error('[↔️ GPThemes] Save failed:', err)
	}
}

// ==========================================
// WIDTH SLIDERS
// ==========================================
// Handle width changes from sliders
function handleWidthChange({ event, key, shouldSave = false }) {
	const val = formatWithUnit(event.target.value, event.target.dataset.unit || '%')
	currentState.settings[key] = val

	// If changing chat width and fullWidth is enabled but value isn't 100%, disable fullWidth toggle
	if (key === 'w_chat_gpt' && currentState.fullWidthEnabled && val !== '100%') {
		currentState.fullWidthEnabled = false
	}

	// If changing chat width and sync is enabled, sync textarea width
	if (key === 'w_chat_gpt') {
		syncTextareaWithChatWidth()
	}

	// If changing textarea width and it's different from chat width while sync is enabled,
	// disable sync
	if (key === 'w_prompt_textarea' && currentState.syncEnabled && val !== currentState.settings.w_chat_gpt) {
		currentState.syncEnabled = false
	}

	setVars(currentState.settings)
	updateUI(currentState)

	if (shouldSave) {
		saveState(currentState)
	}
}

// ==========================================
// WIDTH TOGGLES
// ==========================================
// Function to synchronize textarea width with chat width
function syncTextareaWithChatWidth() {
	if (currentState.syncEnabled) {
		currentState.settings.w_prompt_textarea = currentState.settings.w_chat_gpt
	}
}
function handleToggleFullWidth() {
	currentState.fullWidthEnabled = !currentState.fullWidthEnabled

	// Update chat width settings based on full width toggle state
	if (currentState.fullWidthEnabled) {
		// Apply full width settings to chat only
		Object.assign(currentState.settings, {
			w_chat_user: WIDTH_CONFIG.fullWidth.w_chat_user,
			max_w_chat_user: WIDTH_CONFIG.fullWidth.max_w_chat_user,
			w_chat_gpt: WIDTH_CONFIG.fullWidth.w_chat_gpt,
		})
	} else {
		// Restore default chat width settings
		Object.assign(currentState.settings, {
			w_chat_user: WIDTH_CONFIG.defaults.w_chat_user,
			max_w_chat_user: WIDTH_CONFIG.defaults.max_w_chat_user,
			w_chat_gpt: WIDTH_CONFIG.defaults.w_chat_gpt,
		})
	}

	// Synchronize textarea width if sync is enabled
	syncTextareaWithChatWidth()

	// Apply changes and update UI
	setVars(currentState.settings)
	updateUI(currentState)
	saveState(currentState)
}

function handleToggleSyncWidths() {
	// Toggle the sync state
	currentState.syncEnabled = !currentState.syncEnabled

	// If enabling sync, update textarea width to match chat width
	currentState.settings.w_prompt_textarea = currentState.syncEnabled
		? currentState.settings.w_chat_gpt
		: WIDTH_CONFIG.defaults.w_prompt_textarea

	// Apply changes and update UI
	setVars(currentState.settings)
	updateUI(currentState)
	saveState(currentState)
}

// ==========================================
// SETUP EVENT LISTENERS
// ==========================================
// Set up event listeners with proper cleanup
let eventListeners = []

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
		// Input event for live updates
		addListener(slider, 'input', (e) => handleWidthChange({ event: e, key, shouldSave: false }))
		// Change event for when the slider stops
		addListener(slider, 'change', () => saveState(currentState))
	}
}

// ==========================================
//  EVENT HANDLERS
// ==========================================
function handleWidthsListeners() {
	// Remove any existing listeners to prevent duplicates
	removeAllListeners()

	// Full Width Toggle
	addListener($(`#${SELECTORS.WIDTH.TOGGLE_FULL_ID}`), 'change', handleToggleFullWidth)

	// Sync Toggle
	addListener($(`#${SELECTORS.WIDTH.TOGGLE_SYNC_ID}`), 'change', handleToggleSyncWidths)

	setupSliderListeners(`#${SELECTORS.WIDTH.SLIDER_CHAT_ID}`, 'w_chat_gpt')
	setupSliderListeners(`#${SELECTORS.WIDTH.SLIDER_TEXTAREA_ID}`, 'w_prompt_textarea')

	// Reset button
	addListener($(`#${SELECTORS.WIDTH.RESET_BTN_ID}`), 'click', resetWidths)
	// Hides are mounted from module mount()
}

// ==========================================
// WIDTH RESET
// ==========================================
async function resetWidths() {
	currentState = {
		settings: { ...WIDTH_CONFIG.defaults },
		syncEnabled: false,
		fullWidthEnabled: false,
	}

	setVars(currentState.settings)
	updateUI(currentState)

	await removeItems(Object.values(WIDTH_CONFIG.storageKeys))
	// console.log('[↔️ GPThemes] Width settings reset.')
}

// ==========================================
// WIDTH INIT
// ==========================================
// Initialize the module
async function init() {
	console.log('[INIT LAYOUT]')

	try {
		const result = await getItems(Object.values(WIDTH_CONFIG.storageKeys))

		currentState = {
			settings: result[WIDTH_CONFIG.storageKeys.widthSettings] || { ...WIDTH_CONFIG.defaults },
			syncEnabled: result[WIDTH_CONFIG.storageKeys.syncEnabled] || false,
			fullWidthEnabled: result[WIDTH_CONFIG.storageKeys.fullWidthEnabled] || false,
		}

		if (currentState.fullWidthEnabled) {
			// Apply full width settings to chat
			Object.assign(currentState.settings, {
				w_chat_user: WIDTH_CONFIG.fullWidth.w_chat_user,
				max_w_chat_user: WIDTH_CONFIG.fullWidth.max_w_chat_user,
				w_chat_gpt: WIDTH_CONFIG.fullWidth.w_chat_gpt,
			})

			// If sync is enabled, match textarea width to chat width
			if (currentState.syncEnabled) {
				currentState.settings.w_prompt_textarea = WIDTH_CONFIG.fullWidth.w_chat_gpt
			}
		} else if (currentState.syncEnabled) {
			// Ensure textarea width matches chat width if sync is enabled
			currentState.settings.w_prompt_textarea = currentState.settings.w_chat_gpt
		}

		setVars(currentState.settings)
		updateUI(currentState)

		// Initialize sub-features early (CSS vars)
		// await Promise.all([initScrolldown(), initCustomHides()])
		// await initScrolldown()

		// console.log('[↔️ GPThemes] Width settings initialized:', currentState)
	} catch (err) {
		console.error('[↔️ GPThemes] Init error:', err)
	}
}

// Export public functions
function mount() {
	console.log('[MOUNT LAYOUT]')

	handleWidthsListeners()
	// Mount sub-features after DOM attached
	mountCustomChatboxHeight()
	mountChatBubbles()
	mountScrolldown()
	mountCustomHides()
}

export { handleWidthsListeners, templateHTML as renderWidthsTab, init, mount }
