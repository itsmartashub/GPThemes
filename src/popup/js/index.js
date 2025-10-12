import browser from 'webextension-polyfill'
import { getItem } from '../../js/utils/storage'
import { EXT_CURR_VERSION, EXT_CURR_CHANGELOG_URL } from '../../js/app/config/consts'
import { RELEASE_CHANGES } from './changes'
import { setupFABToggle } from './toggleFAB'

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
	console.log('=== POPUP: Sending setBadge message ===')
	try {
		const response = await browser.runtime.sendMessage({ action: 'setBadge' })
		console.log('✅ Badge update response:', response)
	} catch (error) {
		console.error('❌ Failed to update badge:', error)
	}
}

const initPopup = () => {
	initChangelogUI()
	updateBadge()
	setupFABToggle()
}

// Start the initialization process
initPopup()
