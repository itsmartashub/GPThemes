import browser from 'webextension-polyfill'
import { pxToRem } from '../utils/fontsConverting'
import { renderFont, renderFontBigCards, renderButton } from './components/renderFonts'

const defaultFontFamily = getComputedStyle(document.documentElement).getPropertyValue('--f-family-default')
const defaultFontSize = '16'
const defaultLetterSpacing = '0'
const defaultLineHeight = 28
// const defaultLineHeight = '24px'

const fontNames = [
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

let googleFontWeights = `:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900`
let currFontHref = null

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
							${fontNames.map((name) => `<option value="${name === 'Default' ? defaultFontFamily : name}">${name}</option>`).join('')}
					</select>
				</label>
			</div>

			${renderFontBigCards({
				name: 'Font Size',
				className: 'fonts__size',
				inputId: 'fontSize',
				inputType: 'number',
				inputValue: defaultFontSize,
				inputPlaceholder: defaultFontSize,
				unit: 'px',
				min: 12,
				max: 24,
			})}
			${renderFont({
				name: 'Line Height',
				className: 'fonts__lineHeight',
				inputId: 'lineHeight',
				inputType: 'number',
				inputValue: defaultLineHeight,
				inputPlaceholder: defaultLineHeight,
				unit: 'px',
				min: 12,
				max: 60,
			})}
			${renderFont({
				name: 'Letter Spacing',
				className: 'fonts__letterSpacing',
				inputId: 'letterSpacing',
				inputType: 'number',
				inputValue: defaultLetterSpacing,
				inputPlaceholder: defaultLetterSpacing,
				unit: 'px',
				min: -30,
				max: 30,
			})}
		</div>

		<footer class="grid mt-10">
			${renderButton({ id: 'resetFont', content: 'Reset Fonts', disabled: false, className: 'btn-primary' })}
		</footer>
	</section>
`

/* function setCSSVariables({ fontFamily, fontSize = '16' }) {
	if (fontFamily !== defaultFontFamily) {
		document.documentElement.style.setProperty('--f-family', `${fontFamily}, ${defaultFontFamily}`)
		document.documentElement.style.setProperty('--f-size', `${pxToRem(fontSize)}`)
		return
	}

	document.documentElement.style.setProperty('--f-family', defaultFontFamily)
	document.documentElement.style.setProperty('--f-size', `${pxToRem(fontSize)}`)
}
function setInputFields({ fontFamily, fontSize = '16' }) {
	// console.log('setInputFields():', fontFamily, fontSize)

	if (fontFamily !== 'Default') {
		document.getElementById('fontFamily').value = fontFamily
		document.getElementById('fontSize').value = fontSize
		return
	}

	document.getElementById('fontFamily').value = defaultFontFamily
	document.getElementById('fontSize').value = fontSize
} */
function setCSSVar({ varName, varValue }) {
	// console.log('setCSSVar():', varName, varValue)
	document.documentElement.style.setProperty(varName, varValue)
}
function setInputField({ inputSelector, inputVal }) {
	// console.log('setInputField():', inputSelector, inputVal)

	let inputEl = document.querySelector(`.gpth-settings ${inputSelector}`)

	if (inputVal === 'Default') {
		inputEl.value = defaultFontFamily
	} else {
		inputEl.value = inputVal
	}
}
async function getFontsFromStorage() {
	try {
		const data = await browser.storage.sync.get(['fontFamily', 'fontSize', 'letterSpacing', 'lineHeight'])

		// console.log('data: ', data)

		if (data.fontFamily) {
			setCSSVar({ varName: '--f-family', varValue: `${data.fontFamily}, ${defaultFontFamily}` })
			setInputField({ inputSelector: '#fontFamily', inputVal: data.fontFamily })

			// Load selected font from Google Fonts
			createAndInjectLinkElement(data.fontFamily)
		}
		if (data.fontSize) {
			setCSSVar({ varName: '--f-size', varValue: `${pxToRem(data.fontSize)}` })
			setInputField({ inputSelector: '#fontSize', inputVal: data.fontSize })
		}
		if (data.letterSpacing) {
			setCSSVar({ varName: '--f-letter-spacing', varValue: `${data.letterSpacing}px` })
			setInputField({ inputSelector: '#letterSpacing', inputVal: data.letterSpacing })
		}
		if (data.lineHeight) {
			setCSSVar({ varName: '--f-line-height', varValue: data.lineHeight })
			setInputField({ inputSelector: '#lineHeight', inputVal: data.lineHeight })
		}
	} catch (error) {
		console.error('Error getting fonts from storage:', error)
	}
}

/* async function setFontsToStorage({ fontFamily, fontSize = '16' }) {
	// Save selected font to storage
	await browser.storage.sync.set({ fontFamily, fontSize })
} */
async function setPropToStorage({ propName, propVal }) {
	// Save selected font to storage
	await browser.storage.sync.set({ [propName]: propVal })
}
async function removeFontsFromStorage() {
	await browser.storage.sync.remove(['fontFamily', 'fontSize', 'letterSpacing', 'lineHeight'])
}

// Create the <link> in <head> which will fetch the selected font from Google Fonts
function createAndInjectLinkElement(fontFamily) {
	let href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(
		' ',
		'+'
	)}${googleFontWeights}&display=swap`

	// Ako je href == currFontHref, ne dodajemo link!
	if (currFontHref && currFontHref === href) return

	// TODO Check if the link is already injected

	// Remove existing Google Font links
	removeExistingGoogleFontLinks()

	currFontHref = href

	const link = document.createElement('link')
	link.rel = 'stylesheet'
	link.href = href

	document.head.appendChild(link)

	return link
}
function getAllGoogleFontLinks() {
	// Select all link elements in the head
	const linkElements = document.head.querySelectorAll('link')

	// Filter the link elements to find those fetching Google Fonts
	const googleFontLinks = Array.from(linkElements).filter((link) => link.href.includes('fonts.googleapis.com'))

	return googleFontLinks
}
function removeExistingGoogleFontLinks() {
	let googleFontLinks = getAllGoogleFontLinks()
	currFontHref = null
	// Remove all existing Google Font links
	googleFontLinks.forEach((link) => {
		link.parentNode.removeChild(link)
	})
}
/* function isLinkAlreadyInjected(href) {
	let googleFontLinks = getAllGoogleFontLinks()

	console.log('isLinkAlreadyInjected()')

	if (!googleFontLinks) return false

	for (let link of googleFontLinks) {
		console.log('link.href:', link.href)
		console.log('href:', href)

		if (link.href === href) {
			console.log('Link injected already')
			return true
		}
	}
	return false
} */

