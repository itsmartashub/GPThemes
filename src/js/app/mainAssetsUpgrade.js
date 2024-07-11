import browser from 'webextension-polyfill'
import { renderSwitchOption, renderSmallCardOption } from './components/renderSwitch'
import { icon_full_width } from './components/icons'
import { renderButton } from './components/renderButtons'

const removePercentAndRem = (str) => str?.replace(/%|rem/g, '')

const FW_DEFAULTS = {
	w_chat_user: 'initial',
	w_chat_gpt: '48rem',
	w_prompt_textarea: '48rem',
	chat_user_edit_icon_right: '100%',
	chat_user_edit_icon_top: '0',
	chat_user_edit_icon_transform: 'unset',
}

const FW_OPTIONS = {
	w_chat_user: '100%',
	w_chat_gpt: '100%',
	chat_user_edit_icon_right: 'calc(0% + 2rem)',
	chat_user_edit_icon_top: '100%',
	chat_user_edit_icon_transform: 'translateY(-1.25rem)',
}

let currentSettings = { ...FW_DEFAULTS }
let isSyncEnabled = false

const keysToRemove = Object.keys(FW_DEFAULTS)

let assetsHtmlCode = `
    <section id="sectionAssets" class="gpth-assets">
        <div class="gpth-assets__custom-width mb-4">
            ${renderSmallCardOption({
				name: 'Chats Width',
				inputId: 'gpth-full-width-custom',
				inputType: 'range',
				inputValue: removePercentAndRem(FW_DEFAULTS.w_chat_gpt),
				inputPlaceholder: '100%',
				min: 0,
				max: 100,
				unit: '%',
			})}
            ${renderSmallCardOption({
				name: 'Message Width',
				inputId: 'gpth-textarea-width-custom',
				inputType: 'range',
				inputValue: removePercentAndRem(FW_DEFAULTS.w_prompt_textarea),
				inputPlaceholder: '100%',
				min: 0,
				max: 100,
				unit: '%',
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
				icon: icon_full_width,
				textTitle: 'Sync Width',
				textSubtitle: 'Adjust prompt field to match the chat width for a more streamlined and consistent view',
			})}
        </div>

        <footer class="grid mt-10">
            ${renderButton({ id: 'resetWidths', content: 'Reset All', disabled: false, className: 'btn-primary' })}
        </footer>
    </section>
`

function applySettings(settings) {
	Object.entries(settings).forEach(([key, value]) => {
		document.documentElement.style.setProperty(`--${key}`, value)
	})
}

function setInputCheckedValue(inputSelector, isChecked) {
	const inputEl = document.querySelector(`.gpth-settings #${inputSelector}`)
	if (inputEl) inputEl.checked = isChecked
}

// Add this helper function
function ensureValidPercentage(value) {
	const numValue = parseInt(value, 10)
	if (isNaN(numValue) || numValue < 0) return '0'
	if (numValue > 100) return '100'
	return numValue.toString()
}
function setRangeOutput(inputSelector, inputVal) {
	const outputRangeEl = document.querySelector(`.gpth-settings #range-output-${inputSelector}`)
	if (outputRangeEl) {
		outputRangeEl.textContent = ensureValidPercentage(inputVal)
	}
}
function setInputFieldValue(inputSelector, inputVal) {
	const inputEl = document.querySelector(`.gpth-settings #${inputSelector}`)
	if (inputEl) {
		inputEl.value = ensureValidPercentage(inputVal)
	}
}

async function saveSettings(settings) {
	try {
		await browser.storage.sync.set(settings)
	} catch (error) {
		console.error('Failed to save settings:', error)
	}
}

async function loadSettings() {
	try {
		const settings = await browser.storage.sync.get(null)
		currentSettings = { ...FW_DEFAULTS, ...settings }
		isSyncEnabled = currentSettings.w_chat_gpt === currentSettings.w_prompt_textarea

		applySettings(currentSettings)
		updateUI(currentSettings)
	} catch (error) {
		console.error('Failed to load settings:', error)
	}
}

