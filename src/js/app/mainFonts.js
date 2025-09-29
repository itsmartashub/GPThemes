import browser from 'webextension-polyfill'
import { SELECTORS } from './config/selectors'
import { q, qq } from '../utils/dom.js'
import { Notify } from './components/renderNotify.js'

import { closeSettings, $settings } from './settingsManager.js'
import { renderFontSmallCard, renderFontBigCard } from './components/renderFonts'
import { renderButton } from './components/renderButtons'
import { setCssVars } from '../utils/setCssVar'

// Font Configuration object - single source of truth
const FONT_CONFIG = {
	fontFamily: {
		id: SELECTORS.FONT.FAMILY_ID,
		label: 'Font Family',
		default: getComputedStyle(document.documentElement).getPropertyValue('--fontFamilyDefault').trim(),
		storageKey: 'fontFamily',
		options: [
			{ name: 'Default', label: 'Default' },
			...[
				{ name: 'Inter', label: 'Inter' },
				{ name: 'Roboto', label: 'Roboto' },
				{ name: 'Roboto Mono', label: 'Roboto Mono' },
				{ name: 'Roboto Serif', label: 'Roboto Serif' },
				{ name: 'DM Sans', label: 'DM Sans' },
				{ name: 'Reddit Mono', label: 'Reddit Mono' },
				{ name: 'Poppins', label: 'Poppins' },
				{ name: 'Raleway', label: 'Raleway' },
				{ name: 'Noto Sans', label: 'Noto Sans' },
				{ name: 'Lato', label: 'Lato' },
				{ name: 'Quicksand', label: 'Quicksand' },
				{ name: 'Outfit', label: 'Outfit' },
				{ name: 'Share Tech Mono', label: 'Share Tech Mono' },
				{ name: 'JetBrains Mono', label: 'JetBrains Mono' },
				{ name: 'Work Sans', label: 'Work Sans' },
				{ name: 'Lora', label: 'Lora' },
				{ name: 'Manrope', label: 'Manrope' },
				{ name: 'Libre Baskerville', label: 'Libre Baskervill 🆕' },
				{ name: 'Bricolage Grotesque', label: 'Bricolage Grotesque 🆕' },
				{ name: 'Hedvig Letters Serif', label: 'Hedvig Letters Serif 🆕' },
				{ name: 'Literata', label: 'Literata 🆕' },
				{ name: 'Syne', label: 'Syne 🆕' },
				{ name: 'Sora', label: 'Sora 🆕' },
				{ name: 'Golos Text', label: 'Golos Text 🆕' },
			].sort((a, b) => a.label.localeCompare(b.label)),
		],
		type: 'select',
	},
	fontSize: {
		id: SELECTORS.FONT.SIZE_ID,
		label: 'Font Size',
		default: 16,
		storageKey: 'fontSize',
		unit: 'px',
		min: 12,
		max: 24,
		type: 'number',
	},
	lineHeight: {
		id: SELECTORS.FONT.LINE_HEIGHT_ID,
		label: 'Line Height',
		default: 28,
		storageKey: 'lineHeight',
		unit: 'px',
		min: 12,
		max: 60,
		type: 'number',
	},
	letterSpacing: {
		id: SELECTORS.FONT.LETTER_SPACING_ID,
		label: 'Letter Space',
		default: 0,
		storageKey: 'letterSpacing',
		unit: 'px',
		min: -30,
		max: 30,
		type: 'number',
	},
}

// For efficient access to default values
const DEFAULT_FONTS = Object.entries(FONT_CONFIG).reduce((acc, [prop, config]) => {
	acc[prop.toUpperCase()] = config.default
	return acc
}, {})

// For efficient access to storage keys
const STORAGE_KEYS = Object.entries(FONT_CONFIG).reduce((acc, [prop, config]) => {
	acc[`FONT_${prop.toUpperCase()}`] = config.storageKey
	return acc
}, {})

// Google Fonts configuration
const GOOGLE_FONT_WEIGHTS = `:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,600;1,700`

// Tracker for input field values on focus
const focusValues = {
	fontSize: null,
	lineHeight: null,
	letterSpacing: null,
}

