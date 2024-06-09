import browser from 'webextension-polyfill'

const EXT_CURRENT_VERSION = browser.runtime.getManifest().version
const CHANGELOG_URL = `https://github.com/itsmartashub/GPThemes/releases/tag/v${EXT_CURRENT_VERSION}`

export { EXT_CURRENT_VERSION, CHANGELOG_URL }
