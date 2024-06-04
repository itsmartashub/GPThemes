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
	'Monospace',
	'Lato',
	'Quicksand',
	'Outfit',
]

const GOOGLE_FONT_WEIGHTS = `:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900`

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
	min: -5,
	max: 5,
}

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
							${FONT_NAMES.map((name) => `<option value="${name === 'Default' ? DEFAULTS.fontFamily : name}">${name}</option>`).join(
								''
							)}
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

function setInputField(inputSelector, inputVal) {
	let inputEl = document.querySelector(`.gpth-settings #${inputSelector}`)

	if (inputVal === 'Default') {
		inputEl.value = DEFAULTS[inputSelector]
	} else {
		inputEl.value = inputVal
	}
}
// Function to apply settings
function applySettings(settings) {
	// console.log(settings)

	Object.entries(settings).forEach(([key, value]) => {
		document.documentElement.style.setProperty(`--${key}`, value)
		setInputField(key, value)
		// setInputField(`#${key}`, value)

		console.log('getComputedStyle: ', getComputedStyle(document.documentElement).getPropertyValue(`--${key}`))
	})
}
// Function to save settings to Chrome Storage
async function saveSettings(settings) {
	// console.log(settings)
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
		// console.log({ settings })

		if (settings.fontFamily && settings.fontFamily !== DEFAULTS.fontFamily) {
			loadGoogleFont(settings.fontFamily)
		}
		applySettings(settings)
	} catch (error) {
		console.error('Failed to load settings:', error)
	}
}

// Validate input
/* function isValidInput(value, type) {
	switch (type) {
		case 'fontSize':
		case 'lineHeight':
			return !isNaN(parseFloat(value)) && parseFloat(value) > 0
		case 'letterSpacing':
			return !isNaN(parseInt(value)) && parseInt(value) >= 0
		default:
			return true
	}
} */

// Function to dynamically load Google Fonts
function loadGoogleFont(fontFamily) {
	const href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(
		' ',
		'+'
	)}${GOOGLE_FONT_WEIGHTS}&display=swap`

	const link = document.createElement('link')
	link.rel = 'stylesheet'
	link.href = href
	document.head.appendChild(link)
}
function getAllGoogleFontLinks() {
	let links = document.querySelectorAll("link[rel='stylesheet']")
	if (links.length) return Array.from(links)
}

function removeAllGoogleFontsLinks() {
	const links = getAllGoogleFontLinks()

	for (let i = links.length - 1; i >= 0; i--) {
		const link = links[i]
		if (link.href.includes('googleapis.com')) {
			link.parentNode.removeChild(link)
		}
	}
}
function validateInputField(inputValue, min, max = 24) {
	if (isNaN(inputValue)) {
		displayError('Empty or invalid input field')
		return false
	} else if (inputValue < min || inputValue > max) {
		displayError(`Number must be between ${min} and ${max}`)
		return false
	}

	return true
}
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

function changeFontSize(e) {
	const newVal = formatNumber(e.target.value)
	onFocusValFontSize = formatNumber(onFocusValFontSize, 4)

	if (onFocusValFontSize == newVal) return console.log({ newSize: newVal, onFocusValFontSize })

	if (!validateInputField(newVal, fontSizeData.min, fontSizeData.max)) {
		// setInputField('fontSize', DEFAULTS.fontSize)
		// applySettings({ fontSize: DEFAULTS.fontSize })
		// saveSettings({ fontSize: DEFAULTS.fontSize })
		setInputField('fontSize', onFocusValFontSize)
		applySettings({ fontSize: onFocusValFontSize })
		saveSettings({ fontSize: onFocusValFontSize })
		return
	}

	applySettings({ fontSize: newVal })
	saveSettings({ fontSize: newVal })
}

function changeLineHeight(e) {
	const newVal = formatNumber(e.target.value)
	onFocusValLineHeight = formatNumber(onFocusValLineHeight, 4)

	if (onFocusValLineHeight == newVal) return console.log({ newVal, onFocusValLineHeight })

	if (!validateInputField(newVal, lineHeightData.min, lineHeightData.max)) {
		setInputField('lineHeight', onFocusValLineHeight)
		applySettings({ lineHeight: onFocusValLineHeight })
		saveSettings({ lineHeight: onFocusValLineHeight })
		return
	}

	applySettings({ lineHeight: newVal })
	saveSettings({ lineHeight: newVal })
}

function changeLetterSpacing(e) {
	const newVal = formatNumber(e.target.value)
	onFocusValLetterSpacing = formatNumber(onFocusValLetterSpacing, 4)

	if (onFocusValLetterSpacing == newVal) return console.log({ newVal, onFocusValLetterSpacing })

	if (!validateInputField(newVal, letterSpacingData.min, letterSpacingData.max)) {
		setInputField('letterSpacing', onFocusValLetterSpacing)
		applySettings({ letterSpacing: onFocusValLetterSpacing })
		saveSettings({ letterSpacing: onFocusValLetterSpacing })
		return
	}

	applySettings({ letterSpacing: newVal })
	saveSettings({ letterSpacing: newVal })
}

async function changeFontFamily(e) {
	const selectedFont = e.target.value

	console.log('selectFontFamily: ', selectedFont)

	// Remove all existing Google Fonts
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
		// Apply default font settings
		applySettings(DEFAULTS)
		try {
			await saveSettings(DEFAULTS)
		} catch (error) {
			console.error('Failed to reset font family:', error)
		}
	}
}
function resetFonts() {
	applySettings(DEFAULTS)
	saveSettings(DEFAULTS)
}

export function handleFontsListeners() {
	const selectFontFamily = document.querySelector('.gpth-settings #fontFamily')
	const inputFontSize = document.querySelector('.gpth-settings #fontSize')
	const inputLineHeight = document.querySelector('.gpth-settings #lineHeight')
	const inputLetterSpacing = document.querySelector('.gpth-settings #letterSpacing')
	const btnResetFont = document.querySelector('.gpth-settings #resetFont')

	selectFontFamily.addEventListener('change', changeFontFamily)
	inputFontSize.addEventListener('blur', changeFontSize)
	inputLineHeight.addEventListener('blur', changeLineHeight)
	inputLetterSpacing.addEventListener('blur', changeLetterSpacing)

	inputFontSize.addEventListener('focus', (e) => {
		onFocusValFontSize = e.target.value
	})
	inputLineHeight.addEventListener('focus', (e) => {
		onFocusValLineHeight = e.target.value
	})
	inputLetterSpacing.addEventListener('focus', (e) => {
		onFocusValLetterSpacing = e.target.value
	})

	inputFontSize.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			changeFontSize(e)
			e.target.blur()
		}
	})
	inputLineHeight.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			changeLineHeight(e)
			e.target.blur()
		}
	})
	inputLetterSpacing.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			changeLetterSpacing(e)
			e.target.blur()
		}
	})

	btnResetFont.addEventListener('click', resetFonts)
}

function init() {
	// Load settings on page load
	loadSettings()
}
init()
