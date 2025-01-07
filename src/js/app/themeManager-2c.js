// Constants for theme management
const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
	SYSTEM: 'system',
	OLED: 'oled',
}

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

function setRootTheme(theme, isOLED) {
	const root = document.documentElement
	const effectiveTheme = theme === THEMES.SYSTEM ? getSystemTheme() : theme

	// Single source of truth for theme application
	root.className = effectiveTheme
	root.style.colorScheme = effectiveTheme
	root.dataset.gptheme = effectiveTheme === THEMES.DARK && isOLED ? 'oled' : effectiveTheme
}

function updateTheme(newTheme, isOLED = false) {
	const { theme: currentTheme } = getStoredThemeState()

	if (currentTheme === newTheme && String(isOLED) === localStorage.getItem('isOLED')) return

	// Update storage and DOM in a single operation
	localStorage.setItem('theme', newTheme)
	localStorage.setItem('isOLED', isOLED)

	setRootTheme(newTheme, isOLED)

	// Notify other tabs/windows
	window.dispatchEvent(
		new StorageEvent('storage', {
			key: 'theme',
			newValue: newTheme,
			// oldValue: currentTheme,
			storageArea: localStorage,
		})
	)
}

// Event handlers
function handleChangeTheme(e) {
	const themeBtn = e.target.closest('button')
	if (!themeBtn) return

	const themeId = themeBtn.id

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
			openSettings()
			break
	}
}

function init() {
	const { theme, isOLED } = getStoredThemeState()

	setRootTheme(theme, isOLED)

	mediaQuery.addEventListener('change', () => {
		const { theme, isOLED } = getStoredThemeState()
		if (theme === THEMES.SYSTEM) {
			setRootTheme(THEMES.SYSTEM, isOLED)
		}
	})
}

export { init, handleChangeTheme }
