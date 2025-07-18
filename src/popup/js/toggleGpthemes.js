import browser from 'webextension-polyfill'
import { renderToggle } from '../../js/app/components/renderToggles'

// Config for popup toggle
const CONFIG = {
	storageKey: 'floatingBtnVisible',
	toggleId: 'toggle-floating-btn-visibility',
	containerId: 'floating-btn-toggle-container',
	label: 'Hide GPThemes',
}

function renderFloatingBtnToggle(checked) {
	return renderToggle({
		id: CONFIG.toggleId,
		checked,
		label: CONFIG.label,
		card: true,
		className: '',
	})
}

async function setupFloatingBtnToggle() {
	const container = document.getElementById(CONFIG.containerId)
	if (!container) return

	const result = await browser.storage.sync.get(CONFIG.storageKey)
	const isHidden = result[CONFIG.storageKey] === false ? false : true
	container.innerHTML = renderFloatingBtnToggle(!isHidden) // checked means hidden

	const toggle = document.getElementById(CONFIG.toggleId)
	toggle.addEventListener('change', async (e) => {
		const isVisible = !e.target.checked // checked means hidden
		await browser.storage.sync.set({ [CONFIG.storageKey]: isVisible })
		await broadcastFloatingBtnVisibility(isVisible)
	})
}

export { setupFloatingBtnToggle }
