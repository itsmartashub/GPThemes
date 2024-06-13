import browser from 'webextension-polyfill'
import { renderSwitchOption } from './components/renderSwitch'

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

function toggleChatFullWidth(e) {
	const mainConversation = document.querySelector("main:has([data-testid^='conversation-turn-'])")

	console.log(e.target.checked, e.target.id)
	console.log(mainConversation)

	if (!mainConversation) return

	if (e.target.checked && !mainConversation.classList.contains('gpth-chat-bubble-full-width')) {
		mainConversation?.classList.add('gpth-chat-bubble-full-width')
	} else {
		mainConversation?.classList.remove('gpth-chat-bubble-full-width')
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

export { assetsHtmlCode, handleAssetsListeners }
