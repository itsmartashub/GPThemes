// main.js
import browser from 'webextension-polyfill'
import { renderFontSmallCard, renderFontBigCard, renderButton } from './components/renderFonts'

// Constants
const DEFAULTS = {
	fontFamily: getComputedStyle(document.documentElement).getPropertyValue('--fontFamilyDefault'),
	fontSize: 16,
	letterSpacing: 0,
	lineHeight: 28,
}

const FONT_NAMES = [
	'Default',
	'Inter',
	'Roboto',
	'Roboto Mono',
	'DM Sans',
	'Reddit Mono',
	'Poppins',
	'Noto Sans',
	'Lato',
	'Quicksand',
	'Outfit',
]

// const GOOGLE_FONT_WEIGHTS = `:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900`
const GOOGLE_FONT_WEIGHTS = `:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,600;1,700`

let onFocusValFontSize = null,
	onFocusValLineHeight = null,
	onFocusValLetterSpacing = null

const fontSizeData = {
	name: 'Font Size',
	className: 'fonts__size',
	inputId: 'fontSize',
	inputType: 'number',
	inputValue: DEFAULTS.fontSize,
	inputPlaceholder: DEFAULTS.fontSize,
	unit: 'px',
	min: 12,
	max: 24,
}

const lineHeightData = {
	name: 'Line Height',
	className: 'fonts__lineHeight',
	inputId: 'lineHeight',
	inputType: 'number',
	inputValue: DEFAULTS.lineHeight,
	inputPlaceholder: DEFAULTS.lineHeight,
	unit: 'px',
	min: 12,
	max: 60,
}

const letterSpacingData = {
	name: 'Letter Spacing',
	className: 'fonts__letterSpacing',
	inputId: 'letterSpacing',
	inputType: 'number',
	inputValue: DEFAULTS.letterSpacing,
	inputPlaceholder: DEFAULTS.letterSpacing,
	unit: 'px',
	min: -30,
	max: 30,
}

// HTML template for font changer popover
export let fontHtmlCode = `
  <section id="fontChangerPopover" class="fonts">
    <div class="fonts__props">
      <div class="fonts__family fonts__group card card--big h-full">
        <label for="fontFamily" class="grid gap-1 h-full w-full">
          <div>
            <p class="card__unit card__icon">T</p>
            <p class="card__name uppercase font-semibold">FONT FAMILY</p>
          </div>
          <select id="fontFamily" class="border-none outline-none focus:none font-bold">
            ${FONT_NAMES.map(
				(name) => `<option value="${name === 'Default' ? DEFAULTS.fontFamily : name}">${name}</option>`
			).join('')}
          </select>
        </label>
      </div>
      ${renderFontBigCard(fontSizeData)}
      ${renderFontSmallCard(lineHeightData)}
      ${renderFontSmallCard(letterSpacingData)}
    </div>
    <footer class="grid mt-10">
      ${renderButton({ id: 'resetFont', content: 'Reset Fonts', disabled: false, className: 'btn-primary' })}
    </footer>
  </section>
`

// Function to set input field values
function setInputFieldValue(inputSelector, inputVal) {
	const inputEl = document.querySelector(`.gpth-settings #${inputSelector}`)

	inputEl.value = inputVal
}

// Function to apply settings
function applySettings(settings) {
	Object.entries(settings).forEach(([key, value]) => {
		document.documentElement.style.setProperty(`--${key}`, value)
		setInputFieldValue(key, value)

		// console.log('getComputedStyle: ', getComputedStyle(document.documentElement).getPropertyValue(`--${key}`))
	})
}

// Function to save settings to Chrome Storage
async function saveSettings(settings) {
	try {
		await browser.storage.sync.set(settings)
	} catch (error) {
		console.error('Failed to save settings:', error)
	}
}

// Function to load settings from Chrome Storage
async function loadSettings() {
	try {
		const settings = await browser.storage.sync.get(Object.keys(DEFAULTS))

		if (settings.fontFamily && settings.fontFamily !== DEFAULTS.fontFamily) {
			loadGoogleFont(settings.fontFamily)
		}
		applySettings(settings)
	} catch (error) {
		console.error('Failed to load settings:', error)
	}
}