// Generate the HTML for the font tab
const renderFontsTab = () => {
	return `
    <section id="fontChangerPopover" class="fonts">
      <div class="fonts__props">
        <div class="fonts__bigcards-wrapper">
          <div class="fonts__family fonts__group card card--big h-full">
            <label for="fontFamily" class="flex flex-col gap-1 h-full w-full">
              <div>
                <p class="card__unit card__icon">T</p>
                <p class="card__name uppercase font-semibold">FONT FAMILY</p>
              </div>
              <select id="fontFamily" class="flex-1 border-none outline-none focus:none font-bold" role="listbox">
                ${FONT_CONFIG.fontFamily.options
					.map((font) => {
						const value = font.name === 'Default' ? FONT_CONFIG.fontFamily.default : font.name
						return `<option value="${value}">${font.label}</option>`
					})
					.join('')}
              </select>
            </label>
          </div>
          ${renderFontBigCard({
				name: FONT_CONFIG.fontSize.label,
				className: SELECTORS.FONT.SIZE_CLASS,
				inputId: FONT_CONFIG.fontSize.id,
				inputType: 'number',
				inputValue: FONT_CONFIG.fontSize.default,
				inputPlaceholder: FONT_CONFIG.fontSize.default,
				unit: FONT_CONFIG.fontSize.unit,
				min: FONT_CONFIG.fontSize.min,
				max: FONT_CONFIG.fontSize.max,
			})}
        </div>
        <div class="fonts__smallcards-wrapper">
          ${renderFontSmallCard({
				name: FONT_CONFIG.lineHeight.label,
				className: SELECTORS.FONT.LINE_HEIGHT_CLASS,
				inputId: FONT_CONFIG.lineHeight.id,
				inputType: 'number',
				inputValue: FONT_CONFIG.lineHeight.default,
				inputPlaceholder: FONT_CONFIG.lineHeight.default,
				unit: FONT_CONFIG.lineHeight.unit,
				min: FONT_CONFIG.lineHeight.min,
				max: FONT_CONFIG.lineHeight.max,
			})}
          ${renderFontSmallCard({
				name: FONT_CONFIG.letterSpacing.label,
				className: SELECTORS.FONT.LETTER_SPACING_CLASS,
				inputId: FONT_CONFIG.letterSpacing.id,
				inputType: 'number',
				inputValue: FONT_CONFIG.letterSpacing.default,
				inputPlaceholder: FONT_CONFIG.letterSpacing.default,
				unit: FONT_CONFIG.letterSpacing.unit,
				min: FONT_CONFIG.letterSpacing.min,
				max: FONT_CONFIG.letterSpacing.max,
			})}
        </div>
      </div>
      <footer class="flex justify-center mt-8">
        ${renderButton({
			id: SELECTORS.FONT.RESET_BTN_ID,
			content: 'Reset Fonts',
			disabled: false,
			className: 'btn-primary',
		})}
      </footer>
    </section>
  `
}

// Helper function to set input field values
const setInputValues = (values) => {
	Object.entries(values).forEach(([key, value]) => {
		const inputEl = q(`#${FONT_CONFIG[key]?.id}`, $settings)
		if (inputEl) {
			inputEl.value = value
		}
	})
}

// Helper function to update CSS variables
const updateCSSVars = (values = {}) => {
	// Get current values for any prop not provided
	const currentValues = {}
	Object.entries(FONT_CONFIG).forEach(([prop, config]) => {
		if (!values[prop]) {
			const input = q(`#${config.id}`, $settings)
			currentValues[prop] = input ? input.value : config.default
		}
	})

	// Combine provided values with current values
	const finalValues = { ...currentValues, ...values }
	// console.log(finalValues)

	// Update CSS variables
	setCssVars(finalValues)
	/* Object.entries(finalValues).forEach(([prop, value]) => {
		document.documentElement.style.setProperty(`--${prop}`, value)
	}) */
}

// Helper function to save value to storage
const saveValueToStorage = async (key, value) => {
	try {
		await browser.storage.sync.set({ [key]: value })
		return true
	} catch (error) {
		console.error(`Error saving ${key} to storage:`, error)
		return false
	}
}

// Helper function to format numbers
const formatNumber = (inputVal, toFixedNum = 2) => {
	if (inputVal === null || inputVal === undefined) return '0'

	// Remove leading zeros from the integer part
	inputVal = String(inputVal).replace(/^0+(?=\d*\.)/, '')
	// Parse the input as a number and return it with specified decimal places
	let formatted = parseFloat(inputVal).toFixed(toFixedNum)
	// Remove trailing zeros from the decimal part
	formatted = formatted.replace(/\.?0+$/, '')
	// Return the formatted number as a string
	return formatted
}

