import browser from 'webextension-polyfill'
import { ELEMENTS } from '../config/hidden-els.js'
import { SELECTORS } from '../config/selectors'
import { renderToggle } from '../components/renderToggles.js'
import { Notify } from '../components/renderNotify.js'
import { setCssVars } from '../../utils/setCssVar.js'

// Precompute map for O(1) lookups
const ELEMENTS_MAP = new Map(ELEMENTS.map((cfg) => [cfg.id, cfg]))

// Render section HTML (string)
function renderCustomHides() {
	if (!Array.isArray(ELEMENTS) || ELEMENTS.length === 0) {
		console.warn('ELEMENTS array is empty or invalid')
		return ''
	}

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
	if (!container) {
		Notify.warning(`Container with ID ${SELECTORS.HIDE.CONTAINER_ID} not found`)
		return
	}

	try {
		// Load all states in parallel
		const savedStates = await browser.storage.sync.get(ELEMENTS.map((cfg) => cfg.id))

		console.log('[🎨GPThemes]: Loaded toggle states', savedStates)

		for (const cfg of ELEMENTS) {
			const saved = savedStates?.[cfg.id]
			const isHidden = typeof saved === 'boolean' ? saved : cfg.isHidden

			const input = container.querySelector(`#${cfg.id}`)
			if (input) input.checked = isHidden

			applyToggle(cfg, isHidden)
		}
	} catch (e) {
		Notify.error('Failed to load toggle states')
		console.error('Failed to load toggle states', e)
	}

	container.addEventListener('change', handleToggleChange)
}

function handleToggleChange(e) {
	if (!e.target.matches('input[type="checkbox"]')) return
	const { id, checked } = e.target
	const cfg = ELEMENTS_MAP.get(id)
	if (cfg) applyToggle(cfg, checked)
}

function applyToggle(cfg, isHidden) {
	// update CSS var on :root (ensure var name without leading --)
	const varName = String(cfg.cssVar || '').replace(/^--/, '')
	if (!varName) return

	// Store boolean as "0/1" for DRY CSS mapping
	// setCssVars({ [varName]: isHidden ? '1' : '0' })
	// setCssVars({ [varName]: isHidden ? 'none' : 'flex' })
	if (isHidden) {
		// 1 = hidden
		setCssVars({ [varName]: '1' })
	} else {
		// 0 = remove var → revert to site default
		setCssVars({ [varName]: null }) // or delete inline style
	}

	// persist state as hidden true/false
	saveState(cfg.id, isHidden)
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
