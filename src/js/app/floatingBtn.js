// Use a cross-browser storage API:
import browser from 'webextension-polyfill'
import { icon_sun, icon_moon, icon_moon_full, icon_settings, icon_paint } from './components/icons.js'
import { hexToHSL } from '../utils/hexToHSL'
import { fontHtmlCode, handleFontsListeners } from './mainFonts'
import { assetsHtmlCode, handleAssetsListeners } from './mainAssets'

// Constants
const DEFAULT_COLOR_LIGHT = '#7e3e47'
const DEFAULT_COLOR_DARK = '#ca93fb'

// State
let state = {
	isOptionsShown: false,
	styleElement: null,
}

// DOM Elements
let elements = {
	htmlTag: null,
	floatingBtn: null,
	floatingOptions: null,
	floatingBtnsContainer: null,
	settings: null,
	resetAllBtn: null,
}

// Initialize the application
async function init() {
	console.log(await browser.storage.sync.get('gptheme'))
	createAndAppendSVGStickyBtn()
	renderSettings()
	cacheElements()
	initTheme().then(async () => {
		handleAccentsStorage()
		handleColorInput()
		decreaseFloatingBtnSize()
		addEventListeners()
		console.log(await browser.storage.sync.get('gptheme'))
	})
}
// Theme initialization and management
async function initTheme() {
	try {
		const { gptheme: storedTheme } = await browser.storage.sync.get('gptheme')
		console.log({ storedTheme })
		const theme = storedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
		applyTheme(theme)
	} catch (error) {
		console.error('Error initializing theme:', error)
	}
}

async function setTheme(theme) {
	try {
		await browser.storage.sync.set({ gptheme: theme })
		applyTheme(theme)
		toggleOptions()
	} catch (error) {
		console.error('Error setting theme:', error)
	}
}

function applyTheme(theme) {
	console.log('Applying theme:', theme)
	elements.htmlTag.dataset.gptheme = theme
	elements.htmlTag.style.colorScheme = theme === 'oled' ? 'dark' : theme
	elements.htmlTag.className = theme === 'oled' ? 'dark' : theme

	if (theme !== 'oled') elements.htmlTag.removeAttribute('data-gptheme')
}

// UI Components
function createAndAppendSVGStickyBtn() {
	const gpthFloatingBtn = document.createElement('div')
	gpthFloatingBtn.className = 'gpth__floating'

	const htmlCode = `
    <div class="gpth__floating-icon">${icon_paint}</div>
    <div class="gpth__options">
      <div class="gpth__options-btns">
        <button id="light" data-gpth-theme="light">${icon_sun}</button>
        <button id="dark" data-gpth-theme="dark">${icon_moon}</button>
        <button id="oled" data-gpth-theme="black">${icon_moon_full}</button>
        <button id="gpth-open-settings" data-gpth-theme="more">${icon_settings}</button>
      </div>
    </div>
  `

	gpthFloatingBtn.insertAdjacentHTML('beforeend', htmlCode)
	document.body.appendChild(gpthFloatingBtn)

	cacheElements()
	addEventListeners()
}

function cacheElements() {
	elements.htmlTag = document.documentElement
	elements.floatingBtn = document.querySelector('.gpth__floating')
	elements.floatingOptions = document.querySelector('.gpth__options')
	elements.floatingBtnsContainer = document.querySelector('.gpth__options-btns')
}

function addEventListeners() {
	elements.floatingBtn.addEventListener('click', toggleOptions)
	elements.floatingBtnsContainer.addEventListener('click', handleChangeTheme)
}

function handleChangeTheme(e) {
	const themeButton = e.target.closest('button')
	if (!themeButton) return

	const theme = themeButton.id

	if (theme !== 'gpth-open-settings') {
		setTheme(theme)
	} else {
		openSettings()
	}
}

// Options and Settings
function toggleOptions() {
	state.isOptionsShown = !state.isOptionsShown
	elements.floatingOptions.classList.toggle('gpth__options--shown', state.isOptionsShown)

	if (state.isOptionsShown) {
		document.body.addEventListener('click', hideOptions)
	} else {
		document.body.removeEventListener('click', hideOptions)
	}
}

