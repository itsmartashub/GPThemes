import browser from 'webextension-polyfill'
import { EXT_CURR_CHANGELOG_URL, EXT_CURR_VERSION } from '../../js/app/config/consts'
import { RELEASE_CHANGES } from './changes'
import { init as createFABToggle } from './toggleFAB'

const createFullChangelogLink = (version = EXT_CURR_VERSION) =>
	`<a href="${EXT_CURR_CHANGELOG_URL}" target="_blank" rel="noopener noreferrer" class="changelog__seefullchangelog">🚀 See full release notes</a>`

function initChangelogUI() {
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

async function updateBadge() {
	console.log('=== POPUP: Sending setBadge message ===')
	try {
		const response = await browser.runtime.sendMessage({ action: 'setBadge' })
		console.log('✅ Badge update response:', response)
	} catch (error) {
		console.error('❌ Failed to update badge:', error)
	}
}

function detectDeviceType() {
	const ua = navigator.userAgent || navigator.vendor || window.opera
	const isMobile = /android|iphone|ipad|ipod/i.test(ua)
	document.documentElement.classList.add(isMobile ? 'is-mobile' : 'is-desktop')
	return isMobile
}

// Detect device type (mobile vs desktop) and set class on <html>
function init() {
	const isMobile = detectDeviceType()
	console.log(`📱 Device detected: ${isMobile ? 'Mobile' : 'Desktop'}`)

	initChangelogUI()
	updateBadge()
	createFABToggle()
}

init()
