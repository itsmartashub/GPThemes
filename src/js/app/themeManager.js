import { onToggleSettings } from './settingsManager.js'

// =====================================================
// CONSTANTS
// =====================================================

const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
	SYSTEM: 'system',
	OLED: 'oled',
}

const STORAGE_KEYS = {
	THEME: 'theme',
	IS_OLED: 'isOLED',
}

const ROOT_THEME_CLASSES = [THEMES.LIGHT, THEMES.DARK]
const OWNED_THEME_CLASSES = Object.values(THEMES).map((theme) => `gpth-theme-${theme}`)

const PREFERS_LIGHT_MEDIA_QUERY = window.matchMedia('(prefers-color-scheme: light)')

let cachedThemeState = null
let removeSystemPrefListener = null

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

// Core theme management
function getSysTheme() {
	return PREFERS_LIGHT_MEDIA_QUERY.matches ? THEMES.LIGHT : THEMES.DARK
}
// Theme state management
function getStoredThemeState() {
	if (cachedThemeState) return cachedThemeState

	try {
		cachedThemeState = {
			theme: localStorage.getItem(STORAGE_KEYS.THEME) || THEMES.SYSTEM,
			isOLED: localStorage.getItem(STORAGE_KEYS.IS_OLED) === 'true',
		}
	} catch (error) {
		console.warn('LocalStorage unavailable, using defaults:', error)
		cachedThemeState = { theme: THEMES.SYSTEM, isOLED: false }
	}

	return cachedThemeState
}
function invalidateThemeCache() {
	cachedThemeState = null
}

// =====================================================
// UPDATE CSS/DOM (DOm manipulation)
// =====================================================
function setRootTheme(theme, isOLED) {
	const root = document.documentElement
	const effectiveTheme = theme === THEMES.SYSTEM ? getSysTheme() : theme
	const dataAttrTheme = effectiveTheme === THEMES.DARK && isOLED ? THEMES.OLED : effectiveTheme

	root.classList.remove(...ROOT_THEME_CLASSES, ...OWNED_THEME_CLASSES)
	root.classList.add(effectiveTheme, `gpth-theme-${dataAttrTheme}`)
	root.style.colorScheme = effectiveTheme
	root.dataset.gpthTheme = dataAttrTheme
	root.dataset.gptheme = dataAttrTheme
}

function updateTheme(newTheme, isOLED = false) {
	// const { theme: currentTheme } = getStoredThemeState()

	// // Get storage theme value and skip if no change
	// if (currentTheme === newTheme && String(isOLED) === localStorage.getItem(STORAGE_KEYS.IS_OLED)) return

	const { theme: currTheme, isOLED: currIsOLED } = getStoredThemeState()

	// Skip if no change
	// Skip if no change
	if (currTheme === newTheme && currIsOLED === isOLED) return

	// Update storage if theme changed
	try {
		localStorage.setItem(STORAGE_KEYS.THEME, newTheme)
		localStorage.setItem(STORAGE_KEYS.IS_OLED, String(isOLED))
		invalidateThemeCache()
	} catch (error) {
		console.error('Failed to save theme:', error)
		return
	}

	// Update DOM
	setRootTheme(newTheme, isOLED)

	// Update Canvas theme
	broadcastThemeChange(newTheme)
}

// Notify other tabs/windows (this update GPT's CodeMirror (Canvas) theme w/o need for page reloading)
function broadcastThemeChange(newTheme) {
	window.dispatchEvent(
		new StorageEvent('storage', {
			key: STORAGE_KEYS.THEME,
			newValue: newTheme,
			storageArea: localStorage,
		}),
	)
}

// =====================================================
// EVENTS
// =====================================================
function onChangeTheme(e) {
	const themeBtn = e.target.closest('button[data-gpth-dock-btn]')
	if (!themeBtn) return

	const themeId = themeBtn.id

	switch (themeId) {
		case THEMES.LIGHT:
		case THEMES.DARK:
		case THEMES.SYSTEM:
			updateTheme(themeId, false)
			break
		case THEMES.OLED:
			updateTheme(THEMES.DARK, true)
			break
		case 'gpth-open-settings':
			onToggleSettings()
			break
		default:
			console.warn(`Unknown theme: ${themeId}`)
	}
}

// System pref handler
function onSystemPrefChange() {
	const { theme, isOLED } = getStoredThemeState()
	if (theme === THEMES.SYSTEM) {
		setRootTheme(THEMES.SYSTEM, isOLED)
	}
}

// =====================================================
// Lifecycle: INIT
// =====================================================
function init() {
	const { theme, isOLED } = getStoredThemeState()
	setRootTheme(theme, isOLED)

	// Add event listener for theme change based on sys pref
	if (!removeSystemPrefListener) {
		PREFERS_LIGHT_MEDIA_QUERY.addEventListener('change', onSystemPrefChange)
		removeSystemPrefListener = () => {
			PREFERS_LIGHT_MEDIA_QUERY.removeEventListener('change', onSystemPrefChange)
			removeSystemPrefListener = null
			invalidateThemeCache()
		}
	}

	// Clean up the event listener when the component is destroyed
	return () => {
		removeSystemPrefListener?.()
	}
}

// =====================================================
// Exports
// =====================================================
export { init, onChangeTheme }
