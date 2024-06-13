import browser from 'webextension-polyfill'
import { renderSwitchOption } from './components/renderSwitch'

const DEFAULTS = {
	w_chat_user: 'initial',
	w_chat_gpt: '48rem',
	w_prompt_textarea: '48rem',
}

let assetsHtmlCode = `
    <section id="sectionAssets" class="gpth-assets">
        ${renderSwitchOption({
			inputId: 'gpth-full-width',
			isChecked: false,
			icon: '🖥️',
			textTitle: 'Chat Full Width',
			textSubtitle: 'Make the chat bubbles to take the full width',
			// textSubtitle: 'Make the chat',
		})}
    </section>
`

/* ${renderSwitchOption({
    inputId: 'gpth-auto-full-width',
    isChecked: true,
    icon: '🚗',
    textTitle: 'Auto Chat Full Width',
    // textSubtitle: 'Automatic a',
    textSubtitle: 'Automatic make chat full width when the sidebar is collapsed, and vice-versa',
})} */

// function toggleChatFullWidth(e) {
// 	/* TODO: FIX THIS, this is not good logic when we are not on conversation page, so we need to fix this by editing the CSS var and not adding the class on main */
// 	const mainConversation = document.querySelector("main:has([data-testid^='conversation-turn-'])")

// 	if (!mainConversation) return alert('No main conversation found')

// 	if (e.target.checked && !mainConversation.classList.contains('gpth-chat-bubble-full-width')) {
// 		mainConversation?.classList.add('gpth-chat-bubble-full-width')
// 	} else {
// 		mainConversation?.classList.remove('gpth-chat-bubble-full-width')
// 	}
// }
function toggleChatFullWidth(e) {
	console.log('checked', e.target.checked)

	if (e.target.checked) {
		applySettings({ w_chat_user: '100%', w_chat_gpt: '100%' })
		saveSettings({ w_chat_user: '100%', w_chat_gpt: '100%' })
	} else {
		applySettings({ w_chat_user: DEFAULTS.w_chat_user, w_chat_gpt: DEFAULTS.w_chat_gpt })
		saveSettings({ w_chat_user: DEFAULTS.w_chat_user, w_chat_gpt: DEFAULTS.w_chat_gpt })
	}
}
function applySettings(settings) {
	Object.entries(settings).forEach(([key, value]) => {
		document.documentElement.style.setProperty(`--${key}`, value)

		console.log(key, getComputedStyle(document.documentElement).getPropertyValue(`--${key}`))
	})
}
// function setInputFieldValue(inputSelector, inputVal) {
// 	const inputEl = document.querySelector(`.gpth-settings #${inputSelector}`)

// 	inputEl.value = inputVal
// }
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
		const settings = await browser.storage.sync.get(Object.keys(DEFAULTS))

		applySettings(settings)
	} catch (error) {
		console.error('Failed to load settings:', error)
	}
}

function handleAssetsListeners() {
	console.log('handleAssetsListeners() called')

	const selectors = {
		chatFullWidth: document.querySelector('.gpth-settings #gpth-full-width'),
		// gpthAutoFullWidth: document.querySelector('.gpth-settings #gpth-auto-full-width'),
	}

	selectors.chatFullWidth.addEventListener('change', toggleChatFullWidth)
}

// Load settings on page load
function init() {
	console.log('initAssets() called')
	loadSettings()
}
// init()

export { assetsHtmlCode, handleAssetsListeners, init }
