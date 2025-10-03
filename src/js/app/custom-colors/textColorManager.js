// import browser from 'webextension-polyfill'
// import ColorPicker from '../../../libs/jscolorpicker/colorpicker.min.js'
// import { SELECTORS } from '../config/selectors'
// import { getVar, rafThrottle } from '../../utils/dom'
// import { oklchFromToHex } from '../../utils/oklchToHex'
// import { getStoredThemeState, getSystemTheme } from '../themeManager'

// const TEXT_COLOR_CONFIG = {
// 	items: [
// 		{
// 			id: 'text-1',
// 			label: 'Text 1',
// 			storageKeys: {
// 				light: 'user_text_1_light',
// 				dark: 'user_text_1_dark',
// 			},
// 			defaults: {
// 				light: oklchFromToHex(getVar('--c-txt-default')),
// 				dark: oklchFromToHex(getVar('--c-txt-default')),
// 			},
// 			cssVar: '--user-text-1',
// 		},
// 		{
// 			id: 'text-2',
// 			label: 'Text 2',
// 			storageKeys: {
// 				light: 'user_text_2_light',
// 				dark: 'user_text_2_dark',
// 			},
// 			defaults: {
// 				light: oklchFromToHex(getVar('--c-subtext-1-default')),
// 				dark: oklchFromToHex(getVar('--c-subtext-1-default')),
// 			},
// 			cssVar: '--user-text-2',
// 		},
// 		{
// 			id: 'text-3',
// 			label: 'Text 3',
// 			storageKeys: {
// 				light: 'user_text_3_light',
// 				dark: 'user_text_3_dark',
// 			},
// 			defaults: {
// 				light: oklchFromToHex(getVar('--c-subtext-2-default')),
// 				dark: oklchFromToHex(getVar('--c-subtext-2-default')),
// 			},
// 			cssVar: '--user-text-3',
// 		},
// 	],
// }

// const createTextColorManager = (config) => {
// 	const pickers = new Map()

// 	const getCurrentTheme = () => {
// 		const { theme } = getStoredThemeState()
// 		return theme === 'system' ? getSystemTheme() : theme
// 	}

// 	const updateCSSVar = (itemId, color) => {
// 		const item = config.items.find((i) => i.id === itemId)
// 		if (item) {
// 			document.documentElement.style.setProperty(item.cssVar, color)
// 		}
// 	}

// 	const loadColorsForTheme = async (theme) => {
// 		const storageKeys = config.items.map((item) => item.storageKeys[theme])
// 		const stored = await browser.storage.sync.get(storageKeys)

// 		return Object.fromEntries(
// 			config.items.map((item) => {
// 				const storedColor = stored[item.storageKeys[theme]]
// 				// If no stored color, use default and ensure it's hex
// 				const color = storedColor ? storedColor : item.defaults[theme]
// 				return [item.id, color]
// 			})
// 		)
// 	}

// 	const updateAllColorsForTheme = async (theme) => {
// 		const colors = await loadColorsForTheme(theme)
// 		config.items.forEach((item) => {
// 			updateCSSVar(item.id, colors[item.id])
// 		})
// 		return colors
// 	}

// 	const updatePickerColors = (colors) => {
// 		config.items.forEach((item) => {
// 			const picker = pickers.get(item.id)
// 			if (picker && colors[item.id]) {
// 				picker.setColor(colors[item.id], false)
// 			}
// 		})
// 	}

// 	const saveColor = async (itemId, color) => {
// 		const item = config.items.find((i) => i.id === itemId)
// 		const currentTheme = getCurrentTheme()
// 		await browser.storage.sync.set({
// 			[item.storageKeys[currentTheme]]: color,
// 		})
// 	}

// 	const initPicker = (btnElement, item, initialColor) => {
// 		const picker = new ColorPicker(btnElement, {
// 			toggleStyle: 'button',
// 			container: `.${SELECTORS.SETTINGS.ROOT}`,
// 			color: initialColor,
// 			submitMode: 'instant',
// 			enableAlpha: false,
// 			formats: false,
// 			defaultFormat: 'hex',
// 			dialogPlacement: 'bottom',
// 			dismissOnOutsideClick: true,
// 			dismissOnEscape: true,
// 			showClearButton: true,
// 		})

// 		const throttledUpdate = rafThrottle((hex) => {
// 			updateCSSVar(item.id, hex)
// 		})

// 		picker.on('pick', (color) => {
// 			if (color) {
// 				throttledUpdate(color.string('hex'))
// 			} else {
// 				const currentTheme = getCurrentTheme()
// 				const defaultColor = item.defaults[currentTheme]
// 				throttledUpdate(defaultColor)
// 				picker.setColor(defaultColor, false)
// 			}
// 		})

// 		picker.on('close', async () => {
// 			const finalColor = picker.color?.string('hex')
// 			if (finalColor) {
// 				await saveColor(item.id, finalColor)
// 			}
// 		})

// 		pickers.set(item.id, picker)
// 	}

