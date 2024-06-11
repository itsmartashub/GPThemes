import browser from 'webextension-polyfill'
import { EXT_CURRENT_VERSION, CHANGELOG_URL } from './config'
import { openElement, closeElement } from '../utils/handleElements'

function injectUpdateNotification() {
	let changelogEl = document.createElement('div')
	changelogEl.className = 'gpth-notification'

	let htmlChangesList = `
        <h3>New Features</h3>
        <ul>
            <li><strong>Custom Fonts (#22)</strong>: Dedicated settings for font customization, dynamic loading, persistent preferences, input validation, and animations. Reset options, letter spacing, and line height adjustments included. Ensured fallback font for content readability.</li>
            <li><strong>Tabs in GPThemes Settings</strong>: Introduced a tab-based interface in GPThemes settings for better organization and navigation. Added smooth animations when switching between tabs.</li>
        </ul>

        <h3>Improvements</h3>
        <ul>
            <li><strong>Scrollbar Design (#27)</strong>: Enhanced default scrollbar design for a modern and sleek appearance, ensuring cross-browser compatibility.</li>
            <li><strong>Mobile Chat Bubble Overlap Fix</strong>: Resolved overlap between chat text and avatar on mobile devices, improving readability.</li>
            <li><strong>Iframe Dialog Optimization</strong>: Optimized dialogs with iframes for improved preview experience, specifically for GDrive and OneDrive previews.</li>
            <li><strong>Alert Colors</strong>: Updated alert colors, using red for errors and orange for warnings, providing clear visual distinction.</li>
            <li><strong>Standardized Upgrade Dialog (#29)</strong>: Standardized the design of the 'Upgrade Your Plan' dialog across different profiles, addressing full-width and styling inconsistencies.</li>
        </ul>

        <h3>Bug Fixes</h3>
        <ul>
            <li><strong>Google Fonts URL Optimization</strong>: Optimized the Google Fonts URL by removing unused font styles, improving performance and reducing unnecessary requests.</li>
            <li><strong>Mobile Sidebar Design (#23)</strong>: Resolved design issues with the mobile sidebar, ensuring proper padding, background color, and border radius.</li>
            <li><strong>Dialog Width (#29)</strong>: Modified the width of the 'Upgrade Your Plan' dialog to fit content properly, addressing layout issues.</li>
            <li><strong>GPTs Store Layout</strong>: Improved the layout and styling of the GPTs Store page, including adjustments to padding, margins, and hover animations for a better user experience.</li>
        </ul>

        <h3>Development Workflow</h3>
        <ul>
            <li><strong>Performance Optimizations</strong>: Removed unused code and build files to enhance performance.</li>
            <li><strong>Content Security Policy Updates</strong>: Updated manifests with Content Security Policy, allowing Google Fonts while maintaining security. Restricted script, object, style, and font sources to trusted origins.</li>
            <li><strong>Automated ZIP Creation</strong>: Automated the ZIP creation process by dynamically reading the extension version from Chrome and Firefox manifest files.</li>
            <li><strong>Update Announcements</strong>: Implemented automated web extension update announcements, linking to GitHub release notes.</li>
            <li><strong>Manifest Permissions</strong>: Included necessary permissions (notifications and tabs) in the manifest for update notifications.</li>
        </ul>
    `

	let htmlChangelog = `
        <div class="mb-1">
            <h2>GPThemes <span class="gpth-notification__version py-1 px-2 ml-2">v${EXT_CURRENT_VERSION}</span></h2>
            <button class="currentColor absolute top-6 right-6" id="gpth-notification-close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.34315 6.34338L17.6569 17.6571M17.6569 6.34338L6.34315 17.6571" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
        </div>

        <div class="gpth-notification__changes">
            ${htmlChangesList}
        </div>

        <footer class="my-2 text-center">
            See more updates <a href="${CHANGELOG_URL}" target="_blank">here</a>.
        </footer>
    `

	changelogEl.insertAdjacentHTML('beforeend', htmlChangelog)
	document.body.appendChild(changelogEl)
	handleCloseNotification()
}

function handleCloseNotification() {
	document.getElementById('gpth-notification-close').addEventListener('click', () => {
		closeElement('.gpth-notification', 'gpth-notification--open')
	})
}

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
	alert('showChangelog', message)

	if (message.action === 'showChangelog') {
		injectUpdateNotification()
		openElement('.gpth-notification', 'gpth-notification--open')
	}
})

export { injectUpdateNotification, handleCloseNotification }
