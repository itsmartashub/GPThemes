import { closeFloatingOptions } from './floatingBtn.js'
import { openSettings } from './settingsManager.js'

const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
	SYSTEM: 'system',
}

function getSystemTheme() {
	return window.matchMedia('(prefers-color-scheme: light)').matches ? THEMES.LIGHT : THEMES.DARK
}

function initTheme() {
	const storedTheme = localStorage.getItem('theme') || THEMES.SYSTEM
	const isOLED = localStorage.getItem('isOLED') === 'true'
	applyTheme(storedTheme, isOLED)
}

function setTheme(theme, isOLED = false) {
	const currentTheme = localStorage.getItem('theme')
	if (currentTheme === theme && localStorage.getItem('isOLED') === String(isOLED)) return // Skip redundant updates

	localStorage.setItem('theme', theme)
	localStorage.setItem('isOLED', isOLED)

	// Show loader during theme change
	showLoader()

	applyTheme(theme, isOLED)

	// Simulate a `storage` event to ensure other components react
	const event = new StorageEvent('storage', {
		key: 'theme',
		newValue: theme,
		oldValue: currentTheme,
		storageArea: localStorage,
	})
	window.dispatchEvent(event)

	closeFloatingOptions()

	// Hide loader after applying theme
	setTimeout(hideLoader, 100) // Adjust delay as needed for smoothness
}

function applyTheme(theme, isOLED) {
	const htmlTag = document.documentElement
	let appliedTheme = theme

	if (theme === THEMES.SYSTEM) {
		appliedTheme = getSystemTheme()
	}

	htmlTag.className = appliedTheme
	htmlTag.style.colorScheme = appliedTheme

	if (appliedTheme === THEMES.DARK && isOLED) {
		htmlTag.setAttribute('data-gptheme', 'oled')
		htmlTag.setAttribute('data-oled', '')
	} else {
		htmlTag.setAttribute('data-gptheme', appliedTheme)
		htmlTag.removeAttribute('data-oled')
	}
}

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

function init() {
	initTheme()
	window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
		if (localStorage.getItem('theme') === THEMES.SYSTEM) {
			initTheme() // Re-init to apply correct system theme
		}
	})
}

function showLoader() {
	let loader = document.getElementById('gpth-theme-loader')
	if (!loader) {
		loader = document.createElement('div')
		loader.id = 'gpth-theme-loader'
		loader.innerHTML = `
		<div class="gpth-theme-loader__content">
			<p class="gpth-theme-loader__title"><span>theme</span> <span>changing</span></p>
			
			<div class="gpth-theme-loader__card">
				<p><span>LOAD</span><span>ING...</span></p>
			</div>
		</div>` // Customize spinner as needed
		document.body.appendChild(loader)
	}
	loader.style.display = 'flex'
}

function hideLoader() {
	const loader = document.getElementById('gpth-theme-loader')
	if (loader) {
		loader.style.display = 'none'
	}
}

export { init, handleChangeTheme }
