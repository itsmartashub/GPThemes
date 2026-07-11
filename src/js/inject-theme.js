;(function applyInitialTheme() {
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

	function getSystemTheme() {
		return window.matchMedia('(prefers-color-scheme: light)').matches
			? THEMES.LIGHT
			: THEMES.DARK
	}

	function getStoredThemeState() {
		try {
			const storedTheme = localStorage.getItem(STORAGE_KEYS.THEME)
			return {
				theme: storedTheme === THEMES.OLED ? THEMES.DARK : storedTheme || THEMES.SYSTEM,
				isOLED:
					storedTheme === THEMES.OLED ||
					localStorage.getItem(STORAGE_KEYS.IS_OLED) === 'true',
			}
		} catch {
			return { theme: THEMES.SYSTEM, isOLED: false }
		}
	}

	function apply() {
		const root = document.documentElement
		if (!root) return false

		const { theme, isOLED } = getStoredThemeState()
		const effectiveTheme = theme === THEMES.SYSTEM ? getSystemTheme() : theme
		const displayTheme =
			effectiveTheme === THEMES.DARK && isOLED ? THEMES.OLED : effectiveTheme

		root.classList.remove(
			THEMES.LIGHT,
			THEMES.DARK,
			'gpth-theme-light',
			'gpth-theme-dark',
			'gpth-theme-system',
			'gpth-theme-oled',
		)
		root.classList.add(effectiveTheme, `gpth-theme-${displayTheme}`)
		root.style.colorScheme = effectiveTheme
		root.dataset.gpthTheme = displayTheme
		root.dataset.gptheme = displayTheme
		return true
	}

	if (apply()) return

	const observer = new MutationObserver(() => {
		if (apply()) observer.disconnect()
	})
	observer.observe(document, { childList: true, subtree: true })
})()
