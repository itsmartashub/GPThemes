import browser from 'webextension-polyfill'
import { closeSettings, $settings } from './settingsManager.js'
import { renderFontSmallCard, renderFontBigCard } from './components/renderFonts'
import { renderButton } from './components/renderButtons'

// Font Configuration object - single source of truth
const FONT_CONFIG = {
	fontFamily: {
		id: 'fontFamily',
		label: 'Font Family',
		default: getComputedStyle(document.documentElement).getPropertyValue('--fontFamilyDefault').trim(),
		storageKey: 'fontFamily',
		options: [
			'Default',
			...[
				'Share Tech Mono',
				'JetBrains Mono',
				'Work Sans',
				'Lora',
				'Manrope',
				'Inter',
				'Roboto',
				'Roboto Mono',
				'Roboto Serif',
				'DM Sans',
				'Reddit Mono',
				'Poppins',
				'Raleway',
				'Noto Sans',
				'Lato',
				'Quicksand',
				'Outfit',
			].sort(),
		],
		type: 'select',
	},
	fontSize: {
		id: 'fontSize',
		label: 'Font Size',
		default: 16,
		storageKey: 'fontSize',
		unit: 'px',
		min: 12,
		max: 24,
		type: 'number',
	},
	lineHeight: {
		id: 'lineHeight',
		label: 'Line Height',
		default: 28,
		storageKey: 'lineHeight',
		unit: 'px',
		min: 12,
		max: 60,
		type: 'number',
	},
	letterSpacing: {
		id: 'letterSpacing',
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
            <label for="fontFamily" class="grid gap-1 h-full w-full">
              <div>
                <p class="card__unit card__icon">T</p>
                <p class="card__name uppercase font-semibold">FONT FAMILY</p>
              </div>
              <select id="fontFamily" class="border-none outline-none focus:none font-bold">
                ${FONT_CONFIG.fontFamily.options
									.map((name) => {
										const value = name === 'Default' ? FONT_CONFIG.fontFamily.default : name
										return `<option value="${value}">${name}</option>`
									})
									.join('')}
              </select>
            </label>
          </div>
          ${renderFontBigCard({
						name: FONT_CONFIG.fontSize.label,
						className: 'fonts__size',
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
						className: 'fonts__lineHeight',
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
						className: 'fonts__letterSpacing',
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
					id: 'resetFont',
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
		const inputEl = $settings.querySelector(`#${FONT_CONFIG[key]?.id}`)
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
			const input = $settings.querySelector(`#${config.id}`)
			currentValues[prop] = input ? input.value : config.default
		}
	})

	// Combine provided values with current values
	const finalValues = { ...currentValues, ...values }
	// console.log(finalValues)

	// Update CSS variables
	Object.entries(finalValues).forEach(([prop, value]) => {
		document.documentElement.style.setProperty(`--${prop}`, value)
	})
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

// Helper function to display error messages
const displayError = (message) => {
	// Remove any previous error messages
	const existingError = document.querySelector('.gpth-error-msg')
	if (existingError) existingError.remove()

	// Create and insert the new error message
	const errorMessage = document.createElement('div')
	errorMessage.className = 'gpth-error-msg fixed rounded-xl bg-red-500 red-500 p-3 font-semibold text-center'
	errorMessage.textContent = message
	document.body.appendChild(errorMessage)

	// Remove the error message after 4 seconds
	setTimeout(() => {
		errorMessage.remove()
	}, 4000)
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
		displayError('Empty or invalid value')
		return false
	} else if (value < min || value > max) {
		displayError(`Number must be between ${min} and ${max}`)
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
	const links = Array.from(document.querySelectorAll("head link[href*='fonts.']"))
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

	const container = $settings.querySelector('#fontChangerPopover')
	if (!container) return

	// Cache selectors for better performance
	const selectors = {
		selectFontFamily: $settings.querySelector('#fontFamily'),
		inputFontSize: $settings.querySelector('#fontSize'),
		inputLineHeight: $settings.querySelector('#lineHeight'),
		inputLetterSpacing: $settings.querySelector('#letterSpacing'),
		btnResetFont: $settings.querySelector('#resetFont'),
	}

	// Add event listeners using the cached selectors
	if (selectors.selectFontFamily) {
		selectors.selectFontFamily.addEventListener('change', changeFontFamily)
	}

	if (selectors.inputFontSize) {
		selectors.inputFontSize.addEventListener('focus', (e) => {
			focusValues.fontSize = e.target.value
		})
		selectors.inputFontSize.addEventListener('blur', changeFontSize)
		selectors.inputFontSize.addEventListener('keypress', (e) => {
			if (e.key === 'Enter') {
				e.preventDefault()
				changeFontSize(e)
				e.target.blur()
			}
		})
	}

	if (selectors.inputLineHeight) {
		selectors.inputLineHeight.addEventListener('focus', (e) => {
			focusValues.lineHeight = e.target.value
		})
		selectors.inputLineHeight.addEventListener('blur', changeLineHeight)
		selectors.inputLineHeight.addEventListener('keypress', (e) => {
			if (e.key === 'Enter') {
				e.preventDefault()
				changeLineHeight(e)
				e.target.blur()
			}
		})
	}

	if (selectors.inputLetterSpacing) {
		selectors.inputLetterSpacing.addEventListener('focus', (e) => {
			focusValues.letterSpacing = e.target.value
		})
		selectors.inputLetterSpacing.addEventListener('blur', changeLetterSpacing)
		selectors.inputLetterSpacing.addEventListener('keypress', (e) => {
			if (e.key === 'Enter') {
				e.preventDefault()
				changeLetterSpacing(e)
				e.target.blur()
			}
		})
	}

	if (selectors.btnResetFont) {
		selectors.btnResetFont.addEventListener('click', resetAllFonts)
	}
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
