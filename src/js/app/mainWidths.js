import browser from 'webextension-polyfill'
import { renderSwitchOption, renderSmallCardOption } from './components/renderSwitch'
import { icon_full_width, icon_sync } from './components/icons'
import { renderButton } from './components/renderButtons'
import { renderSeparator } from './components/renderUtils'
import { renderCustomScrollDown } from './scrolldown'
import { renderChatBubbles } from './toggleChatsBg'
import { $ } from '../utils/handleElements'

// console.log($)
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
		resizingBreakpoint: 768,
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

// Add this to store the original sync preference when in small screen mode
let originalSyncPreference = false
let isSmallContainer = false

// const $ = (s) => document.querySelector(s)

const UI_SELECTORS = {
	fullWidth: '#gpth-full-width',
	sync: '#gpth-sync-textarea-chat-width',
	chatSlider: '#gpth-chat-width-custom',
	textareaSlider: '#gpth-textarea-width-custom',
	resetBtn: '#resetWidths',
	chatOutput: '#range-output-gpth-chat-width-custom',
	chatUnit: '#unit-gpth-chat-width-custom',
	textareaOutput: '#range-output-gpth-textarea-width-custom',
	textareaUnit: '#unit-gpth-textarea-width-custom',
}

// ======================
// UTILITIES
// ======================
// const extractNumber = (v) => v?.replace(/%|rem/g, '') || '0'
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
			${renderSmallCardOption({
				name: 'Chats Width',
				inputId: 'gpth-chat-width-custom',
				inputType: 'range',
				inputValue: extractNumber(WIDTH_CONFIG.defaults.w_chat_gpt),
				min: WIDTH_CONFIG.ui.minWidth,
				max: WIDTH_CONFIG.ui.maxWidth,
				unit: chatUnit,
			})}
			${renderSmallCardOption({
				name: 'Prompt Width',
				inputId: 'gpth-textarea-width-custom',
				inputType: 'range',
				inputValue: extractNumber(WIDTH_CONFIG.defaults.w_prompt_textarea),
				min: WIDTH_CONFIG.ui.minWidth,
				max: WIDTH_CONFIG.ui.maxWidth,
				unit: promptUnit,
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
				textSubtitle: 'Adjust prompt field to match the chat width for a more consistent view',
			})}
		</div>
		${renderSeparator}
		${renderChatBubbles()}
		${renderSeparator}
		${renderCustomScrollDown()}
		<footer class="flex justify-center mt-8">
			${renderButton({ id: 'resetWidths', content: 'Reset Widths', className: 'btn-primary' })}
		</footer>
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
	// Disable if sync is enabled OR if in small screen mode
	const textareaSliderDisabled = isSmallContainer || syncEnabled

	updateSlider({
		sliderId: UI_SELECTORS.chatSlider,
		outputId: UI_SELECTORS.chatOutput,
		unitId: UI_SELECTORS.chatUnit,
		value: settings.w_chat_gpt,
		disabled: chatSliderDisabled,
	})

	updateSlider({
		sliderId: UI_SELECTORS.textareaSlider,
		outputId: UI_SELECTORS.textareaOutput,
		unitId: UI_SELECTORS.textareaUnit,
		value: settings.w_prompt_textarea,
		disabled: textareaSliderDisabled,
	})

	// Update toggle states - FIXED: Only force sync checked when in small screen mode
	$(UI_SELECTORS.fullWidth).checked = fullWidthEnabled

	// FIX: Only force check sync toggle in small screen mode
	if (isSmallContainer) $(UI_SELECTORS.sync).checked = true
	else $(UI_SELECTORS.sync).checked = syncEnabled

	// Disable toggles in small screen mode
	$(UI_SELECTORS.fullWidth).disabled = false // always enabled
	$(UI_SELECTORS.sync).disabled = isSmallContainer // disabled on small screens

	// Add is-locked class to cards
	const chatCard = $(UI_SELECTORS.chatSlider)?.closest('.card')
	const textareaCard = $(UI_SELECTORS.textareaSlider)?.closest('.card')

	if (chatCard) chatCard.classList.toggle('is-locked', chatSliderDisabled)
	if (textareaCard) textareaCard.classList.toggle('is-locked', textareaSliderDisabled)
}

// Save state to storage (now a direct function instead of debounced)
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