// 	const watchThemeChanges = () => {
// 		window.addEventListener('storage', async (e) => {
// 			if (e.key === 'theme') {
// 				const newTheme = getCurrentTheme()
// 				const colors = await updateAllColorsForTheme(newTheme)
// 				updatePickerColors(colors)
// 			}
// 		})

// 		const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
// 		mediaQuery.addEventListener('change', async () => {
// 			const { theme } = getStoredThemeState()
// 			if (theme === 'system') {
// 				const newTheme = getCurrentTheme()
// 				const colors = await updateAllColorsForTheme(newTheme)
// 				updatePickerColors(colors)
// 			}
// 		})
// 	}

// 	const generateHTML = () => {
// 		const textPickersHTML = config.items
// 			.map(
// 				(item) => `
// 					<div class="colorpicker">
// 						<button id="${item.id}"></button>
// 						<label for="${item.id}">${item.label}</label>
// 					</div>
// 				`
// 			)
// 			.join('')

// 		return `
// 			<div class="colorpicker-container">${textPickersHTML}</div>
// 		`
// 	}

// 	const init = async () => {
// 		const currentTheme = getCurrentTheme()
// 		const colors = await updateAllColorsForTheme(currentTheme)
// 		watchThemeChanges()

// 		config.items.forEach((item) => {
// 			const btn = document.querySelector(`#${item.id}`)
// 			if (btn) initPicker(btn, item, colors[item.id])
// 		})
// 	}

// 	const destroy = () => {
// 		pickers.forEach((picker) => picker.destroy())
// 		pickers.clear()
// 	}

// 	const resetAll = async () => {
// 		const currentTheme = getCurrentTheme()
// 		const defaults = Object.fromEntries(
// 			config.items.map((item) => [item.storageKeys[currentTheme], item.defaults[currentTheme]])
// 		)
// 		await browser.storage.sync.set(defaults)
// 		const colors = await updateAllColorsForTheme(currentTheme)
// 		updatePickerColors(colors)
// 	}

// 	return { init, destroy, resetAll, generateHTML }
// }

// const textColorManager = createTextColorManager(TEXT_COLOR_CONFIG)

// export { textColorManager }

import browser from 'webextension-polyfill'
import ColorPicker from '../../../libs/jscolorpicker/colorpicker.min.js'
import { SELECTORS } from '../config/selectors'
import { getVar, rafThrottle } from '../../utils/dom'
import { oklchFromToHex } from '../../utils/oklchToHex'
import { getStoredThemeState, getSystemTheme } from '../themeManager'

// Helper: get computed color in rgb, fallback to original
function getComputedCssVarColor(cssVar) {
	const el = document.createElement('div')
	el.style.display = 'none'
	el.style.color = `var(${cssVar})`
	document.body.appendChild(el)
	const color = getComputedStyle(el).color
	el.remove()
	return color
}

const TEXT_COLOR_CONFIG = {
	items: [
		{
			id: 'text-1',
			label: 'Text 1',
			storageKeys: {
				light: 'user_text_1_light',
				dark: 'user_text_1_dark',
			},
			defaults: {
				light: '--c-txt-default',
				dark: '--c-txt-default',
			},
			cssVar: '--user-text-1',
		},
		{
			id: 'text-2',
			label: 'Text 2',
			storageKeys: {
				light: 'user_text_2_light',
				dark: 'user_text_2_dark',
			},
			defaults: {
				light: '--c-subtext-1-default',
				dark: '--c-subtext-1-default',
			},
			cssVar: '--user-text-2',
		},
		{
			id: 'text-3',
			label: 'Text 3',
			storageKeys: {
				light: 'user_text_3_light',
				dark: 'user_text_3_dark',
			},
			defaults: {
				light: '--c-subtext-2-default',
				dark: '--c-subtext-2-default',
			},
			cssVar: '--user-text-3',
		},
	],
}

