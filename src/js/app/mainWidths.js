import browser from 'webextension-polyfill'
import { renderSliderCard, renderToggleCard } from './components/renderSwitch'
import { icon_full_width, icon_sync } from './components/icons'
import { renderButton } from './components/renderButtons'
import { renderSeparator } from './components/renderUtils'
import { renderCustomScrollDown } from './scrolldown'
import { renderChatBubbles } from './toggleChatsBg'
import { $ } from '../utils/handleElements'

// ======================
// CONSTANTS
// ======================
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
		syncEnabled: 'widthSyncEnabled',
		fullWidthEnabled: 'fullWidthEnabled',
	},
}

let currentState = {
	settings: { ...WIDTH_CONFIG.defaults },
	syncEnabled: false,
	fullWidthEnabled: false,
}

const UI_SELECTORS = {
	// Feature toggles
	toggleFullWidth: '#toggle-full-width',
	toggleSyncWidths: '#toggle-sync-chat-textarea',

	// Sliders
	sliderChatWidth: '#slider-chat-width',
	sliderTextareaWidth: '#slider-textarea-width',

	// Button
	btnResetWidths: '#resetWidths',

	// Output displays
	displayChatWidthValue: '#display-chat-width-value',
	displayChatWidthUnit: '#display-chat-width-unit',
	displayTextareaWidthValue: '#display-textarea-width-value',
	displayTextareaWidthUnit: '#display-textarea-width-unit',
}

const UI_IDS = Object.fromEntries(Object.entries(UI_SELECTORS).map(([k, v]) => [k, v.slice(1)]))

console.log(UI_IDS)

// ======================
// UTILITIES
// ======================
const extractNumber = (v) => parseFloat(v) || 0
const extractUnit = (v) => (v?.includes('rem') ? 'REM' : '%')
const validateValue = (v, min = WIDTH_CONFIG.ui.minWidth, max = WIDTH_CONFIG.ui.maxWidth) =>
	isNaN(+v) ? min.toString() : Math.max(min, Math.min(max, +v)).toString()
const formatWithUnit = (val, unit) => `${validateValue(val)}${unit}`

// ======================
// MAIN FUNCTIONS
// ======================
function renderWidthsTab() {
	const chatUnit = extractUnit(WIDTH_CONFIG.defaults.w_chat_gpt)
	const promptUnit = extractUnit(WIDTH_CONFIG.defaults.w_prompt_textarea)
	return `
	<section id="sectionLayouts" class="gpth-layouts">
		<div class="gpth-layouts__custom-width mb-4">
			${renderSliderCard({
				name: 'Chats Width',
				inputType: 'range',
				inputId: UI_IDS.sliderChatWidth,
				inputValue: extractNumber(WIDTH_CONFIG.defaults.w_chat_gpt),
				displayValue: UI_IDS.displayChatWidthValue,
				displayUnit: UI_IDS.displayChatWidthUnit,
				min: WIDTH_CONFIG.ui.minWidth,
				max: WIDTH_CONFIG.ui.maxWidth,
				unit: chatUnit,
			})}
			${renderSliderCard({
				name: 'Prompt Width',
				inputType: 'range',
				inputId: UI_IDS.sliderTextareaWidth,
				inputValue: extractNumber(WIDTH_CONFIG.defaults.w_prompt_textarea),
				displayValue: UI_IDS.displayTextareaWidthValue,
				displayUnit: UI_IDS.displayTextareaWidthUnit,
				min: WIDTH_CONFIG.ui.minWidth,
				max: WIDTH_CONFIG.ui.maxWidth,
				unit: promptUnit,
			})}
		</div>

		<div class="gpth-layouts__toggle-widths">
		${renderToggleCard({
			inputId: UI_IDS.toggleFullWidth,
			isChecked: false,
			icon: icon_full_width,
			textTitle: 'Chat Full Width',
			textSubtitle: "Expand chats to screen's edge for wider conversation view",
		})}
		${renderToggleCard({
			inputId: UI_IDS.toggleSyncWidths,
			isChecked: false,
			icon: icon_sync,
			textTitle: 'Sync Prompt Width',
			textSubtitle: 'Adjust prompt field to match the chat width for a more consistent view',
		})}
		</div>
		<div class="flex justify-center mt-8">
			${renderButton({
				id: UI_IDS.btnResetWidths,
				content: 'Reset Widths',
				className: 'btn-primary',
			})}
		</div>
		${renderSeparator}
		${renderChatBubbles()}
		${renderSeparator}
		${renderCustomScrollDown()}

	</section>
	`
}

function applyCssVariables(settings) {
	requestAnimationFrame(() => {
		const root = document.documentElement
		for (const [k, v] of Object.entries(settings)) {
			root.style.setProperty(`--${k}`, v)
		}
	})
}