// Helper function to validate input values
const validateInput = (value, min, max) => {
	if (isNaN(value)) {
		// displayError('Empty or invalid value')
		Notify.error('🚨 Empty or invalid value')
		return false
	} else if (value < min || value > max) {
		Notify.warning(`⚠️ Number must be between ${min} and ${max}`)
		// displayError(`Number must be between ${min} and ${max}`)
		return false
	}
	return true
}

// Google Fonts helpers
const loadGoogleFont = (fontFamily) => {
	if (fontFamily === FONT_CONFIG.fontFamily.default) return

	const links = [
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
		{
			rel: 'stylesheet',
			href: `https://fonts.googleapis.com/css2?family=${fontFamily.replace(
				' ',
				'+'
			)}${GOOGLE_FONT_WEIGHTS}&display=swap`,
		},
	]

	links.forEach(({ rel, href, crossorigin }) => {
		const link = document.createElement('link')
		link.rel = rel
		link.href = href
		if (crossorigin !== undefined) {
			link.crossOrigin = crossorigin
		}
		document.head.appendChild(link)
	})
}

const removeAllGoogleFontsLinks = () => {
	const links = Array.from(qq("head link[href*='fonts.']"))
	links.forEach((link) => {
		if (link.href.includes('fonts.googleapis.com') || link.href.includes('fonts.gstatic.com')) {
			link.remove()
		}
	})
}

// Handle font family change
const changeFontFamily = async (e) => {
	const selectedFont = e.target.value

	// Remove existing Google Font links
	removeAllGoogleFontsLinks()

	// Load new font if not default
	if (selectedFont !== FONT_CONFIG.fontFamily.default) {
		loadGoogleFont(selectedFont)
	}

	// Update UI and save to storage
	updateCSSVars({ fontFamily: selectedFont })
	await saveValueToStorage(FONT_CONFIG.fontFamily.storageKey, selectedFont)
	// closeSettings()
}

// Handle font size change
const changeFontSize = async (e) => {
	const newVal = formatNumber(e.target.value)
	const originalVal = formatNumber(focusValues.fontSize, 4)

	// Skip if no change
	if (originalVal === newVal) return

	// Validate input
	if (!validateInput(newVal, FONT_CONFIG.fontSize.min, FONT_CONFIG.fontSize.max)) {
		// Reset to original value if invalid
		e.target.value = originalVal
		updateCSSVars({ fontSize: originalVal })
		await saveValueToStorage(FONT_CONFIG.fontSize.storageKey, originalVal)
		return
	}

	// Update UI and save to storage
	updateCSSVars({ fontSize: newVal })
	await saveValueToStorage(FONT_CONFIG.fontSize.storageKey, newVal)
}

// Handle line height change
const changeLineHeight = async (e) => {
	const newVal = formatNumber(e.target.value)
	const originalVal = formatNumber(focusValues.lineHeight, 4)

	// Skip if no change
	if (originalVal === newVal) return

	// Validate input
	if (!validateInput(newVal, FONT_CONFIG.lineHeight.min, FONT_CONFIG.lineHeight.max)) {
		// Reset to original value if invalid
		e.target.value = originalVal
		updateCSSVars({ lineHeight: originalVal })
		await saveValueToStorage(FONT_CONFIG.lineHeight.storageKey, originalVal)
		return
	}

	// Update UI and save to storage
	updateCSSVars({ lineHeight: newVal })
	await saveValueToStorage(FONT_CONFIG.lineHeight.storageKey, newVal)
}

// Handle letter spacing change
const changeLetterSpacing = async (e) => {
	const newVal = formatNumber(e.target.value)
	const originalVal = formatNumber(focusValues.letterSpacing, 4)

	// Skip if no change
	if (originalVal === newVal) return

	// Validate input
	if (!validateInput(newVal, FONT_CONFIG.letterSpacing.min, FONT_CONFIG.letterSpacing.max)) {
		// Reset to original value if invalid
		e.target.value = originalVal
		updateCSSVars({ letterSpacing: originalVal })
		await saveValueToStorage(FONT_CONFIG.letterSpacing.storageKey, originalVal)
		return
	}

	// Update UI and save to storage
	updateCSSVars({ letterSpacing: newVal })
	await saveValueToStorage(FONT_CONFIG.letterSpacing.storageKey, newVal)
}

