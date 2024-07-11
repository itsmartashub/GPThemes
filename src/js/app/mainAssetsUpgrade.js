/* const keysToRemove = Object.keys(FW_DEFsAULTS) // ? DEV ONLY var - Get the keys from FW_DEFAULTS object */

import browser from 'webextension-polyfill'
import { renderSwitchOption, renderSmallCardOption } from './components/renderSwitch'
import { icon_full_width } from './components/icons'
import { renderButton } from './components/renderButtons'

const removePercentAndRem = (str) => str?.replace(/%|rem/g, '')

const FW_DEFAULTS = {
	// w_chat_user: 'initial',
	w_chat_user: '70%',
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

const keysToRemove = Object.keys(FW_DEFAULTS) // ? DEV ONLY var - Get the keys from FW_DEFAULTS object

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

const applySettings = (settings) => {
	Object.entries(settings).forEach(([key, value]) => {
		document.documentElement.style.setProperty(`--${key}`, value)
	})
}

const setElementProperty = (selector, property, value) => {
	const element = document.querySelector(selector)
	if (element) element[property] = value
}
const ensureValidPercentage = (value) => {
	const numValue = parseInt(value, 10)
	return isNaN(numValue) ? '0' : Math.max(0, Math.min(100, numValue)).toString()
}

const debounce = (func, delay) => {
	let timeoutId
	return (...args) => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => func(...args), delay)
	}
}

const saveSettings = async (settings) => {
	try {
		await browser.storage.sync.set(settings)
	} catch (error) {
		console.error('Failed to save settings:', error)
		// TODO: Show user-friendly error message
	}
}

const debouncedSaveSettings = debounce(saveSettings, 300)

const loadSettings = async () => {
	try {
		const settings = await browser.storage.sync.get(null)
		currentSettings = { ...FW_DEFAULTS, ...settings }
		isSyncEnabled = currentSettings.w_chat_gpt === currentSettings.w_prompt_textarea

		applySettings(currentSettings)
		updateUI(currentSettings)
	} catch (error) {
		console.error('Failed to load settings:', error)
		// TODO: Show user-friendly error message
	}
}

const updateUI = (settings) => {
	const isFullWidth = settings.w_chat_gpt === '100%'
	const textareaWidthSlider = document.querySelector('#gpth-textarea-width-custom')
	const textareaWidthCard = textareaWidthSlider?.closest('.card')

	setElementProperty('.gpth-settings #gpth-full-width', 'checked', isFullWidth)
	setElementProperty('.gpth-settings #gpth-full-width-custom', 'value', removePercentAndRem(settings.w_chat_gpt))
	setElementProperty(
		'.gpth-settings #range-output-gpth-full-width-custom',
		'textContent',
		removePercentAndRem(settings.w_chat_gpt)
	)

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

	if (textareaWidthSlider) {
		textareaWidthSlider.disabled = isSyncEnabled
	}
	if (textareaWidthCard) {
		textareaWidthCard.classList.toggle('is-locked', isSyncEnabled)
	}

	// setElementProperty('.gpth-settings #gpth-textarea-width-custom', 'disabled', isSyncEnabled)

	updateEditIconPosition(settings.w_chat_gpt)
}

const updateEditIconPosition = (chatWidth) => {
	const chatWidthValue = parseInt(removePercentAndRem(chatWidth))
	const iconSettings = chatWidthValue > 48 ? FW_OPTIONS : FW_DEFAULTS

	Object.assign(currentSettings, {
		chat_user_edit_icon_right: iconSettings.chat_user_edit_icon_right,
		chat_user_edit_icon_top: iconSettings.chat_user_edit_icon_top,
		chat_user_edit_icon_transform: iconSettings.chat_user_edit_icon_transform,
	})

	applySettings(currentSettings)
}

const toggleChatFullWidth = (e) => {
	const isFullWidth = e.target.checked
	const width = isFullWidth ? '100%' : FW_DEFAULTS.w_chat_gpt

	Object.assign(currentSettings, {
		w_chat_gpt: width,
		w_chat_user: width,
		w_prompt_textarea: isSyncEnabled ? width : currentSettings.w_prompt_textarea,
	})

	applySettings(currentSettings)
	debouncedSaveSettings(currentSettings)
	updateUI(currentSettings)
}

const toggleSyncTextareaWithChatWidth = (e) => {
	isSyncEnabled = e.target.checked
	if (isSyncEnabled) {
		currentSettings.w_prompt_textarea = currentSettings.w_chat_gpt
	}
	applySettings(currentSettings)
	debouncedSaveSettings(currentSettings)
	updateUI(currentSettings)
}

// function handleChatCustomWidth(e) {
const handleWidthChange = (key, e) => {
	const value = `${ensureValidPercentage(e.target.value)}%`
	currentSettings[key] = value

	if (key === 'w_chat_gpt') {
		currentSettings.w_chat_user = value
		if (isSyncEnabled) {
			currentSettings.w_prompt_textarea = value
		}
		setElementProperty('.gpth-settings #gpth-full-width', 'checked', e.target.value === '100')
	} else if (key === 'w_prompt_textarea' && isSyncEnabled && value !== currentSettings.w_chat_gpt) {
		isSyncEnabled = false
		setElementProperty('.gpth-settings #gpth-sync-textarea-chat-width', 'checked', false)
	}

	applySettings(currentSettings)
	debouncedSaveSettings(currentSettings)
	updateUI(currentSettings)
}

const resetWidths = () => {
	currentSettings = { ...FW_DEFAULTS }
	isSyncEnabled = false
	applySettings(currentSettings)
	debouncedSaveSettings(currentSettings)
	updateUI(currentSettings)
}

const handleAssetsListeners = () => {
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
}

const init = () => {
	// removeSpecificStorageItems(keysToRemove)
	loadSettings()
	getAllStorageItems()
}

// ? =============== DEV ONLY fn ===============
async function getAllStorageItems() {
	try {
		const items = await browser.storage.sync.get(null)
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

export { assetsHtmlCode, handleAssetsListeners, init }
