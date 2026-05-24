import { PFX } from './config/consts.js'
import { SELECTORS } from './config/selectors.js'
import {
	cleanup as cleanupColors,
	init as initColors,
	mount as mountColors,
	renderColorsTab,
} from './custom-colors/index.js'
import {
	cleanup as cleanupFonts,
	init as initFonts,
	mount as mountFonts,
	renderFontsTab,
} from './custom-fonts/index.js'
import {
	cleanup as cleanupLayouts,
	init as initWidths,
	mount as mountWidths,
	renderLayoutsTab,
} from './custom-layouts/index.js'

// =====================================================
// STATE - global state (cached refs, constants)
// =====================================================
let $settings = null
let $tabButtons = []
let $tabPanes = []
let isSettingsOpen = false
let tabButtonsContainer = null
let settingsListenersAttached = false
let settingsMountFrame = null

const ACTIVE_CLASS = 'active'
const HIDDEN_CLASS = 'hidden'

const TABS_CONFIG = [
	{
		id: 'colors',
		label: 'Color',
		render: renderColorsTab,
		init: initColors,
		mount: mountColors,
		cleanup: cleanupColors,
	},
	{
		id: 'fonts',
		label: 'Font',
		render: renderFontsTab,
		init: initFonts,
		mount: mountFonts,
		cleanup: cleanupFonts,
	},
	{
		id: 'layout',
		label: 'Layout',
		render: renderLayoutsTab,
		init: initWidths,
		mount: mountWidths,
		cleanup: cleanupLayouts,
	},
]

// =====================================================
// TEMPLATE - UI rendergn
// =====================================================
function templateHTML() {
	const buttons = TABS_CONFIG.map(
		({ label }, i) => `
			<button class="${SELECTORS.SETTINGS.TABS.BUTTON} py-2 px-4 focus:outline-none text-center ${
				i === 0 ? ACTIVE_CLASS : ''
			}" data-tab="${i}">
				${label}
			</button>`,
	).join('')

	const panes = TABS_CONFIG.map(
		({ id, render }, i) => `
			<div id="${PFX}-tab-${id}"
				class="${SELECTORS.SETTINGS.TABS.PANE} ${i === 0 ? ACTIVE_CLASS : HIDDEN_CLASS}">
				${render()}
			</div>`,
	).join('')

	return `
		<header class="mb-5">
			<h2 class="text-center font-medium gpth-settings__title">
				<span class="font-semibold">GPThemes</span> Customization
			</h2>
		</header>
		<main>
			<div class="${SELECTORS.SETTINGS.TABS.ROOT}">
				<div class="${SELECTORS.SETTINGS.TABS.BUTTONS} p-1 font-semibold mb-5">
					${buttons}
				</div>
				<div class="${SELECTORS.SETTINGS.TABS.CONTENT}">
					${panes}
				</div>
			</div>
		</main>`
}

// =====================================================
// Lifecycle: CREATE (build DOM, init modules, mount)
// =====================================================
async function createSettings() {
	// console.log('[CREATE SETTINGS]')
	const existing = document.querySelector(`.${SELECTORS.SETTINGS.ROOT}`)
	if (existing) {
		setElements(existing)
		addListeners()
		return existing
	}

	// 1. Create root container
	const el = document.createElement('div')
	el.className = `${SELECTORS.SETTINGS.ROOT} fixed flex flex-col`
	el.setAttribute('role', 'dialog')
	el.setAttribute('aria-label', 'GPThemes customization')
	el.setAttribute('aria-hidden', 'true')
	el.innerHTML = templateHTML()

	// 2. Append to DOM FIRST
	document.body.appendChild(el)

	// 3. Cache elements AFTER they're in DOM
	setElements(el)

	// 4. Init modules in parallel, then mount sequentially after DOM ready
	const results = await Promise.allSettled(TABS_CONFIG.map(({ init }) => init()))

	results.forEach((result, index) => {
		if (result.status === 'rejected') {
			console.error(`[Settings] ${TABS_CONFIG[index].id} init failed:`, result.reason)
		}
	})

	//  Wait for next tick to ensure DOM is fully ready
	settingsMountFrame = requestAnimationFrame(() => {
		settingsMountFrame = null
		if ($settings !== el || !el.isConnected) return

		// 5. Mount modules
		TABS_CONFIG.forEach(({ mount }) => {
			mount(el)
		})
		// 6. Attach global listeners
		addListeners()
	})

	return el
}

