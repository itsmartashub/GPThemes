import browser from 'webextension-polyfill'
import { renderSwitchOption, renderSmallCardOption } from './components/renderSwitch'
import { icon_full_width } from './components/icons'
import { renderButton } from './components/renderButtons'

const removePercentAndRem = (str) => str?.replace(/%|rem/g, '') // /%/g

// Example keys to remove
// Get the keys from FW_DEFAULTS object

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

// let isTextareaSync = false
// let isFullWidth = false

const keysToRemove = Object.keys(FW_DEFAULTS)

let assetsHtmlCode = `
    <section id="sectionAssets" class="gpth-assets">

		<div class="gpth-assets__custom-width mb-4">
			${renderSmallCardOption({
				name: 'Chats Width',
				inputId: 'gpth-full-width-custom',
				inputType: 'range',
				inputValue: FW_DEFAULTS.w_chat_gpt,
				inputPlaceholder: '100%',
				min: 0,
				max: 100,
				unit: '%',
			})}
			${renderSmallCardOption({
				name: 'Message Width',
				inputId: 'gpth-textarea-width-custom',
				inputType: 'range',
				inputValue: FW_DEFAULTS.w_prompt_textarea,
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

// let isTextareaSync = document.querySelector('.gpth-settings #gpth-sync-textarea-chat-width').checked ? true : false
// let isFullWidth = document.querySelector('.gpth-settings #gpth-full-width').checked ? true : false

function whenFullWidth() {
	// isFullWidth = true
	// const customTextareaValue = document.querySelector('#gpth-textarea-width-custom').value
	const textareaCSSVar = getComputedStyle(document.documentElement).getPropertyValue('--w_prompt_textarea')

	// let isTextareaSync = FW_OPTIONS.w_chat_gpt === textareaCSSVar

	// console.log({ textareaCSSVar, isTextareaSync })
	console.log('whenFullWidth', textareaCSSVar)

	let fwOptions = {
		...FW_OPTIONS,
		w_prompt_textarea: textareaCSSVar,
	}

	applySettings(fwOptions)
	saveSettings(fwOptions)
	// saveSettings({ ...fwOptions, isFullWidth, isTextareaSync })

	setInputCheckedValue('gpth-sync-textarea-chat-width', FW_OPTIONS.w_chat_gpt === textareaCSSVar)
	setInputFieldValue('gpth-textarea-width-custom', removePercentAndRem(fwOptions.w_prompt_textarea))
	setRangeOutput('gpth-textarea-width-custom', removePercentAndRem(fwOptions.w_prompt_textarea))

	setInputCheckedValue('gpth-full-width', fwOptions.w_chat_gpt === '100%')
	setInputFieldValue('gpth-full-width-custom', removePercentAndRem(fwOptions.w_chat_gpt))
	setRangeOutput('gpth-full-width-custom', removePercentAndRem(fwOptions.w_chat_gpt))
}
function whenDefaultWidth() {
	// isFullWidth = false
	// const customTextareaValue = document.querySelector('#gpth-textarea-width-custom').value
	const textareaCSSVar = getComputedStyle(document.documentElement).getPropertyValue('--w_prompt_textarea')
	console.log('whenDefaultWidth', textareaCSSVar)

	// console.log('whenDefaultWidth', { textareaCSSVar }, FW_DEFAULTS.w_chat_gpt)

	// let isTextareaSync = FW_DEFAULTS.w_chat_gpt === textareaCSSVar

	// console.log({ textareaCSSVar, isTextareaSync })

	let dwOptions = {
		w_chat_user: 'initial',
		w_chat_gpt: '48rem',
		w_prompt_textarea: textareaCSSVar,
		// w_prompt_textarea:
		// 	FW_DEFAULTS.w_chat_gpt === `${customTextareaValue}%` ? FW_DEFAULTS.w_chat_gpt : `${customTextareaValue}%`,
		chat_user_edit_icon_right: '100%',
		chat_user_edit_icon_top: '0',
		chat_user_edit_icon_transform: 'unset',
	}

	applySettings(dwOptions)
	saveSettings(dwOptions)
	// saveSettings({ ...dwOptions, isFullWidth, isTextareaSync })

	setInputCheckedValue('gpth-sync-textarea-chat-width', dwOptions.w_chat_gpt === dwOptions.w_prompt_textarea)
	// setInputCheckedValue('gpth-sync-textarea-chat-width', dwOptions.w_chat_gpt === '100%')
	setInputFieldValue('gpth-textarea-width-custom', removePercentAndRem(dwOptions.w_prompt_textarea))
	setRangeOutput('gpth-textarea-width-custom', removePercentAndRem(dwOptions.w_prompt_textarea))

	setInputCheckedValue('gpth-full-width', dwOptions.w_chat_gpt === '100%')
	setRangeOutput('gpth-full-width-custom', removePercentAndRem(dwOptions.w_chat_gpt))
	setInputFieldValue('gpth-full-width-custom', removePercentAndRem(dwOptions.w_chat_gpt))
}
function toggleChatFullWidth(e) {
	if (e.target.checked) {
		whenFullWidth()
	} else {
		whenDefaultWidth()
	}
}
function toggleSyncTextareaWithChatWidth(e) {
	isTextareaSync = e.target.checked

	if (e.target.checked) {
		const wChatGpt = getComputedStyle(document.documentElement).getPropertyValue('--w_chat_gpt')

		applySettings({
			w_prompt_textarea: 'var(--w_chat_gpt)',
		})
		saveSettings({
			w_prompt_textarea: wChatGpt,
		})
		setInputFieldValue('gpth-textarea-width-custom', removePercentAndRem(wChatGpt))
		setRangeOutput('gpth-textarea-width-custom', removePercentAndRem(wChatGpt))
	} else {
		applySettings({
			w_prompt_textarea: FW_DEFAULTS.w_prompt_textarea,
		})
		saveSettings({
			w_prompt_textarea: FW_DEFAULTS.w_prompt_textarea,
		})
		setRangeOutput('gpth-textarea-width-custom', removePercentAndRem(FW_DEFAULTS.w_prompt_textarea))
		setInputFieldValue('gpth-textarea-width-custom', removePercentAndRem(FW_DEFAULTS.w_prompt_textarea))
	}

	setInputCheckedValue('gpth-sync-textarea-chat-width', isTextareaSync)
}
function applySettings(settings) {
	console.log('applySettings', settings)

	Object.entries(settings).forEach(([key, value]) => {
		document.documentElement.style.setProperty(`--${key}`, value)
		// console.log(key, getComputedStyle(document.documentElement).getPropertyValue(`--${key}`))
	})
}
function setInputCheckedValue(inputSelector, isChecked) {
	const inputEl = document.querySelector(`.gpth-settings #${inputSelector}`)

	inputEl.checked = isChecked
}
function setInputFieldValue(inputSelector, inputVal) {
	const inputEl = document.querySelector(`.gpth-settings #${inputSelector}`)

	inputEl.value = inputVal
}
function setRangeOutput(inputSelector, inputVal) {
	const outputRangeEl = document.querySelector(`.gpth-settings #range-output-${inputSelector}`)

	outputRangeEl.textContent = inputVal
}
// Function to save settings to Chrome Storage
async function saveSettings(settings) {
	console.log('saveSettings', settings)

	try {
		await browser.storage.sync.set(settings)
	} catch (error) {
		console.error('Failed to save settings:', error)
	}
}
async function loadSettings() {
	try {
		// const settings = await browser.storage.sync.get(Object.keys({ ...FW_DEFAULTS, isFullWidth, isTextareaSync }))
		const settings = await browser.storage.sync.get(Object.keys(FW_DEFAULTS))
		console.log('loadSettings', settings)

		// const { isTextareaSync, isFullWidth, ...rest } = settings

		// isTextareaSync = settings.isTextareaSync
		// isFullWidth = settings.isFullWidth

		applySettings(settings)
		// Set the checked attribute based on the saved settings
		// setInputCheckedValue('gpth-full-width', isFullWidth)
		setInputCheckedValue('gpth-full-width', settings.w_chat_gpt === '100%')
		setInputFieldValue('gpth-full-width-custom', removePercentAndRem(settings.w_chat_gpt))
		setRangeOutput('gpth-full-width-custom', removePercentAndRem(settings.w_chat_gpt))

		setInputCheckedValue('gpth-sync-textarea-chat-width', settings.w_chat_gpt === settings.w_prompt_textarea)
		setInputFieldValue('gpth-textarea-width-custom', removePercentAndRem(settings.w_prompt_textarea))
		setRangeOutput('gpth-textarea-width-custom', removePercentAndRem(settings.w_prompt_textarea))
	} catch (error) {
		console.error('Failed to load settings:', error)
	}
}

