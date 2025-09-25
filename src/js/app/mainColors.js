import browser from 'webextension-polyfill'
import { SELECTORS } from './config/selectors'
import { q } from '../utils/dom.js'
import { closeSettings, $settings } from './settingsManager.js'
import { hexToHSL } from '../utils/hexToHSL.js'
import { renderButton } from './components/renderButtons'
import { renderSeparator } from './components/renderUtils'
import { renderUserAccentBgToggle, handleUserAccentBgListeners } from './custom-colors/accentUserBubble'

// Configuration object - single source of truth
const COLOR_CONFIG = {
	light: {
		id: SELECTORS.ACCENT.LIGHT_ID,
		label: 'Accent <span>Light</span>',
		default: '#6c4756',
		storageKey: 'accent_light',
	},
	dark: {
		id: SELECTORS.ACCENT.DARK_ID,
		label: 'Accent <span>Dark</span>',
		default: '#bfa8ff',
		storageKey: 'accent_dark',
	},
}

// For efficient access to default colors
const DEFAULT_COLORS = Object.entries(COLOR_CONFIG).reduce((acc, [theme, config]) => {
	acc[theme.toUpperCase()] = config.default
	return acc
}, {})

// For efficient access to storage keys
const STORAGE_KEYS = Object.entries(COLOR_CONFIG).reduce((acc, [theme, config]) => {
	acc[`ACCENT_${theme.toUpperCase()}`] = config.storageKey
	return acc
}, {})

let styleElement = null

const generateColorsTabHTML = () => {
	// Generate color pickers dynamically
	const colorPickers = Object.values(COLOR_CONFIG)
		.map(
			(config) => `
				<div class="colorpicker">
					<input type="color" id="${config.id}" value="${config.default}" data-theme-key="${config.storageKey}" />
					<label for="${config.id}">${config.label}</label>
				</div>
			`
		)
		.join('')

	return `
		<section>
			<div class="colorpicker-container">
				${colorPickers}
			</div>

			<div>
				${renderSeparator}
				${renderUserAccentBgToggle()}
				${renderSeparator}
			</div>

			<footer class="flex justify-center mt-8">
				${renderButton({
					id: SELECTORS.ACCENT.RESET_BTN_ID,
					content: 'Reset Colors',
					disabled: false,
					className: 'btn-primary',
				})}
			</footer>
		</section>
	`
}

const getOrCreateStyleElement = () => {
	if (!styleElement) {
		styleElement = document.createElement('style')
		styleElement.type = 'text/css'
		document.head.appendChild(styleElement)
	}
	return styleElement
}

const updateCSSVars = (colors = {}) => {
	const styleEl = getOrCreateStyleElement()

	// Get current values for any theme not provided
	const currentValues = {}
	Object.entries(COLOR_CONFIG).forEach(([theme, config]) => {
		if (!colors[theme]) {
			const input = q(`#${config.id}`, $settings)
			currentValues[theme] = input ? input.value : config.default
		}
	})

	// Combine provided colors with current values
	const finalColors = { ...currentValues, ...colors }

	// Generate CSS variables for each theme
	const cssRules = Object.entries(finalColors)
		.map(([theme, color]) => {
			// const hsl = hexToHSL(color)
			// return `
			// 	html.${theme} {
			// 		--accent-h: ${hsl[0]} !important;
			// 		--accent-s: ${hsl[1]}% !important;
			// 		--accent-l: ${hsl[2]}% !important;
			// 	}
			// `
			return `
				html.${theme} {
					--c-accent: ${color} !important;
				}
			`
		})
		.join('')

	styleEl.textContent = cssRules
}

const setColorInputValues = (colors) => {
	Object.entries(colors).forEach(([theme, value]) => {
		const config = COLOR_CONFIG[theme.toLowerCase()]
		if (config) {
			const input = q(`#${config.id}`, $settings)
			if (input) input.value = value
		}
	})
}

const saveColorToStorage = async (key, value) => {
	try {
		await browser.storage.sync.set({ [key]: value })
		return true
	} catch (error) {
		console.error('Error saving color to storage:', error)
		return false
	}
}

const handleColorInputs = () => {
	// Use event delegation for better performance and future-proofing
	const container = q('.colorpicker-container', $settings)
	if (!container) return

	// Handle input events (live preview)
	container.addEventListener('input', (e) => {
		if (e.target.type === 'color') {
			const themeKey = Object.entries(COLOR_CONFIG).find(([_, config]) => config.id === e.target.id)?.[0]

			if (themeKey) {
				updateCSSVars({ [themeKey]: e.target.value })
			}
		}
	})

	// Handle change events (storage + close)
	container.addEventListener('change', async (e) => {
		if (e.target.type === 'color') {
			const storageKey = e.target.dataset.themeKey
			if (storageKey) {
				await saveColorToStorage(storageKey, e.target.value)
				closeSettings()
			}
		}
	})

	// Setup for custom color picker (preparation for future implementation)
	// This will be expanded when the custom picker is implemented
	/* container.querySelectorAll('.colorpicker').forEach((picker) => {
		picker.setAttribute('data-custom-picker-ready', 'false')
	}) */
}

const loadColorValuesFromStorage = async () => {
	try {
		// Create an array of storage keys to retrieve
		const keys = Object.values(COLOR_CONFIG).map((config) => config.storageKey)

		// Get all values at once
		const storedValues = await browser.storage.sync.get(keys)

		// Map stored values back to theme names
		const result = {}
		Object.entries(COLOR_CONFIG).forEach(([theme, config]) => {
			result[theme] = storedValues[config.storageKey] || config.default
		})

		return result
	} catch (error) {
		console.error('Error loading color values:', error)

		// Return defaults if storage fails
		return Object.entries(COLOR_CONFIG).reduce((acc, [theme, config]) => {
			acc[theme] = config.default
			return acc
		}, {})
	}
}

const initializeColorStorage = async () => {
	try {
		const keys = Object.values(COLOR_CONFIG).map((config) => config.storageKey)
		const storedValues = await browser.storage.sync.get(keys)

		// Check if any values are missing
		const updates = {}
		Object.entries(COLOR_CONFIG).forEach(([_, config]) => {
			if (!storedValues[config.storageKey]) {
				updates[config.storageKey] = config.default
			}
		})

		// Save any missing values
		if (Object.keys(updates).length > 0) {
			await browser.storage.sync.set(updates)
		}
	} catch (error) {
		console.error('Error initializing color storage:', error)
	}
}

const resetAllAccents = async () => {
	try {
		// Create an object of default values for storage
		const defaults = {}
		Object.values(COLOR_CONFIG).forEach((config) => {
			defaults[config.storageKey] = config.default
		})

		// Save defaults to storage
		await browser.storage.sync.set(defaults)

		// Create a theme-to-color mapping for UI update
		const themeDefaults = {}
		Object.entries(COLOR_CONFIG).forEach(([theme, config]) => {
			themeDefaults[theme] = config.default
		})

		// Update UI and CSS
		setColorInputValues(themeDefaults)
		updateCSSVars(themeDefaults)
	} catch (error) {
		console.error('Error resetting accent colors:', error)
	}
}

const init = async () => {
	try {
		await initializeColorStorage()
		const colorValues = await loadColorValuesFromStorage()
		updateCSSVars(colorValues)
		setColorInputValues(colorValues)
		handleColorInputs()
		handleUserAccentBgListeners()
	} catch (error) {
		console.error('Color manager initialization error:', error)
	}
}

// Export using the original function name for backward compatibility
export { generateColorsTabHTML as renderColorsTab, resetAllAccents, init }