function updateSlider({ sliderId, outputId, unitId, value, disabled = false }) {
	const numericValue = extractNumber(value)
	const unit = extractUnit(value)

	const elements = {
		slider: $(sliderId),
		output: $(outputId),
		unit: $(unitId),
	}

	if (elements.slider) {
		elements.slider.value = numericValue
		elements.slider.disabled = disabled
	}
	if (elements.output) elements.output.textContent = numericValue
	if (elements.unit) elements.unit.textContent = unit
}

function updateUI({ settings, syncEnabled, fullWidthEnabled }) {
	const chatSliderDisabled = fullWidthEnabled && settings.w_chat_gpt === '100%'
	const textareaSliderDisabled = syncEnabled

	// Cache DOM elements once
	const elements = {
		chatSlider: $(UI_SELECTORS.sliderChatWidth),
		textareaSlider: $(UI_SELECTORS.sliderTextareaWidth),
		fullWidthToggle: $(UI_SELECTORS.toggleFullWidth),
		syncWidthsToggle: $(UI_SELECTORS.toggleSyncWidths),
	}

	const sliderData = [
		{
			sliderId: UI_SELECTORS.sliderChatWidth,
			outputId: UI_SELECTORS.displayChatWidthValue,
			unitId: UI_SELECTORS.displayChatWidthUnit,
			value: settings.w_chat_gpt,
			disabled: fullWidthEnabled && settings.w_chat_gpt === '100%',
		},
		{
			sliderId: UI_SELECTORS.sliderTextareaWidth,
			outputId: UI_SELECTORS.displayTextareaWidthValue,
			unitId: UI_SELECTORS.displayTextareaWidthUnit,
			value: settings.w_prompt_textarea,
			disabled: syncEnabled,
		},
	]

	sliderData.forEach(updateSlider)

	// Update toggle states - preserve user's actual preferences
	// $(UI_SELECTORS.toggleFullWidth).checked = fullWidthEnabled
	// $(UI_SELECTORS.toggleSyncWidths).checked = syncEnabled

	if (elements.fullWidthToggle) elements.fullWidthToggle.checked = fullWidthEnabled
	if (elements.syncWidthsToggle) elements.syncWidthsToggle.checked = syncEnabled

	// Add is-locked class to cards
	// const chatCard = $(UI_SELECTORS.sliderChatWidth)?.closest('.card')
	// const textareaCard = $(UI_SELECTORS.sliderTextareaWidth)?.closest('.card')
	// if (chatCard) chatCard.classList.toggle('is-locked', chatSliderDisabled)
	// if (textareaCard) textareaCard.classList.toggle('is-locked', textareaSliderDisabled)

	// Add is-locked class to cards - batch these operations
	requestAnimationFrame(() => {
		// const chatSlider = $(UI_SELECTORS.sliderChatWidth)
		// const textareaSlider = $(UI_SELECTORS.sliderTextareaWidth)

		const chatCard = elements.chatSlider?.closest('.card')
		const textareaCard = elements.textareaSlider?.closest('.card')

		if (chatCard) chatCard.classList.toggle('is-locked', chatSliderDisabled)
		if (textareaCard) textareaCard.classList.toggle('is-locked', textareaSliderDisabled)
	})
}

// Save state to storage
async function saveState(state) {
	try {
		await browser.storage.sync.set({
			[WIDTH_CONFIG.storageKeys.widthSettings]: state.settings,
			[WIDTH_CONFIG.storageKeys.syncEnabled]: state.syncEnabled,
			[WIDTH_CONFIG.storageKeys.fullWidthEnabled]: state.fullWidthEnabled,
		})
		console.log('[↔️ GPThemes] Settings saved')
	} catch (err) {
		console.error('[↔️ GPThemes] Save failed:', err)
	}
}

// Function to synchronize textarea width with chat width
function syncTextareaWithChatWidth() {
	if (currentState.syncEnabled) {
		currentState.settings.w_prompt_textarea = currentState.settings.w_chat_gpt
	}
}

// Handle width changes from sliders
function handleWidthChange({ event, key, shouldSave = false }) {
	const val = formatWithUnit(event.target.value, event.target.dataset.unit || '%')
	currentState.settings[key] = val

	// If changing chat width and fullWidth is enabled but value isn't 100%,
	// disable fullWidth toggle
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

	applyCssVariables(currentState.settings)
	updateUI(currentState)

	if (shouldSave) {
		saveState(currentState)
	}
}

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
function handleToggleFullWidth() {
	currentState.fullWidthEnabled = !currentState.fullWidthEnabled

	// Update chat width settings based on full width toggle state
	if (currentState.fullWidthEnabled) {
		// Apply full width settings to chat only
		// currentState.settings.w_chat_user = WIDTH_CONFIG.fullWidth.w_chat_user
		// currentState.settings.max_w_chat_user = WIDTH_CONFIG.fullWidth.max_w_chat_user
		// currentState.settings.w_chat_gpt = WIDTH_CONFIG.fullWidth.w_chat_gpt
		Object.assign(currentState.settings, {
			w_chat_user: WIDTH_CONFIG.fullWidth.w_chat_user,
			max_w_chat_user: WIDTH_CONFIG.fullWidth.max_w_chat_user,
			w_chat_gpt: WIDTH_CONFIG.fullWidth.w_chat_gpt,
		})
	} else {
		// Restore default chat width settings
		// currentState.settings.w_chat_user = WIDTH_CONFIG.defaults.w_chat_user
		// currentState.settings.max_w_chat_user = WIDTH_CONFIG.defaults.max_w_chat_user
		// currentState.settings.w_chat_gpt = WIDTH_CONFIG.defaults.w_chat_gpt
		Object.assign(currentState.settings, {
			w_chat_user: WIDTH_CONFIG.defaults.w_chat_user,
			max_w_chat_user: WIDTH_CONFIG.defaults.max_w_chat_user,
			w_chat_gpt: WIDTH_CONFIG.defaults.w_chat_gpt,
		})
	}

	// Synchronize textarea width if sync is enabled
	syncTextareaWithChatWidth()

	// Apply changes and update UI
	applyCssVariables(currentState.settings)
	updateUI(currentState)
	saveState(currentState)
}

