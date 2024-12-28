// // themeManager.js
// import { closeFloatingOptions } from './floatingBtn.js'
// import { openSettings } from './settingsManager.js'

// let loaderInstance = null
// let themeTransitionPromise = Promise.resolve()
// const LOADER_ID = 'gpth-theme-loader'
// const LOADER_TEXT = 'changing theme...'

// const LOADER = {
// 	FADE_DURATION: getComputedStyle(document.documentElement).getPropertyValue('--loader_timeout') ?? 0,
// 	TEMPLATE: `
//       <div class="${LOADER_ID}__content">
//         <p class="${LOADER_ID}__title" data-text="${LOADER_TEXT}">${LOADER_TEXT}</p>
//         <div class="${LOADER_ID}__spinner"></div>
//       </div>
//     `,
// }
// const THEMES = {
// 	LIGHT: 'light',
// 	DARK: 'dark',
// 	SYSTEM: 'system',
// }

// const createLoader = () => {
// 	const loader = document.createElement('div')
// 	loader.id = LOADER_ID
// 	loader.innerHTML = LOADER.TEMPLATE
// 	document.body.appendChild(loader)
// 	return loader
// }

// const getLoader = () => {
// 	if (!loaderInstance) {
// 		loaderInstance = createLoader()
// 	}
// 	return loaderInstance
// }

// const showLoader = () => {
// 	const loader = getLoader()
// 	loader.offsetHeight // Force reflow
// 	loader.classList.add(`${LOADER_ID}--show`)
// 	return new Promise((resolve) => setTimeout(resolve, 50))
// }

// const hideLoader = () => {
// 	const loader = getLoader()
// 	return new Promise((resolve) => {
// 		const handleTransitionEnd = () => {
// 			loader.removeEventListener('transitionend', handleTransitionEnd)
// 			clearTimeout(fallbackTimeout)
// 			resolve()
// 		}
// 		const fallbackTimeout = setTimeout(() => {
// 			loader.removeEventListener('transitionend', handleTransitionEnd)
// 			resolve()
// 		}, LOADER.FADE_DURATION + 50) // Add a slight buffer
// 		loader.addEventListener('transitionend', handleTransitionEnd)
// 		loader.classList.remove(`${LOADER_ID}--show`)
// 	})
// }

// /* ! This version not working on Firefox */
// /* const showLoader = () => {
//     const loader = getLoader();
//     loader.classList.add(`${LOADER_ID}--show`)
//     return new Promise((resolve) => setTimeout(resolve, 50));
// };

// const hideLoader = () => {
//     const loader = getLoader();
//     loader.classList.remove(`${LOADER_ID}--show`)
//     return new Promise((resolve) => setTimeout(resolve, 50));
// }; */

// // Helper to wait for CSS variables to be applied
// const waitForCSSVariable = (variableName, expectedValue, maxAttempts = 50) => {
// 	return new Promise((resolve, reject) => {
// 		let attempts = 0
// 		const check = () => {
// 			const currentValue = getComputedStyle(document.documentElement).getPropertyValue(variableName).trim()

// 			if (currentValue === expectedValue) {
// 				resolve()
// 			} else if (attempts >= maxAttempts) {
// 				reject(new Error(`Timeout waiting for ${variableName} to become ${expectedValue}`))
// 			} else {
// 				attempts++
// 				requestAnimationFrame(check)
// 			}
// 		}
// 		check()
// 	})
// }

// // Helper to wait for DOM updates
// const waitForDOMUpdate = () =>
// 	new Promise((resolve) => {
// 		const observer = new MutationObserver((mutations, obs) => {
// 			obs.disconnect()
// 			// Wait for next frame to ensure styles are applied
// 			requestAnimationFrame(() => setTimeout(resolve, 50))
// 		})

// 		observer.observe(document.documentElement, {
// 			attributes: true,
// 			attributeFilter: ['class', 'data-gptheme', 'data-oled'],
// 			childList: false,
// 			subtree: false,
// 		})
// 	})

// const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: light)').matches ? THEMES.LIGHT : THEMES.DARK)

// const applyTheme = async (theme, isOLED) => {
// 	const htmlTag = document.documentElement
// 	const appliedTheme = theme === THEMES.SYSTEM ? getSystemTheme() : theme

// 	// Create a promise for style application
// 	const stylePromise = new Promise((resolve) => {
// 		requestAnimationFrame(() => {
// 			htmlTag.className = appliedTheme
// 			htmlTag.style.colorScheme = appliedTheme

