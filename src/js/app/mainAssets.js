import browser from 'webextension-polyfill'
import { renderSwitchOption, renderSmallCardOption } from './components/renderSwitch'
import { icon_full_width } from './components/icons'

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
	w_prompt_textarea: '100%',
	chat_user_edit_icon_right: 'calc(0% + 2rem)',
	chat_user_edit_icon_top: '100%',
	chat_user_edit_icon_transform: 'translateY(-1.25rem)',
}

let assetsHtmlCode = `
    <section id="sectionAssets" class="gpth-assets">
        ${renderSwitchOption({
			inputId: 'gpth-full-width',
			isChecked: false,
			icon: icon_full_width,
			textTitle: 'Chat Full Width',
			// textSubtitle: 'Maximize the chat layout and prompt field to fill the screen',
			textSubtitle: "Expand chat and prompt field to screen's edge for wider conversation view",
		})}

		<div class="grid items-center gap-2 grid-cols-2">
			${renderSmallCardOption({
				name: 'Chat Custom Width',
				inputId: 'gpth-full-width-custom',
				inputType: 'range',
				inputValue: FW_DEFAULTS.w_chat_gpt,
				inputPlaceholder: '100%',
				min: 0,
				max: 100,
				unit: '%',
			})}
			${renderSmallCardOption({
				name: 'Prompt Field Width',
				inputId: 'gpth-textarea-width-custom',
				inputType: 'range',
				inputValue: FW_DEFAULTS.w_prompt_textarea,
				inputPlaceholder: '100%',
				min: 0,
				max: 100,
				unit: '%',
			})}
		</div>
    </section>
`
function whenFullWidth() {
	applySettings({
		w_chat_user: FW_OPTIONS.w_chat_user,
		w_chat_gpt: FW_OPTIONS.w_chat_gpt,
		chat_user_edit_icon_right: FW_OPTIONS.chat_user_edit_icon_right,
		chat_user_edit_icon_top: FW_OPTIONS.chat_user_edit_icon_top,
		chat_user_edit_icon_transform: FW_OPTIONS.chat_user_edit_icon_transform,
	})
	saveSettings({
		w_chat_user: FW_OPTIONS.w_chat_user,
		w_chat_gpt: FW_OPTIONS.w_chat_gpt,
		chat_user_edit_icon_right: FW_OPTIONS.chat_user_edit_icon_right,
		chat_user_edit_icon_top: FW_OPTIONS.chat_user_edit_icon_top,
		chat_user_edit_icon_transform: FW_OPTIONS.chat_user_edit_icon_transform,
	})
	setInputCheckedValue('gpth-full-width', true)
}
function whenDefaultWidth() {
	applySettings({
		w_chat_user: FW_DEFAULTS.w_chat_user,
		w_chat_gpt: FW_DEFAULTS.w_chat_gpt,
		chat_user_edit_icon_right: FW_DEFAULTS.chat_user_edit_icon_right,
		chat_user_edit_icon_top: FW_DEFAULTS.chat_user_edit_icon_top,
		chat_user_edit_icon_transform: FW_DEFAULTS.chat_user_edit_icon_transform,
	})
	saveSettings({
		w_chat_user: FW_DEFAULTS.w_chat_user,
		w_chat_gpt: FW_DEFAULTS.w_chat_gpt,
		chat_user_edit_icon_right: FW_DEFAULTS.chat_user_edit_icon_right,
		chat_user_edit_icon_top: FW_DEFAULTS.chat_user_edit_icon_top,
		chat_user_edit_icon_transform: FW_DEFAULTS.chat_user_edit_icon_transform,
	})
	setInputCheckedValue('gpth-full-width', false)
}
function toggleChatFullWidth(e) {
	if (e.target.checked) {
		whenFullWidth()
	} else {
		whenDefaultWidth()
	}
}
function applySettings(settings) {
	Object.entries(settings).forEach(([key, value]) => {
		document.documentElement.style.setProperty(`--${key}`, value)

		// console.log(key, getComputedStyle(document.documentElement).getPropertyValue(`--${key}`))
	})
}
function setInputCheckedValue(inputSelector, isChecked) {
	const inputEl = document.querySelector(`.gpth-settings #${inputSelector}`)

	inputEl.checked = isChecked
}
// Function to save settings to Chrome Storage
async function saveSettings(settings) {
	try {
		await browser.storage.sync.set(settings)
	} catch (error) {
		console.error('Failed to save settings:', error)
	}
}
async function loadSettings() {
	try {
		const settings = await browser.storage.sync.get(Object.keys(FW_DEFAULTS))

		applySettings(settings)
		// Set the checked attribute based on the saved settings
		setInputCheckedValue('gpth-full-width', settings.w_chat_gpt === '100%')
	} catch (error) {
		console.error('Failed to load settings:', error)
	}
}

function handleChatCustomWidth(e) {
	console.log('handleChatCustomWidth()', e.target.value)

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

function handleAssetsListeners() {
	console.log('handleAssetsListeners() called')

	const selectors = {
		chatFullWidth: document.querySelector('.gpth-settings #gpth-full-width'),
		chatCustomWidth: document.querySelector('.gpth-settings #gpth-full-width-custom'),
	}

	selectors.chatFullWidth.addEventListener('change', toggleChatFullWidth)
	selectors.chatCustomWidth.addEventListener('change', handleChatCustomWidth)
}

// Load settings on page load
function init() {
	console.log('initAssets() called')
	loadSettings()
}

export { assetsHtmlCode, handleAssetsListeners, init }
