// Use a cross-browser storage API:
import browser from 'webextension-polyfill'

import gpthToggleImg from '../../img/gpth-toggle-circled.webp'
import { hexToHSL } from '../utils/hexToHSL'

// let isOptionsShown = false

// Global Variables
let isOptionsShown = false
let $htmlTag
let $floatingBtn
let $floatingThemeOptions
let $floatingThemesBtnsContainer

let $settings // @ Accent Theme
// let isSettingsOpen = false
let styleElement = null // Declare the styleElement variable

let defaultColorLight = '#6b4dfe'
let defaultColorDark = '#ca93fb'

// Initialization
init()

async function initTheme() {
	try {
		const { gptheme: storedTheme } = await browser.storage.sync.get('gptheme')
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

function createAndAppendSVGStickyBtn() {
	const gpthFloatingBtn = document.createElement('div')
	gpthFloatingBtn.className = 'gpth__svg'

	let htmlCode = `
		<div class="gpth__svg-icon">
			<img src="${gpthToggleImg}" alt="gpth-toggle"/>
		</div>
		<div class="gpth__options">
			<div class="gpth__themes">
				<div class="gpth__themes-btns">
					<button id="light" data-gpth-theme="light">☀️</button>
					<button id="dark" data-gpth-theme="dark">🌙</button>
					<button id="oled" data-gpth-theme="black">🌖</button>
					<button id="gpth-open-settings" data-gpth-theme="more">⚙️</button>
				</div>
			</div>
		</div>
	`

	// gpthFloatingBtn.innerHTML = htmlCode
	gpthFloatingBtn.insertAdjacentHTML('beforeend', htmlCode)
	document.body.appendChild(gpthFloatingBtn)

	// Cache DOM elements after appending
	$htmlTag = document.documentElement
	$floatingBtn = document.querySelector('.gpth__svg-icon')
	$floatingThemeOptions = document.querySelector('.gpth__options')
	$floatingThemesBtnsContainer = document.querySelector('.gpth__themes-btns')

	// Add event listeners after DOM elements are appended
	$floatingBtn.addEventListener('click', toggleOptions)
	$floatingThemesBtnsContainer.addEventListener('click', handleChangeTheme)
}

function handleChangeTheme(e) {
	const themeButton = e.target.closest('button')
	if (!themeButton) return

	const theme = themeButton.id

	if (theme !== 'gpth-open-settings') {
		setTheme(theme)
		return
	}

	/* If clicked on "⚙️ Open Settings" */
	if (theme === 'gpth-open-settings') {
		openSettings()
	}
}

function applyTheme(theme) {
	$htmlTag.dataset.gptheme = theme
	$htmlTag.style.colorScheme = theme === 'oled' ? 'dark' : theme
	$htmlTag.className = theme === 'oled' ? 'dark' : theme
	if (theme !== 'oled') $htmlTag.removeAttribute('data-gptheme')
}

function toggleOptions() {
	isOptionsShown = !isOptionsShown
	$floatingThemeOptions.classList.toggle('gpth-options-shown', isOptionsShown)

	if (isOptionsShown) document.body.addEventListener('click', hideOptions)
	else document.body.removeEventListener('click', hideOptions)
}

function hideOptions(e) {
	const isClickInsideFloatingBtn = $floatingBtn.contains(e.target)
	const isClickInsideFloatingOptions = $floatingThemeOptions.contains(e.target)

	if (!isClickInsideFloatingBtn && !isClickInsideFloatingOptions) toggleOptions()

	// if (!$floatingBtn.contains(e.target) && !$floatingThemeOptions.contains(e.target)) toggleOptions()
}

function decreiseFloatingBtnSize() {
	setTimeout(() => {
		$floatingBtn.classList.add('gpth__svg--small')
	}, 3000)
}

/* ______________ THEME CUSTOMIZATION - ACCENT THEME ______________ */
function renderSettings() {
	const gpthSettings = document.createElement('div')
	gpthSettings.className = `gpth-settings fixed grid items-center gap-4`

	let htmlCode = `
		<header class="mb-5">

				<h3 class="mt-6 text-center font-medium text-xl">Theme Customization</h3>

				<button class="text-token-text-tertiary hover:text-token-text-secondary absolute top-4 right-4" id="gpth-settings-close">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.34315 6.34338L17.6569 17.6571M17.6569 6.34338L6.34315 17.6571" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
				</button>

		</header>

		<main class="mb-10">
			<section class="colorpicker-container">
				<div class="colorpicker">
					<input type="color" id="accentLight" value="#6b4dfe" />
					<label for="accentLight">Accent <span>Light</span></label>
				</div>
				<div class="colorpicker">
					<input type="color" id="accentDark" value="#ca93fb" />
					<label for="accentDark">Accent <span>Dark</span></label>
				</div>
			</section>
		</main>

		<footer class="grid">
			<button id="resetAllSettings" class="btn block relative btn-primary text-center" as="button">Reset All</button>
		</footer>

		<div class="blur-box"></div>
		<div class="blur-box"></div>
		<div class="blur-box"></div>
	`

	// gpthFloatingBtn.innerHTML = htmlCode
	gpthSettings.insertAdjacentHTML('beforeend', htmlCode)
	document.body.appendChild(gpthSettings)
	document.getElementById('gpth-settings-close').addEventListener('click', closeSettings)
	$settings = gpthSettings

	$settings.querySelector('#resetAllSettings').addEventListener('click', resetAllSettings)
}
function openSettings() {
	$settings.classList.add('gpth-settings--open')
	$settings.addEventListener('transitionend', handleSettingsOpened)
	toggleOptions()
}
function handleSettingsOpened() {
	document.body.addEventListener('click', handleClickOutsideSettings)
	$settings.removeEventListener('transitionend', handleSettingsOpened)
}
function closeSettings() {
	$settings.classList.remove('gpth-settings--open')
	document.body.removeEventListener('click', handleClickOutsideSettings)
}
function handleClickOutsideSettings(e) {
	let isOpenSettingsButton = e.target.id === 'gpth-settings-open'

	if (!$settings.contains(e.target) && !isOpenSettingsButton) closeSettings()
}

function handleColorInput() {
	$settings.addEventListener('click', (e) => {
		console.log(e.target)

		if (e.target.id === 'accentLight') {
			e.target.addEventListener('input', (e) => {
				updateCSSVars(e.target.value, null)
			})
			// Save light accent color to storage
			e.target.addEventListener('change', (e) => {
				setAccentToStorage('accent_light', e.target.value)
				closeSettings()
			})
		}

		if (e.target.id === 'accentDark') {
			e.target.addEventListener('input', (e) => {
				updateCSSVars(null, e.target.value)
			})
			// Save dark accent color to storage
			e.target.addEventListener('change', (e) => {
				setAccentToStorage('accent_dark', e.target.value)
				closeSettings()
			})
		}
	})
}
// Function to create and inject the <style> element
function injectStyleElement() {
	styleElement = document.createElement('style')
	styleElement.type = 'text/css'
	document.head.appendChild(styleElement)
}

function updateCSSVars(lightColor, darkColor) {
	if (!styleElement) injectStyleElement()

	const lightHSL = lightColor
		? hexToHSL(lightColor)
		: hexToHSL($settings.querySelector('.colorpicker #accentLight').value)
	const darkHSL = darkColor
		? hexToHSL(darkColor)
		: hexToHSL($settings.querySelector('.colorpicker #accentDark').value)

	let cssVars = ''

	cssVars = `
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

	console.log(cssVars)

	styleElement.textContent = cssVars
}

async function setAccentToStorage(storageColorProperty, accentValue) {
	try {
		if (storageColorProperty === 'accent_light') {
			await browser.storage.sync.set({ accent_light: accentValue })
		}
		if (storageColorProperty === 'accent_dark') {
			await browser.storage.sync.set({ accent_dark: accentValue })
		}
		console.log({ storageColorProperty, accentValue })
	} catch (e) {
		console.error('Error setting the accent colors in storage:', e)
	}
}

function setColorInputValue({ accentLight, accentDark }) {
	console.log({ accentLight, accentDark })
	$settings.querySelector('.colorpicker #accentLight').value = accentLight
	$settings.querySelector('.colorpicker #accentDark').value = accentDark
}

async function handleAccentsStorage() {
	try {
		// Get accent colors from storage
		const { accent_light: accentLight, accent_dark: accentDark } = await browser.storage.sync.get([
			'accent_light',
			'accent_dark',
		])
		console.log('Retrieved accent colors from storage:', accentLight, accentDark)

		// Set default accent colors if not already set
		if (!accentLight || !accentDark) {
			await browser.storage.sync.set({
				accent_light: defaultColorLight,
				accent_dark: defaultColorDark,
			})
			console.log('Default accent colors set in storage')
		}

		const accentColorLight = accentLight || defaultColorLight
		const accentColorDark = accentDark || defaultColorDark

		// Update CSS with retrieved or default accent colors
		updateCSSVars(accentColorLight, accentColorDark)

		setColorInputValue({ accentLight: accentColorLight, accentDark: accentColorDark })

		console.log('Accent colors applied to CSS:', accentColorLight, accentColorDark)
	} catch (error) {
		console.error('Error handling accent colors:', error)
	}
}
async function resetAllSettings() {
	if (!styleElement) injectStyleElement()

	// let accentLight = [250, 99, 65]
	// let accentDark = [272, 93, 78]
	let accentLight = hexToHSL(defaultColorLight)
	let accentDark = hexToHSL(defaultColorDark)

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

	styleElement.textContent = cssVars

	setColorInputValue({ accentLight: defaultColorLight, accentDark: defaultColorDark })

	await browser.storage.sync.set({
		accent_light: defaultColorLight,
		accent_dark: defaultColorDark,
	})
}

/* === Initialization */
function init() {
	initTheme()
	createAndAppendSVGStickyBtn()
	renderSettings()
	decreiseFloatingBtnSize()
	handleAccentsStorage()
	handleColorInput()
}

/* ? Only for debugging - remove later! */
debugGetAllStorageItems()
// Get all the items in the storage
function debugGetAllStorageItems() {
	browser.storage.sync.get(null, function (items) {
		console.log(items) // This will log all the items stored in sync storage
	})
}