// Function to reset fonts to default
function resetWidths() {
	whenDefaultWidth()

	// applySettings(FW_DEFAULTS)
	// saveSettings({ ...FW_DEFAULTS, isFullWidth, isTextareaSync })

	// setRangeOutput('gpth-textarea-width-custom', removePercentAndRem(FW_DEFAULTS.w_prompt_textarea))
	// setInputFieldValue('gpth-textarea-width-custom', FW_DEFAULTS.w_prompt_textarea)
	// setInputCheckedValue('gpth-sync-textarea-chat-width', isTextareaSync)

	// setRangeOutput('gpth-full-width-custom', removePercentAndRem(FW_DEFAULTS.w_chat_gpt))
	// setInputFieldValue('gpth-full-width-custom', removePercentAndRem(FW_DEFAULTS.w_chat_gpt))
	// setInputCheckedValue('gpth-full-width', FW_DEFAULTS.isFullWidth)
}

function handleChatCustomWidth(e) {
	console.log('handleChatCustomWidth()', e.target.id)
	setRangeOutput('gpth-full-width-custom', e.target.value)
	setInputFieldValue('gpth-full-width-custom', e.target.value)

	if (e.target.value === '100') {
		whenFullWidth()
		return
	}

	applySettings({
		w_chat_gpt: `${e.target.value}%`,
	})
	saveSettings({
		w_chat_gpt: `${e.target.value}%`,
	})

	setInputCheckedValue('gpth-full-width', false)
}
function handleTextareaCustomWidth(e) {
	setRangeOutput('gpth-textarea-width-custom', e.target.value)
	setInputFieldValue('gpth-textarea-width-custom', e.target.value)

	applySettings({
		w_prompt_textarea: `${e.target.value}%`,
	})
	saveSettings({
		w_prompt_textarea: `${e.target.value}%`,
	})
	// setInputCheckedValue('gpth-full-width', false)
	setInputCheckedValue('gpth-full-width', false)
	setInputCheckedValue('gpth-sync-textarea-chat-width', false)
}

function handleAssetsListeners() {
	// console.log('handleAssetsListeners() called')

	const selectors = {
		chatFullWidth: document.querySelector('.gpth-settings #gpth-full-width'),
		syncTextareaWithChats: document.querySelector('.gpth-settings #gpth-sync-textarea-chat-width'),
		chatCustomWidth: document.querySelector('.gpth-settings #gpth-full-width-custom'),
		textareaCustomWidth: document.querySelector('.gpth-settings #gpth-textarea-width-custom'),
		btnReset: document.querySelector('.gpth-settings #resetWidths'),
	}

	selectors.chatFullWidth.addEventListener('change', toggleChatFullWidth)
	selectors.syncTextareaWithChats.addEventListener('change', toggleSyncTextareaWithChatWidth)
	selectors.chatCustomWidth.addEventListener('change', handleChatCustomWidth)
	selectors.textareaCustomWidth.addEventListener('change', handleTextareaCustomWidth)
	selectors.btnReset.addEventListener('click', resetWidths)
}

// Load settings on page load
function init() {
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