// Reset all fonts to default values
const resetAllFonts = async () => {
	try {
		// Create an object of default values for storage
		const defaults = {}
		Object.values(FONT_CONFIG).forEach((config) => {
			defaults[config.storageKey] = config.default
		})

		// Save defaults to storage
		await browser.storage.sync.set(defaults)

		// Create a prop-to-value mapping for UI update
		const defaultValues = {}
		Object.entries(FONT_CONFIG).forEach(([prop, config]) => {
			defaultValues[prop] = config.default
		})

		// Remove Google Font links for clean slate
		removeAllGoogleFontsLinks()

		// Update UI and CSS
		setInputValues(defaultValues)
		updateCSSVars(defaultValues)

		// Close settings panel
		closeSettings()
	} catch (error) {
		console.error('Error resetting font values:', error)
	}
}

// Main event handler function - this matches the original function signature
const handleFontsListeners = () => {
	// Keep this function to maintain compatibility with settingsManager.js

	// const container = $settings.querySelector('#fontChangerPopover')
	const container = q('#fontChangerPopover', $settings)
	if (!container) return

	const el = (selector) => q(`#${selector}`, container)

	// Cache selectors for better performance
	const elements = {
		selectFontFamily: el(SELECTORS.FONT.FAMILY_ID),
		inputFontSize: el(SELECTORS.FONT.SIZE_ID),
		inputLineHeight: el(SELECTORS.FONT.LINE_HEIGHT_ID),
		inputLetterSpacing: el(SELECTORS.FONT.LETTER_SPACING_ID),
		btnResetFont: el(SELECTORS.FONT.RESET_BTN_ID),
	}

	const bind = (element, events) =>
		element && Object.entries(events).forEach(([event, handler]) => element.addEventListener(event, handler))

	const handleEnter = (fn) => (e) => e.key === 'Enter' && (e.preventDefault(), fn(e), e.target.blur())
	const setFocusValue = (key) => (e) => (focusValues[key] = e.target.value)

	// Event bindings
	bind(elements.selectFontFamily, {
		change: changeFontFamily,
	})

	bind(elements.inputFontSize, {
		focus: setFocusValue('fontSize'),
		blur: changeFontSize,
		keypress: handleEnter(changeFontSize),
	})

	bind(elements.inputLineHeight, {
		focus: setFocusValue('lineHeight'),
		blur: changeLineHeight,
		keypress: handleEnter(changeLineHeight),
	})

	bind(elements.inputLetterSpacing, {
		focus: setFocusValue('letterSpacing'),
		blur: changeLetterSpacing,
		keypress: handleEnter(changeLetterSpacing),
	})

	bind(elements.btnResetFont, {
		click: resetAllFonts,
	})
}

// Load font values from storage
const loadFontValuesFromStorage = async () => {
	try {
		// Create an array of storage keys to retrieve
		const keys = Object.values(FONT_CONFIG).map((config) => config.storageKey)

		// Get all values at once
		const storedValues = await browser.storage.sync.get(keys)

		// Map stored values back to font properties
		const result = {}
		Object.entries(FONT_CONFIG).forEach(([prop, config]) => {
			result[prop] = storedValues[config.storageKey] || config.default
		})

		return result
	} catch (error) {
		console.error('Error loading font values:', error)

		// Return defaults if storage fails
		return Object.entries(FONT_CONFIG).reduce((acc, [prop, config]) => {
			acc[prop] = config.default
			return acc
		}, {})
	}
}

// Initialize font storage with defaults if needed
const initializeFontStorage = async () => {
	try {
		const keys = Object.values(FONT_CONFIG).map((config) => config.storageKey)
		const storedValues = await browser.storage.sync.get(keys)

		// Check if any values are missing
		const updates = {}
		Object.entries(FONT_CONFIG).forEach(([_, config]) => {
			if (!storedValues[config.storageKey]) {
				updates[config.storageKey] = config.default
			}
		})

		// Save any missing values
		if (Object.keys(updates).length > 0) {
			await browser.storage.sync.set(updates)
		}
	} catch (error) {
		console.error('Error initializing font storage:', error)
	}
}

// Main initialization function
const init = async () => {
	try {
		await initializeFontStorage()
		const fontValues = await loadFontValuesFromStorage()

		// Load Google Font if not default
		if (fontValues.fontFamily && fontValues.fontFamily !== FONT_CONFIG.fontFamily.default) {
			loadGoogleFont(fontValues.fontFamily)
		}

		// Update UI and CSS variables
		updateCSSVars(fontValues)
		setInputValues(fontValues)
	} catch (error) {
		console.error('Font manager initialization error:', error)
	}
}

// Export using the original function names for backward compatibility
export { renderFontsTab, resetAllFonts, handleFontsListeners, init }
