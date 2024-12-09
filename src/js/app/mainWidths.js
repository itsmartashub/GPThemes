import browser from 'webextension-polyfill'
import { renderSwitchOption, renderSmallCardOption } from './components/renderSwitch'
import { icon_full_width, icon_sync } from './components/icons'
import { renderButton } from './components/renderButtons'

// Configuration object
const CONFIG = {
	RESIZING_BREAKPOINT: 768,
	FW_DEFAULTS: {
		w_chat_user: 'max-content',
		max_w_chat_user: '70%',
		w_chat_gpt: '49rem', //TODO its cant be 48rem like w_prompt_textarea because that would make the sync true. IMPROVE THIS IN FUTURE
		w_prompt_textarea: '48rem',
		chat_user_edit_icon_right: '100%',
		chat_user_edit_icon_top: '0',
		chat_user_edit_icon_transform: 'unset',
	},
	FW_OPTIONS: {
		w_chat_gpt: '100%',
		w_chat_user: '100%',
		max_w_chat_user: '100%',
		chat_user_edit_icon_right: 'calc(0% + 2rem)',
		chat_user_edit_icon_top: '100%',
		chat_user_edit_icon_transform: 'translateY(-1.25rem)',
	},
}

// Utility functions
const ensureValidPercentage = (value) => {
	const numValue = parseInt(value, 10)
	return isNaN(numValue) ? '0' : Math.max(0, Math.min(100, numValue)).toString()
}

const removePercentAndRem = (str) => str?.replace(/%|rem/g, '')

const isChatWidthModified = (settings) => settings.w_chat_gpt !== CONFIG.FW_DEFAULTS.w_chat_gpt

const debounce = (func, delay) => {
	let timeoutId
	return (...args) => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => func(...args), delay)
	}
}

// State management
let currentSettings = { ...CONFIG.FW_DEFAULTS }
let isSyncEnabled = false

// DOM manipulation
const setElementProperty = (selector, property, value) => {
	const element = document.querySelector(selector)
	if (element) element[property] = value
}

const applySettings = (settings) => {
	const isNarrowScreen = window.innerWidth <= CONFIG.RESIZING_BREAKPOINT

	if (isChatWidthModified(settings) && isNarrowScreen) {
		Object.entries(CONFIG.FW_OPTIONS).forEach(([key, value]) => {
			document.documentElement.style.setProperty(`--${key}`, value)
		})
		// Ensure textarea is full width on narrow screens
		document.documentElement.style.setProperty('--w_prompt_textarea', '100%')
	} else {
		Object.entries(settings).forEach(([key, value]) => {
			// For wider screens, apply the stored setting or default to full width for narrow screens
			const appliedValue = isNarrowScreen && key === 'w_prompt_textarea' ? '100%' : value
			document.documentElement.style.setProperty(`--${key}`, appliedValue)
		})
	}
}

const updateUI = (settings) => {
	const isFullWidth = settings.w_chat_gpt === '100%'
	const textareaWidthSlider = document.querySelector('#gpth-textarea-width-custom')
	const textareaWidthCard = textareaWidthSlider?.closest('.card')

	const chatGptUnit = settings.w_chat_gpt.includes('rem') ? 'REM' : '%'
	const promptUnit = settings.w_prompt_textarea.includes('rem') ? 'REM' : '%'

	setElementProperty('.gpth-settings #gpth-full-width', 'checked', isFullWidth)
	setElementProperty('.gpth-settings #gpth-full-width-custom', 'value', removePercentAndRem(settings.w_chat_gpt))
	setElementProperty(
		'.gpth-settings #range-output-gpth-full-width-custom',
		'textContent',
		removePercentAndRem(settings.w_chat_gpt)
	)
	setElementProperty('.gpth-settings #unit-gpth-full-width-custom', 'textContent', chatGptUnit)

	setElementProperty('.gpth-settings #gpth-sync-textarea-chat-width', 'checked', isSyncEnabled)
	setElementProperty(
		'.gpth-settings #gpth-textarea-width-custom',
		'value',
		removePercentAndRem(settings.w_prompt_textarea)
	)
	setElementProperty(
		'.gpth-settings #range-output-gpth-textarea-width-custom',
		'textContent',
		removePercentAndRem(settings.w_prompt_textarea)
	)
	setElementProperty('.gpth-settings #unit-gpth-textarea-width-custom', 'textContent', promptUnit)

	if (textareaWidthSlider) textareaWidthSlider.disabled = isSyncEnabled

	if (textareaWidthCard) textareaWidthCard.classList.toggle('is-locked', isSyncEnabled)

	updateEditIconPosition(settings.w_chat_gpt)
}

