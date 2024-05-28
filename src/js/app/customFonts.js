import browser from 'webextension-polyfill'

const fontFamilyDefault = getComputedStyle(document.documentElement).getPropertyValue('--f-family-default')

const fontNames = [
	'Inter',
	'Roboto',
	'Roboto Mono',
	'DM Sans',
	'Reddit Mono',
	'Poppins',
	'Noto Sans',
	'Monospace',
	'Lato',
	'Playfair Display',
	'Merriweather',
	'Quicksand',
]

let googleFontWeights = `:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900`
let currFontHref = null

export let fontHtmlCode = `
	<section id="fontChangerPopover" class="fonts mt-10">
		<h4 class="mb-5">Fonts</h4>

		<div class="flex gap-4">
			<div class="fonts__family text-sm mb-2 flex flex-col flex-1">
				<label for="fontFamily" class="uppercase text-xs">Font Family:</label>
				<select id="fontFamily" class="bg-token-sidebar-surface-primary rounded-lg w-full">
					<option class="class="bg-token-sidebar-surface-primary rounded-lg" value="${fontFamilyDefault}">Default</option>
				${fontNames
					.map(
						(name) =>
							`<option class="class="bg-token-sidebar-surface-primary rounded-lg" value="${name}">${name}</option>`
					)
					.join('')}
				</select>
			</div>

			<div class="fonts__size text-xs mb-2 flex flex-col flex-1">
				<label for="fontSize" class="uppercase text-xs">Font Size (<code class="text-xs">px</code>):</label>
				<input type="number" id="fontSize" value="16" placeholder="16px" class="bg-token-sidebar-surface-primary rounded-lg">
			</div>
		</div>

		<div class="gap-2 mt-4 grid">
			<button id="resetFont" class="btn block relative btn-secondary text-center">Reset to Default</button>
			<button id="applyFont" class="btn block relative btn-primary text-center">Apply Fonts</button>
		</div>
	</section>
`

function setCSSVariables({ fontFamily, fontSize = '16px' }) {
	document.documentElement.style.setProperty('--f-family', fontFamily)
	document.documentElement.style.setProperty('--f-size', fontSize)
}
function setInputFields({ fontFamily, fontSize = '16' }) {
	document.getElementById('fontFamily').value = fontFamily
	document.getElementById('fontSize').value = fontSize
}
function getFontsFromStorage() {
	browser.storage.sync.get(['fontFamily', 'fontSize'], (data) => {
		if (data.fontFamily && data.fontSize) {
			setCSSVariables({ fontFamily: data.fontFamily, fontSize: data.fontSize })

			// Set input fields
			setInputFields({ fontFamily: data.fontFamily, fontSize: data.fontSize })

			// Load selected font from Google Fonts
			createAndInjectLinkElement(data.fontFamily)
		}
	})
}
function setFontsToStorage({ fontFamily, fontSize }) {
	browser.storage.sync.set({ fontFamily, fontSize })
}
function removeFontsFromStorage() {
	browser.storage.sync.remove(['fontFamily', 'fontSize'])
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

	// TODO Remove existing Google Font links

	currFontHref = href

	const link = document.createElement('link')
	link.rel = 'stylesheet'
	link.href = href

	document.head.appendChild(link)

	return link
}

export function applyFont() {
	const fontFamily = document.getElementById('fontFamily').value
	const fontSize = document.getElementById('fontSize').value + 'px'

	// Create the <link> in <head> which will fetch the selected font from Google Fonts
	createAndInjectLinkElement(fontFamily)

	// Apply CSS variables
	setCSSVariables({ fontFamily, fontSize })

	// Save settings to chrome.storage
	setFontsToStorage({ fontFamily, fontSize })
}
export function resetFont() {
	// Reset CSS variables to default values
	setCSSVariables({ fontFamily: fontFamilyDefault, fontSize: '16px' })

	// Reset input fields to default values
	setInputFields({ fontFamily: 'Default', fontSize: '16' })

	// TODO Remove custom font link from the head

	// Remove custom font settings from chrome.storage
	removeFontsFromStorage()
}

function initFonts() {
	console.log(fontFamilyDefault)

	getFontsFromStorage()
}
initFonts()
