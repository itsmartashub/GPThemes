// src/settings/index.js

import { SELECTORS } from './config/selectors.js'
import { PFX } from './config/consts.js'
import { renderColorsTab, init as initColors, mount as mountColors } from './custom-colors/index.js'
import { renderFontsTab, init as initFonts, mount as mountFonts } from './custom-fonts/index.js'
import { renderWidthsTab, init as initWidths, mount as mountWidths } from './custom-layouts/index.js'

// ============================================================================
// Global state (cached refs, constants)
// ============================================================================
let $settings = null
let $tabButtons = []
let $tabPanes = []

const ACTIVE_CLASS = 'active'
const HIDDEN_CLASS = 'hidden'

const TABS_CONFIG = [
	{ id: 'colors', label: 'Color', render: renderColorsTab, init: initColors, mount: mountColors },
	{ id: 'fonts', label: 'Font', render: renderFontsTab, init: initFonts, mount: mountFonts },
	{ id: 'layout', label: 'Layout', render: renderWidthsTab, init: initWidths, mount: mountWidths },
]

// ============================================================================
// UI RENDERING (template)
// ============================================================================
function templateHTML() {
	// const tabs = [
	// 	{ id: 'colors', label: 'Color', render: renderColorsTab },
	// 	{ id: 'fonts', label: 'Font', render: renderFontsTab },
	// 	{ id: 'layout', label: 'Layout', render: renderWidthsTab },
	// ]

	// const buttons = TABS_CONFIG.map(
	// 	({ label }, i) => `
	// 		<button class="${SELECTORS.SETTINGS.TABS.BUTTON} py-2 px-4 focus:outline-none text-center ${
	// 		i === 0 ? ACTIVE_CLASS : ''
	// 	}">
	// 			${label}
	// 		</button>`
	// ).join('')

	// const panes = TABS_CONFIG.map(
	// 	({ id, render }, i) => `
	// 		<div id="${PFX}-tab-${id}"
	// 			class="${SELECTORS.SETTINGS.TABS.PANE} ${i === 0 ? ACTIVE_CLASS : HIDDEN_CLASS}">
	// 			${render()}
	// 		</div>`
	// ).join('')

	// return `
	// 	<header class="mb-5">
	// 		<h2 class="text-center font-medium gpth-settings__title">
	// 			<span class="font-semibold">GPThemes</span> Customization
	// 		</h2>
	// 	</header>
	// 	<main>
	// 		<div class="${SELECTORS.SETTINGS.TABS.ROOT}">
	// 			<div class="${SELECTORS.SETTINGS.TABS.BUTTONS} p-1 font-semibold mb-5">
	// 				${buttons}
	// 			</div>
	// 			<div class="${SELECTORS.SETTINGS.TABS.CONTENT}">
	// 				${panes}
	// 			</div>
	// 		</div>
	// 	</main>`
	const buttons = TABS_CONFIG.map(
		({ label }, i) => `
			<button class="${SELECTORS.SETTINGS.TABS.BUTTON} py-2 px-4 focus:outline-none text-center ${
			i === 0 ? ACTIVE_CLASS : ''
		}" data-tab="${i}">
				${label}
			</button>`
	).join('')

	const panes = TABS_CONFIG.map(
		({ id, render }, i) => `
			<div id="${PFX}-tab-${id}"
				class="${SELECTORS.SETTINGS.TABS.PANE} ${i === 0 ? ACTIVE_CLASS : HIDDEN_CLASS}">
				${render()}
			</div>`
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

// ============================================================================
// Lifecycle: CREATE (build DOM, init modules, mount)
// ============================================================================
async function createSettings() {
	console.log('[CREATE SETTINGS]')

	// 1. Create root container
	const el = document.createElement('div')
	el.className = `${SELECTORS.SETTINGS.ROOT} fixed flex flex-col`
	el.innerHTML = templateHTML()

	// 2. Append to DOM FIRST
	document.body.appendChild(el)

	// 3. Cache elements AFTER they're in DOM
	setElements(el)

	// 4. Initialize modules (data/logic only)
	// try {
	// 	await Promise.allSettled([initColors(), initFonts(), initWidths()])
	// } catch (err) {
	// 	console.error('[Settings] Module initialization failed:', err)
	// }
	// //  Wait for next tick to ensure DOM is fully ready
	// requestAnimationFrame(() => {
	// 	// 5. Mount modules
	// 	mountColors(el)
	// 	mountFonts(el)
	// 	mountWidths(el)

	// 	// 6. Attach global listeners
	// 	// 6. Attach global listeners
	// 	// 6. Attach global listeners
	// 	attachListeners()
	// })
	// mountModules(el)

	// 4. Init modules in parallel, mount sequentially after DOM ready
	await Promise.allSettled(TABS_CONFIG.map(({ init }) => init()))

	//  Wait for next tick to ensure DOM is fully ready
	requestAnimationFrame(() => {
		// 5. Mount modules
		TABS_CONFIG.forEach(({ mount }) => mount(el))
		// 6. Attach global listeners
		attachListeners()
	})

	return el
}

// ============================================================================
// Lifecycle: MOUNT (cache elements, bind listeners)
// ============================================================================
// function mountModules(root) {
// 	// Wait for next tick to ensure DOM is fully ready
// 	requestAnimationFrame(() => {
// 		mountColors(root)
// 		mountFonts(root)
// 		mountWidths(root)
// 	})
// }

function setElements(root) {
	$settings = root
	$tabButtons = [...$settings.querySelectorAll(`.${SELECTORS.SETTINGS.TABS.BUTTON}`)]
	$tabPanes = [...$settings.querySelectorAll(`.${SELECTORS.SETTINGS.TABS.PANE}`)]
}

function attachListeners() {
	$settings.querySelector(`.${SELECTORS.SETTINGS.TABS.BUTTONS}`).addEventListener('click', handleTabsSwitching)
	// handleTabsSwitching()
}

function handleClickOutside(e) {
	const isClickInside = $settings.contains(e.target)
	const isToggleBtn = e.target.id === SELECTORS.SETTINGS.OPEN_BTN

	if (!isClickInside && !isToggleBtn) closeSettings()
}

function handleTabsSwitching(e) {
	// if (!$tabButtons?.length) return

	// $tabButtons.forEach((tab, index) => {
	// 	tab.addEventListener('click', () => {
	// 		const activeIndex = $tabButtons.findIndex((t) => t.classList.contains(ACTIVE_CLASS))
	// 		if (activeIndex === index) return

	// 		// Update button states
	// 		$tabButtons[activeIndex].classList.remove(ACTIVE_CLASS)
	// 		tab.classList.add(ACTIVE_CLASS)

	// 		// Update content panes
	// 		$tabPanes[activeIndex].classList.add(HIDDEN_CLASS)
	// 		$tabPanes[index].classList.remove(HIDDEN_CLASS)
	// 	})
	// })

	// Event delegation for tabs - single listener instead of N
	const btn = e.target.closest(`.${SELECTORS.SETTINGS.TABS.BUTTON}`)
	if (!btn) return

	const newIndex = parseInt(btn.dataset.tab)
	const activeIndex = $tabButtons.findIndex((t) => t.classList.contains(ACTIVE_CLASS))

	// console.log(activeIndex, newIndex)

	if (activeIndex === newIndex) return

	// Swap states
	$tabButtons[activeIndex].classList.remove(ACTIVE_CLASS)
	$tabButtons[newIndex].classList.add(ACTIVE_CLASS)
	$tabPanes[activeIndex].classList.add(HIDDEN_CLASS)
	$tabPanes[newIndex].classList.remove(HIDDEN_CLASS)
}

function openSettings() {
	if (!$settings) return

	$settings.classList.add(SELECTORS.SETTINGS.OPEN_STATE)

	// Small delay to allow reflow before attaching listener
	requestAnimationFrame(() => {
		document.addEventListener('click', handleClickOutside, true)
	})
}

function closeSettings() {
	if (!$settings) return

	$settings.classList.remove(SELECTORS.SETTINGS.OPEN_STATE)
	document.removeEventListener('click', handleClickOutside, true)
}

// ============================================================================
// Exports
// ============================================================================
export { createSettings, openSettings, closeSettings }