function hideOptions(e) {
	const isClickInsideFloatingBtn = elements.floatingBtn.contains(e.target)
	const isClickInsideFloatingOptions = elements.floatingOptions.contains(e.target)

	if (!isClickInsideFloatingBtn && !isClickInsideFloatingOptions) {
		toggleOptions()
	}
}

function decreaseFloatingBtnSize() {
	setTimeout(() => {
		elements.floatingBtn.classList.add('gpth__floating--small')
	}, 3000)
}

// Settings UI
function renderSettings() {
	const gpthSettings = document.createElement('div')
	gpthSettings.className = 'gpth-settings fixed flex flex-col'

	const htmlCode = `
    <header class="mb-5">
      <h2 class="mt-5 text-center font-medium gpth-settings__title"><span class="font-semibold">GPThemes</span> Customization</h2>
      <button class="text-token-text-tertiary hover:text-token-text-primary absolute top-4 right-4" id="gpth-settings-close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.34315 6.34338L17.6569 17.6571M17.6569 6.34338L6.34315 17.6571" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </button>
    </header>
    <main>
      <div class="tabs">
        <div class="tab-buttons flex items-center rounded-full p-1 font-semibold mb-10">
          <button class="tab-button py-2 px-4 focus:outline-none text-center rounded-full active">Color</button>
          <button class="tab-button py-2 px-4 focus:outline-none text-center rounded-full">Font</button>
          <button class="tab-button py-2 px-4 focus:outline-none text-center rounded-full">Assets</button>
        </div>
        <div class="tab-content">
          <div class="tab-pane active" id="tab-colors">${renderColorsTab()}</div>
          <div class="tab-pane hidden" id="tab-fonts">${fontHtmlCode}</div>
          <div class="tab-pane hidden" id="tab-assets">${assetsHtmlCode}</div>
        </div>
      </div>
    </main>
  `

	gpthSettings.insertAdjacentHTML('beforeend', htmlCode)
	document.body.appendChild(gpthSettings)

	document.getElementById('gpth-settings-close').addEventListener('click', closeSettings)

	elements.settings = gpthSettings
	elements.resetAllBtn = elements.settings.querySelector('#resetAllSettings')
	elements.resetAllBtn.disabled = true

	tabsSwitching()
	elements.settings.querySelector('#resetAllSettings').addEventListener('click', resetAllSettings)
	handleFontsListeners()
	handleAssetsListeners()
}

function renderColorsTab() {
	return `
    <section>
      <div class="colorpicker-container">
        <div class="colorpicker">
          <input type="color" id="accentLight" value="${DEFAULT_COLOR_LIGHT}" />
          <label for="accentLight">Accent <span>Light</span></label>
        </div>
        <div class="colorpicker">
          <input type="color" id="accentDark" value="${DEFAULT_COLOR_DARK}" />
          <label for="accentDark">Accent <span>Dark</span></label>
        </div>
      </div>
      <footer class="grid mt-10">
        <button id="resetAllSettings" class="btn block relative btn-primary text-center" as="button">Reset Accents</button>
      </footer>
    </section>
  `
}

function tabsSwitching() {
	const tabs = document.querySelectorAll('.gpth-settings .tab-button')
	const panes = document.querySelectorAll('.gpth-settings .tab-pane')

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			document.querySelector('.tab-button.active').classList.remove('active')
			document.querySelector('.tab-pane:not(.hidden)').classList.add('hidden')

			tab.classList.add('active')
			panes[index].classList.remove('hidden')
		})
	})
}

// Settings management
function openSettings() {
	elements.settings.classList.add('gpth-settings--open')
	elements.settings.addEventListener('transitionend', handleSettingsOpened)
	elements.resetAllBtn.disabled = false
}

function handleSettingsOpened() {
	document.body.addEventListener('click', handleClickOutsideSettings)
	elements.settings.removeEventListener('transitionend', handleSettingsOpened)
}

function closeSettings() {
	elements.settings.classList.remove('gpth-settings--open')
	document.body.removeEventListener('click', handleClickOutsideSettings)
	elements.resetAllBtn.disabled = true
}

