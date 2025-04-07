import browser from 'webextension-polyfill'
import { EXT_CURRENT_VERSION, CHANGELOG_URL } from '../js/app/config'
import { RELEASE_CHANGES } from './changes'

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

async function updateBadge() {
	try {
		const response = await browser.runtime.sendMessage({ action: 'updateBadge ' })
		console.log('Badge update status:', response.status)
	} catch (error) {
		console.error('Failed to update badge:', error)
	}
}

const initPopup = () => {
	initChangelogUI()
	updateBadge()
}

// Start the initialization process
initPopup()
