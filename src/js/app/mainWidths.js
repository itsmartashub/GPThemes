import browser from 'webextension-polyfill'
import { renderSwitchOption, renderSmallCardOption } from './components/renderSwitch'
import { icon_full_width, icon_sync } from './components/icons'
import { renderButton } from './components/renderButtons'
import { renderSeparator } from './components/renderUtils'
import { renderCustomScrollDown } from './scrolldown'
import { renderChatBubbles } from './toggleChatsBg'

const WIDTH_CONFIG = {
	// Default settings when not using full width
	defaults: {
		w_chat_user: 'auto',
		max_w_chat_user: 'var(--user-chat-width, 70%)',
		w_chat_gpt: '48rem',
		w_prompt_textarea: '48rem',
	},
	// Settings when full width is enabled
	fullWidth: {
		w_chat_user: '100%',
		max_w_chat_user: '100%',
		w_chat_gpt: '100%',
	},
	// UI settings
	ui: {
		resizingBreakpoint: 768,
		minWidth: 0,
		maxWidth: 100,
	},
	// Storage key for preferences
	storageKeys: {
		widthSettings: 'widthSettings',
		syncEnabled: 'widthSyncEnabled',
		fullWidthEnabled: 'fullWidthEnabled',
	},
}

// State (with defaults)
let currentState = {
	settings: { ...WIDTH_CONFIG.defaults },
	syncEnabled: false,
	fullWidthEnabled: false,
}

function generateWidthsHTML() {
	return `
    <section id="sectionLayouts" class="gpth-layouts">
        <div class="gpth-layouts__custom-width mb-4">
            ${renderSmallCardOption({
							name: 'Chats Width',
							inputId: 'gpth-chat-width-custom',
							inputType: 'range',
							inputValue: removePercentSign(WIDTH_CONFIG.defaults.w_chat_gpt),
							inputPlaceholder: '100%',
							min: WIDTH_CONFIG.ui.minWidth,
							max: WIDTH_CONFIG.ui.maxWidth,
							unit: getUnitFromValue(WIDTH_CONFIG.defaults.w_chat_gpt),
						})}
            ${renderSmallCardOption({
							name: 'Prompt Width',
							inputId: 'gpth-textarea-width-custom',
							inputType: 'range',
							inputValue: removePercentSign(WIDTH_CONFIG.defaults.w_prompt_textarea),
							inputPlaceholder: '100%',
							min: WIDTH_CONFIG.ui.minWidth,
							max: WIDTH_CONFIG.ui.maxWidth,
							unit: getUnitFromValue(WIDTH_CONFIG.defaults.w_prompt_textarea),
							isLocked: false,
						})}
        </div>

        <div>
            ${renderSwitchOption({
							inputId: 'gpth-full-width',
							isChecked: false,
							icon: icon_full_width,
							textTitle: 'Chat Full Width',
							textSubtitle: "Expand chats to screen's edge for wider conversation view",
						})}
            ${renderSwitchOption({
							inputId: 'gpth-sync-textarea-chat-width',
							isChecked: false,
							icon: icon_sync,
							textTitle: 'Sync Prompt Width',
							textSubtitle: 'Adjust prompt field to match the chat width for a more streamlined and consistent view',
						})}
        </div>

        ${renderSeparator}
        ${renderChatBubbles()}

        ${renderSeparator}
        ${renderCustomScrollDown()}

        <footer class="flex justify-center mt-8">
            ${renderButton({ id: 'resetWidths', content: 'Reset Widths', disabled: false, className: 'btn-primary' })}
        </footer>
    </section>
    `
}

function removePercentSign(value) {
	return value?.replace(/%|rem/g, '') || '0'
}

function getUnitFromValue(value) {
	return value?.includes('rem') ? 'REM' : '%'
}

function validateNumericValue(value, min = WIDTH_CONFIG.ui.minWidth, max = WIDTH_CONFIG.ui.maxWidth) {
	const numValue = parseInt(value, 10)
	return isNaN(numValue) ? min.toString() : Math.max(min, Math.min(max, numValue)).toString()
}

function formatWithUnit(value, unit) {
	return `${validateNumericValue(value)}${unit}`
}

function applyCssVariables(settings) {
	const root = document.documentElement
	const isNarrowScreen = window.innerWidth <= WIDTH_CONFIG.ui.resizingBreakpoint

	// Batch DOM updates for better performance
	requestAnimationFrame(() => {
		// Handle responsive behavior
		if (isNarrowScreen) {
			// Always use 100% width on narrow screens
			root.style.setProperty('--w_chat_gpt', '100%')
			root.style.setProperty('--w_chat_user', '100%')
			root.style.setProperty('--max_w_chat_user', '100%')
			root.style.setProperty('--w_prompt_textarea', '100%')
		} else {
			// Apply stored settings on wider screens
			Object.entries(settings).forEach(([key, value]) => {
				root.style.setProperty(`--${key}`, value)
			})
		}
	})
}

