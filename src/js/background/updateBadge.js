import { runtime, action } from 'webextension-polyfill'
import { getItem, setItem, removeItems } from '../utils/storage'
import { SK_BADGE_SEEN } from '../app/config/consts-storage'

const BADGE_COLOR = '#ca93fb'
const NEW_BADGE_TEXT = 'NEW'

export const initBadgeColor = async () => {
	await action.setBadgeBackgroundColor({ color: BADGE_COLOR })
}

export const setVersionBadge = async () => {
	const version = runtime.getManifest().version
	await action.setBadgeText({ text: version })
	console.log(`Badge set to version: ${version}`)
}

export const setNewBadge = async () => {
	await action.setBadgeText({ text: NEW_BADGE_TEXT })
	await removeItems([SK_BADGE_SEEN])
	console.log('Badge set to: NEW')
}

export const updateBadgeToVersion = async () => {
	const seen = await getItem(SK_BADGE_SEEN)
	if (seen) {
		console.log('Badge already seen, skipping update')
		return
	}

	await setVersionBadge()
	await setItem(SK_BADGE_SEEN, true)
	console.log('✅ Badge changed from NEW → version (persistent)')
}

export const isBadgeSeen = () => getItem(SK_BADGE_SEEN)

export const markBadgeAsSeen = () => setItem(SK_BADGE_SEEN, true)

export const getCurrentBadge = () => action.getBadgeText({})

export const clearBadge = () => action.setBadgeText({ text: '' })

export { SK_BADGE_SEEN, BADGE_COLOR, NEW_BADGE_TEXT }
