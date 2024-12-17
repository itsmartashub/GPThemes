import { closeFloatingOptions } from './floatingBtn.js'
import { openSettings } from './settingsManager.js'

const THEMES = Object.freeze({
	LIGHT: 'light',
	DARK: 'dark',
	SYSTEM: 'system',
})

const STORAGE_KEYS = Object.freeze({
	THEME: 'theme',
	IS_OLED: 'isOLED',
})

// Cached elements and state
const systemThemeQuery = window.matchMedia('(prefers-color-scheme: light)')
let themeLoader = null

function getSystemTheme() {
	return systemThemeQuery.matches ? THEMES.LIGHT : THEMES.DARK
}

function createLoader() {
	const loader = document.createElement('div')
	loader.id = 'gpth-theme-loader'
	loader.innerHTML = `
    <div class="gpth-theme-loader__content">
      <p class="gpth-theme-loader__title"><span>changing</span> <span>theme...</span></p>
      <div class="gpth-theme-loader__spinner"></div>
    </div>`
	document.body.appendChild(loader)
	return loader
}

function showLoader() {
	if (!themeLoader) {
		themeLoader = createLoader()
	}
	themeLoader.style.display = 'flex'
}

function hideLoader() {
	if (themeLoader) {
		themeLoader.style.display = 'none'
	}
}

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

async function setTheme(theme, isOLED = false) {
	const currentTheme = localStorage.getItem(STORAGE_KEYS.THEME)
	const currentOLED = localStorage.getItem(STORAGE_KEYS.IS_OLED)

	// Skip if no changes
	if (currentTheme === theme && currentOLED === String(isOLED)) {
		return
	}

	try {
		showLoader()

		localStorage.setItem(STORAGE_KEYS.THEME, theme)
		localStorage.setItem(STORAGE_KEYS.IS_OLED, isOLED)

		applyTheme(theme, isOLED)

		// Notify other components about theme change
		window.dispatchEvent(
			new StorageEvent('storage', {
				key: STORAGE_KEYS.THEME,
				newValue: theme,
				oldValue: currentTheme,
				storageArea: localStorage,
			})
		)

		closeFloatingOptions()

		// Wait for transitions to complete
		await new Promise((resolve) => setTimeout(resolve, 200))
	} finally {
		hideLoader()
	}
}

function initTheme() {
	const storedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || THEMES.SYSTEM
	const isOLED = localStorage.getItem(STORAGE_KEYS.IS_OLED) === 'true'
	applyTheme(storedTheme, isOLED)
}

function handleChangeTheme(event) {
	const themeButton = event.target.closest('button')
	if (!themeButton) return

	const { id } = themeButton

	if (Object.values(THEMES).includes(id)) {
		setTheme(id, false)
	} else if (id === 'oled') {
		setTheme(THEMES.DARK, true)
	} else if (id === 'gpth-open-settings') {
		openSettings()
	}
}

function init() {
	initTheme()

	// Listen for system theme changes
	systemThemeQuery.addEventListener('change', () => {
		if (localStorage.getItem(STORAGE_KEYS.THEME) === THEMES.SYSTEM) {
			initTheme()
		}
	})
}

export { init, handleChangeTheme }
