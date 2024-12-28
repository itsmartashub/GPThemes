// import { openSettings } from './settingsManager.js'

// const THEMES = {
// 	LIGHT: 'light',
// 	DARK: 'dark',
// 	SYSTEM: 'system',
// }

// // System theme detection
// const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
// const getSystemTheme = () => (mediaQuery.matches ? THEMES.LIGHT : THEMES.DARK)

// function applyRootClassAndScheme(theme) {
// 	const root = document.documentElement
// 	const appliedTheme = theme === THEMES.SYSTEM ? getSystemTheme() : theme

// 	root.className = appliedTheme
// 	root.style.colorScheme = appliedTheme
// }

// function applyRootDataAttr(theme, isOLED) {
// 	const root = document.documentElement
// 	const appliedTheme = theme === THEMES.SYSTEM ? getSystemTheme() : theme

// 	root.dataset.gptheme = appliedTheme === THEMES.DARK && isOLED ? 'oled' : appliedTheme
// }

// function applyTheme(theme, isOLED) {
// 	applyRootClassAndScheme(theme)
// 	applyRootDataAttr(theme, isOLED)
// }

// // Public theme switching API
// const updateTheme = (theme, isOLED = false) => {
// 	const currentTheme = localStorage.getItem('theme')
// 	const currentOLED = localStorage.getItem('isOLED') === 'true'

// 	if (currentTheme === theme && currentOLED === String(isOLED)) return

// 	// /* TODO: When changing the theme from OLED to Light, something is causing the theme to change first into Dark and then into Light, wtf */
// 	localStorage.setItem('theme', theme)
// 	localStorage.setItem('isOLED', isOLED)
// 	applyRootDataAttr(theme, isOLED)

// 	/* TODO: Via this the document.documentElement.className is updated, and document.documentElement.style.colorScheme is updated already, so with applyTheme above its like the same code is triggered TWICE which is bad. HOW TO IMPROVE THIS but to not broke the whole code logic??? */
// 	window.dispatchEvent(
// 		new StorageEvent('storage', {
// 			key: 'theme',
// 			newValue: theme,
// 			oldValue: currentTheme,
// 			storageArea: localStorage,
// 		})
// 	)
// }

// const handleChangeTheme = async (e) => {
// 	const themeBtn = e.target.closest('button')
// 	if (!themeBtn) return

// 	const themeId = themeBtn.id

// 	if (Object.values(THEMES).includes(themeId)) {
// 		updateTheme(themeId, false)
// 	} else if (themeId === 'oled') {
// 		updateTheme(THEMES.DARK, true)
// 	} else if (themeId === 'gpth-open-settings') {
// 		openSettings()
// 	}
// }

// const init = () => {
// 	const theme = localStorage.getItem('theme') || THEMES.SYSTEM
// 	const isOLED = localStorage.getItem('isOLED') === 'true'

// 	applyTheme(theme, isOLED)

// 	mediaQuery.addEventListener('change', () => {
// 		if (localStorage.getItem('theme') === THEMES.SYSTEM) {
// 			applyTheme(THEMES.SYSTEM, isOLED)
// 		}
// 	})
// }

// export { init, handleChangeTheme }

// Constants
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

/* function applyRootClassAndScheme(theme) {
	const root = document.documentElement
	const appliedTheme = theme === THEMES.SYSTEM ? getSystemTheme() : theme

	root.className = appliedTheme
	root.style.colorScheme = appliedTheme
}
function applyRootDataAttr(theme, isOLED) {
	const root = document.documentElement
	const appliedTheme = theme === THEMES.SYSTEM ? getSystemTheme() : theme

	root.dataset.gptheme = appliedTheme === THEMES.DARK && isOLED ? 'oled' : appliedTheme
}
function setRootTheme(theme, isOLED) {
	applyRootClassAndScheme(theme)
	applyRootDataAttr(theme, isOLED)
} */

function updateTheme(newTheme, isOLED = false) {
	const { theme: currentTheme } = getStoredThemeState()
	// const isCM = document.querySelector('section main .cm-editor')

	if (currentTheme === newTheme && String(isOLED) === localStorage.getItem('isOLED')) return

	// Update storage and DOM in a single operation
	localStorage.setItem('theme', newTheme)
	localStorage.setItem('isOLED', isOLED)
	// applyRootDataAttr(newTheme, isOLED)
	setRootTheme(newTheme, isOLED)

	// if (!isCM) return

	// Notify other tabs/windows
	window.dispatchEvent(
		new StorageEvent('storage', {
			key: 'theme',
			newValue: newTheme,
			oldValue: currentTheme,
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
