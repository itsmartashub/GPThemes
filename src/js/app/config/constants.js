import browser from 'webextension-polyfill'

export const PFX = 'gpth'

export const EXT_NAME = 'GPThemes'
export const EXT_CURR_VERSION = browser.runtime.getManifest().version
export const EXT_REPO_URL = 'https://github.com/itsmartashub/GPThemes'
export const EXT_CURR_CHANGELOG_URL = `${EXT_REPO_URL}/releases/tag/v${EXT_CURR_VERSION}`

export const FLOATING_BTN_VISIBLE_KEY = 'floatingBtnVisible'
