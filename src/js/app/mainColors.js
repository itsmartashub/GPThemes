import browser from 'webextension-polyfill'
import { closeSettings, $settings } from './settingsManager.js'
import { hexToHSL } from '../utils/hexToHSL.js'
import { renderButton } from './components/renderButtons'

// Configuration object - single source of truth
const COLOR_CONFIG = {
	light: {
		id: 'accentLight',
		label: 'Accent <span>Light</span>',
		default: '#6c4756',
		storageKey: 'accent_light',
	},
	dark: {
		id: 'accentDark',
		label: 'Accent <span>Dark</span>',
		default: '#bfa8ff',
		storageKey: 'accent_dark',
	},
}

// For efficient access to default colors
const DEFAULT_COLORS = Object.entries(COLOR_CONFIG).reduce((acc, [theme, config]) => {
	console.log('acc: ', acc)
	acc[theme.toUpperCase()] = config.default
	console.log('[theme.toUpperCase()]: ', [theme.toUpperCase()])
	return acc
}, {})
console.log({ DEFAULT_COLORS })

// For efficient access to storage keys
const STORAGE_KEYS = Object.entries(COLOR_CONFIG).reduce((acc, [theme, config]) => {
	acc[`ACCENT_${theme.toUpperCase()}`] = config.storageKey
	return acc
}, {})

let styleElement = null

/**
 * Generates HTML for the colors tab
 * @returns {string} HTML string for the colors tab
 */
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
			<footer class="flex justify-center mt-8">
				${renderButton({
					id: 'resetAllAccents',
					content: 'Reset Colors',
					disabled: false,
					className: 'btn-primary',
				})}
			</footer>
		</section>
	`
}

/**
 * Creates and injects a style element if it doesn't exist yet
 * @returns {HTMLStyleElement} The style element
 */
const getOrCreateStyleElement = () => {
	if (!styleElement) {
		styleElement = document.createElement('style')
		styleElement.type = 'text/css'
		document.head.appendChild(styleElement)
	}
	return styleElement
}

/**
 * Updates CSS variables based on color values
 * @param {Object} colors - Object containing theme names as keys and color values
 */
const updateCSSVars = (colors = {}) => {
	const styleEl = getOrCreateStyleElement()

	// Get current values for any theme not provided
	const currentValues = {}
	Object.entries(COLOR_CONFIG).forEach(([theme, config]) => {
		if (!colors[theme]) {
			const input = $settings.querySelector(`#${config.id}`)
			currentValues[theme] = input ? input.value : config.default
		}
	})

	// Combine provided colors with current values
	const finalColors = { ...currentValues, ...colors }

	// Generate CSS variables for each theme
	const cssRules = Object.entries(finalColors)
		.map(([theme, color]) => {
			const hsl = hexToHSL(color)
			return `
				html.${theme} {
					--accent-h: ${hsl[0]} !important;
					--accent-s: ${hsl[1]}% !important;
					--accent-l: ${hsl[2]}% !important;
				}
				`
		})
		.join('')

	styleEl.textContent = cssRules
}

/**
 * Sets the color input values in the DOM
 * @param {Object} colors - Object with theme names as keys and color values
 */
const setColorInputValues = (colors) => {
	Object.entries(colors).forEach(([theme, value]) => {
		const config = COLOR_CONFIG[theme.toLowerCase()]
		if (config) {
			const input = $settings.querySelector(`#${config.id}`)
			if (input) input.value = value
		}
	})
}

/**
 * Saves a color value to browser storage
 * @param {string} key - Storage key
 * @param {string} value - Color value
 * @returns {Promise} Storage operation promise
 */
const saveColorToStorage = async (key, value) => {
	try {
		await browser.storage.sync.set({ [key]: value })
		return true
	} catch (error) {
		console.error('Error saving color to storage:', error)
		return false
	}
}

/**
 * Handles color input events
 */
const handleColorInputs = () => {
	// Use event delegation for better performance and future-proofing
	const container = $settings.querySelector('.colorpicker-container')
	if (!container) return

	// Handle input events (live preview)
	container.addEventListener('input', (e) => {
		if (e.target.type === 'color') {
			console.log(e.target.id)
			const themeKey = Object.entries(COLOR_CONFIG).find(([_, config]) => config.id === e.target.id)?.[0]
			console.log(Object.entries(COLOR_CONFIG).find(([_, config]) => config.id === e.target.id))

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
	container.querySelectorAll('.colorpicker').forEach((picker) => {
		picker.setAttribute('data-custom-picker-ready', 'false')
	})
}

/**
 * Loads color values from storage
 * @returns {Promise<Object>} Object with theme names as keys and color values
 */
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

/**
 * Initializes the color storage with default values if needed
 */
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

/**
 * Resets all accent colors to their default values
 */
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

/**
 * Initializes the color manager functionality
 */
const init = async () => {
	try {
		await initializeColorStorage()
		const colorValues = await loadColorValuesFromStorage()
		updateCSSVars(colorValues)
		setColorInputValues(colorValues)
		handleColorInputs()
	} catch (error) {
		console.error('Color manager initialization error:', error)
	}
}

// Export using the original function name for backward compatibility
export { generateColorsTabHTML as renderColorsTab, resetAllAccents, init }