function toggleFlag({ flagKey, settingsUpdater }) {
	// For sync toggle, prevent toggling in small screen mode
	if (flagKey === 'syncEnabled' && isSmallContainer) {
		console.log(`[↔️ GPThemes] Cannot toggle sync in small screen mode`)
		updateUI(currentState)
		return
	}

	const willBeEnabled = !currentState[flagKey]
	currentState[flagKey] = willBeEnabled
	Object.assign(currentState.settings, settingsUpdater(willBeEnabled))
	currentState.pendingChanges = true

	applyCssVariables(currentState.settings)
	updateUI(currentState)
	saveState(currentState)
}

function handleWidthChange({ event, key, syncKey = null, shouldSave = false }) {
	const val = formatWithUnit(event.target.value, event.target.dataset.unit || '%')
	currentState.settings[key] = val
	currentState.pendingChanges = true

	if (key === 'w_chat_gpt' && currentState.fullWidthEnabled && val !== '100%') {
		currentState.fullWidthEnabled = false
	}

	if (syncKey && currentState.syncEnabled) {
		currentState.settings[syncKey] = val
	}

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
	// Fixed Full Width Toggle
	$(UI_SELECTORS.fullWidth)?.addEventListener('change', () =>
		toggleFlag({
			flagKey: 'fullWidthEnabled',
			settingsUpdater: (willBeEnabled) => {
				if (willBeEnabled) {
					return {
						...WIDTH_CONFIG.fullWidth,
						w_prompt_textarea: currentState.syncEnabled
							? WIDTH_CONFIG.fullWidth.w_chat_gpt
							: WIDTH_CONFIG.defaults.w_prompt_textarea,
					}
				}
				return {
					...WIDTH_CONFIG.defaults,
					w_prompt_textarea: currentState.syncEnabled
						? WIDTH_CONFIG.defaults.w_chat_gpt
						: WIDTH_CONFIG.defaults.w_prompt_textarea,
				}
			},
		})
	)

	// Fixed Sync Toggle
	$(UI_SELECTORS.sync)?.addEventListener('change', () =>
		toggleFlag({
			flagKey: 'syncEnabled',
			settingsUpdater: (willBeEnabled) => {
				if (willBeEnabled) {
					return {
						w_prompt_textarea: currentState.settings.w_chat_gpt,
					}
				}
				return {
					w_prompt_textarea: WIDTH_CONFIG.defaults.w_prompt_textarea,
				}
			},
		})
	)

	// Chat slider input - update UI only (no storage)
	$(UI_SELECTORS.chatSlider)?.addEventListener('input', (e) =>
		handleWidthChange({
			event: e,
			key: 'w_chat_gpt',
			syncKey: 'w_prompt_textarea',
			shouldSave: false,
		})
	)

	// Chat slider blur - save to storage
	$(UI_SELECTORS.chatSlider)?.addEventListener('blur', (e) => {
		if (currentState.pendingChanges) saveState(currentState)
	})

	// Textarea slider input - update UI only (no storage)
	$(UI_SELECTORS.textareaSlider)?.addEventListener('input', (e) =>
		// handleWidthChange(e, 'w_prompt_textarea', null, false)
		handleWidthChange({
			event: e,
			key: 'w_prompt_textarea',
			shouldSave: false,
		})
	)

	// Textarea slider blur - save to storage
	$(UI_SELECTORS.textareaSlider)?.addEventListener('blur', (e) => {
		if (currentState.pendingChanges) saveState(currentState)
	})

	// Reset button
	$(UI_SELECTORS.resetBtn)?.addEventListener('click', resetWidths)

	// Save on tab switch or window blur to ensure no pending changes are lost
	/* 	window.addEventListener('blur', () => {
		if (currentState.pendingChanges) {
			saveState(currentState)
		}
	}) */
}

// Keep the debounce function for resize handling

