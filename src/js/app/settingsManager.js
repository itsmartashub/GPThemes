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
	init as initLayouts,
	mount as mountLayouts,
	renderLayoutsTab,
} from './custom-layouts/index.js'

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
		init: initLayouts,
		mount: mountLayouts,
		cleanup: cleanupLayouts,
	},
]

let settings = null
let tabButtons = []
let tabPanes = []
let tabButtonsContainer = null
let isSettingsOpen = false
let settingsListenersAttached = false
let runtimeInitPromise = null
let runtimeInitGeneration = -1
let runtimeGeneration = 0
let settingsCreationPromise = null
let settingsCreationGeneration = -1

function templateHTML() {
	const buttons = TABS_CONFIG.map(
		({ label }, index) => `
			<button class="${SELECTORS.SETTINGS.TABS.BUTTON} py-2 px-4 focus:outline-none text-center ${
				index === 0 ? ACTIVE_CLASS : ''
			}" data-tab="${index}">
				${label}
			</button>`,
	).join('')

	const panes = TABS_CONFIG.map(
		({ id, render }, index) => `
			<div id="${PFX}-tab-${id}"
				class="${SELECTORS.SETTINGS.TABS.PANE} ${
					index === 0 ? ACTIVE_CLASS : HIDDEN_CLASS
				}">
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
		</main>
	`
}

function reportModuleFailures(results, phase) {
	results.forEach((result, index) => {
		if (result.status === 'rejected') {
			console.error(
				`[GPThemes settings] ${TABS_CONFIG[index].id} ${phase} failed:`,
				result.reason,
			)
		}
	})
}

function initializeSettingsRuntime() {
	const generation = runtimeGeneration
	if (runtimeInitPromise && runtimeInitGeneration === generation) return runtimeInitPromise

	const previousInitialization = runtimeInitPromise
	const initialization = (async () => {
		if (previousInitialization) {
			try {
				await previousInitialization
			} catch {
				// A previous generation already reported its own failure.
			}
		}

		if (generation !== runtimeGeneration) return []

		const results = await Promise.allSettled(TABS_CONFIG.map(({ init }) => init()))
		reportModuleFailures(results, 'initialization')
		if (generation !== runtimeGeneration) {
			for (const { cleanup } of TABS_CONFIG) cleanup?.()
		}
		return results
	})()

	runtimeInitPromise = initialization
	runtimeInitGeneration = generation
	return initialization
}

function setElements(root) {
	settings = root
	tabButtonsContainer = settings.querySelector(`.${SELECTORS.SETTINGS.TABS.BUTTONS}`)
	tabButtons = [...settings.querySelectorAll(`.${SELECTORS.SETTINGS.TABS.BUTTON}`)]
	tabPanes = [...settings.querySelectorAll(`.${SELECTORS.SETTINGS.TABS.PANE}`)]
}

async function mountSettingsModules(root) {
	const results = await Promise.allSettled(TABS_CONFIG.map(({ mount }) => mount(root)))
	reportModuleFailures(results, 'mount')
}

function clearSettingsReferences(expected = null) {
	if (expected && settings !== expected) return
	settings = null
	tabButtons = []
	tabPanes = []
	tabButtonsContainer = null
	isSettingsOpen = false
}

async function createSettingsOnce(generation) {
	await initializeSettingsRuntime()
	if (generation !== runtimeGeneration) return null

	const existing = document.querySelector(`.${SELECTORS.SETTINGS.ROOT}`)
	if (existing) {
		setElements(existing)
		addListeners()
		return existing
	}

	const element = document.createElement('div')
	element.className = `${SELECTORS.SETTINGS.ROOT} fixed flex flex-col`
	element.setAttribute('role', 'dialog')
	element.setAttribute('aria-label', 'GPThemes customization')
	element.setAttribute('aria-hidden', 'true')
	element.innerHTML = templateHTML()
	document.body.appendChild(element)

	setElements(element)
	await mountSettingsModules(element)
	if (generation !== runtimeGeneration || settings !== element || !element.isConnected) {
		for (const { cleanup } of TABS_CONFIG) cleanup?.()
		element.remove()
		clearSettingsReferences(element)
		return null
	}

	addListeners()
	return element
}

function createSettings() {
	const generation = runtimeGeneration
	if (settingsCreationPromise && settingsCreationGeneration === generation) {
		return settingsCreationPromise
	}

	const previousCreation = settingsCreationPromise
	const creation = (async () => {
		if (previousCreation) {
			try {
				await previousCreation
			} catch {
				// The previous caller receives the original failure.
			}
		}

		if (generation !== runtimeGeneration) return null
		return createSettingsOnce(generation)
	})()

	settingsCreationPromise = creation
	settingsCreationGeneration = generation
	const clearCreation = () => {
		if (settingsCreationPromise !== creation) return
		settingsCreationPromise = null
		settingsCreationGeneration = -1
	}
	creation.then(clearCreation, clearCreation)
	return creation
}

function addListeners() {
	if (settingsListenersAttached || !tabButtonsContainer) return
	tabButtonsContainer.addEventListener('click', onTabsSwitching)
	settingsListenersAttached = true
}

function removeListeners() {
	if (!settingsListenersAttached) return
	tabButtonsContainer?.removeEventListener('click', onTabsSwitching)
	settingsListenersAttached = false
}

function onClickOutside(event) {
	const isClickInside = settings?.contains(event.target)
	const isToggleButton = event.target.closest?.(`#${SELECTORS.SETTINGS.OPEN_BTN}`)
	if (!isClickInside && !isToggleButton) onCloseSettings()
}

function onKeydown(event) {
	if (event.key === 'Escape') onCloseSettings()
}

function addGlobalCloseListeners() {
	document.addEventListener('click', onClickOutside, true)
	document.addEventListener('keydown', onKeydown, true)
}

function removeGlobalCloseListeners() {
	document.removeEventListener('click', onClickOutside, true)
	document.removeEventListener('keydown', onKeydown, true)
}

function onTabsSwitching(event) {
	const button = event.target.closest(`.${SELECTORS.SETTINGS.TABS.BUTTON}`)
	if (!button) return

	const newIndex = Number(button.dataset.tab)
	const activeIndex = tabButtons.findIndex((tab) => tab.classList.contains(ACTIVE_CLASS))
	if (
		activeIndex === newIndex ||
		activeIndex < 0 ||
		!tabButtons[newIndex] ||
		!tabPanes[newIndex]
	) {
		return
	}

	tabButtons[activeIndex].classList.remove(ACTIVE_CLASS)
	tabButtons[newIndex].classList.add(ACTIVE_CLASS)
	tabPanes[activeIndex].classList.add(HIDDEN_CLASS)
	tabPanes[newIndex].classList.remove(HIDDEN_CLASS)
}

function onOpenSettings() {
	if (!settings || isSettingsOpen) return

	isSettingsOpen = true
	settings.classList.add(SELECTORS.SETTINGS.OPEN_STATE)
	settings.setAttribute('aria-hidden', 'false')
	window.requestAnimationFrame(() => {
		if (isSettingsOpen) addGlobalCloseListeners()
	})
}

function onCloseSettings() {
	if (!settings) return

	isSettingsOpen = false
	settings.classList.remove(SELECTORS.SETTINGS.OPEN_STATE)
	settings.setAttribute('aria-hidden', 'true')
	removeGlobalCloseListeners()
}

function onToggleSettings() {
	isSettingsOpen ? onCloseSettings() : onOpenSettings()
}

function destroySettings() {
	runtimeGeneration++
	onCloseSettings()
	removeListeners()

	for (const { cleanup } of TABS_CONFIG) cleanup?.()

	settings?.remove()
	clearSettingsReferences()
}

export {
	createSettings,
	destroySettings,
	initializeSettingsRuntime,
	onCloseSettings,
	onOpenSettings,
	onToggleSettings,
}
