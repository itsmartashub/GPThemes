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
			<button id="applyFont" class="btn block relative btn-primary text-center">Apply Fonts</button>
		</div>
	</section>
`

function setCSSVariables({ fontFamily, fontSize = '16px' }) {
	console.log(fontFamily, fontSize)
	document.documentElement.style.setProperty('--f-family', fontFamily)
	document.documentElement.style.setProperty('--f-size', fontSize)
}

export function applyFont() {
	const fontFamily = document.getElementById('fontFamily').value
	const fontSize = document.getElementById('fontSize').value + 'px'

	// Apply CSS variables
	setCSSVariables({ fontFamily, fontSize })

	// Save settings to chrome.storage
	browser.storage.sync.set({
		fontFamily: fontFamily,
		fontSize: fontSize,
	})
}