function handleToggleSyncWidths() {
	// Toggle the sync state
	currentState.syncEnabled = !currentState.syncEnabled

	// If enabling sync, update textarea width to match chat width
	// if (currentState.syncEnabled) {
	// 	currentState.settings.w_prompt_textarea = currentState.settings.w_chat_gpt
	// } else {
	// 	currentState.settings.w_prompt_textarea = WIDTH_CONFIG.defaults.w_prompt_textarea
	// }

	currentState.settings.w_prompt_textarea = currentState.syncEnabled
		? currentState.settings.w_chat_gpt
		: WIDTH_CONFIG.defaults.w_prompt_textarea

	// Apply changes and update UI
	applyCssVariables(currentState.settings)
	updateUI(currentState)
	saveState(currentState)
}

function setupSliderListeners(selector, key) {
	const slider = $(selector)
	if (slider) {
		// slider.addEventListener('input', (e) => handleWidthChange({ event: e, key, shouldSave: false }))
		// slider.addEventListener('blur', () => saveState(currentState))

		// Input event for live updates
		addListener(slider, 'input', (e) => handleWidthChange({ event: e, key, shouldSave: false }))
		// Change event for when the slider stops
		addListener(slider, 'change', () => saveState(currentState))
	}
}

function handleWidthsListeners() {
	// Remove any existing listeners to prevent duplicates
	removeAllListeners()

	// // Full Width Toggle
	// $(UI_SELECTORS.toggleFullWidth)?.addEventListener('change', handleToggleFullWidth)

	// // Sync Toggle
	// $(UI_SELECTORS.toggleSyncWidths)?.addEventListener('change', handleToggleSyncWidths)

	// Full Width Toggle
	addListener($(UI_SELECTORS.toggleFullWidth), 'change', handleToggleFullWidth)

	// Sync Toggle
	addListener($(UI_SELECTORS.toggleSyncWidths), 'change', handleToggleSyncWidths)

	setupSliderListeners(UI_SELECTORS.sliderChatWidth, 'w_chat_gpt')
	setupSliderListeners(UI_SELECTORS.sliderTextareaWidth, 'w_prompt_textarea')

	// Reset button
	// $(UI_SELECTORS.btnResetWidths)?.addEventListener('click', resetWidths)
	addListener($(UI_SELECTORS.btnResetWidths), 'click', resetWidths)
}

async function resetWidths() {
	currentState = {
		settings: { ...WIDTH_CONFIG.defaults },
		syncEnabled: false,
		fullWidthEnabled: false,
	}

	applyCssVariables(currentState.settings)
	updateUI(currentState)
	await browser.storage.sync.remove(Object.values(WIDTH_CONFIG.storageKeys))
	console.log('[↔️ GPThemes] Width settings reset.')
}

// Initialize the module
async function init() {
	try {
		const result = await browser.storage.sync.get(Object.values(WIDTH_CONFIG.storageKeys))

		currentState = {
			settings: result[WIDTH_CONFIG.storageKeys.widthSettings] || { ...WIDTH_CONFIG.defaults },
			syncEnabled: result[WIDTH_CONFIG.storageKeys.syncEnabled] || false,
			fullWidthEnabled: result[WIDTH_CONFIG.storageKeys.fullWidthEnabled] || false,
		}

		if (currentState.fullWidthEnabled) {
			// // Apply full width settings to chat
			// currentState.settings.w_chat_user = WIDTH_CONFIG.fullWidth.w_chat_user
			// currentState.settings.max_w_chat_user = WIDTH_CONFIG.fullWidth.max_w_chat_user
			// currentState.settings.w_chat_gpt = WIDTH_CONFIG.fullWidth.w_chat_gpt
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

		applyCssVariables(currentState.settings)
		updateUI(currentState)

		console.log('[↔️ GPThemes] Width settings initialized:', currentState)
	} catch (err) {
		console.error('[↔️ GPThemes] Init error:', err)
	}
}

// Export public functions
export { handleWidthsListeners, renderWidthsTab, init }
