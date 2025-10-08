import { getItems, setItem } from '../../utils/storage.js'
import { $, setVar, removeVar } from '../../utils/dom.js'
import { ELEMENTS } from '../config/hidden-els.js'
import { SELECTORS } from '../config/selectors'
import { renderToggle } from '../components/renderToggles.js'
import { Notify } from '../components/renderNotify.js'

// Precompute map for O(1) lookups
const ELEMENTS_MAP = new Map(ELEMENTS.map((cfg) => [cfg.id, cfg]))

// Render section HTML (string)
function templateHTML() {
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

async function saveState(key, value) {
	try {
		await setItem(key, value)
		let element = key.startsWith('hide') ? key.slice(4) : 'Element'
		// Notify.success(`${key.startsWith('hide') ? key.slice(4) : key} ${value ? 'hidden' : 'shown'}`)
		value ? Notify.info(`😶‍🌫️ ${element} hidden`) : Notify.success(` 👁️ ${element} shown`)
	} catch (e) {
		Notify.error(`Failed to hide element`)
		console.error('Failed to save toggle state', key, e)
	}
}
// Load saved state from storage
async function loadState() {
	try {
		const result = await getItems(ELEMENTS.map((cfg) => cfg.id)) // boolean: true | false | null
		return !!result
	} catch (error) {
		handleError('Failed to load user accent bubble preference', error)
		return false
	}
}

// Apply CSS var without saving
function applyCss(cssVar, isHidden) {
	if (!cssVar) return

	if (isHidden) setVar(cssVar, '1')
	else removeVar(cssVar)
}

// destructure e.target
function handleChange({ target }) {
	if (!target.matches('input[type="checkbox"]')) return
	console.log(target)

	const { id } = target
	const cfg = ELEMENTS_MAP.get(id)
	const element = $(cfg?.selector)

	if (!element) {
		console.warn(`Element with ID ${id} not found`)
		Notify.warning('Element not found')
		target.checked = !target.checked
		return
	}

	const isHidden = target.checked
	applyCss(cfg.cssVar, isHidden)
	saveState(cfg.storageKey, isHidden)
}

// Hydrate and wire events after render
async function mount() {
	const container = document.getElementById(SELECTORS.HIDE.CONTAINER_ID)
	if (!container) {
		Notify.warning(`Element with ID ${SELECTORS.HIDE.CONTAINER_ID} not found`)
		return
	}

	try {
		// Load all states in parallel
		const savedStates = await loadState()

		// Apply saved states
		for (const cfg of ELEMENTS) {
			const saved = savedStates?.[cfg.id]
			const isHidden = typeof saved === 'boolean' ? saved : cfg.isHidden

			const input = $(`#${cfg.id}`, container)
			if (input) input.checked = isHidden
			applyCss(cfg.cssVar, isHidden)
		}
	} catch (e) {
		Notify.error('Failed to load toggle states')
		console.error('Failed to load toggle states', e)
	}

	container.addEventListener('change', handleChange)
}

// // Apply CSS vars only (no DOM dependency)
// async function init() {
// 	try {
// 		const savedStates = await loadState()
// 		for (const cfg of ELEMENTS) {
// 			const saved = savedStates?.[cfg.id]
// 			const isHidden = typeof saved === 'boolean' ? saved : cfg.isHidden
// 			applyCss(cfg, isHidden)
// 		}
// 	} catch (e) {
// 		Notify.error('Failed to load toggle states')
// 		console.error('Failed to load toggle states', e)
// 	}
// }

export { templateHTML as renderCustomHides, mount }