// =====================================================
// ELEMENTS - cache DOM elemnt references
// =====================================================
function setElements(root) {
	$settings = root
	tabButtonsContainer = $settings.querySelector(`.${SELECTORS.SETTINGS.TABS.BUTTONS}`)
	$tabButtons = [...$settings.querySelectorAll(`.${SELECTORS.SETTINGS.TABS.BUTTON}`)]
	$tabPanes = [...$settings.querySelectorAll(`.${SELECTORS.SETTINGS.TABS.PANE}`)]
}

// =====================================================
// LISTENERS
// =====================================================
function addListeners() {
	if (settingsListenersAttached || !tabButtonsContainer) return

	tabButtonsContainer.addEventListener('click', onTabsSwitching)
	settingsListenersAttached = true
	// handleTabsSwitching()
}

function removeListeners() {
	if (!settingsListenersAttached || !tabButtonsContainer) return

	tabButtonsContainer.removeEventListener('click', onTabsSwitching)
	settingsListenersAttached = false
}

function onClickOutside(e) {
	const isClickInside = $settings.contains(e.target)
	const isToggleBtn = e.target.closest?.(`#${SELECTORS.SETTINGS.OPEN_BTN}`)

	if (!isClickInside && !isToggleBtn) onCloseSettings()
}

function onKeydown(e) {
	if (e.key === 'Escape') onCloseSettings()
}

function addGlobalCloseListeners() {
	document.addEventListener('click', onClickOutside, true)
	document.addEventListener('keydown', onKeydown, true)
}

function removeGlobalCloseListeners() {
	document.removeEventListener('click', onClickOutside, true)
	document.removeEventListener('keydown', onKeydown, true)
}

function onTabsSwitching(e) {
	// Event delegation for tabs - single listener instead of N
	const btn = e.target.closest(`.${SELECTORS.SETTINGS.TABS.BUTTON}`)
	if (!btn) return

	const newIndex = +btn.dataset.tab
	const activeIndex = $tabButtons.findIndex((t) => t.classList.contains(ACTIVE_CLASS))

	// console.log(activeIndex, newIndex)

	if (
		activeIndex === newIndex ||
		activeIndex < 0 ||
		!$tabButtons[newIndex] ||
		!$tabPanes[newIndex]
	) {
		return
	}

	// Swap states
	$tabButtons[activeIndex].classList.remove(ACTIVE_CLASS)
	$tabButtons[newIndex].classList.add(ACTIVE_CLASS)
	$tabPanes[activeIndex].classList.add(HIDDEN_CLASS)
	$tabPanes[newIndex].classList.remove(HIDDEN_CLASS)
}

function onOpenSettings() {
	if (!$settings || isSettingsOpen) return

	isSettingsOpen = true
	$settings.classList.add(SELECTORS.SETTINGS.OPEN_STATE)
	$settings.setAttribute('aria-hidden', 'false')

	// Small delay to allow reflow before attaching listener
	requestAnimationFrame(() => {
		if (isSettingsOpen) addGlobalCloseListeners()
	})
}

function onCloseSettings() {
	if (!$settings) return

	isSettingsOpen = false
	$settings.classList.remove(SELECTORS.SETTINGS.OPEN_STATE)
	$settings.setAttribute('aria-hidden', 'true')
	removeGlobalCloseListeners()
}

function onToggleSettings() {
	if (isSettingsOpen) {
		onCloseSettings()
		return
	}

	onOpenSettings()
}

function destroySettings() {
	onCloseSettings()
	if (settingsMountFrame) {
		cancelAnimationFrame(settingsMountFrame)
		settingsMountFrame = null
	}
	removeListeners()

	for (const { cleanup } of TABS_CONFIG) {
		cleanup?.()
	}

	$settings?.remove()
	$settings = null
	$tabButtons = []
	$tabPanes = []
	tabButtonsContainer = null
	isSettingsOpen = false
}

// =====================================================
// Exports
// =====================================================
export { createSettings, destroySettings, onOpenSettings, onCloseSettings, onToggleSettings }
