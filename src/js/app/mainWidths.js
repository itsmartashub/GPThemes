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
	pendingChanges: false,
}

// Track small screen/@container state preference
let isSmallContainer = false

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

// ======================
// UTILITIES
// ======================
const extractNumber = (v) => parseFloat(v) || 0
const extractUnit = (v) => (v?.includes('rem') ? 'REM' : '%')
const validateValue = (v, min = WIDTH_CONFIG.ui.minWidth, max = WIDTH_CONFIG.ui.maxWidth) =>
	isNaN(+v) ? min.toString() : Math.max(min, Math.min(max, +v)).toString()
const formatWithUnit = (val, unit) => `${validateValue(val)}${unit}`
const getIdFromSelector = (selector) => selector.substring(1) // removes the '#' prefix

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
				inputId: getIdFromSelector(UI_SELECTORS.sliderChatWidth),
				inputValue: extractNumber(WIDTH_CONFIG.defaults.w_chat_gpt),
				displayValue: getIdFromSelector(UI_SELECTORS.displayChatWidthValue),
				displayUnit: getIdFromSelector(UI_SELECTORS.displayChatWidthUnit),
				min: WIDTH_CONFIG.ui.minWidth,
				max: WIDTH_CONFIG.ui.maxWidth,
				unit: chatUnit,
			})}
			${renderSliderCard({
				name: 'Prompt Width',
				inputType: 'range',
				inputId: getIdFromSelector(UI_SELECTORS.sliderTextareaWidth),
				inputValue: extractNumber(WIDTH_CONFIG.defaults.w_prompt_textarea),
				displayValue: getIdFromSelector(UI_SELECTORS.displayTextareaWidthValue),
				displayUnit: getIdFromSelector(UI_SELECTORS.displayTextareaWidthUnit),
				min: WIDTH_CONFIG.ui.minWidth,
				max: WIDTH_CONFIG.ui.maxWidth,
				unit: promptUnit,
			})}
		</div>

		<div class="gpth-layouts__toggle-widths">
		${renderToggleCard({
			inputId: getIdFromSelector(UI_SELECTORS.toggleFullWidth),
			isChecked: false,
			icon: icon_full_width,
			textTitle: 'Chat Full Width',
			textSubtitle: "Expand chats to screen's edge for wider conversation view",
		})}
		${renderToggleCard({
			inputId: getIdFromSelector(UI_SELECTORS.toggleSyncWidths),
			isChecked: false,
			icon: icon_sync,
			textTitle: 'Sync Prompt Width',
			textSubtitle: 'Adjust prompt field to match the chat width for a more consistent view',
		})}
		</div>
		<div class="flex justify-center mt-8">
			${renderButton({
				id: getIdFromSelector(UI_SELECTORS.btnResetWidths),
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
	// For chat slider: disable if in small screen mode OR (fullWidth is enabled AND width is 100%)
	const chatSliderDisabled = isSmallContainer || (fullWidthEnabled && settings.w_chat_gpt === '100%')
	// Disable textarea slider if sync is enabled OR if in small screen mode
	const textareaSliderDisabled = isSmallContainer || syncEnabled

	updateSlider({
		sliderId: UI_SELECTORS.sliderChatWidth,
		outputId: UI_SELECTORS.displayChatWidthValue,
		unitId: UI_SELECTORS.displayChatWidthUnit,
		value: settings.w_chat_gpt,
		disabled: chatSliderDisabled,
	})

	updateSlider({
		sliderId: UI_SELECTORS.sliderTextareaWidth,
		outputId: UI_SELECTORS.displayTextareaWidthValue,
		unitId: UI_SELECTORS.displayTextareaWidthUnit,
		value: settings.w_prompt_textarea,
		disabled: textareaSliderDisabled,
	})

	// Update toggle states - preserve user's actual preferences
	$(UI_SELECTORS.toggleFullWidth).checked = fullWidthEnabled
	$(UI_SELECTORS.toggleSyncWidths).checked = syncEnabled // Keep user's preference

	// Disable sync toggle in small screen mode but don't change its checked state
	$(UI_SELECTORS.toggleFullWidth).disabled = false // always enabled
	$(UI_SELECTORS.toggleSyncWidths).disabled = isSmallContainer // disabled on small screens

	// Add is-locked class to cards
	const chatCard = $(UI_SELECTORS.sliderChatWidth)?.closest('.card')
	const textareaCard = $(UI_SELECTORS.sliderTextareaWidth)?.closest('.card')

	if (chatCard) chatCard.classList.toggle('is-locked', chatSliderDisabled)
	if (textareaCard) textareaCard.classList.toggle('is-locked', textareaSliderDisabled)
}

// Save state to storage
async function saveState(state) {
	try {
		await browser.storage.sync.set({
			[WIDTH_CONFIG.storageKeys.widthSettings]: state.settings,
			[WIDTH_CONFIG.storageKeys.syncEnabled]: state.syncEnabled,
			[WIDTH_CONFIG.storageKeys.fullWidthEnabled]: state.fullWidthEnabled,
		})
		state.pendingChanges = false
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
	currentState.pendingChanges = true

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

function handleWidthsListeners() {
	// Full Width Toggle
	$(UI_SELECTORS.toggleFullWidth)?.addEventListener('change', () => {
		// Toggle the flag
		currentState.fullWidthEnabled = !currentState.fullWidthEnabled

		// Update chat width settings based on full width toggle state
		if (currentState.fullWidthEnabled) {
			// Apply full width settings to chat only
			currentState.settings.w_chat_user = WIDTH_CONFIG.fullWidth.w_chat_user
			currentState.settings.max_w_chat_user = WIDTH_CONFIG.fullWidth.max_w_chat_user
			currentState.settings.w_chat_gpt = WIDTH_CONFIG.fullWidth.w_chat_gpt
		} else {
			// Restore default chat width settings
			currentState.settings.w_chat_user = WIDTH_CONFIG.defaults.w_chat_user
			currentState.settings.max_w_chat_user = WIDTH_CONFIG.defaults.max_w_chat_user
			currentState.settings.w_chat_gpt = WIDTH_CONFIG.defaults.w_chat_gpt
		}

		// Synchronize textarea width if sync is enabled
		syncTextareaWithChatWidth()

		// Mark changes as pending
		currentState.pendingChanges = true

		// Apply changes and update UI
		applyCssVariables(currentState.settings)
		updateUI(currentState)
		saveState(currentState)
	})

	// Sync Toggle
	$(UI_SELECTORS.toggleSyncWidths)?.addEventListener('change', () => {
		// Don't toggle if in small screen mode
		if (isSmallContainer) {
			console.log(`[↔️ GPThemes] Cannot toggle sync in small screen mode`)
			updateUI(currentState)
			return
		}

		// Toggle the sync state
		currentState.syncEnabled = !currentState.syncEnabled

		// If enabling sync, update textarea width to match chat width
		if (currentState.syncEnabled) {
			currentState.settings.w_prompt_textarea = currentState.settings.w_chat_gpt
		}

		// Mark changes as pending
		currentState.pendingChanges = true

		// Apply changes and update UI
		applyCssVariables(currentState.settings)
		updateUI(currentState)
		saveState(currentState)
	})

	// Chat slider input - update UI only (no storage)
	$(UI_SELECTORS.sliderChatWidth)?.addEventListener('input', (e) =>
		handleWidthChange({
			event: e,
			key: 'w_chat_gpt',
			shouldSave: false,
		})
	)

	// Chat slider blur - save to storage
	$(UI_SELECTORS.sliderChatWidth)?.addEventListener('blur', (e) => {
		if (currentState.pendingChanges) saveState(currentState)
	})

	// Textarea slider input - update UI only (no storage)
	$(UI_SELECTORS.sliderTextareaWidth)?.addEventListener('input', (e) =>
		handleWidthChange({
			event: e,
			key: 'w_prompt_textarea',
			shouldSave: false,
		})
	)

	// Textarea slider blur - save to storage
	$(UI_SELECTORS.sliderTextareaWidth)?.addEventListener('blur', (e) => {
		if (currentState.pendingChanges) saveState(currentState)
	})

	// Reset button
	$(UI_SELECTORS.btnResetWidths)?.addEventListener('click', resetWidths)
}

// Resize observer setup to handle responsive layout changes
// function setupResizeObserver() {
// 	const resizeObserver = new ResizeObserver((entries) => {
// 		for (const entry of entries) {
// 			const containerWidth = entry.contentRect.width
// 			const wasSmallContainer = isSmallContainer
// 			isSmallContainer = containerWidth <= WIDTH_CONFIG.ui.resizingBreakpoint

// 			// If screen size state changed, we need to update UI
// 			if (wasSmallContainer !== isSmallContainer) {
// 				console.log(
// 					`[↔️ GPThemes] Screen size changed: ${isSmallContainer ? 'small' : 'normal'} screen (${containerWidth}px)`
// 				)

// 				// Apply changes and update UI based on new size
// 				applyCssVariables(currentState.settings)
// 				updateUI(currentState)
// 			}
// 		}
// 	})

// 	// Start observing the container element with improved error handling
// 	function attachObserver() {
// 		// const targetElement = document.querySelector(".composer-parent[role='presentation']")
// 		const targetElement = document.querySelector('#thread')
// 		if (targetElement) {
// 			resizeObserver.observe(targetElement)
// 			console.log('[↔️ GPThemes] ResizeObserver attached to composer parent')

// 			// Immediately check size to set initial state
// 			isSmallContainer = targetElement.offsetWidth <= WIDTH_CONFIG.ui.resizingBreakpoint

// 			applyCssVariables(currentState.settings)
// 			setTimeout(() => updateUI(currentState), 50)

// 			return true
// 		}
// 		return false
// 	}

// 	// Try to attach immediately
// 	if (!attachObserver()) {
// 		// If element doesn't exist yet, set up mutation observer
// 		const documentObserver = new MutationObserver((mutations, observer) => {
// 			if (attachObserver()) {
// 				observer.disconnect()
// 			}
// 		})

// 		documentObserver.observe(document.body, { childList: true, subtree: true })
// 		console.log('[↔️ GPThemes] Waiting for composer parent element to appear in DOM')
// 	}

// 	return resizeObserver
// }

/* function resizeObserver() {
	const container = document.querySelector('#thread')
	const observer = new ResizeObserver(([entry]) => {
		const width = entry.contentRect.width
		const newMode = width < 768 ? 'small' : 'normal'

		// Check if mode has actually changed before updating
		document.documentElement.style.setProperty('--chats-container-mode', newMode)
		document.documentElement.dataset.chatsContainerMode = newMode
	})

	if (container) observer.observe(container)
} */

async function resetWidths() {
	currentState = {
		settings: { ...WIDTH_CONFIG.defaults },
		syncEnabled: false,
		fullWidthEnabled: false,
		pendingChanges: false,
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
			pendingChanges: false,
		}

		if (currentState.fullWidthEnabled) {
			// Apply full width settings to chat
			currentState.settings.w_chat_user = WIDTH_CONFIG.fullWidth.w_chat_user
			currentState.settings.max_w_chat_user = WIDTH_CONFIG.fullWidth.max_w_chat_user
			currentState.settings.w_chat_gpt = WIDTH_CONFIG.fullWidth.w_chat_gpt

			// If sync is enabled, match textarea width to chat width
			if (currentState.syncEnabled) {
				currentState.settings.w_prompt_textarea = WIDTH_CONFIG.fullWidth.w_chat_gpt
			}
		} else if (currentState.syncEnabled) {
			// Ensure textarea width matches chat width if sync is enabled
			currentState.settings.w_prompt_textarea = currentState.settings.w_chat_gpt
		}

		applyCssVariables(currentState.settings)

		// Set up the ResizeObserver
		// window.resizeObserver = setupResizeObserver()

		console.log('[↔️ GPThemes] Width settings initialized:', currentState)
	} catch (err) {
		console.error('[↔️ GPThemes] Init error:', err)
	}
}

// Export public functions
export { handleWidthsListeners, renderWidthsTab, init }
