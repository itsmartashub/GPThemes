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

			${renderFontBigCard({
				name: 'Font Size',
				className: 'fonts__size',
				inputId: 'fontSize',
				inputType: 'number',
				inputValue: DEFAULTS.fontSize,
				inputPlaceholder: DEFAULTS.fontSize,
				unit: 'px',
				min: 12,
				max: 24,
			})}
			${renderFontSmallCard({
				name: 'Line Height',
				className: 'fonts__lineHeight',
				inputId: 'lineHeight',
				inputType: 'number',
				inputValue: DEFAULTS.lineHeight,
				inputPlaceholder: DEFAULTS.lineHeight,
				unit: 'px',
				min: 12,
				max: 60,
			})}
			${renderFontSmallCard({
				name: 'Letter Spacing',
				className: 'fonts__letterSpacing',
				inputId: 'letterSpacing',
				inputType: 'number',
				inputValue: DEFAULTS.letterSpacing,
				inputPlaceholder: DEFAULTS.letterSpacing,
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
function isValidInput(value, type) {
	switch (type) {
		case 'fontSize':
		case 'lineHeight':
			return !isNaN(parseFloat(value)) && parseFloat(value) > 0
		case 'letterSpacing':
			return !isNaN(parseInt(value)) && parseInt(value) >= 0
		default:
			return true
	}
}

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
/* // Helper function to check if a Google Font is already loaded
function isGoogleFontLoaded(href) {
	const links = getAllGoogleFontLinks()
	console.log(links)
	return links?.some((link) => link.href.includes(href))
}
function clearPreviouslyLoadedGoogleFonts() {
	// Optionally, clear any previously loaded Google Fonts to avoid conflicts
	const links = Array.from(document.querySelectorAll("link[rel='stylesheet']"))

	links?.forEach((link) => {
		if (link.href.includes('googleapis.com')) {
			link.remove()
		}
	})
} */

export function handleFontsListeners() {
	const selectFontFamily = document.querySelector('.gpth-settings #fontFamily')
	const inputFontSize = document.querySelector('.gpth-settings #fontSize')
	const inputLineHeight = document.querySelector('.gpth-settings #lineHeight')
	const inputLetterSpacing = document.querySelector('.gpth-settings #letterSpacing')
	const btnResetFont = document.querySelector('.gpth-settings #resetFont')

	// Event listener for font size input field
	inputFontSize.addEventListener('blur', (e) => {
		if (!isValidInput(e.target.value, 'fontSize')) {
			alert('Invalid font size. Please enter a positive number.')
			return
		}
		const newSize = e.target.value
		saveSettings({ fontSize: newSize })
		applySettings({ fontSize: newSize })
	})

	// Event listener for line height input field
	inputLineHeight.addEventListener('blur', (e) => {
		if (!isValidInput(e.target.value, 'lineHeight')) {
			alert('Invalid line height. Please enter a positive number.')
			return
		}
		const newLineHeight = e.target.value
		saveSettings({ lineHeight: newLineHeight })
		applySettings({ lineHeight: newLineHeight })
	})

	// Event listener for letter spacing input field
	inputLetterSpacing.addEventListener('blur', (e) => {
		if (!isValidInput(e.target.value, 'letterSpacing')) {
			alert('Invalid letter spacing. Please enter a non-negative integer.')
			return
		}
		const newSpacing = e.target.value
		saveSettings({ letterSpacing: newSpacing })
		applySettings({ letterSpacing: newSpacing })
	})

	// Event listener for font family selection change
	selectFontFamily.addEventListener('change', async (e) => {
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
	})

	// Event listener for reset button
	btnResetFont.addEventListener('click', () => {
		applySettings(DEFAULTS)
		saveSettings(DEFAULTS)
	})
}

function init() {
	// Load settings on page load
	loadSettings()
}
init()
