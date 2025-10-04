import browser from 'webextension-polyfill'
import { renderToggle } from '../../js/app/components/renderToggles'
import { SK_TOGGLE_FAB } from '../../js/app/floatingBtn'

const CONFIG = {
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

	// Get current state
	const { [SK_TOGGLE_FAB]: isVisible = true } = await browser.storage.sync.get(SK_TOGGLE_FAB)

	container.innerHTML = renderFloatingBtnToggle(!isVisible)

	// Just update storage - sync will handle the rest
	document.getElementById(CONFIG.toggleId)?.addEventListener('change', async (e) => {
		await browser.storage.sync.set({
			[SK_TOGGLE_FAB]: !e.target.checked,
		})
	})
}

export { setupFloatingBtnToggle }
