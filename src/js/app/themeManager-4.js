// Constants
const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
	SYSTEM: 'system',
}

const LOADER_CONFIG = {
	FADE_DURATION: 200,
	MIN_DISPLAY_TIME: 300,
	TEMPLATE: `
      <div class="theme-loader__content">
        <p class="theme-loader__title">
          <span>changing</span>
          <span>theme</span>
        </p>
        <div class="theme-loader__spinner"></div>
      </div>
    `,
}

// State management with closure
const themeManager = () => {
	let loaderElement = null
	let showStartTime = 0
	let hideTimeoutId = null
	let mediaQuery = null

	const getSystemTheme = () =>
		window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT

	const applyTheme = (theme, isOLED = false) => {
		const htmlTag = document.documentElement
		const appliedTheme = theme === THEMES.SYSTEM ? getSystemTheme() : theme

		htmlTag.className = appliedTheme
		htmlTag.style.colorScheme = appliedTheme
		htmlTag.dataset.gptheme = appliedTheme === THEMES.DARK && isOLED ? 'oled' : appliedTheme

		if (appliedTheme === THEMES.DARK && isOLED) {
			htmlTag.dataset.oled = ''
		} else {
			delete htmlTag.dataset.oled
		}
	}

	const createLoader = () => {
		if (loaderElement) return loaderElement

		const loader = document.createElement('div')
		loader.id = 'theme-loader'
		loader.innerHTML = LOADER_CONFIG.TEMPLATE
		loader.style.opacity = '0'
		document.body.appendChild(loader)
		loaderElement = loader
		return loader
	}

	const showLoader = async () => {
		clearTimeout(hideTimeoutId)
		showStartTime = Date.now()

		const loader = loaderElement || createLoader()
		loader.style.display = 'grid'

		return new Promise((resolve) => {
			requestAnimationFrame(() => {
				loader.style.opacity = '1'
				loader.style.transition = `opacity ${LOADER_CONFIG.FADE_DURATION}ms ease-out`

				const spinner = loader.querySelector('.theme-loader__spinner')
				spinner.style.animation = 'spin 1s linear infinite'

				setTimeout(resolve, LOADER_CONFIG.FADE_DURATION)
			})
		})
	}

	const hideLoader = async () => {
		if (!loaderElement) return

		const elapsedTime = Date.now() - showStartTime
		const remainingTime = Math.max(0, LOADER_CONFIG.MIN_DISPLAY_TIME - elapsedTime)

		return new Promise((resolve) => {
			hideTimeoutId = setTimeout(() => {
				if (loaderElement) {
					loaderElement.style.opacity = '0'
					loaderElement.addEventListener(
						'transitionend',
						() => {
							loaderElement.style.display = 'none'
							resolve()
						},
						{ once: true }
					)
				}
			}, remainingTime)
		})
	}

	const setTheme = async (theme, isOLED = false) => {
		const currentTheme = localStorage.getItem('theme')
		const currentOLED = localStorage.getItem('isOLED') === 'true'

		if (currentTheme === theme && currentOLED === isOLED) return

		try {
			await showLoader()

			localStorage.setItem('theme', theme)
			localStorage.setItem('isOLED', isOLED)
			applyTheme(theme, isOLED)

			window.dispatchEvent(
				new StorageEvent('storage', {
					key: 'theme',
					newValue: theme,
					oldValue: currentTheme,
					storageArea: localStorage,
				})
			)
		} catch (error) {
			console.error('Theme change failed:', error)
		} finally {
			await hideLoader()
		}
	}

	const handleThemeChange = (e) => {
		const button = e.target.closest('button')
		if (!button) return

		const { id } = button
		if (Object.values(THEMES).includes(id)) {
			setTheme(id, false)
		} else if (id === 'oled') {
			setTheme(THEMES.DARK, true)
		}
	}

	const init = () => {
		const storedTheme = localStorage.getItem('theme') || THEMES.SYSTEM
		const isOLED = localStorage.getItem('isOLED') === 'true'

		mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		mediaQuery.addEventListener('change', () => {
			if (localStorage.getItem('theme') === THEMES.SYSTEM) {
				applyTheme(THEMES.SYSTEM, localStorage.getItem('isOLED') === 'true')
			}
		})

		applyTheme(storedTheme, isOLED)
	}

	const cleanup = () => {
		if (mediaQuery) {
			mediaQuery.removeEventListener('change')
		}
		if (loaderElement) {
			loaderElement.remove()
			loaderElement = null
		}
		clearTimeout(hideTimeoutId)
	}

	return {
		init,
		cleanup,
		setTheme,
		handleThemeChange,
	}
}

export const { init, handleThemeChange } = themeManager()
