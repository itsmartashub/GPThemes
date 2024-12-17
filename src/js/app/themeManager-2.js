import { closeFloatingOptions } from './floatingBtn.js'
import { openSettings } from './settingsManager.js'

const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
	SYSTEM: 'system',
}

const LOADER_TIMEOUT = Number(getComputedStyle(document.documentElement).getPropertyValue('--loader_timeout')) || 300

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
	if (currentTheme !== theme || localStorage.getItem('isOLED') !== String(isOLED)) {
		localStorage.setItem('theme', theme)
		localStorage.setItem('isOLED', isOLED)

		applyTheme(theme, isOLED)
		closeFloatingOptions()

		showLoader()

		window.dispatchEvent(
			new StorageEvent('storage', {
				key: 'theme',
				newValue: theme,
				oldValue: currentTheme,
				storageArea: localStorage,
			})
		)

		// Adjust delay based on transition duration or set a timeout
		setTimeout(hideLoader, LOADER_TIMEOUT) // Set a timeout to manage loader removal
	}
}

function applyTheme(theme, isOLED) {
	const htmlTag = document.documentElement
	const appliedTheme = theme === THEMES.SYSTEM ? getSystemTheme() : theme

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
                <p class="gpth-theme-loader__title"><span>changing</span> <span>theme...</span></p>
                <div class="gpth-theme-loader__spinner"></div>
            </div>`
		document.body.appendChild(loader)
	}
	loader.classList.add('show-loader')
}

function hideLoader() {
	const loader = document.getElementById('gpth-theme-loader')
	if (loader) {
		loader.classList.remove('show-loader')
		loader.addEventListener('transitionend', () => loader.remove(), { once: true })

		// Optional: Handle timeout if transitionend doesn't occur within a certain time
		// setTimeout(() => loader.remove(), LOADER_TIMEOUT);
	}
}

export { init, handleChangeTheme }
