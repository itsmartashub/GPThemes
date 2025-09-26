import browser from 'webextension-polyfill'
import { SELECTORS } from './config/selectors'
import { q } from '../utils/dom.js'
import { setCssVars } from '../utils/setCssVar.js'
import { closeSettings, $settings } from './settingsManager.js'
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

// Helper to create theme-to-color mapping from COLOR_CONFIG
const getThemeDefaults = () =>
	Object.fromEntries(Object.entries(COLOR_CONFIG).map(([theme, config]) => [theme, config.default]))

// Helper to create storage defaults from COLOR_CONFIG
const getStorageDefaults = () =>
	Object.fromEntries(Object.values(COLOR_CONFIG).map((config) => [config.storageKey, config.default]))

const updateCSSVars = (colors = {}) => {
	// Get current values for any theme not provided - one liner!
	const currentValues = Object.fromEntries(
		Object.entries(COLOR_CONFIG)
			.filter(([theme]) => !colors[theme])
			.map(([theme, config]) => [theme, q(`#${config.id}`, $settings)?.value || config.default])
	)

	// Combine and apply in one go
	const rootStyle = document.documentElement.style
	Object.entries({ ...currentValues, ...colors }).forEach(([theme, color]) => {
		rootStyle.setProperty(`--user-accent-${theme}`, color)
		// setCssVars({ [`--user-accent-${theme}`]: color })
	})
}

const setColorInputValues = (colors) => {
	Object.entries(colors).forEach(([theme, value]) => {
		const input = q(`#${COLOR_CONFIG[theme]?.id}`, $settings)
		if (input) input.value = value
	})
}

const resetAllAccents = async () => {
	try {
		// Save defaults to storage
		await browser.storage.sync.set(getStorageDefaults())

		// Get theme defaults once
		const themeDefaults = getThemeDefaults()

		// Update UI
		setColorInputValues(themeDefaults)

		// Remove CSS properties
		const rootStyle = document.documentElement.style
		Object.keys(themeDefaults).forEach((theme) => {
			rootStyle.removeProperty(`--user-accent-${theme}`)
		})
	} catch (error) {
		console.error('Error resetting accent colors:', error)
	}
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