// Function to dynamically load Google Fonts
function loadGoogleFont(fontFamily) {
	/* 	const href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(
		' ',
		'+'
	)}${GOOGLE_FONT_WEIGHTS}&display=swap`

	const link = document.createElement('link')
	link.rel = 'stylesheet'
	link.href = href
	document.head.appendChild(link) */
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
// Function to get all Google Font links
function getAllHeadFontsLinks() {
	// return Array.from(document.querySelectorAll("link[rel='stylesheet'], link[rel='preconnect']"))
	return Array.from(document.querySelectorAll("head link[href*='fonts.']"))
}
// Function to remove all Google Font links
function removeAllGoogleFontsLinks() {
	const links = getAllHeadFontsLinks()

	// console.log('links: ', links)

	links.forEach((link) => {
		if (link.href.includes('fonts.googleapis.com') || link.href.includes('fonts.gstatic.com')) {
			link.remove()
		}
	})
}
/* function getAllHeadLinks() {
	return Array.from(document.querySelectorAll("link[rel='stylesheet']"))
}
// Function to remove all Google Font links
function removeAllGoogleFontsLinks() {
	const links = getAllHeadLinks()

	links.forEach((link) => {
		if (link.href.includes('googleapis.com')) {
			link.remove()
		}
	})
} */

// Function to validate input fields
function validateInputField(inputValue, min, max = 24) {
	if (isNaN(inputValue)) {
		displayError('Empty or invalid value')
		return false
	} else if (inputValue < min || inputValue > max) {
		displayError(`Number must be between ${min} and ${max}`)
		return false
	}
	return true
}

// Function to display error messages
function displayError(message) {
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

// Function to format numbers
function formatNumber(inputVal, toFixedNum = 2) {
	// Remove leading zeros from the integer part
	inputVal = inputVal.replace(/^0+(?=\d*\.)/, '')
	// Parse the input as a number and return it with 2 decimal places
	let formatted = parseFloat(inputVal).toFixed(toFixedNum)
	// Remove trailing zeros from the decimal part
	formatted = formatted.replace(/\.?0+$/, '')
	// Return the formatted number as a string
	return formatted
}

// Function to handle font size change
function changeFontSize(e) {
	const newVal = formatNumber(e.target.value)
	onFocusValFontSize = formatNumber(onFocusValFontSize, 4)

	if (onFocusValFontSize === newVal) return

	if (!validateInputField(newVal, fontSizeData.min, fontSizeData.max)) {
		setInputFieldValue('fontSize', onFocusValFontSize)
		applySettings({ fontSize: onFocusValFontSize })
		saveSettings({ fontSize: onFocusValFontSize })
		// setInputField('fontSize', DEFAULTS.fontSize)
		// applySettings({ fontSize: DEFAULTS.fontSize })
		// saveSettings({ fontSize: DEFAULTS.fontSize })
		return
	}

	applySettings({ fontSize: newVal })
	saveSettings({ fontSize: newVal })
}

// Function to handle line height change
function changeLineHeight(e) {
	const newVal = formatNumber(e.target.value)
	onFocusValLineHeight = formatNumber(onFocusValLineHeight, 4)

	if (onFocusValLineHeight === newVal) return

	if (!validateInputField(newVal, lineHeightData.min, lineHeightData.max)) {
		setInputFieldValue('lineHeight', onFocusValLineHeight)
		applySettings({ lineHeight: onFocusValLineHeight })
		saveSettings({ lineHeight: onFocusValLineHeight })
		return
	}

	applySettings({ lineHeight: newVal })
	saveSettings({ lineHeight: newVal })
}

// Function to handle letter spacing change
function changeLetterSpacing(e) {
	const newVal = formatNumber(e.target.value)
	onFocusValLetterSpacing = formatNumber(onFocusValLetterSpacing, 4)

	if (onFocusValLetterSpacing === newVal) return

	if (!validateInputField(newVal, letterSpacingData.min, letterSpacingData.max)) {
		setInputFieldValue('letterSpacing', onFocusValLetterSpacing)
		applySettings({ letterSpacing: onFocusValLetterSpacing })
		saveSettings({ letterSpacing: onFocusValLetterSpacing })
		return
	}

	applySettings({ letterSpacing: newVal })
	saveSettings({ letterSpacing: newVal })
}

// Function to handle font family change
async function changeFontFamily(e) {
	const selectedFont = e.target.value

	// Remove all existing Google Fonts links
	removeAllGoogleFontsLinks()
	if (selectedFont !== DEFAULTS.fontFamily) {
		// Load the newly selected Google Font
		loadGoogleFont(selectedFont)
		applySettings({ fontFamily: selectedFont })
		try {
			await saveSettings({ fontFamily: selectedFont })
		} catch (error) {
			console.error('Failed to save font family:', error)
		}
	} else {
		// Apply default font family settings
		applySettings({ fontFamily: selectedFont })
		try {
			await saveSettings({ fontFamily: selectedFont })
		} catch (error) {
			console.error('Failed to reset font family:', error)
		}
	}
}

// Function to reset fonts to default
function resetFonts() {
	applySettings(DEFAULTS)
	saveSettings(DEFAULTS)
}

// Function to handle font listeners
export function handleFontsListeners() {
	const selectors = {
		selectFontFamily: document.querySelector('.gpth-settings #fontFamily'),
		inputFontSize: document.querySelector('.gpth-settings #fontSize'),
		inputLineHeight: document.querySelector('.gpth-settings #lineHeight'),
		inputLetterSpacing: document.querySelector('.gpth-settings #letterSpacing'),
		btnResetFont: document.querySelector('.gpth-settings #resetFont'),
	}

	selectors.selectFontFamily.addEventListener('change', changeFontFamily)
	selectors.inputFontSize.addEventListener('blur', changeFontSize)
	selectors.inputLineHeight.addEventListener('blur', changeLineHeight)
	selectors.inputLetterSpacing.addEventListener('blur', changeLetterSpacing)

	selectors.inputFontSize.addEventListener('focus', (e) => {
		onFocusValFontSize = e.target.value
	})
	selectors.inputLineHeight.addEventListener('focus', (e) => {
		onFocusValLineHeight = e.target.value
	})
	selectors.inputLetterSpacing.addEventListener('focus', (e) => {
		onFocusValLetterSpacing = e.target.value
	})

	selectors.inputFontSize.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			changeFontSize(e)
			e.target.blur()
		}
	})
	selectors.inputLineHeight.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			changeLineHeight(e)
			e.target.blur()
		}
	})
	selectors.inputLetterSpacing.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			changeLetterSpacing(e)
			e.target.blur()
		}
	})

	selectors.btnResetFont.addEventListener('click', resetFonts)
}

// Function to initialize the settings
function init() {
	// Load settings on page load
	loadSettings()
}
init()