// 			if (appliedTheme === THEMES.DARK && isOLED) {
// 				htmlTag.setAttribute('data-gptheme', 'oled')
// 				htmlTag.setAttribute('data-oled', '')
// 			} else {
// 				htmlTag.setAttribute('data-gptheme', appliedTheme)
// 				htmlTag.removeAttribute('data-oled')
// 			}

// 			resolve()
// 		})
// 	})

// 	// Wait for both the style application and DOM updates
// 	await Promise.all([
// 		stylePromise,
// 		waitForDOMUpdate(),
// 		// Wait for critical theme variables to be applied
// 		waitForCSSVariable(
// 			'--c-bg-sidebar',
// 			getComputedStyle(document.documentElement).getPropertyValue('--c-bg-sidebar').trim()
// 		),
// 		waitForCSSVariable(
// 			'--c-accent',
// 			getComputedStyle(document.documentElement).getPropertyValue('--c-accent').trim()
// 		),
// 	])

// 	// Additional delay to ensure all styles are properly computed
// 	await new Promise((resolve) => setTimeout(resolve, 100))
// }

// const setTheme = async (theme, isOLED = false) => {
// 	const currentTheme = localStorage.getItem('theme')
// 	const currentOLED = localStorage.getItem('isOLED') === 'true'

// 	if (currentTheme === theme && currentOLED === isOLED) return

// 	await themeTransitionPromise

// 	themeTransitionPromise = (async () => {
// 		try {
// 			await showLoader()
// 			// Start theme application
// 			const themePromise = applyTheme(theme, isOLED)

// 			// Update storage
// 			localStorage.setItem('theme', theme)
// 			localStorage.setItem('isOLED', isOLED)

// 			// Close UI elements
// 			closeFloatingOptions()

// 			// Dispatch event for other tabs
// 			window.dispatchEvent(
// 				new StorageEvent('storage', {
// 					key: 'theme',
// 					newValue: theme,
// 					oldValue: currentTheme,
// 					storageArea: localStorage,
// 				})
// 			)

// 			// Wait for all theme changes to complete
// 			await themePromise

// 			// Add a small buffer to ensure everything is stable
// 			// await new Promise((resolve) => setTimeout(resolve, 150))

// 			await hideLoader()
// 		} catch (error) {
// 			console.error('Theme application failed:', error)
// 			await hideLoader()
// 		}
// 	})()

// 	return themeTransitionPromise
// }

// const handleChangeTheme = async (e) => {
// 	const themeButton = e.target.closest('button')
// 	if (!themeButton) return

// 	const themeButtonID = themeButton.id

// 	try {
// 		if (Object.values(THEMES).includes(themeButtonID)) {
// 			await setTheme(themeButtonID, false)
// 		} else if (themeButtonID === 'oled') {
// 			await setTheme(THEMES.DARK, true)
// 		} else if (themeButtonID === 'gpth-open-settings') {
// 			openSettings()
// 		}
// 	} catch (error) {
// 		console.error('Theme change failed:', error)
// 	}
// }

// const initTheme = () => {
// 	const storedTheme = localStorage.getItem('theme') || THEMES.SYSTEM
// 	const isOLED = localStorage.getItem('isOLED') === 'true'
// 	return applyTheme(storedTheme, isOLED)
// }

// const init = async () => {
// 	await initTheme()

// 	window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
// 		if (localStorage.getItem('theme') === THEMES.SYSTEM) {
// 			initTheme()
// 		}
// 	})
// }

// export { init, handleChangeTheme }

// themeManager.js
// themeManager.js
// themeManager.js
import { closeFloatingOptions } from './floatingBtn.js'
import { openSettings } from './settingsManager.js'

const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
	SYSTEM: 'system',
}

// System theme detection
const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
const getSystemTheme = () => (mediaQuery.matches ? THEMES.LIGHT : THEMES.DARK)

// Theme state management
let isTransitioning = false
let loader = null

// Loader management
const getLoader = () => {
	if (!document.querySelector('.cm-editor')) return null
	if (loader) return loader

	loader = document.createElement('div')
	loader.id = 'gpth-theme-loader'
	loader.innerHTML = `
    <div class="gpth-theme-loader__content">
      <p class="gpth-theme-loader__title" data-text="changing theme...">changing theme...</p>
      <div class="gpth-theme-loader__spinner"></div>
    </div>
  `
	document.body.appendChild(loader)
	return loader
}