/* export function applyFont() {
	const fontFamily = document.getElementById('fontFamily').value
	let fontSize = document.getElementById('fontSize').value

	console.log('applyFont()', fontFamily, fontSize)

	// Create the <link> in <head> which will fetch the selected font from Google Fonts
	createAndInjectLinkElement(fontFamily)

	// Apply CSS variables
	setCSSVariables({ fontFamily, fontSize })

	// Save settings to chrome.storage
	setFontsToStorage({ fontFamily, fontSize })
} */
/* export function resetFont() {
	// Reset CSS variables to default values
	setCSSVariables({ fontFamily: defaultFontFamily, fontSize: '16' })

	// Reset input fields to default values
	setInputFields({ fontFamily: 'Default', fontSize: '16' })

	// Remove custom font link from the head
	removeExistingGoogleFontLinks()

	// Remove custom font settings from chrome.storage
	removeFontsFromStorage()
} */
export function resetToDefaults() {
	// Reset CSS variables to default values
	setCSSVar({ varName: '--f-family', varValue: defaultFontFamily })
	setCSSVar({ varName: '--f-size', varValue: `${pxToRem(defaultFontSize)}` })
	setCSSVar({ varName: '--f-letter-spacing', varValue: `${defaultLetterSpacing}px` })
	setCSSVar({ varName: '--f-line-height', varValue: defaultLineHeight })

	// Reset input fields to default values
	setInputField({ inputSelector: '#fontFamily', inputVal: 'Default' })
	setInputField({ inputSelector: '#fontSize', inputVal: defaultFontSize })
	setInputField({ inputSelector: '#letterSpacing', inputVal: defaultLetterSpacing })
	setInputField({ inputSelector: '#lineHeight', inputVal: defaultLineHeight })

	// Remove custom font link from the head
	removeExistingGoogleFontLinks()

	// Remove custom font settings from chrome.storage
	removeFontsFromStorage()
}

