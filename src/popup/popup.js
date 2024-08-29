import browser from 'webextension-polyfill'
import { EXT_CURRENT_VERSION, CHANGELOG_URL } from '../js/app/config'

const seeFullChangelog = (version) =>
	`<a href="https://github.com/itsmartashub/GPThemes/releases/tag/v${version}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">🚀 See full release notes</a>`

// <a href="https://github.com/itsmartashub/GPThemes/issues/42">#42</a>

let htmlChangesList = `

<h2>🛠️ Improvements</h2>
<ul>
	<li>Redesigned example button cards in new chat layout</li>
	<li>Revamped <strong>"Upgrade Your Plan"</strong> dialog (<a href="https://github.com/itsmartashub/GPThemes/issues/44">#44</a>)</li>
	<li>Adjusted gap for the new chat button from other link in sidebar</li>
	<li>Enhanced <strong>"Create Link"</strong> button style in <strong>"Share Link"</strong> dialogs</li>
</ul>

<h2>🐛 Bug Fixes</h2>
<ul>
	<li>Improved user chat edit state design (<a href="https://github.com/itsmartashub/GPThemes/issues/43">#43</a>)</li>
	<li>Fixed chat bubble background flash in new chats (<a href="https://github.com/itsmartashub/GPThemes/issues/46">#46</a>)</li>
	<li>Restored visibility of menu separators</li>
	<li>Enhanced active tag appearance in feedback dialog</li>
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