function updateUI(state) {
	const { settings, syncEnabled, fullWidthEnabled } = state

	// Elements
	const fullWidthCheckbox = document.querySelector('#gpth-full-width')
	const syncCheckbox = document.querySelector('#gpth-sync-textarea-chat-width')
	const chatWidthSlider = document.querySelector('#gpth-chat-width-custom')
	const textareaWidthSlider = document.querySelector('#gpth-textarea-width-custom')
	const textareaWidthCard = textareaWidthSlider?.closest('.card')
	const chatWidthWidthCard = chatWidthSlider?.closest('.card')

	// Chat width output elements
	const chatWidthOutput = document.querySelector('#range-output-gpth-chat-width-custom')
	const chatWidthUnit = document.querySelector('#unit-gpth-chat-width-custom')

	// Textarea width output elements
	const textareaWidthOutput = document.querySelector('#range-output-gpth-textarea-width-custom')
	const textareaWidthUnit = document.querySelector('#unit-gpth-textarea-width-custom')

	// Update checkboxes (ensure they reflect current state)
	if (fullWidthCheckbox) fullWidthCheckbox.checked = fullWidthEnabled
	if (syncCheckbox) syncCheckbox.checked = syncEnabled

	// Update chat width slider and output
	if (chatWidthSlider) {
		chatWidthSlider.value = removePercentSign(settings.w_chat_gpt)
		// Only disable slider if fullWidthEnabled AND width is 100%
		chatWidthSlider.disabled = fullWidthEnabled && settings.w_chat_gpt === '100%'
	}

	if (chatWidthOutput) chatWidthOutput.textContent = removePercentSign(settings.w_chat_gpt)
	if (chatWidthUnit) chatWidthUnit.textContent = getUnitFromValue(settings.w_chat_gpt)

	// Update textarea width slider and output
	if (textareaWidthSlider) {
		textareaWidthSlider.value = removePercentSign(settings.w_prompt_textarea)
		textareaWidthSlider.disabled = syncEnabled
	}

	if (textareaWidthOutput) textareaWidthOutput.textContent = removePercentSign(settings.w_prompt_textarea)
	if (textareaWidthUnit) textareaWidthUnit.textContent = getUnitFromValue(settings.w_prompt_textarea)

	// Toggle locked state for textarea card
	if (textareaWidthCard) textareaWidthCard.classList.toggle('is-locked', syncEnabled)
	if (chatWidthWidthCard) chatWidthWidthCard.classList.toggle('is-locked', fullWidthEnabled)
}

async function saveState(state) {
	try {
		await browser.storage.sync.set({
			[WIDTH_CONFIG.storageKeys.widthSettings]: state.settings,
			[WIDTH_CONFIG.storageKeys.syncEnabled]: state.syncEnabled,
			[WIDTH_CONFIG.storageKeys.fullWidthEnabled]: state.fullWidthEnabled,
		})
		return true
	} catch (error) {
		console.error('[GPThemes] Failed to save width settings:', error)
		return false
	}
}

function debounce(func, delay = 300) {
	let timeoutId
	return (...args) => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => func(...args), delay)
	}
}

// Create debounced version of save function
const debouncedSaveState = debounce(saveState, 300)

async function loadState() {
	try {
		const result = await browser.storage.sync.get([
			WIDTH_CONFIG.storageKeys.widthSettings,
			WIDTH_CONFIG.storageKeys.syncEnabled,
			WIDTH_CONFIG.storageKeys.fullWidthEnabled,
		])

		return {
			settings: result[WIDTH_CONFIG.storageKeys.widthSettings] || { ...WIDTH_CONFIG.defaults },
			syncEnabled: result[WIDTH_CONFIG.storageKeys.syncEnabled] || false,
			fullWidthEnabled: result[WIDTH_CONFIG.storageKeys.fullWidthEnabled] || false,
		}
	} catch (error) {
		console.error('[GPThemes] Failed to load width settings:', error)
		return {
			settings: { ...WIDTH_CONFIG.defaults },
			syncEnabled: false,
			fullWidthEnabled: false,
		}
	}
}

async function resetWidths() {
	// Prepare default state
	const defaultState = {
		settings: { ...WIDTH_CONFIG.defaults },
		syncEnabled: false,
		fullWidthEnabled: false,
	}

	// Update current state
	currentState = { ...defaultState }

	// Apply default settings to DOM
	applyCssVariables(currentState.settings)

	// Update UI
	updateUI(currentState)

	// Save to storage
	try {
		await browser.storage.sync.remove([
			WIDTH_CONFIG.storageKeys.widthSettings,
			WIDTH_CONFIG.storageKeys.syncEnabled,
			WIDTH_CONFIG.storageKeys.fullWidthEnabled,
		])
		console.log('[GPThemes] Width settings reset successfully')
	} catch (error) {
		console.error('[GPThemes] Failed to reset width settings:', error)
	}
}

