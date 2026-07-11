import { $, ROOT_HTML } from '../../utils/dom.js'
import { getItems, setItem } from '../../utils/storage.js'
import { Notify } from '../components/renderNotify.js'
import { renderToggle } from '../components/renderToggles.js'
import { ELEMENTS } from '../config/consts-hidden-els.js'
import { SELECTORS } from '../config/selectors.js'
import {
	disconnectSidebarPillMarkers,
	observeSidebarPillMarkers,
	syncSidebarPillMarkers,
} from './sidebarPills.js'

const ELEMENTS_MAP = new Map(ELEMENTS.map((config) => [config.id, config]))
const PILL_TOGGLE_IDS = new Set([
	SELECTORS.HIDE.RECENTS_PILL.TOGGLE_ID,
	SELECTORS.HIDE.GPTS_PILL.TOGGLE_ID,
])

let currentStates = {}
let initialized = false
let mountedContainer = null
let mountToken = 0

function templateHTML() {
	if (!Array.isArray(ELEMENTS) || ELEMENTS.length === 0) {
		console.warn('ELEMENTS array is empty or invalid')
		return ''
	}

	const items = ELEMENTS.map((config) =>
		renderToggle({
			id: config.id,
			checked: config.isHidden,
			label: config.label,
			subtitle: config.subtitle,
			icon: config.icon,
			card: true,
			className: '',
		}),
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

async function saveState(config, value) {
	try {
		await setItem(config.storageKey, value)
		const element = config.label?.replace('Hide ', '') || 'Element'
		value ? Notify.info(`😶‍🌫️ ${element} hidden`) : Notify.success(`👁️ ${element} shown`)
		return true
	} catch (error) {
		Notify.error('Failed to hide element')
		console.error('Failed to save toggle state:', config.storageKey, error)
		return false
	}
}

async function loadState() {
	return getItems(ELEMENTS.map((config) => config.storageKey))
}

function applyState(config, isHidden) {
	ROOT_HTML.toggleAttribute(config.dataAttr, isHidden)
}

function shouldObserveSidebarPills() {
	return ELEMENTS.some(
		(config) => PILL_TOGGLE_IDS.has(config.id) && currentStates[config.storageKey] === true,
	)
}

function syncSidebarPillObservation() {
	if (shouldObserveSidebarPills()) {
		observeSidebarPillMarkers()
		syncSidebarPillMarkers()
	} else {
		disconnectSidebarPillMarkers()
	}
}

function updateInputs(container) {
	for (const config of ELEMENTS) {
		const input = $(`#${config.id}`, container)
		if (input) input.checked = currentStates[config.storageKey] ?? config.isHidden
	}
}

async function onChange({ target }) {
	if (!target.matches('input[type="checkbox"]')) return

	const config = ELEMENTS_MAP.get(target.id)
	if (!config) return

	const element = $(config.selector)
	if (!element && !config.allowMissing) {
		Notify.error(`${config.label.replace('Hide ', '')} not found on this page`)
		target.checked = currentStates[config.storageKey] ?? config.isHidden
		return
	}

	const isHidden = target.checked
	currentStates[config.storageKey] = isHidden
	applyState(config, isHidden)
	if (PILL_TOGGLE_IDS.has(config.id)) syncSidebarPillObservation()
	await saveState(config, isHidden)
}

async function init() {
	const savedStates = await loadState()
	currentStates = {}

	for (const config of ELEMENTS) {
		const saved = savedStates?.[config.storageKey]
		const isHidden = typeof saved === 'boolean' ? saved : config.isHidden
		currentStates[config.storageKey] = isHidden
		applyState(config, isHidden)
	}

	syncSidebarPillObservation()
	initialized = true
	return currentStates
}

async function mount() {
	const token = ++mountToken
	const container = document.getElementById(SELECTORS.HIDE.CONTAINER_ID)
	if (!container) {
		console.warn(`Element with ID ${SELECTORS.HIDE.CONTAINER_ID} not found`)
		return
	}

	if (!initialized) await init()
	if (token !== mountToken || !container.isConnected) return

	updateInputs(container)
	container.removeEventListener('change', onChange)
	container.addEventListener('change', onChange)
	mountedContainer = container
}

function cleanup() {
	mountToken++
	mountedContainer?.removeEventListener('change', onChange)
	mountedContainer = null
	disconnectSidebarPillMarkers()
	initialized = false
}

export { cleanup, init, mount, templateHTML as renderCustomHides }