const createTextColorManager = (config) => {
	const pickers = new Map()

	const getCurrentTheme = () => {
		const { theme } = getStoredThemeState()
		return theme === 'system' ? getSystemTheme() : theme
	}

	const updateCSSVar = (itemId, color) => {
		const item = config.items.find((i) => i.id === itemId)
		if (item) {
			document.documentElement.style.setProperty(item.cssVar, color)
		}
	}

	const removeCSSVar = (itemId) => {
		const item = config.items.find((i) => i.id === itemId)
		if (item) {
			document.documentElement.style.removeProperty(item.cssVar)
		}
	}

	const loadColorsForTheme = async (theme) => {
		const storageKeys = config.items.map((item) => item.storageKeys[theme])
		const stored = await browser.storage.sync.get(storageKeys)

		return Object.fromEntries(
			config.items.map((item) => {
				const storedColor = stored[item.storageKeys[theme]]
				// If no stored color, use the computed value (from fallback CSS), not a JS default!
				let color
				if (storedColor) {
					color = storedColor
				} else {
					// Get computed style based on default CSS var
					const cssVar = `var(${item.defaults[theme]})`
					color = getComputedCssVarColor(cssVar)
					// Try to convert RGB to hex for picker, fallback to RGB string
					try {
						color = oklchFromToHex(getVar(item.defaults[theme]))
					} catch (e) {
						// fallback to computed RGB string
					}
				}
				return [item.id, color]
			})
		)
	}

	const updateAllColorsForTheme = async (theme) => {
		const colors = await loadColorsForTheme(theme)
		config.items.forEach((item) => {
			updateCSSVar(item.id, colors[item.id])
		})
		return colors
	}

	const updatePickerColors = (colors) => {
		config.items.forEach((item) => {
			const picker = pickers.get(item.id)
			if (picker && colors[item.id]) {
				picker.setColor(colors[item.id], false)
			}
		})
	}

	const saveColor = async (itemId, color) => {
		const item = config.items.find((i) => i.id === itemId)
		const currentTheme = getCurrentTheme()
		await browser.storage.sync.set({
			[item.storageKeys[currentTheme]]: color,
		})
	}

	const resetColor = async (itemId) => {
		const item = config.items.find((i) => i.id === itemId)
		const currentTheme = getCurrentTheme()
		// Remove the override from storage and from the inline style
		await browser.storage.sync.remove(item.storageKeys[currentTheme])
		removeCSSVar(itemId)
		// Update picker and UI to fallback color
		const fallbackColor = getComputedCssVarColor(`var(${item.defaults[currentTheme]})`)
		const picker = pickers.get(item.id)
		if (picker) {
			picker.setColor(fallbackColor, false)
		}
	}

	const initPicker = (btnElement, item, initialColor) => {
		const picker = new ColorPicker(btnElement, {
			toggleStyle: 'button',
			container: `.${SELECTORS.SETTINGS.ROOT}`,
			color: initialColor,
			submitMode: 'instant',
			enableAlpha: false,
			formats: false,
			defaultFormat: 'hex',
			dialogPlacement: 'bottom',
			dismissOnOutsideClick: true,
			dismissOnEscape: true,
			showClearButton: true,
		})

		const throttledUpdate = rafThrottle((hex) => {
			updateCSSVar(item.id, hex)
		})

		picker.on('pick', (color) => {
			if (color) {
				throttledUpdate(color.string('hex'))
			} else {
				const currentTheme = getCurrentTheme()
				const fallbackColor = getComputedCssVarColor(`var(${item.defaults[currentTheme]})`)
				throttledUpdate(fallbackColor)
				picker.setColor(fallbackColor, false)
			}
		})

		picker.on('close', async () => {
			const finalColor = picker.color?.string('hex')
			if (finalColor) {
				await saveColor(item.id, finalColor)
			}
		})

		// Add "Reset" button next to picker button
		const resetBtn = document.createElement('button')
		resetBtn.textContent = 'Reset'
		resetBtn.type = 'button'
		resetBtn.className = 'colorpicker-reset'
		resetBtn.addEventListener('click', async (e) => {
			e.preventDefault()
			await resetColor(item.id)
		})
		btnElement.parentNode.appendChild(resetBtn)

		pickers.set(item.id, picker)
	}

	const watchThemeChanges = () => {
		window.addEventListener('storage', async (e) => {
			if (e.key === 'theme') {
				const newTheme = getCurrentTheme()
				const colors = await updateAllColorsForTheme(newTheme)
				updatePickerColors(colors)
			}
		})

		const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
		mediaQuery.addEventListener('change', async () => {
			const { theme } = getStoredThemeState()
			if (theme === 'system') {
				const newTheme = getCurrentTheme()
				const colors = await updateAllColorsForTheme(newTheme)
				updatePickerColors(colors)
			}
		})
	}

	const generateHTML = () => {
		const textPickersHTML = config.items
			.map(
				(item) => `
					<div class="colorpicker">
						<button id="${item.id}"></button>
						<label for="${item.id}">${item.label}</label>
						<!-- Reset button will be inserted by JS -->
					</div>
				`
			)
			.join('')

		return `
			<div class="colorpicker-container">${textPickersHTML}</div>
		`
	}

	const init = async () => {
		const currentTheme = getCurrentTheme()
		const colors = await updateAllColorsForTheme(currentTheme)
		watchThemeChanges()

		config.items.forEach((item) => {
			const btn = document.querySelector(`#${item.id}`)
			if (btn) initPicker(btn, item, colors[item.id])
		})
	}

	const destroy = () => {
		pickers.forEach((picker) => picker.destroy())
		pickers.clear()
	}

	const resetAll = async () => {
		const currentTheme = getCurrentTheme()
		// Remove all overrides, so CSS falls back to original
		await Promise.all(config.items.map((item) => browser.storage.sync.remove(item.storageKeys[currentTheme])))
		config.items.forEach((item) => removeCSSVar(item.id))
		const colors = await updateAllColorsForTheme(currentTheme)
		updatePickerColors(colors)
	}

	return { init, destroy, resetAll, generateHTML }
}

const textColorManager = createTextColorManager(TEXT_COLOR_CONFIG)

export { textColorManager }