// Add this function to your module
function setupResizeObserver() {
	const resizeObserver = new ResizeObserver((entries) => {
		for (const entry of entries) {
			const containerWidth = entry.contentRect.width
			const wasSmallContainer = isSmallContainer
			isSmallContainer = containerWidth <= WIDTH_CONFIG.ui.resizingBreakpoint

			// If screen size state changed, we need to update UI
			if (wasSmallContainer !== isSmallContainer) {
				console.log(
					`[↔️ GPThemes] Screen size changed: ${isSmallContainer ? 'small' : 'normal'} screen (${containerWidth}px)`
				)

				if (isSmallContainer) {
					// FIX: Store the original sync state before forcing it to true
					originalSyncPreference = currentState.syncEnabled

					// Force sync enabled for small screens but preserve full width setting
					currentState.syncEnabled = true

					// Apply changes
					applyCssVariables(currentState.settings)
					updateUI(currentState)
				} else {
					// FIX: Restore the original sync state when returning to normal screen size
					currentState.syncEnabled = originalSyncPreference

					// If sync is enabled still, ensure proper prompt width
					if (currentState.syncEnabled) {
						currentState.settings.w_prompt_textarea = currentState.settings.w_chat_gpt
					}

					// Apply CSS changes with restored settings
					applyCssVariables(currentState.settings)

					// Update UI with restored state
					updateUI(currentState)
				}
			}
		}
	})

	// Start observing the container element with improved error handling
	function attachObserver() {
		const targetElement = document.querySelector(".composer-parent[role='presentation']")
		if (targetElement) {
			resizeObserver.observe(targetElement)
			console.log('[↔️ GPThemes] ResizeObserver attached to composer parent')

			// Immediately check size to set initial state
			isSmallContainer = targetElement.offsetWidth <= WIDTH_CONFIG.ui.resizingBreakpoint
			if (isSmallContainer) {
				console.log('[↔️ GPThemes] Starting in small screen mode')
				// Store original sync state
				originalSyncPreference = currentState.syncEnabled

				// Force sync enabled for small screens
				currentState.syncEnabled = true

				applyCssVariables(currentState.settings)
				setTimeout(() => updateUI(currentState), 50)
			}

			return true
		}
		return false
	}

	// Try to attach immediately
	if (!attachObserver()) {
		// If element doesn't exist yet, set up mutation observer
		const documentObserver = new MutationObserver((mutations, observer) => {
			if (attachObserver()) {
				observer.disconnect()
			}
		})

		documentObserver.observe(document.body, { childList: true, subtree: true })
		console.log('[↔️ GPThemes] Waiting for composer parent element to appear in DOM')
	}

	return resizeObserver
}

// Update the init function to call setupResizeObserver
async function init() {
	try {
		const result = await browser.storage.sync.get(Object.values(WIDTH_CONFIG.storageKeys))

		currentState = {
			settings: result[WIDTH_CONFIG.storageKeys.widthSettings] || { ...WIDTH_CONFIG.defaults },
			syncEnabled: result[WIDTH_CONFIG.storageKeys.syncEnabled] || false,
			fullWidthEnabled: result[WIDTH_CONFIG.storageKeys.fullWidthEnabled] || false,
			pendingChanges: false,
		}

		// Store the original sync preference on initialization
		originalSyncPreference = currentState.syncEnabled

		if (currentState.fullWidthEnabled) {
			Object.assign(currentState.settings, WIDTH_CONFIG.fullWidth)
			if (currentState.syncEnabled) {
				currentState.settings.w_prompt_textarea = WIDTH_CONFIG.fullWidth.w_chat_gpt
			}
		} else if (currentState.syncEnabled) {
			currentState.settings.w_prompt_textarea = currentState.settings.w_chat_gpt
		}

		applyCssVariables(currentState.settings)

		// Set up the ResizeObserver
		window.resizeObserver = setupResizeObserver()

		// Initial UI update will be called after size is determined
		setTimeout(() => {
			if (!isSmallContainer) {
				updateUI(currentState)
			}
		}, 50)

		console.log('[↔️ GPThemes] Width settings initialized:', currentState)
	} catch (err) {
		console.error('[↔️ GPThemes] Init error:', err)
	}
}

// Add cleanup function to prevent memory leaks
/* function cleanup() {
	if (window.resizeObserver) {
		window.resizeObserver.disconnect()
		window.resizeObserver = null
		console.log('[↔️ GPThemes] ResizeObserver disconnected')
	}
} */

async function resetWidths() {
	currentState = {
		settings: { ...WIDTH_CONFIG.defaults },
		syncEnabled: false,
		fullWidthEnabled: false,
		pendingChanges: false,
	}

	// Reset original sync preference as well
	originalSyncPreference = false

	applyCssVariables(currentState.settings)
	updateUI(currentState)
	await browser.storage.sync.remove(Object.values(WIDTH_CONFIG.storageKeys))
	console.log('[↔️ GPThemes] Width settings reset.')
}

// Export the cleanup function if needed for component unmounting
export { handleWidthsListeners, renderWidthsTab, init }