export function applyFontFamily(e) {
	const fontFamily = e.target.value

	// Create the <link> in <head> which will fetch the selected font from Google Fonts
	createAndInjectLinkElement(fontFamily)

	// Apply CSS variables
	setCSSVar({ varName: '--f-family', varValue: `${fontFamily}, ${defaultFontFamily}` })

	// Save settings to chrome.storage
	setPropToStorage({ propName: 'fontFamily', propVal: fontFamily })
}
export function applyFontSize(e) {
	const fontSize = e.target.value

	let isValid = validateInputField({
		inputField: e.target,
		min: 12,
		max: 24,
	})

	if (!isValid) {
		// e.target.addEventListener('blur', () => {
		setInputField({ inputSelector: '#fontSize', inputVal: defaultFontSize })

		// Apply CSS variables
		setCSSVar({ varName: '--f-size', varValue: `${pxToRem(defaultFontSize)}` })

		// Save settings to chrome.storage
		setPropToStorage({ propName: 'fontSize', propVal: defaultFontSize })
		// })
		return
	}

	// Apply CSS variables
	setCSSVar({ varName: '--f-size', varValue: `${pxToRem(fontSize)}` })

	// Save settings to chrome.storage
	setPropToStorage({ propName: 'fontSize', propVal: fontSize })
}
export function applyLineHeight(e) {
	const lineHeight = e.target.value

	let isValid = validateInputField({
		inputField: e.target,
		min: 12,
		max: 60,
	})

	if (!isValid) {
		setInputField({ inputSelector: '#lineHeight', inputVal: defaultLineHeight })

		// Apply CSS variables
		setCSSVar({ varName: '--f-line-height', varValue: defaultLineHeight })

		// Save settings to chrome.storage
		setPropToStorage({ propName: 'lineHeight', propVal: defaultLineHeight })
		return
	}

	// Apply CSS variables
	setCSSVar({ varName: '--f-line-height', varValue: lineHeight })

	// Save settings to chrome.storage
	setPropToStorage({ propName: 'lineHeight', propVal: lineHeight })
}
export function applyLetterSpacing(e) {
	// console.log('applyLetterSpacing()', e.target.value)
	const letterSpacing = e.target.value

	let isValid = validateInputField({
		inputField: e.target,
		min: -30,
		max: 30,
	})

	if (!isValid) {
		setInputField({ inputSelector: '#letterSpacing', inputVal: defaultLetterSpacing })

		// Apply CSS variables
		setCSSVar({ varName: '--f-letter-spacing', varValue: `${defaultLetterSpacing}px` })

		// Save settings to chrome.storage
		setPropToStorage({ propName: 'letterSpacing', propVal: defaultLetterSpacing })
		return
	}

	// Apply CSS variables
	setCSSVar({ varName: '--f-letter-spacing', varValue: `${letterSpacing}px` })

	// Save settings to chrome.storage
	setPropToStorage({ propName: 'letterSpacing', propVal: letterSpacing })
}

export function addFontsEventHandlers() {
	document.querySelector('.gpth-settings #fontFamily').addEventListener('change', applyFontFamily)
	// document.querySelector('.gpth-settings #fontSize').addEventListener('input', applyFontSize)
	// document.querySelector('.gpth-settings #letterSpacing').addEventListener('input', applyLetterSpacing)
	// document.querySelector('.gpth-settings #lineHeight').addEventListener('input', applyLineHeight)
	document.querySelector('.gpth-settings #resetFont').addEventListener('click', resetToDefaults)

	document.querySelector('.gpth-settings #fontSize').addEventListener('blur', applyFontSize)
	document.querySelector('.gpth-settings #letterSpacing').addEventListener('blur', applyLetterSpacing)
	document.querySelector('.gpth-settings #lineHeight').addEventListener('blur', applyLineHeight)
}

// function validateInputField({ inputField, min, max = 24, defaultVal = 16, cssVarName, propVal }) {
function validateInputField({ inputField, min, max = 24 }) {
	const inputValue = parseFloat(inputField.value)

	if (isNaN(inputValue)) {
		console.log('Empty input field')
		displayError('Empty input field')
		return false
	} else if (inputValue < min || inputValue > max) {
		console.log(`Number must be between ${min} and ${max}`)
		displayError(`Number must be between ${min} and ${max}`)
		return false
	}

	return true
}

function displayError(message) {
	// Remove any previous error messages
	const existingError = document.querySelector('.gpth-error-msg')
	if (existingError) {
		existingError.remove()
	}

	// Create and insert the new error message
	const errorMessage = document.createElement('div')
	errorMessage.className = 'gpth-error-msg fixed rounded-xl bg-red-500 red-500 p-3 font-semibold'
	errorMessage.textContent = message
	document.body.appendChild(errorMessage)

	// Remove the error message after 4 seconds
	setTimeout(() => {
		errorMessage.remove()
	}, 4000)
}

function initFonts() {
	getFontsFromStorage()
}

// Init
initFonts()