function handleFullWidthToggle(e) {
	const isFullWidth = e.target.checked

	// Update state
	currentState.fullWidthEnabled = isFullWidth

	// Apply appropriate width settings
	if (isFullWidth) {
		currentState.settings = {
			...currentState.settings,
			...WIDTH_CONFIG.fullWidth,
		}

		// If sync is enabled, also update textarea width
		if (currentState.syncEnabled) {
			currentState.settings.w_prompt_textarea = WIDTH_CONFIG.fullWidth.w_chat_gpt
		}
	} else {
		// Restore defaults for chat width
		currentState.settings.w_chat_gpt = WIDTH_CONFIG.defaults.w_chat_gpt
		currentState.settings.w_chat_user = WIDTH_CONFIG.defaults.w_chat_user
		currentState.settings.max_w_chat_user = WIDTH_CONFIG.defaults.max_w_chat_user

		// If sync is enabled, also restore textarea width
		if (currentState.syncEnabled) {
			currentState.settings.w_prompt_textarea = WIDTH_CONFIG.defaults.w_chat_gpt
		}
	}

	// Apply settings and update UI
	applyCssVariables(currentState.settings)
	updateUI(currentState)

	// Save state
	debouncedSaveState(currentState)
}

function handleSyncToggle(e) {
	const isSyncEnabled = e.target.checked

	// Update state
	currentState.syncEnabled = isSyncEnabled

	// If sync is enabled, match textarea width to chat width
	if (isSyncEnabled) {
		currentState.settings.w_prompt_textarea = currentState.settings.w_chat_gpt
	} else {
		// If sync disabled, restore default textarea width
		currentState.settings.w_prompt_textarea = WIDTH_CONFIG.defaults.w_prompt_textarea
	}

	// Apply settings and update UI
	applyCssVariables(currentState.settings)
	updateUI(currentState)

	// Save state
	debouncedSaveState(currentState)
}

function handleChatWidthChange(e) {
	const value = e.target.value
	const unit = e.target.dataset.unit || '%'
	const formattedValue = formatWithUnit(value, unit)

	// Update chat width setting
	currentState.settings.w_chat_gpt = formattedValue

	// If full width is enabled and value is not 100%, disable full width
	if (currentState.fullWidthEnabled && value !== '100') {
		currentState.fullWidthEnabled = false
	}

	// If sync is enabled, also update textarea width
	if (currentState.syncEnabled) {
		currentState.settings.w_prompt_textarea = formattedValue
	}

	// Apply settings and update UI
	applyCssVariables(currentState.settings)
	updateUI(currentState)

	// Save state
	debouncedSaveState(currentState)
}

function handleTextareaWidthChange(event) {
	const value = event.target.value
	const unit = event.target.dataset.unit || '%'
	const formattedValue = formatWithUnit(value, unit)

	// Update textarea width setting
	currentState.settings.w_prompt_textarea = formattedValue

	// If sync is enabled and textarea width changed, disable sync
	if (currentState.syncEnabled && formattedValue !== currentState.settings.w_chat_gpt) {
		currentState.syncEnabled = false
	}

	// Apply settings and update UI
	applyCssVariables(currentState.settings)
	updateUI(currentState)

	// Save state
	debouncedSaveState(currentState)
}

function setupResizeListener() {
	if (!window.widthsResizeListener) {
		window.widthsResizeListener = debounce(() => {
			applyCssVariables(currentState.settings)
		}, 250)

		window.addEventListener('resize', window.widthsResizeListener)
		return true
	}
	return false
}

function handleWidthsListeners() {
	// Fullwidth toggle
	document.querySelector('#gpth-full-width')?.addEventListener('change', handleFullWidthToggle)

	// Sync toggle
	document.querySelector('#gpth-sync-textarea-chat-width')?.addEventListener('change', handleSyncToggle)

	// Chat width slider
	document.querySelector('#gpth-chat-width-custom')?.addEventListener('input', handleChatWidthChange)

	// Textarea width slider
	document.querySelector('#gpth-textarea-width-custom')?.addEventListener('input', handleTextareaWidthChange)

	// Reset button
	document.querySelector('#resetWidths')?.addEventListener('click', resetWidths)

	// Set up resize listener for responsive behavior
	setupResizeListener()
}

async function init() {
	try {
		// Load saved state
		currentState = await loadState()

		// Handle fullwidth state
		if (currentState.fullWidthEnabled) {
			// Ensure fullwidth settings are applied
			currentState.settings = {
				...currentState.settings,
				...WIDTH_CONFIG.fullWidth,
			}

			// If sync is enabled, match textarea width
			if (currentState.syncEnabled) {
				currentState.settings.w_prompt_textarea = WIDTH_CONFIG.fullWidth.w_chat_gpt
			}
		} else if (currentState.syncEnabled) {
			// If sync is enabled but not fullwidth, match textarea to chat width
			currentState.settings.w_prompt_textarea = currentState.settings.w_chat_gpt
		}

		// Apply settings to DOM
		applyCssVariables(currentState.settings)

		// Set up resize listener
		setupResizeListener()

		// Update UI after settings are loaded (important for correct checkbox state)
		setTimeout(() => {
			// Using a small timeout to ensure DOM is ready
			updateUI(currentState)
		}, 50)

		console.log('[GPThemes] Width settings initialized:', currentState)
	} catch (error) {
		console.error('[GPThemes] Error initializing width settings:', error)
	}
}

export { generateWidthsHTML as renderWidthsTab, handleWidthsListeners, init }