function handleClickOutsideSettings(e) {
	const isOpenSettingsButton = e.target.id === 'gpth-settings-open'
	if (!elements.settings.contains(e.target) && !isOpenSettingsButton) closeSettings()
}

// Color management
function handleColorInput() {
	elements.settings.addEventListener('click', (e) => {
		if (e.target.id === 'accentLight') {
			e.target.addEventListener('input', (e) => updateCSSVars(e.target.value, null))
			e.target.addEventListener('change', (e) => {
				setAccentToStorage('accent_light', e.target.value)
				closeSettings()
			})
		}

		if (e.target.id === 'accentDark') {
			e.target.addEventListener('input', (e) => updateCSSVars(null, e.target.value))
			e.target.addEventListener('change', (e) => {
				setAccentToStorage('accent_dark', e.target.value)
				closeSettings()
			})
		}
	})
}

function updateCSSVars(lightColor, darkColor) {
	if (!state.styleElement) injectStyleElement()

	const lightHSL = lightColor
		? hexToHSL(lightColor)
		: hexToHSL(elements.settings.querySelector('.colorpicker #accentLight').value)
	const darkHSL = darkColor
		? hexToHSL(darkColor)
		: hexToHSL(elements.settings.querySelector('.colorpicker #accentDark').value)

	const cssVars = `
    html.light {
      --accent-h: ${lightHSL[0]} !important;
      --accent-s: ${lightHSL[1]}% !important;
      --accent-l: ${lightHSL[2]}% !important;
    }
    html.dark {
      --accent-h: ${darkHSL[0]} !important;
      --accent-s: ${darkHSL[1]}% !important;
      --accent-l: ${darkHSL[2]}% !important;
    }
  `

	state.styleElement.textContent = cssVars
}

function injectStyleElement() {
	state.styleElement = document.createElement('style')
	state.styleElement.type = 'text/css'
	document.head.appendChild(state.styleElement)
}

// Storage management
async function setAccentToStorage(storageColorProperty, accentValue) {
	try {
		await browser.storage.sync.set({ [storageColorProperty]: accentValue })
	} catch (e) {
		console.error('Error setting the accent colors in storage:', e)
	}
}

function setColorInputValue({ accentLight, accentDark }) {
	elements.settings.querySelector('.colorpicker #accentLight').value = accentLight
	elements.settings.querySelector('.colorpicker #accentDark').value = accentDark
}

async function handleAccentsStorage() {
	try {
		const { accent_light: accentLight, accent_dark: accentDark } = await browser.storage.sync.get([
			'accent_light',
			'accent_dark',
		])

		if (!accentLight || !accentDark) {
			await browser.storage.sync.set({
				accent_light: DEFAULT_COLOR_LIGHT,
				accent_dark: DEFAULT_COLOR_DARK,
			})
		}

		const accentColorLight = accentLight || DEFAULT_COLOR_LIGHT
		const accentColorDark = accentDark || DEFAULT_COLOR_DARK

		updateCSSVars(accentColorLight, accentColorDark)
		setColorInputValue({ accentLight: accentColorLight, accentDark: accentColorDark })
	} catch (error) {
		console.error('Error handling accent colors:', error)
	}
}

async function resetAllSettings() {
	if (!state.styleElement) injectStyleElement()

	const accentLight = hexToHSL(DEFAULT_COLOR_LIGHT)
	const accentDark = hexToHSL(DEFAULT_COLOR_DARK)

	const cssVars = `
    html.light {
      --accent-h: ${accentLight[0]} !important;
      --accent-s: ${accentLight[1]}% !important;
      --accent-l: ${accentLight[2]}% !important;
    }
    html.dark {
      --accent-h: ${accentDark[0]} !important;
      --accent-s: ${accentDark[1]}% !important;
      --accent-l: ${accentDark[2]}% !important;
    }
  `

	state.styleElement.textContent = cssVars

	setColorInputValue({ accentLight: DEFAULT_COLOR_LIGHT, accentDark: DEFAULT_COLOR_DARK })

	await browser.storage.sync.set({
		accent_light: DEFAULT_COLOR_LIGHT,
		accent_dark: DEFAULT_COLOR_DARK,
	})
}

// Initialize the application
init()
