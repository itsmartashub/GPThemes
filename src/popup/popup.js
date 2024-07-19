import browser from 'webextension-polyfill'
import { EXT_CURRENT_VERSION, CHANGELOG_URL } from '../js/app/config'

const seeFullChangelog = (version) =>
	`<a href="https://github.com/itsmartashub/GPThemes/releases/tag/v${version}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">🚀 See full release notes</a>`

let htmlChangesList = `
<h2>✨ New Features</h2>
<ul>
  <li><strong>Chat Full Width Feature (<a href="https://github.com/itsmartashub/GPThemes/issues/1">#1</a>)</strong>: Implemented a new feature allowing users to toggle full-width chat bubbles, enhancing the chat interface.</li>
  <li><strong>Chat Custom Width Slider</strong>: Added range input sliders for customizing chat bubble width, providing users with more control over the chat layout.</li>
  <li><strong>Prompt Textarea Width Slider</strong>: Implemented a custom width slider for the prompt-textarea, allowing independent width adjustment.</li>
  <li><strong>Textarea Sync/Lock Indicator</strong>: Added a lock icon indicator on the textarea message sync switch to show when it's locked to chat widths.</li>
  <li><strong>Responsive Width Adjustment (<a href="https://github.com/itsmartashub/GPThemes/issues/39">#39</a>)</strong>: Implemented automatic width adjustment for chat bubbles and prompt textarea based on screen size.</li>
</ul>

<h2>🐛 Bug Fixes</h2>
<ul>
    <li><strong>Chat Bubbles Fix</strong>: Removed outdated UI styles to fix broken chat bubbles (<a href="https://github.com/itsmartashub/GPThemes/issues/41">#41</a>).</li>
    <li><strong>Attach Icon Visibility</strong>: Removed background color around the attach icon in the prompt field for better visibility (<a href="https://github.com/itsmartashub/GPThemes/issues/40">#40</a>).</li>
    <li><strong>Edit State Design</strong>: Addressed issues with the edit state design for user chat bubbles after ChatGPT UI changes (<a href="https://github.com/itsmartashub/GPThemes/issues/36">#36</a>).</li>
    <li><strong>Dialog Styling</strong>: Resolved inconsistencies in background color and sizing for small dialogs and hover effects.</li>
    <li><strong>Mobile Header Styling</strong>: Resolved issues with the sticky header style on mobile screens.</li>
    <li><strong>Firefox Compatibility</strong>: Fixed range sliders not being visible in Firefox browsers.</li>
    <li><strong>Floating Button Position</strong>: Adjusted GPThemes floating button position to prevent overlap with user account image on smaller devices.</li>
</ul>

<h2>❗ BREAKING CHANGE</h2>
<ul>
    <li>Removal of Old UI Styles (<a href="https://github.com/itsmartashub/GPThemes/issues/41">#41</a>)</li>
    <li>To address issues with chat bubbles and improve overall performance, I have removed styles related to the outdated UI.</br>
    While this fix ensures smoother operation for most users, those still using the old UI version may experience some visual inconsistencies!</li>
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
