import browser, { runtime } from 'webextension-polyfill'
import { SK_BADGE_SEEN } from '../app/config/consts-storage'
import { getItem, removeItems, setItem } from '../utils/storage'
import { resolveToolbarAction } from './toolbarAction.js'

export const BADGE_COLOR = '#ca93fb'
export const NEW_BADGE_TEXT = 'NEW'
const toolbarAction = resolveToolbarAction(browser)

export const initBadgeColor = async () => {
	await toolbarAction.setBadgeBackgroundColor({ color: BADGE_COLOR })
}

export const setVersionBadge = async () => {
	const version = runtime.getManifest().version
	await toolbarAction.setBadgeText({ text: version })
	console.log(`Badge set to version: ${version}`)
}

export const setNewBadge = async () => {
	await toolbarAction.setBadgeText({ text: NEW_BADGE_TEXT })
	await removeItems([SK_BADGE_SEEN])
	console.log('Badge set to: NEW')
}

export const updateBadgeToVersion = async () => {
	await setVersionBadge()
	await setItem(SK_BADGE_SEEN, true)
	console.log('✅ Badge changed from NEW → version')
}

export const isBadgeSeen = () => getItem(SK_BADGE_SEEN)
export const markBadgeAsSeen = () => setItem(SK_BADGE_SEEN, true)
export const getCurrentBadge = () => toolbarAction.getBadgeText({})
export const clearBadge = () => toolbarAction.setBadgeText({ text: '' })
