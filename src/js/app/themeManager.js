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
let rootObserver = null
let initialized = false

function getSystemTheme() {
	return PREFERS_LIGHT_MEDIA_QUERY.matches ? THEMES.LIGHT : THEMES.DARK
}

function getStoredThemeState() {
	if (cachedThemeState) return cachedThemeState

	try {
		const storedTheme = localStorage.getItem(STORAGE_KEYS.THEME)
		const storedOLED = localStorage.getItem(STORAGE_KEYS.IS_OLED) === 'true'
		cachedThemeState = {
			theme:
				storedTheme === THEMES.OLED
					? THEMES.DARK
					: [THEMES.LIGHT, THEMES.DARK, THEMES.SYSTEM].includes(storedTheme)
						? storedTheme
						: THEMES.SYSTEM,
			isOLED: storedTheme === THEMES.OLED || storedOLED,
		}
	} catch (error) {
		console.warn('[GPThemes] Local storage unavailable, using system theme:', error)
		cachedThemeState = { theme: THEMES.SYSTEM, isOLED: false }
	}

	return cachedThemeState
}

function invalidateThemeCache() {
	cachedThemeState = null
}

function resolveTheme(theme, isOLED) {
	const effectiveTheme = theme === THEMES.SYSTEM ? getSystemTheme() : theme
	const displayTheme = effectiveTheme === THEMES.DARK && isOLED ? THEMES.OLED : effectiveTheme
	return { displayTheme, effectiveTheme }
}

function setRootTheme(theme, isOLED) {
	const root = document.documentElement
	if (!root) return

	const { displayTheme, effectiveTheme } = resolveTheme(theme, isOLED)
	root.classList.remove(...ROOT_THEME_CLASSES, ...OWNED_THEME_CLASSES)
	root.classList.add(effectiveTheme, `gpth-theme-${displayTheme}`)
	root.style.colorScheme = effectiveTheme
	root.dataset.gpthTheme = displayTheme
	root.dataset.gptheme = displayTheme
}

function isThemeApplied(theme, isOLED) {
	const root = document.documentElement
	if (!root) return false

	const { displayTheme, effectiveTheme } = resolveTheme(theme, isOLED)
	return (
		root.classList.contains(effectiveTheme) &&
		root.classList.contains(`gpth-theme-${displayTheme}`) &&
		root.style.colorScheme === effectiveTheme &&
		root.dataset.gpthTheme === displayTheme &&
		root.dataset.gptheme === displayTheme
	)
}

function ensureStoredTheme() {
	const { theme, isOLED } = getStoredThemeState()
	if (!isThemeApplied(theme, isOLED)) setRootTheme(theme, isOLED)
}

function broadcastThemeChange(newTheme) {
	window.dispatchEvent(
		new StorageEvent('storage', {
			key: STORAGE_KEYS.THEME,
			newValue: newTheme,
			storageArea: localStorage,
		}),
	)
}

function updateTheme(newTheme, isOLED = false) {
	const current = getStoredThemeState()
	if (current.theme === newTheme && current.isOLED === isOLED) {
		ensureStoredTheme()
		return
	}

	try {
		localStorage.setItem(STORAGE_KEYS.THEME, newTheme)
		localStorage.setItem(STORAGE_KEYS.IS_OLED, String(isOLED))
		invalidateThemeCache()
	} catch (error) {
		console.error('[GPThemes] Failed to save theme:', error)
		return
	}

	setRootTheme(newTheme, isOLED)
	broadcastThemeChange(newTheme)
}

function onChangeTheme(event) {
	const themeButton = event.target.closest('button[data-gpth-dock-btn]')
	if (!themeButton) return false

	switch (themeButton.id) {
		case THEMES.LIGHT:
		case THEMES.DARK:
		case THEMES.SYSTEM:
			updateTheme(themeButton.id, false)
			return true
		case THEMES.OLED:
			updateTheme(THEMES.DARK, true)
			return true
		default:
			return false
	}
}

function onSystemPreferenceChange() {
	const { theme } = getStoredThemeState()
	if (theme === THEMES.SYSTEM) ensureStoredTheme()
}

function onStorageChange(event) {
	if (event.key !== STORAGE_KEYS.THEME && event.key !== STORAGE_KEYS.IS_OLED) return
	invalidateThemeCache()
	ensureStoredTheme()
}

function init() {
	if (initialized) return cleanup
	initialized = true

	ensureStoredTheme()
	rootObserver = new MutationObserver(ensureStoredTheme)
	rootObserver.observe(document.documentElement, {
		attributeFilter: ['class', 'data-gpth-theme', 'data-gptheme', 'style'],
		attributes: true,
	})
	PREFERS_LIGHT_MEDIA_QUERY.addEventListener('change', onSystemPreferenceChange)
	window.addEventListener('storage', onStorageChange)
	return cleanup
}

function cleanup() {
	rootObserver?.disconnect()
	rootObserver = null
	PREFERS_LIGHT_MEDIA_QUERY.removeEventListener('change', onSystemPreferenceChange)
	window.removeEventListener('storage', onStorageChange)
	invalidateThemeCache()
	initialized = false
}

export { init, onChangeTheme }
