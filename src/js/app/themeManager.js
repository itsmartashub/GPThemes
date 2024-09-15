import browser from 'webextension-polyfill'
import { closeFloatingOptions } from './floatingBtn.js'
import { openSettings } from './settingsManager-old.js'

const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
	OLED: 'oled',
}

const STORAGE_KEYS = {
	THEME: 'gptheme',
}

let htmlTag = document.documentElement

async function initTheme() {
	try {
		const { [STORAGE_KEYS.THEME]: storedTheme } = await browser.storage.sync.get(STORAGE_KEYS.THEME)

		// console.log({ storedTheme })

		const theme =
			storedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? THEMES.LIGHT : THEMES.DARK)
		applyTheme(theme)
	} catch (error) {
		console.error('Error initializing theme:', error)
	}
}
async function setTheme(theme) {
	try {
		await browser.storage.sync.set({ [STORAGE_KEYS.THEME]: theme })
		applyTheme(theme)
		closeFloatingOptions()
	} catch (error) {
		console.error('Error setting theme:', error)
	}
}
function applyTheme(theme) {
	console.log('Applying theme:', theme)

	htmlTag.dataset.gptheme = theme === THEMES.OLED ? theme : ''
	htmlTag.style.colorScheme = theme === THEMES.OLED ? THEMES.DARK : theme
	htmlTag.className = theme === THEMES.OLED ? THEMES.DARK : theme
}
function handleChangeTheme(e) {
	const themeButton = e.target.closest('button')
	if (!themeButton) return

	const themeButtonID = themeButton.id // light | dark | oled | gpth-open-settings

	console.log({ themeButtonID })

	if (themeButtonID === THEMES.LIGHT || themeButtonID === THEMES.DARK || themeButtonID === THEMES.OLED) {
		setTheme(themeButtonID)
		return
	}

	/* If clicked on "⚙️ Open Settings" */
	if (themeButtonID === 'gpth-open-settings') {
		openSettings()
	}
}
const init = () => {
	initTheme()
}

export { init, handleChangeTheme }
