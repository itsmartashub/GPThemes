import browser from 'webextension-polyfill'
import { EXT_CURRENT_VERSION, CHANGELOG_URL } from '../js/app/config'

const seeFullChangelog = (version) =>
	`<a href="https://github.com/itsmartashub/GPThemes/releases/tag/v${version}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">🚀 See full release notes</a>`

let htmlChangesList = `

<h2>🛠️ Improvements</h2>
<ul>
	<li>
		<strong>Enhanced DALLE UI</strong>: Streamlined the image generation experience with a redesigned prompt preview layout and DALLE prompt sidebar. Restyled DALLE image hover buttons to match the GPThemes.
	</li>
</ul>

<h2>🐛 Bug Fixes</h2>
<ul>
	<li>
		<strong>Assistant Chat Bubble Background (
	<a href="https://github.com/itsmartashub/GPThemes/issues/42">#42</a>)</strong>: Fixed an issue where the assistant's chat
		bubble background was not visible due to recent ChatGPT changes, improving readability and visual
		clarity.
	</li>
</ul>


<p>${seeFullChangelog(EXT_CURRENT_VERSION)}</p>
`
const changelogChangesEl = document.querySelector('.changelog__changes')
const changelogVersionEl = document.querySelector('.changelog__version')

function injectUpdateNotification() {
	changelogChangesEl.insertAdjacentHTML('beforeend', htmlChangesList)
	changelogVersionEl.innerText = `v${EXT_CURRENT_VERSION}`
	changelogVersionEl.href = CHANGELOG_URL
}

async function setBadge() {
	try {
		const response = await browser.runtime.sendMessage({ action: 'setBadge' })
		console.log(response.status) // Optional: log the response
	} catch (error) {
		console.error('Error clearing badge:', error)
	}
}

injectUpdateNotification()

// Call the function to clear the badge when the popup opens
setBadge()
