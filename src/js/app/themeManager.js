import { onOpenSettings } from './settingsManager.js'

// =====================================================
// STATE
// =====================================================

const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
	SYSTEM: 'system',
	OLED: 'oled',
}

// =====================================================
// UTILS
// =====================================================

const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')

// Core theme management
function getSystemTheme() {
	return mediaQuery.matches ? THEMES.LIGHT : THEMES.DARK
}
// Theme state management
function getStoredThemeState() {
	return {
		theme: localStorage.getItem('theme') || THEMES.SYSTEM,
		isOLED: localStorage.getItem('isOLED') === 'true',
	}
}

// =====================================================
// UPDATE CSS/DOM
// =====================================================
function setRootTheme(theme, isOLED) {
	const root = document.documentElement
	const effectiveTheme = theme === THEMES.SYSTEM ? getSystemTheme() : theme

	root.className = effectiveTheme
	root.style.colorScheme = effectiveTheme
	root.dataset.gptheme = effectiveTheme === THEMES.DARK && isOLED ? 'oled' : effectiveTheme
}

function updateTheme(newTheme, isOLED = false) {
	const { theme: currentTheme } = getStoredThemeState()

	// Get storage theme value and skip if no change
	if (currentTheme === newTheme && String(isOLED) === localStorage.getItem('isOLED')) return

	// Update storage if theme changed
	localStorage.setItem('theme', newTheme)
	localStorage.setItem('isOLED', isOLED)

	// Update DOM
	setRootTheme(newTheme, isOLED)

	// Notify other tabs/windows (this update GPT's CodeMirror (Canvas) theme without need for page reloading)
	window.dispatchEvent(
		new StorageEvent('storage', {
			key: 'theme',
			newValue: newTheme,
			// oldValue: currentTheme,
			storageArea: localStorage,
		})
	)
}

// =====================================================
// EVENTS
// =====================================================
function onChangeTheme(e) {
	const themeBtn = e.target.closest('button')
	if (!themeBtn) return

	const themeId = themeBtn.id ?? themeBtn.id

	switch (themeId) {
		case THEMES.LIGHT:
		case THEMES.DARK:
		case THEMES.SYSTEM:
			updateTheme(themeId, false)
			break
		case 'oled':
			updateTheme(THEMES.DARK, true)
			break
		case 'gpth-open-settings':
			onOpenSettings()
			break
	}
}

// =====================================================
// Lifecycle: INIT
// =====================================================
function init() {
	const { theme, isOLED } = getStoredThemeState()
	setRootTheme(theme, isOLED)

	const mediaQueryListener = () => {
		const { theme, isOLED } = getStoredThemeState()
		if (theme === THEMES.SYSTEM) {
			setRootTheme(THEMES.SYSTEM, isOLED)
		}
	}

	// Add event listener for theme change based on sys pref
	mediaQuery.addEventListener('change', mediaQueryListener)

	// Clean up the event listener when the component is destroyed
	return () => {
		mediaQuery.removeEventListener('change', mediaQueryListener)
	}
}

// =====================================================
// Exports
// =====================================================
export { init, onChangeTheme as handleChangeTheme }
