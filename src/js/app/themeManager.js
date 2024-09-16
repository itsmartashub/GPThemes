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
	localStorage.setItem('theme', theme)
	localStorage.setItem('isOLED', isOLED)
	applyTheme(theme, isOLED)
	closeFloatingOptions()
}

function applyTheme(theme, isOLED) {
	console.log('Applying theme:', theme, 'OLED:', isOLED)
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

	// console.log('Changing theme:', { themeButtonID })

	// if (themeButtonID === 'light' || themeButtonID === 'dark' || themeButtonID === 'system') {
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
	window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
		if (localStorage.getItem('theme') === THEMES.SYSTEM) {
			initTheme() // Re-init to apply correct system theme
		}
	})
}

export { init, handleChangeTheme }
