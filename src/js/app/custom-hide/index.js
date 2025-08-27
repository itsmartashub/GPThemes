import browser from 'webextension-polyfill'
import { ELEMENTS } from '../config/hidden-els.js'
import { SELECTORS } from '../config/selectors'
// import { applyToggle, saveState, loadState } from '../utils/storage.js'
import { renderToggle } from '../components/renderToggles.js'
import { Notify } from '../components/renderNotify.js'
// import { q } from '../../utils/dom.js'
import { setCssVars } from '../../utils/setCssVar.js'

// Render section HTML (string)
function renderCustomHides() {
	const items = ELEMENTS.map((cfg) =>
		renderToggle({
			id: cfg.id,
			checked: cfg.isHidden,
			label: cfg.label,
			subtitle: cfg.subtitle,
			icon: cfg.icon,
			card: true,
			className: '',
		})
	).join('')

	return `
		<section id="${SELECTORS.HIDE.CONTAINER_ID}">
			<h4 class="${SELECTORS.SUBHEADING}">Hide elements</h4>
			<div class="grid grid-cols-[repeat(auto-fit,minmax(7rem,1fr))]">
				${items}
			</div>
		</section>
	`
}

// Hydrate and wire events after render
async function handleCustomHidesListeners() {
	const container = document.getElementById(SELECTORS.HIDE.CONTAINER_ID)
	if (!container) return

	for (const cfg of ELEMENTS) {
		const saved = await loadState(cfg.id)
		const initialHidden = typeof saved === 'boolean' ? saved : cfg.isHidden
		const input = container.querySelector(`#${cfg.id}`)
		if (input) input.checked = initialHidden
		applyToggle(cfg, initialHidden)
	}

	container.addEventListener('change', (e) => {
		const input = e.target
		if (!input || input.type !== 'checkbox') return
		const cfg = ELEMENTS.find((c) => c.id === input.id)
		if (!cfg) return
		applyToggle(cfg, input.checked)
	})
}

function applyToggle(cfg, isHidden) {
	// update CSS var on :root (ensure var name without leading --)
	const varName = String(cfg.cssVar || '').replace(/^--/, '')
	// if (varName) setCssVars({ [varName]: isHidden ? '1' : '0' })
	if (varName) setCssVars({ [varName]: isHidden ? 'none' : 'flex' })

	// persist state as hidden true/false
	saveState(cfg.id, isHidden)
}

async function loadState(key) {
	try {
		const obj = await browser.storage.sync.get(key)
		return obj?.[key]
	} catch (e) {
		Notify.error(`Failed to load ${key} toggle state`)
		console.error('Failed to load toggle state', key, e)
		return undefined
	}
}

async function saveState(key, value) {
	try {
		await browser.storage.sync.set({ [key]: value })
	} catch (e) {
		Notify.error(`Failed to save ${key} toggle state`)
		console.error('Failed to save toggle state', key, e)
	}
}

export { renderCustomHides, handleCustomHidesListeners }
