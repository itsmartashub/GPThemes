import browser from 'webextension-polyfill'
import { EXT_CURRENT_VERSION, CHANGELOG_URL } from '../js/app/config'
import { RELEASE_CHANGES } from './changes'

const seeFullChangelog = (version) =>
	`<a href="https://github.com/itsmartashub/GPThemes/releases/tag/v${version}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">🚀 See full release notes</a>`

// <a href="https://github.com/itsmartashub/GPThemes/issues/42">#42</a>

let htmlChangesList = `

	${RELEASE_CHANGES}

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