const toggleLoader = async (show) => {
	const loaderElement = getLoader()
	if (!loaderElement) return

	await new Promise((resolve) => {
		const onTransition = () => {
			loaderElement.removeEventListener('transitionend', onTransition)
			clearTimeout(timeout)
			resolve()
		}

		const timeout = setTimeout(onTransition, 300)
		loaderElement.addEventListener('transitionend', onTransition)

		requestAnimationFrame(() => {
			loaderElement.classList.toggle('gpth-theme-loader--show', show)
		})
	})
}

/* ! WORKING but not so dynamic */
// CodeMirror theme application detection
/* const waitForCodeMirror = () => {
	const editor = document.querySelector('.cm-editor')
	if (!editor) return Promise.resolve()

	const initialClasses = editor.classList.length

	return new Promise((resolve) => {
		const observer = new MutationObserver(() => {
			if (editor.classList.length > initialClasses) {
				observer.disconnect()
				resolve()
			}
		})

		observer.observe(editor, {
			attributes: true,
			attributeFilter: ['class'],
		})

		setTimeout(() => {
			observer.disconnect()
			resolve()
		}, 2000)
	})
} */

/* ! NOT WORKING, ENDLESS LOADER */
// CodeMirror theme application detection
const waitForCodeMirror = () => {
	const editor = document.querySelector('section main .cm-editor')
	if (!editor) return Promise.resolve()

	// Capture the initial className
	const initialClassName = editor.className

	return new Promise((resolve) => {
		const observer = new MutationObserver(() => {
			// Check if the className has changed
			if (editor.className !== initialClassName) {
				observer.disconnect() // Stop observing once the className changes
				resolve()
			}
		})

		observer.observe(editor, {
			attributes: true,
			attributeFilter: ['class'], // Only observe class changes
		})

		// Fallback timeout to avoid infinite waiting
		setTimeout(() => {
			observer.disconnect()
			resolve()
		}, 5000) // Adjust the timeout duration as needed
	})
}

const applyTheme = async (theme, isOLED) => {
	const htmlTag = document.documentElement
	const appliedTheme = theme === THEMES.SYSTEM ? getSystemTheme() : theme
	const hasEditor = !!document.querySelector('.cm-editor')

	if (hasEditor) {
		await toggleLoader(true)
	}

	requestAnimationFrame(() => {
		htmlTag.className = appliedTheme
		htmlTag.style.colorScheme = appliedTheme
		htmlTag.setAttribute('data-gptheme', isOLED ? 'oled' : appliedTheme)
		isOLED ? htmlTag.setAttribute('data-oled', '') : htmlTag.removeAttribute('data-oled')
	})

	if (hasEditor) {
		try {
			// Either wait for CodeMirror or timeout after 500ms
			await Promise.race([waitForCodeMirror(), new Promise((resolve) => setTimeout(resolve, 500))])
		} finally {
			// Always hide loader, regardless of success/failure
			await toggleLoader(false)
		}
	}
}
// Public theme switching API
const setTheme = async (theme, isOLED = false) => {
	if (isTransitioning) return

	const currentTheme = localStorage.getItem('theme')
	const currentOLED = localStorage.getItem('isOLED') === 'true'

	if (currentTheme === theme && currentOLED === isOLED) return

	try {
		isTransitioning = true
		await applyTheme(theme, isOLED)

		localStorage.setItem('theme', theme)
		localStorage.setItem('isOLED', isOLED)

		closeFloatingOptions()

		window.dispatchEvent(
			new StorageEvent('storage', {
				key: 'theme',
				newValue: theme,
				oldValue: currentTheme,
				storageArea: localStorage,
			})
		)
	} finally {
		isTransitioning = false
	}
}

const handleChangeTheme = async (e) => {
	const themeBtn = e.target.closest('button')
	if (!themeBtn) return

	const themeId = themeBtn.id

	if (Object.values(THEMES).includes(themeId)) {
		await setTheme(themeId, false)
	} else if (themeId === 'oled') {
		await setTheme(THEMES.DARK, true)
	} else if (themeId === 'gpth-open-settings') {
		openSettings()
	}
}

const init = async () => {
	const theme = localStorage.getItem('theme') || THEMES.SYSTEM
	const isOLED = localStorage.getItem('isOLED') === 'true'

	await applyTheme(theme, isOLED)

	mediaQuery.addEventListener('change', () => {
		if (localStorage.getItem('theme') === THEMES.SYSTEM) {
			applyTheme(THEMES.SYSTEM, isOLED)
		}
	})
}

export { init, handleChangeTheme }
