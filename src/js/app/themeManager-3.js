// theme-loader.js
import { closeFloatingOptions } from './floatingBtn.js'
import { openSettings } from './settingsManager.js'

const LOADER_CONFIG = {
	FADE_DURATION: 200,
	MIN_DISPLAY_TIME: 300,
	ID: 'gpth-theme-loader',
	CLASSES: {
		CONTENT: `gpth-theme-loader__content`,
		TITLE: `gpth-theme-loader__title`,
		SPINNER: `gpth-theme-loader__spinner`,
	},
}

// State management
let loaderElement = null
let showStartTime = 0
let hideTimeoutId = null

// Create loader DOM element
function createLoader() {
	if (loaderElement) return loaderElement

	const loader = document.createElement('div')
	loader.id = LOADER_CONFIG.ID

	loader.innerHTML = `
	  <div class="${LOADER_CONFIG.CLASSES.CONTENT}">
	    <p class="${LOADER_CONFIG.CLASSES.TITLE}">
	      <span>changing</span>
	      <span>theme</span>
	    </p>
	    <div class="${LOADER_CONFIG.CLASSES.SPINNER}"></div>
	  </div>
	`
	/* 	loader.innerHTML = `
      <div class="gpth-theme-loader__content">
        <p class="gpth-theme-loader__title">
          <span>changing</span>
          <span>theme</span>
        </p>
        <div class="gpth-theme-loader__spinner"></div>
      </div>
    ` */

	loader.style.display = 'none'
	document.body.appendChild(loader)
	loaderElement = loader

	return loader
}

// Show loader with promise
function showLoader() {
	if (hideTimeoutId) {
		clearTimeout(hideTimeoutId)
		hideTimeoutId = null
	}

	showStartTime = Date.now()

	const loader = loaderElement || createLoader()
	loader.style.display = 'grid'

	// Use requestAnimationFrame for proper timing
	requestAnimationFrame(() => {
		loader.style.animation = 'none'
		loader.offsetHeight
		loader.style.animation = 'fadeIn 0.2s ease-out'

		const spinner = loader.querySelector('.gpth-theme-loader__spinner')
		spinner.style.animation = 'none'
		spinner.offsetHeight
		spinner.style.animation = 'spin 1s linear infinite'
	})

	// Debugging output
	console.log('[Loader element] ', loader)
	console.log('[Loader animation] ', getComputedStyle(loader).animation)
	console.log('[Spinner animation] ', getComputedStyle(spinner).animation)

	return new Promise((resolve) => {
		loader.addEventListener('animationend', () => resolve(), { once: true })
	})
}

// Hide loader with promise
function hideLoader() {
	if (!loaderElement) return Promise.resolve()

	const elapsedTime = Date.now() - showStartTime
	const remainingTime = Math.max(0, LOADER_CONFIG.MIN_DISPLAY_TIME - elapsedTime)

	return new Promise((resolve) => {
		hideTimeoutId = setTimeout(() => {
			if (loaderElement) {
				loaderElement.style.display = 'none'
			}
			hideTimeoutId = null
			resolve()
		}, remainingTime)
	})
}

// Theme management
const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
	SYSTEM: 'system',
}

function getSystemTheme() {
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT
}

// Apply theme changes
function applyTheme(theme, isOLED) {
	const htmlTag = document.documentElement
	const appliedTheme = theme === THEMES.SYSTEM ? getSystemTheme() : theme

	htmlTag.className = appliedTheme
	htmlTag.style.colorScheme = appliedTheme

	if (appliedTheme === THEMES.DARK && isOLED) {
		htmlTag.dataset.gptheme = 'oled'
		htmlTag.dataset.oled = ''
	} else {
		htmlTag.dataset.gptheme = appliedTheme
		delete htmlTag.dataset.oled
	}
}

// Main theme setting function
async function setTheme(theme, isOLED = false) {
	const currentTheme = localStorage.getItem('theme')
	const currentOLED = localStorage.getItem('isOLED')

	console.log('currentTheme: ', currentTheme)
	// Skip if no changes
	if (currentTheme === theme && currentOLED === String(isOLED)) {
		return
	}
	closeFloatingOptions()

	try {
		await showLoader()

		localStorage.setItem('theme', theme)
		localStorage.setItem('isOLED', isOLED)

		applyTheme(theme, isOLED)

		// Notify other components
		window.dispatchEvent(
			new StorageEvent('storage', {
				key: 'theme',
				newValue: theme,
				oldValue: currentTheme,
				storageArea: localStorage,
			})
		)
	} catch (error) {
		console.error('Theme change failed:', error)
	} finally {
		await hideLoader()
	}
}

// Initialize theme system
function init() {
	const storedTheme = localStorage.getItem('theme') || THEMES.SYSTEM
	const isOLED = localStorage.getItem('isOLED') === 'true'

	applyTheme(storedTheme, isOLED)

	// Listen for system theme changes
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
		if (localStorage.getItem('theme') === THEMES.SYSTEM) {
			applyTheme(THEMES.SYSTEM, localStorage.getItem('isOLED') === 'true')
		}
	})
}

// Theme change handler
function handleChangeTheme(e) {
	const themeButton = e.target.closest('button')
	if (!themeButton) return

	const themeButtonID = themeButton.id
	if (Object.values(THEMES).includes(themeButtonID)) {
		setTheme(themeButtonID, false)
	} else if (themeButtonID === 'oled') {
		setTheme(THEMES.DARK, true)
	} else if (themeButtonID === 'gpth-open-settings') {
		openSettings()
	}
}

export { init, handleChangeTheme }
