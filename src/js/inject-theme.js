(function () {
	const STORAGE_KEYS = {
		THEME: 'theme',
		IS_OLED: 'isOLED',
	}
	const THEMES = {
		LIGHT: 'light',
		DARK: 'dark',
		SYSTEM: 'system',
		OLED: 'oled',
	}

	function getSysTheme() {
		return window.matchMedia('(prefers-color-scheme: light)').matches ? THEMES.LIGHT : THEMES.DARK
	}

	function getStoredThemeState() {
		try {
			return {
				theme: localStorage.getItem(STORAGE_KEYS.THEME) || THEMES.SYSTEM,
				isOLED: localStorage.getItem(STORAGE_KEYS.IS_OLED) === 'true',
			}
		} catch (error) {
			return { theme: THEMES.SYSTEM, isOLED: false }
		}
	}

	function setRootTheme(theme, isOLED) {
		const root = document.documentElement
		if (!root) return
		const effectiveTheme = theme === THEMES.SYSTEM ? getSysTheme() : theme
		const dataAttrTheme = effectiveTheme === THEMES.DARK && isOLED ? THEMES.OLED : effectiveTheme

		root.classList.remove('light', 'dark', 'gpth-theme-light', 'gpth-theme-dark', 'gpth-theme-system', 'gpth-theme-oled')
		root.classList.add(effectiveTheme, `gpth-theme-${dataAttrTheme}`)
		root.style.colorScheme = effectiveTheme
		root.dataset.gpthTheme = dataAttrTheme
		root.dataset.gptheme = dataAttrTheme
	}

	let rootObserver = null
	function observeRootElement() {
		if (rootObserver) return

		const targetNode = document.documentElement
		if (!targetNode) return
		const config = { attributes: true, attributeFilter: ['class', 'data-gpth-theme', 'data-gptheme', 'style'] }

		const callback = (mutationsList) => {
			for (const mutation of mutationsList) {
				if (mutation.type === 'attributes') {
					const { theme: currentTheme, isOLED: currentIsOLED } = getStoredThemeState()
					const effectiveTheme = currentTheme === THEMES.SYSTEM ? getSysTheme() : currentTheme
					const dataAttrTheme = effectiveTheme === THEMES.DARK && currentIsOLED ? THEMES.OLED : effectiveTheme
					const expectedClass = `gpth-theme-${dataAttrTheme}`

					if (
						!targetNode.classList.contains(expectedClass) ||
						!targetNode.classList.contains(effectiveTheme) ||
						targetNode.dataset.gpthTheme !== dataAttrTheme ||
						targetNode.dataset.gptheme !== dataAttrTheme ||
						targetNode.style.colorScheme !== effectiveTheme
					) {
						rootObserver.disconnect()
						setRootTheme(currentTheme, currentIsOLED)
						rootObserver.observe(targetNode, config)
					}
				}
			}
		}

		rootObserver = new MutationObserver(callback)
		rootObserver.observe(targetNode, config)
	}

	function run() {
		const { theme, isOLED } = getStoredThemeState()
		if (document.documentElement) {
			setRootTheme(theme, isOLED)
			observeRootElement()
		} else {
			const docObserver = new MutationObserver(() => {
				if (document.documentElement) {
					docObserver.disconnect()
					setRootTheme(theme, isOLED)
					observeRootElement()
				}
			})
			docObserver.observe(document, { childList: true, subtree: true })
		}
	}

	run()
})();