const updateEditIconPosition = (chatWidth) => {
	const chatWidthValue = parseInt(removePercentAndRem(chatWidth))
	const iconSettings = chatWidthValue > 48 ? CONFIG.FW_OPTIONS : CONFIG.FW_DEFAULTS

	Object.assign(currentSettings, {
		chat_user_edit_icon_right: iconSettings.chat_user_edit_icon_right,
		chat_user_edit_icon_top: iconSettings.chat_user_edit_icon_top,
		chat_user_edit_icon_transform: iconSettings.chat_user_edit_icon_transform,
	})

	applySettings(currentSettings)
}

// Event handlers
const toggleChatFullWidth = (e) => {
	const isFullWidth = e.target.checked
	const { w_chat_gpt, w_chat_user, max_w_chat_user } = isFullWidth ? CONFIG.FW_OPTIONS : CONFIG.FW_DEFAULTS

	Object.assign(currentSettings, {
		w_chat_gpt,
		w_chat_user,
		max_w_chat_user,
		w_prompt_textarea: isSyncEnabled ? w_chat_gpt : currentSettings.w_prompt_textarea,
	})

	if (isChatWidthModified(currentSettings)) {
		addResizeListener()
	} else if (window.resizeListenerAdded) {
		window.removeEventListener('resize', window.resizeListener)
		window.resizeListenerAdded = false
	}

	applySettings(currentSettings)
	debouncedSaveSettings(currentSettings)
	updateUI(currentSettings)
}

const toggleSyncTextareaWithChatWidth = (e) => {
	isSyncEnabled = e.target.checked

	if (isSyncEnabled) currentSettings.w_prompt_textarea = currentSettings.w_chat_gpt

	applySettings(currentSettings)
	debouncedSaveSettings(currentSettings)
	updateUI(currentSettings)
}

const handleWidthChange = (key, e) => {
	const value = `${ensureValidPercentage(e.target.value)}${e.target.dataset.unit || '%'}`
	currentSettings[key] = value

	if (key === 'w_chat_gpt') {
		currentSettings.w_chat_user = value
		currentSettings.max_w_chat_user = value

		if (isSyncEnabled) currentSettings.w_prompt_textarea = value

		setElementProperty('.gpth-settings #gpth-full-width', 'checked', e.target.value === '100')
	} else if (key === 'w_prompt_textarea' && isSyncEnabled && value !== currentSettings.w_chat_gpt) {
		isSyncEnabled = false
		setElementProperty('.gpth-settings #gpth-sync-textarea-chat-width', 'checked', false)
	}

	setElementProperty(`.gpth-settings #unit-${e.target.id}`, 'textContent', e.target.dataset.unit || '%')

	if (isChatWidthModified(currentSettings)) addResizeListener()

	applySettings(currentSettings)
	debouncedSaveSettings(currentSettings)
	updateUI(currentSettings)
}

// Update the resetWidths function
const resetWidths = async () => {
	try {
		// Get keys from FW_DEFAULTS
		const resettableKeys = Object.keys(CONFIG.FW_DEFAULTS)

		// Remove resettable items from storage
		await browser.storage.sync.remove(resettableKeys)

		// Reset current settings in memory
		currentSettings = { ...CONFIG.FW_DEFAULTS }
		isSyncEnabled = false

		// Remove resize listener if it exists
		if (window.resizeListenerAdded) {
			window.removeEventListener('resize', window.resizeListener)
			window.resizeListenerAdded = false
		}

		// Apply default settings
		applySettings(currentSettings)

		// Update UI
		updateUI(currentSettings)

		console.log('Settings reset successfully', currentSettings)
	} catch (error) {
		console.error('Failed to reset settings:', error)
		// TODO: Implement user-friendly error message
	}
}

// Storage management
const saveSettings = async (settings) => {
	try {
		await browser.storage.sync.set(settings)
	} catch (error) {
		console.error('Failed to save settings:', error)
		// TODO: Implement user-friendly error message
	}
}

const debouncedSaveSettings = debounce(saveSettings, 300)

