import { $ } from '../../utils/dom.js'
import { getItem, watchStorageChanges } from '../../utils/storage.js'
import {
	icon_kofi_cup,
	icon_moon,
	icon_moon_full,
	icon_paint,
	icon_settings,
	icon_sun,
} from '../components/icons.js'
import { SK_TOGGLE_FAB_HIDDEN } from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors.js'
import { setupExtensionMessaging } from '../messaging/index.js'
import {
	createSettings,
	destroySettings,
	initializeSettingsRuntime,
	onCloseSettings,
	onToggleSettings,
} from '../settingsManager.js'
import { onChangeTheme } from '../themeManager.js'

const STORAGE_KEY = SK_TOGGLE_FAB_HIDDEN

let isDockOpen = false
let isInitialized = false
let listenersAttached = false
let removeStorageWatcher = null
let removeMessagingListener = null
let settingsActionPromise = null
let settingsActionGeneration = 0
let isFABHidden = false
let initToken = 0

const elements = {
	fab: null,
	dock: null,
	dockButtons: null,
}

function templateHTML() {
	return `
		<div class="${SELECTORS.FAB.ROOT}__icon" data-gpth-label="Change theme">${icon_paint}</div>
		<aside class="${SELECTORS.FAB.DOCK}">
			<div class="${SELECTORS.FAB.DOCK_BTNS}">
				<button id="light" type="button" aria-label="Use light theme" data-gpth-label="Light theme" data-gpth-dock-btn="light" class="${SELECTORS.FAB.DOCK}__btn">${icon_sun}</button>
				<button id="dark" type="button" aria-label="Use dark theme" data-gpth-label="Dark theme" data-gpth-dock-btn="dark" class="${SELECTORS.FAB.DOCK}__btn">${icon_moon}</button>
				<button id="oled" type="button" aria-label="Use OLED theme" data-gpth-label="OLED theme" data-gpth-dock-btn="black" class="${SELECTORS.FAB.DOCK}__btn">${icon_moon_full}</button>
				<button id="${SELECTORS.SETTINGS.OPEN_BTN}" type="button" aria-label="Toggle GPThemes settings" data-gpth-label="Settings" data-gpth-dock-btn="settings" class="${SELECTORS.FAB.DOCK}__btn">${icon_settings}</button>
			</div>
			<a href="https://ko-fi.com/http417" aria-label="Support the original creator" data-gpth-label="Support the original creator" data-gpth-dock-btn="ko-fi" class="${SELECTORS.FAB.DOCK}__btn" target="_blank" rel="noopener noreferrer">
				${icon_kofi_cup}
			</a>
		</aside>
	`
}

function setElements(fab) {
	elements.fab = fab
	elements.dock = $(`.${SELECTORS.FAB.DOCK}`, fab)
	elements.dockButtons = $(`.${SELECTORS.FAB.DOCK_BTNS}`, fab)
}

function toggleDock(shouldOpen) {
	const newState = shouldOpen ?? !isDockOpen
	if (!elements.dock || isDockOpen === newState) return

	isDockOpen = newState
	elements.dock.classList.toggle(SELECTORS.FAB.OPEN_STATE, newState)
	if (newState) {
		document.addEventListener('click', onOutsideClick, true)
	} else {
		document.removeEventListener('click', onOutsideClick, true)
	}
}

function onOutsideClick(event) {
	if (!elements.fab?.contains(event.target)) toggleDock(false)
}

function onFABClick(event) {
	if (event.target.closest('[data-gpth-dock-btn]')) return
	toggleDock()
}

function isCurrentInitialization(token) {
	return token === initToken && isInitialized && elements.fab?.isConnected
}

function isCurrentSettingsAction(token, actionGeneration) {
	return (
		isCurrentInitialization(token) &&
		!isFABHidden &&
		actionGeneration === settingsActionGeneration
	)
}

async function openSettings(token, actionGeneration) {
	await initializeSettingsRuntime()
	if (!isCurrentSettingsAction(token, actionGeneration)) return

	const settings = await createSettings()
	if (!settings || !isCurrentSettingsAction(token, actionGeneration)) return

	onToggleSettings()
	toggleDock(false)
}

function onDockButtonClick(event) {
	const button = event.target.closest('button[data-gpth-dock-btn]')
	if (!button) return

	if (button.id === SELECTORS.SETTINGS.OPEN_BTN) {
		if (isFABHidden) return

		if (!settingsActionPromise) {
			const token = initToken
			const actionGeneration = settingsActionGeneration
			const action = openSettings(token, actionGeneration).catch((error) => {
				console.error('[GPThemes] Failed to open settings:', error)
			})
			settingsActionPromise = action
			action.then(() => {
				if (settingsActionPromise === action) settingsActionPromise = null
			})
		}
		return
	}

	onChangeTheme(event)
}

function addListeners() {
	if (listenersAttached || !elements.fab || !elements.dockButtons) return

	elements.fab.addEventListener('click', onFABClick)
	elements.dockButtons.addEventListener('click', onDockButtonClick)
	listenersAttached = true
}

function removeListeners() {
	if (!listenersAttached) return

	elements.fab?.removeEventListener('click', onFABClick)
	elements.dockButtons?.removeEventListener('click', onDockButtonClick)
	document.removeEventListener('click', onOutsideClick, true)
	listenersAttached = false
}

function setFABVisibility(isHidden = false) {
	const nextHidden = isHidden === true
	if (nextHidden && !isFABHidden) settingsActionGeneration++
	isFABHidden = nextHidden

	if (!elements.fab) return

	elements.fab.classList.toggle(`${SELECTORS.FAB.ROOT}--hidden`, nextHidden)
	if (nextHidden) {
		toggleDock(false)
		onCloseSettings()
	}
}

async function setInitialFABVisibility() {
	setFABVisibility(false)
	const isHidden = await getItem(STORAGE_KEY, false)
	setFABVisibility(isHidden === true)
}

function onStorageChange(changes, area) {
	if (area !== 'sync') return
	const visibilityChange = changes[STORAGE_KEY]
	if (visibilityChange) setFABVisibility(visibilityChange.newValue === true)
}

async function createFAB() {
	const existing = document.querySelector(`.${SELECTORS.FAB.ROOT}`)
	if (existing) {
		setElements(existing)
	} else {
		const fab = document.createElement('div')
		fab.className = SELECTORS.FAB.ROOT
		fab.innerHTML = templateHTML()
		document.body.appendChild(fab)
		setElements(fab)
	}

	addListeners()
	await setInitialFABVisibility()
	return elements.fab
}

async function init() {
	if (isInitialized && elements.fab?.isConnected) return cleanup
	if (isInitialized) cleanup()

	const token = ++initToken
	await createFAB()
	if (token !== initToken || !elements.fab?.isConnected) return

	removeMessagingListener = setupExtensionMessaging(setFABVisibility)
	removeStorageWatcher = watchStorageChanges(onStorageChange)
	isInitialized = true

	initializeSettingsRuntime().catch((error) => {
		console.error('[GPThemes] Failed to hydrate saved settings:', error)
	})

	return cleanup
}

function cleanup() {
	initToken++
	settingsActionGeneration++
	toggleDock(false)
	removeListeners()
	removeStorageWatcher?.()
	removeStorageWatcher = null
	removeMessagingListener?.()
	removeMessagingListener = null
	destroySettings()
	elements.fab?.remove()
	elements.fab = null
	elements.dock = null
	elements.dockButtons = null
	settingsActionPromise = null
	isFABHidden = false
	isDockOpen = false
	isInitialized = false
}

export { init, setFABVisibility as toggleFABVisibility }
