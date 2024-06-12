import browser from 'webextension-polyfill'
import { EXT_CURRENT_VERSION, CHANGELOG_URL } from '../js/app/config'

const seeFullChangelog = (version) =>
	`<a href="https://github.com/itsmartashub/GPThemes/releases/tag/v${version}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">🚀 See full release notes</a>`

let htmlChangesList = `
<h3>🆕 Highlights</h3>
<ul>
    <li><strong>"Read Browsing History" Anx Gone</strong>: The previous notification system for informing users about new changes relied on "<code>tabs</code>" and "<code>notifications</code>" permissions, triggering a <code>"Read browsing history"</code> warning for Chromium users. To maintain a seamless update experience without causing unnecessary concerns, I have replaced this with a non-intrusive popup action that informs users about updates without additional permissions. <a href="https://github.com/itsmartashub/GPThemes/issues/33" target="_blank" rel="noopener noreferrer">#33</a></li>
</ul>

<p>${seeFullChangelog(EXT_CURRENT_VERSION)}</p>

<h2>FROM PREVIOUS (<code>v3.1.0</code>)</h2>

<h3>✨ New Features</h3>
<ul>
    <li><strong>Custom Fonts</strong>: Dedicated settings for font customization, dynamic loading, persistent preferences, input validation, and animations. Reset options, letter spacing, and line height adjustments included. Ensured fallback font for content readability.</li>
    <li><strong>Tabs in GPThemes Settings</strong>: Introduced a tab-based interface in GPThemes settings for better organization and navigation. Added smooth animations when switching between tabs.</li>
</ul>

<h3>🛠️ Improvements</h3>
<ul>
    <li><strong>Scrollbar Design</strong>: Enhanced default scrollbar design for a modern and sleek appearance, ensuring cross-browser compatibility.</li>
    <li><strong>Mobile Chat Bubble Overlap Fix</strong>: Resolved overlap between chat text and avatar on mobile devices, improving readability.</li>
    <li><strong>Iframe Dialog Optimization</strong>: Optimized dialogs with iframes for improved preview experience, specifically for GDrive and OneDrive previews.</li>
    <li><strong>Alert Colors</strong>: Updated alert colors, using red for errors and orange for warnings, providing clear visual distinction.</li>
    <li><strong>Standardized Upgrade Dialog</strong>: Standardized the design of the 'Upgrade Your Plan' dialog across different profiles, addressing full-width and styling inconsistencies.</li>
</ul>

<h3>🐛 Bug Fixes</h3>
<ul>
    <li><strong>Google Fonts URL Optimization</strong>: Optimized the Google Fonts URL by removing unused font styles, improving performance and reducing unnecessary requests.</li>
    <li><strong>Mobile Sidebar Design</strong>: Resolved design issues with the mobile sidebar, ensuring proper padding, background color, and border radius.</li>
    <li><strong>Dialog Width</strong>: Modified the width of the 'Upgrade Your Plan' dialog to fit content properly, addressing layout issues.</li>
    <li><strong>GPTs Store Layout</strong>: Improved the layout and styling of the GPTs Store page, including adjustments to padding, margins, and hover animations for a better user experience.</li>
</ul>

<h3>👷 Development Workflow</h3>
<ul>
    <li><strong>Performance Optimizations</strong>: Removed unused code and build files to enhance performance.</li>
    <li><strong>Content Security Policy Updates</strong>: Updated manifests with Content Security Policy, allowing Google Fonts while maintaining security. Restricted script, object, style, and font sources to trusted origins.</li>
    <li><strong>Automated ZIP Creation</strong>: Automated the ZIP creation process by dynamically reading the extension version from Chrome and Firefox manifest files.</li>
    <li><strong>Update Announcements</strong>: Implemented automated web extension update announcements, linking to GitHub release notes.</li>
    <li><strong>Manifest Permissions</strong>: Included necessary permissions (notifications and tabs) in the manifest for update notifications.</li>
</ul>

<p>${seeFullChangelog('3.1.0')}</p>
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
