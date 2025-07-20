import browser from 'webextension-polyfill'
import { EXT_CURRENT_VERSION, CHANGELOG_URL } from '../../js/app/config'
import { RELEASE_CHANGES } from './changes'
import { setupFloatingBtnToggle } from './toggleGpthemes'

const createFullChangelogLink = (version) =>
	`<a href="https://github.com/itsmartashub/GPThemes/releases/tag/v${version}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">🚀 See full release notes</a>`

const initChangelogUI = () => {
	const changelogChangesEl = document.querySelector('.changelog__changes')
	const changelogVersionEl = document.querySelector('.changelog__version')

	// Ensure elements exist to prevent errors
	if (!changelogChangesEl || !changelogVersionEl) {
		console.error('Changelog elements not found in the DOM')
		return
	}

	// Construct the changes HTML once
	const htmlChangesList = `
		  ${RELEASE_CHANGES}
		  <p>${createFullChangelogLink(EXT_CURRENT_VERSION)}</p>
		`

	// Update the DOM
	changelogChangesEl.innerHTML = htmlChangesList
	changelogVersionEl.textContent = `v${EXT_CURRENT_VERSION}`
	changelogVersionEl.href = CHANGELOG_URL
}

const updateBadge = async () => {
	try {
		// Send message to background script
		const response = await browser.runtime.sendMessage({ action: 'setBadge' })

		// Background script now always returns a response with status
		if (response && response.status) {
			console.log('Badge status:', response.status)
		}
	} catch (error) {
		console.error('Failed to update badge:', error)
	}
}

const initPopup = () => {
	initChangelogUI()
	updateBadge()
	setupFloatingBtnToggle()
}

// Start the initialization process
initPopup()
