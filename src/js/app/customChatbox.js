import browser from 'webextension-polyfill'

import { SELECTORS } from './config/selectors'
import { icon_taller_height } from './components/icons'
import { q } from '../utils/dom'
import { renderToggle } from './components/renderToggles'

import { renderUserAccentBgToggle, handleUserAccentBgListeners } from './custom-colors/accentUserBubble'
import { Notify } from './components/renderNotify'

// Storage key for preferences
const STORAGE_KEY = 'customChatboxHeightState'

function enableCustomHeight() {
	document.documentElement.classList.add('gpth-chatbox--custom-height')
}
function disableCustomHeight() {
	document.documentElement.classList.remove('gpth-chatbox--custom-height')
}

function generateHTML() {
	return `
		<h4 class="${SELECTORS.SUBHEADING}">Other</h4>
		${renderToggle({
			id: SELECTORS?.CHATBOX?.TOGGLE_MAX_HEIGHT_ID,
			checked: false,
			label: 'Expand Chatbox',
			subtitle:
				'Increase the height of the message box to fit more content. Warning: Always disabled on "Library" and  "New chat" initial page!',
			icon: icon_taller_height,
			card: true,
			className: '',
		})}

		${renderUserAccentBgToggle()}
	`
}

async function setupListeners() {
	const input = q(`#${SELECTORS.CHATBOX.TOGGLE_MAX_HEIGHT_ID}`)
	if (!input) return

	// Sync with saved state
	const state = await loadState()
	input.checked = !!state

	input.addEventListener('change', async (event) => {
		const target = event.target
		const chatbox = q(SELECTORS.CHATBOX.HEIGHT)

		if (!chatbox) {
			Notify.error('Chatbox not found on this page.')
			// Revert the toggle so UI stays truthful
			target.checked = !target.checked
			return
		}

		if (target.checked) {
			enableCustomHeight()
		} else {
			disableCustomHeight()
		}

		saveState(target.checked)
	})
}

async function saveState(state = false) {
	try {
		await browser.storage.sync.set({ [STORAGE_KEY]: state })
		return true
	} catch (error) {
		Notify.error('Failed to save Chatbox height preference')
		console.error('Failed to save Chatbox height  preference:', error)
		return false
	}
}

async function loadState() {
	try {
		const result = await browser.storage.sync.get(STORAGE_KEY)
		return result[STORAGE_KEY] || false
	} catch (error) {
		Notify.error('Failed to load Chatbox custom height preference')
		console.error('Failed to load Chatbox height preference:', error)
		return false
	}
}

function init() {
	// Only apply saved state on load; do not require settings UI to be present
	loadState().then((state) => {
		if (state) {
			enableCustomHeight()
		} else {
			disableCustomHeight()
		}
	})
}

export { generateHTML as renderCustomChatboxHeight, init, setupListeners as handleCustomChatboxListeners }