const loadSettings = async () => {
	try {
		const settings = await browser.storage.sync.get(null)

		// Only load settings for keys that are in FW_DEFAULTS
		const filteredSettings = Object.fromEntries(
			Object.entries(settings).filter(([key]) => key in CONFIG.FW_DEFAULTS)
		)

		currentSettings = { ...CONFIG.FW_DEFAULTS, ...filteredSettings }
		isSyncEnabled = currentSettings.w_chat_gpt === currentSettings.w_prompt_textarea

		if (isChatWidthModified(currentSettings)) {
			addResizeListener()
		}

		applySettings(currentSettings)
		updateUI(currentSettings)
	} catch (error) {
		console.error('Failed to load settings:', error)
		// TODO: Implement user-friendly error message
	}
}

// Resize handling
const addResizeListener = () => {
	if (!window.resizeListenerAdded) {
		window.resizeListener = debounce(() => {
			applySettings(currentSettings)
		}, 250)
		window.addEventListener('resize', window.resizeListener)
		window.resizeListenerAdded = true
	}
}
/* const confirmReset = () => {
	return new Promise((resolve) => {
		const confirmed = window.confirm('Are you sure you want to reset all width and layout settings to default?')
		resolve(confirmed)
	})
} */

// Event listeners
const handleWidthsListeners = () => {
	document.querySelector('.gpth-settings #gpth-full-width')?.addEventListener('change', toggleChatFullWidth)

	document
		.querySelector('.gpth-settings #gpth-sync-textarea-chat-width')
		?.addEventListener('change', toggleSyncTextareaWithChatWidth)
	document
		.querySelector('.gpth-settings #gpth-full-width-custom')
		?.addEventListener('input', (e) => handleWidthChange('w_chat_gpt', e))

	document
		.querySelector('.gpth-settings #gpth-textarea-width-custom')
		?.addEventListener('input', (e) => handleWidthChange('w_prompt_textarea', e))

	document.querySelector('.gpth-settings #resetWidths')?.addEventListener('click', resetWidths)

	// Then update the click handler for the reset button
	/* document.querySelector('.gpth-settings #resetWidths')?.addEventListener('click', async () => {
		if (await confirmReset()) {
			resetWidths()
		}
	}) */
}

// HTML template
const renderWidthsTab = `
  <section id="sectionAssets" class="gpth-assets">
    <div class="gpth-assets__custom-width mb-4">
      ${renderSmallCardOption({
			name: 'Chats Width',
			inputId: 'gpth-full-width-custom',
			inputType: 'range',
			inputValue: removePercentAndRem(CONFIG.FW_DEFAULTS.w_chat_gpt),
			inputPlaceholder: '100%',
			min: 0,
			max: 100,
			unit: 'REM',
		})}
      ${renderSmallCardOption({
			name: 'Prompt Width',
			inputId: 'gpth-textarea-width-custom',
			inputType: 'range',
			inputValue: removePercentAndRem(CONFIG.FW_DEFAULTS.w_prompt_textarea),
			inputPlaceholder: '100%',
			min: 0,
			max: 100,
			unit: 'REM',
			isLocked: true,
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

    <footer class="flex justify-center mt-10">
      ${renderButton({ id: 'resetWidths', content: 'Reset All', disabled: false, className: 'btn-primary' })}
    </footer>
  </section>
`

// Initialization
const init = () => {
	loadSettings()
}

export { renderWidthsTab, handleWidthsListeners, init }

/* // ? =============== DEV ONLY fn ===============
const assetsStorageKeys = Object.keys(CONFIG.FW_DEFAULTS) // ? DEV ONLY var - Get the keys from FW_DEFAULTS object

async function getAllStorageItems(itemsToGet = null) {
	//assetsStorageKeys
	try {
		const items = await browser.storage.sync.get(itemsToGet)
		console.log(items)
		return items
	} catch (error) {
		console.error('Error getting storage items:', error)
	}
}
// ? =============== DEV ONLY fn ===============
// Function to remove specific named items from sync storage
async function removeSpecificStorageItems(keys) {
	try {
		// Remove the items by keys from the sync storage
		await browser.storage.sync.remove(keys)
		console.log('Specified items removed from sync storage:', keys)
	} catch (error) {
		console.error('Error removing storage items:', error)
	}
}

const init = () => {
	// removeSpecificStorageItems(assetsStorageKeys)
	getAllStorageItems(assetsStorageKeys)
	loadSettings()
	// getAllStorageItems()
	getAllStorageItems(assetsStorageKeys)
}
export { renderAssetsTab, handleAssetsListeners, init } */