function updateUI(settings) {
	const isFullWidth = settings.w_chat_gpt === '100%'

	setInputCheckedValue('gpth-full-width', isFullWidth)
	setInputFieldValue('gpth-full-width-custom', removePercentAndRem(settings.w_chat_gpt))
	setRangeOutput('gpth-full-width-custom', removePercentAndRem(settings.w_chat_gpt))

	setInputCheckedValue('gpth-sync-textarea-chat-width', isSyncEnabled)
	setInputFieldValue('gpth-textarea-width-custom', removePercentAndRem(settings.w_prompt_textarea))
	setRangeOutput('gpth-textarea-width-custom', removePercentAndRem(settings.w_prompt_textarea))

	// Disable textarea width slider when sync is enabled
	const textareaWidthSlider = document.querySelector('#gpth-textarea-width-custom')
	if (textareaWidthSlider) {
		textareaWidthSlider.disabled = isSyncEnabled
	}
}

function toggleChatFullWidth(e) {
	const isFullWidth = e.target.checked
	if (isFullWidth) {
		currentSettings.w_chat_gpt = '100%'
		if (isSyncEnabled) {
			currentSettings.w_prompt_textarea = '100%'
		}
	} else {
		currentSettings.w_chat_gpt = FW_DEFAULTS.w_chat_gpt
		if (isSyncEnabled) {
			currentSettings.w_prompt_textarea = FW_DEFAULTS.w_chat_gpt
		}
	}

	applySettings(currentSettings)
	saveSettings(currentSettings)
	updateUI(currentSettings)
}

function toggleSyncTextareaWithChatWidth(e) {
	isSyncEnabled = e.target.checked
	if (isSyncEnabled) {
		currentSettings.w_prompt_textarea = currentSettings.w_chat_gpt
	}
	applySettings(currentSettings)
	saveSettings(currentSettings)
	updateUI(currentSettings)
}

function handleChatCustomWidth(e) {
	const value = `${e.target.value}%`
	currentSettings.w_chat_gpt = value

	if (isSyncEnabled) {
		currentSettings.w_prompt_textarea = value
	}

	// Uncheck full width if it's not 100%
	if (e.target.value !== '100') {
		setInputCheckedValue('gpth-full-width', false)
	}

	applySettings(currentSettings)
	saveSettings(currentSettings)
	updateUI(currentSettings)
}

function handleTextareaCustomWidth(e) {
	const value = `${e.target.value}%`
	currentSettings.w_prompt_textarea = value

	// If user manually changes textarea width, disable sync
	if (isSyncEnabled && value !== currentSettings.w_chat_gpt) {
		isSyncEnabled = false
		setInputCheckedValue('gpth-sync-textarea-chat-width', false)
	}

	applySettings(currentSettings)
	saveSettings(currentSettings)
	updateUI(currentSettings)
}

function resetWidths() {
	currentSettings = { ...FW_DEFAULTS }
	isSyncEnabled = false
	applySettings(currentSettings)
	saveSettings(currentSettings)
	updateUI(currentSettings)
}

function handleAssetsListeners() {
	const selectors = {
		chatFullWidth: document.querySelector('.gpth-settings #gpth-full-width'),
		syncTextareaWithChats: document.querySelector('.gpth-settings #gpth-sync-textarea-chat-width'),
		chatCustomWidth: document.querySelector('.gpth-settings #gpth-full-width-custom'),
		textareaCustomWidth: document.querySelector('.gpth-settings #gpth-textarea-width-custom'),
		btnReset: document.querySelector('.gpth-settings #resetWidths'),
	}

	selectors.chatFullWidth?.addEventListener('change', toggleChatFullWidth)
	selectors.syncTextareaWithChats?.addEventListener('change', toggleSyncTextareaWithChatWidth)
	selectors.chatCustomWidth?.addEventListener('input', handleChatCustomWidth)
	selectors.textareaCustomWidth?.addEventListener('input', handleTextareaCustomWidth)
	selectors.btnReset?.addEventListener('click', resetWidths)
}

// Load settings on page load
function init() {
	// removeSpecificStorageItems(keysToRemove)
	loadSettings()

	getAllStorageItems()
	// removeSpecificStorageItems([...keysToRemove, 'isFullWidth', 'isTextareaSync'])
}

// Function to get all storage items
async function getAllStorageItems() {
	try {
		// Get all items from the local storage
		const items = await browser.storage.sync.get(null)
		console.log(items)
		return items
	} catch (error) {
		console.error('Error getting storage items:', error)
	}
}

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

export { assetsHtmlCode, handleAssetsListeners, init }
