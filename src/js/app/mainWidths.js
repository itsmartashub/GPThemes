import browser from 'webextension-polyfill'
import { renderSwitchOption, renderSmallCardOption } from './components/renderSwitch'
import { icon_full_width, icon_sync } from './components/icons'
import { renderButton } from './components/renderButtons'
import { renderSeparator } from './components/renderUtils'
import { renderCustomScrollDown } from './scrolldown'
import { renderChatBubbles } from './toggleChatsBg'

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

const $ = (s) => document.querySelector(s)

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

function renderWidthsTab() {
	const chatUnit = getUnitFromValue(WIDTH_CONFIG.defaults.w_chat_gpt)
	const promptUnit = getUnitFromValue(WIDTH_CONFIG.defaults.w_prompt_textarea)
	return `
	<section id="sectionLayouts" class="gpth-layouts">
		<div class="gpth-layouts__custom-width mb-4">
			${renderSmallCardOption({
				name: 'Chats Width',
				inputId: 'gpth-chat-width-custom',
				inputType: 'range',
				inputValue: removeUnit(WIDTH_CONFIG.defaults.w_chat_gpt),
				min: WIDTH_CONFIG.ui.minWidth,
				max: WIDTH_CONFIG.ui.maxWidth,
				unit: chatUnit,
			})}
			${renderSmallCardOption({
				name: 'Prompt Width',
				inputId: 'gpth-textarea-width-custom',
				inputType: 'range',
				inputValue: removeUnit(WIDTH_CONFIG.defaults.w_prompt_textarea),
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

const removeUnit = (v) => v?.replace(/%|rem/g, '') || '0'
const getUnitFromValue = (v) => (v?.includes('rem') ? 'REM' : '%')
const validateValue = (v, min = WIDTH_CONFIG.ui.minWidth, max = WIDTH_CONFIG.ui.maxWidth) =>
	isNaN(+v) ? min.toString() : Math.max(min, Math.min(max, +v)).toString()

const formatWithUnit = (val, unit) => `${validateValue(val)}${unit}`

function applyCssVariables(settings) {
	requestAnimationFrame(() => {
		const root = document.documentElement
		for (const [k, v] of Object.entries(settings)) {
			root.style.setProperty(`--${k}`, v)
		}
	})
}

/* function updateSlider(id, outputId, unitId, value, disabled = false) {
	const slider = $(id)
	if (slider) {
		slider.value = removeUnit(value)
		slider.disabled = disabled
	}
	if ($(outputId)) $(outputId).textContent = removeUnit(value)
	if ($(unitId)) $(unitId).textContent = getUnitFromValue(value)
} */
function updateSlider({ sliderId, outputId, unitId, value, disabled = false }) {
	const slider = $(sliderId)
	if (slider) {
		slider.value = removeUnit(value)
		slider.disabled = disabled
	}
	if ($(outputId)) $(outputId).textContent = removeUnit(value)
	if ($(unitId)) $(unitId).textContent = getUnitFromValue(value)
}

function updateUI({ settings, syncEnabled, fullWidthEnabled }) {
	/* 	updateSlider(
		UI_SELECTORS.chatSlider,
		UI_SELECTORS.chatOutput,
		UI_SELECTORS.chatUnit,
		settings.w_chat_gpt,
		fullWidthEnabled && settings.w_chat_gpt === '100%'
	)
	updateSlider(
		UI_SELECTORS.textareaSlider,
		UI_SELECTORS.textareaOutput,
		UI_SELECTORS.textareaUnit,
		settings.w_prompt_textarea,
		syncEnabled
	) */
	updateSlider({
		sliderId: UI_SELECTORS.chatSlider,
		outputId: UI_SELECTORS.chatOutput,
		unitId: UI_SELECTORS.chatUnit,
		value: settings.w_chat_gpt,
		disabled: fullWidthEnabled && settings.w_chat_gpt === '100%',
	})

	updateSlider({
		sliderId: UI_SELECTORS.textareaSlider,
		outputId: UI_SELECTORS.textareaOutput,
		unitId: UI_SELECTORS.textareaUnit,
		value: settings.w_prompt_textarea,
		disabled: syncEnabled,
	})

	$(UI_SELECTORS.fullWidth).checked = fullWidthEnabled
	$(UI_SELECTORS.sync).checked = syncEnabled

	$(UI_SELECTORS.chatSlider)?.closest('.card')?.classList.toggle('is-locked', fullWidthEnabled)
	$(UI_SELECTORS.textareaSlider)?.closest('.card')?.classList.toggle('is-locked', syncEnabled)
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
		console.log('[GPThemes] Settings saved')
	} catch (err) {
		console.error('[GPThemes] Save failed:', err)
	}
}

/* function handleWidthChange(e, key, syncKey, shouldSave = false) {
	const val = formatWithUnit(e.target.value, e.target.dataset.unit || '%')
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

	// Always apply CSS and update UI for immediate feedback
	applyCssVariables(currentState.settings)
	updateUI(currentState)

	// Only save to storage if explicitly requested (on blur/change, not input)
	if (shouldSave) {
		saveState(currentState)
	}
} */

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

/* function toggleFlag(flagKey, settingsUpdater) {
	const willBeEnabled = !currentState[flagKey] // This is the future state
	currentState[flagKey] = willBeEnabled
	Object.assign(currentState.settings, settingsUpdater(willBeEnabled))
	currentState.pendingChanges = true

	applyCssVariables(currentState.settings)
	updateUI(currentState)
	saveState(currentState) // Save immediately on toggle changes
} */
function toggleFlag({ flagKey, settingsUpdater }) {
	const willBeEnabled = !currentState[flagKey]
	currentState[flagKey] = willBeEnabled
	Object.assign(currentState.settings, settingsUpdater(willBeEnabled))
	currentState.pendingChanges = true

	applyCssVariables(currentState.settings)
	updateUI(currentState)
	saveState(currentState)
}

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
	console.log('[GPThemes] Width settings reset.')
}

function handleWidthsListeners() {
	// Fixed Full Width Toggle
	$(UI_SELECTORS.fullWidth)?.addEventListener('change', () =>
		/* toggleFlag('fullWidthEnabled', (willBeEnabled) => {
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
		}) */
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
		/* toggleFlag('syncEnabled', (willBeEnabled) => {
			if (willBeEnabled) {
				return {
					w_prompt_textarea: currentState.settings.w_chat_gpt,
				}
			}
			return {
				w_prompt_textarea: WIDTH_CONFIG.defaults.w_prompt_textarea,
			}
		}) */
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
		// handleWidthChange(e, 'w_chat_gpt', 'w_prompt_textarea', false)
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
	window.addEventListener('blur', () => {
		if (currentState.pendingChanges) {
			saveState(currentState)
		}
	})

	setupResizeListener()
}

function setupResizeListener() {
	if (!window.widthsResizeListener) {
		window.widthsResizeListener = debounce(() => {
			applyCssVariables(currentState.settings)
		}, 250)
		window.addEventListener('resize', window.widthsResizeListener)
	}
}

// Keep the debounce function for resize handling
const debounce = (fn, delay = 300) => {
	let id
	return (...args) => {
		clearTimeout(id)
		id = setTimeout(() => fn(...args), delay)
	}
}

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
			Object.assign(currentState.settings, WIDTH_CONFIG.fullWidth)
			if (currentState.syncEnabled) {
				currentState.settings.w_prompt_textarea = WIDTH_CONFIG.fullWidth.w_chat_gpt
			}
		} else if (currentState.syncEnabled) {
			currentState.settings.w_prompt_textarea = currentState.settings.w_chat_gpt
		}

		applyCssVariables(currentState.settings)
		setupResizeListener()
		setTimeout(() => updateUI(currentState), 50)
		console.log('[GPThemes] Width settings initialized:', currentState)
	} catch (err) {
		console.error('[GPThemes] Init error:', err)
	}
}

export { handleWidthsListeners, renderWidthsTab, init }
