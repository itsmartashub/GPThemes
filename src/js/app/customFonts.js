import browser from 'webextension-polyfill'
import { pxToRem } from '../utils/fontsConverting'
// import { remToPx } from '../utils/fontsConverting'
import { renderFont, renderButton } from './components/renderFonts'

const fontFamilyDefault = getComputedStyle(document.documentElement).getPropertyValue('--f-family-default')

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
	// 'Merriweather',
	// 'Karla',
	'Outfit',
]

let googleFontWeights = `:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900`
let currFontHref = null

export let fontHtmlCode = `
	<section id="fontChangerPopover" class="fonts">
		<div class="grid gap-4">
			<div class="fonts__family text-sm mb-2 flex flex-col">
				<label for="fontFamily" class="uppercase text-xs mb-1 font-semibold">Font Family:</label>
				<select id="fontFamily" class="bg-token-sidebar-surface-secondary rounded-md outline-none border-none p-3 focus:none">
				${fontNames.map((name) => `<option value="${name === 'Default' ? fontFamilyDefault : name}">${name}</option>`).join('')}
				</select>
			</div>

			${renderFont({
				name: 'Font Size',
				className: 'fonts__size',
				inputId: 'fontSize',
				inputType: 'number',
				inputValue: '16',
				inputPlaceholder: '16px',
			})}

		</div>

		<div class="gap-2 mt-4 grid">
			${renderButton({ id: 'applyFont', content: 'Apply Fonts', disabled: false, className: 'btn-primary' })}
			${renderButton({ id: 'resetFont', content: 'Reset Fonts', disabled: false, className: 'btn-secondary' })}
		</div>
	</section>
`

function setCSSVariables({ fontFamily, fontSize = '16' }) {
	console.log('setCSSVariables()', { fontFamily, fontSize })

	if (fontFamily !== fontFamilyDefault) {
		console.log('fontFamily NIJE DEFAULT')
		document.documentElement.style.setProperty('--f-family', `${fontFamily}, ${fontFamilyDefault}`)
		document.documentElement.style.setProperty('--f-size', `${pxToRem(fontSize)}`)
		return
	}
	console.log('fontFamily JE DEFAULT')

	document.documentElement.style.setProperty('--f-family', fontFamilyDefault)
	document.documentElement.style.setProperty('--f-size', `${pxToRem(fontSize)}`)

	console.log('--f-family', getComputedStyle(document.documentElement).getPropertyValue('--f-family'))
	console.log('--f-size: ', getComputedStyle(document.documentElement).getPropertyValue('--f-size'))
}
function setInputFields({ fontFamily, fontSize = '16' }) {
	console.log('setInputFields():', fontFamily, fontSize)

	if (fontFamily !== 'Default') {
		document.getElementById('fontFamily').value = fontFamily
		document.getElementById('fontSize').value = fontSize
		return
	}

	document.getElementById('fontFamily').value = fontFamilyDefault
	document.getElementById('fontSize').value = fontSize
}
async function getFontsFromStorage() {
	try {
		const data = await browser.storage.sync.get(['fontFamily', 'fontSize'])
		console.log('data: ', data)

		if (data.fontFamily && data.fontSize) {
			setCSSVariables({ fontFamily: data.fontFamily, fontSize: data.fontSize })

			// Set input fields
			setInputFields({ fontFamily: data.fontFamily, fontSize: data.fontSize })

			// Load selected font from Google Fonts
			createAndInjectLinkElement(data.fontFamily)
		}
	} catch (error) {
		console.error('Error getting fonts from storage:', error)
	}
}

async function setFontsToStorage({ fontFamily, fontSize = '16' }) {
	console.log('setFontsToStorage()', fontFamily, fontSize)

	// Save selected font to storage
	await browser.storage.sync.set({ fontFamily, fontSize })

	console.log('--f-family', getComputedStyle(document.documentElement).getPropertyValue('--f-family'))
	console.log(getComputedStyle(document.documentElement).getPropertyValue('--f-size'))
}
async function removeFontsFromStorage() {
	await browser.storage.sync.remove(['fontFamily', 'fontSize'])
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

export function applyFont() {
	const fontFamily = document.getElementById('fontFamily').value
	let fontSize = document.getElementById('fontSize').value

	console.log('applyFont()', fontFamily, fontSize)

	// Create the <link> in <head> which will fetch the selected font from Google Fonts
	createAndInjectLinkElement(fontFamily)

	// Apply CSS variables
	setCSSVariables({ fontFamily, fontSize })

	// Save settings to chrome.storage
	setFontsToStorage({ fontFamily, fontSize })
}
export function resetFont() {
	// Reset CSS variables to default values
	setCSSVariables({ fontFamily: fontFamilyDefault, fontSize: '16' })

	// Reset input fields to default values
	setInputFields({ fontFamily: 'Default', fontSize: '16' })

	// Remove custom font link from the head
	removeExistingGoogleFontLinks()

	// Remove custom font settings from chrome.storage
	removeFontsFromStorage()
}

function initFonts() {
	getFontsFromStorage()
}

// Init
initFonts()

/* ${renderFont({
	name: 'Letter Spacing',
	className: 'fonts__letterSpacing',
	inputId: 'letterSpacing',
	inputType: 'number',
	inputValue: '1',
	inputPlaceholder: '1px',
})}
${renderFont({
	name: 'Line Height',
	className: 'fonts__lineHeight',
	inputId: 'lineHeight',
	inputType: 'number',
	inputValue: '1.5',
	inputPlaceholder: '1.5',
})} */
