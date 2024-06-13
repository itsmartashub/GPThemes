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
        ${renderSwitchOption({
			inputId: 'gpth-auto-full-width',
			isChecked: true,
			icon: '🚗',
			textTitle: 'Auto Chat Full Width',
			// textSubtitle: 'Automatic a',
			textSubtitle: 'Automatic make chat full width when the sidebar is collapsed, and vice-versa',
		})}
    </section>
`

function handleAssetsListeners() {
	console.log('handleAssetsListeners() called')
}

export { assetsHtmlCode, handleAssetsListeners }
