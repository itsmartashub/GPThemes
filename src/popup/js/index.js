import browser from 'webextension-polyfill'
import { EXT_CURR_VERSION, EXT_CURR_CHANGELOG_URL } from '../../js/app/config/constants'
import { RELEASE_CHANGES } from './changes'
import { setupFloatingBtnToggle } from './toggleGpthemes'

const createFullChangelogLink = (version = EXT_CURR_VERSION) =>
	`<a href="${EXT_CURR_CHANGELOG_URL}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">🚀 See full release notes</a>`

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
		  <p>${createFullChangelogLink()}</p>
		`

	// Update the DOM
	changelogChangesEl.innerHTML = htmlChangesList
	changelogVersionEl.textContent = `v${EXT_CURR_VERSION}`
	changelogVersionEl.href = EXT_CURR_CHANGELOG_URL
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
