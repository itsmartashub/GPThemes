import browser from 'webextension-polyfill'

// Storage areas
const STORAGE_AREAS = {
	LOCAL: 'local',
	SYNC: 'sync',
	MANAGED: 'managed',
}

let DEFAULT_AREA = STORAGE_AREAS.SYNC

// Helper to validate storage area
function validateArea(area) {
	if (!browser.storage[area]) {
		throw new Error(`Storage area '${area}' is not available`)
	}
}

/* Get one key value from storage */
async function getItem(key, defaultValue = null, area = DEFAULT_AREA) {
	try {
		validateArea(area)
		const result = await browser.storage[area].get(key)
		return result[key] ?? defaultValue
	} catch (err) {
		console.error('[storage:getItem]', err)
		return defaultValue
	}
}

/* Get multiple items by keys */
async function getItems(keys = [], area = DEFAULT_AREA) {
	try {
		validateArea(area)
		const result = await browser.storage[area].get(keys)
		return result
	} catch (err) {
		console.error('[storage:getItems]', err)
		return {}
	}
}

/* Set one key/value pair */
async function setItem(key, value, area = DEFAULT_AREA) {
	try {
		validateArea(area)
		await browser.storage[area].set({ [key]: value })
	} catch (err) {
		console.error('[storage:setItem]', err)
	}
}

/* Set multiple key/value pairs */
async function setItems(data = {}, area = DEFAULT_AREA) {
	try {
		validateArea(area)
		await browser.storage[area].set(data)
	} catch (err) {
		console.error('[storage:setItems]', err)
	}
}

/* Remove specific key(s) */
async function removeItems(keys, area = DEFAULT_AREA) {
	try {
		validateArea(area)
		await browser.storage[area].remove(keys)
	} catch (err) {
		console.error('[storage:removeItem]', err)
	}
}

/* Clear entire storage area */
async function clearStorage(area = DEFAULT_AREA) {
	try {
		validateArea(area)
		await browser.storage[area].clear()
	} catch (err) {
		console.error('[storage:clearStorage]', err)
	}
}
async function getStorage(area = DEFAULT_AREA) {
	try {
		validateArea(area)
		const allData = await browser.storage[area].get()
		return allData
	} catch (err) {
		console.error('[storage:getAllKeys]', err)
		return []
	}
}
/* Get all keys in storage area */
async function getAllKeys(area = DEFAULT_AREA) {
	try {
		validateArea(area)
		const allData = await browser.storage[area].get()
		return Object.keys(allData)
	} catch (err) {
		console.error('[storage:getAllKeys]', err)
		return []
	}
}

/* Check if key exists in storage */
async function hasKey(key, area = DEFAULT_AREA) {
	try {
		validateArea(area)
		const result = await browser.storage[area].get(key)
		return result[key] !== undefined
	} catch (err) {
		console.error('[storage:hasKey]', err)
		return false
	}
}
/* Get storage usage in bytes */
async function getBytesInUse(keys = null, area = DEFAULT_AREA) {
	try {
		validateArea(area)
		return await browser.storage[area].getBytesInUse(keys)
	} catch (err) {
		console.error('[storage:getBytesInUse]', err)
		return 0
	}
}

/* Check if storage area is available */
function isAreaAvailable(area) {
	return !!browser.storage[area]
}

/* Update specific properties of an object in storage (shallow merge) */
async function updateObject(key, updates, area = DEFAULT_AREA) {
	try {
		validateArea(area)
		const existing = await getItem(key, {}, area)
		const updated = { ...existing, ...updates }
		await setItem(key, updated, area)
	} catch (err) {
		console.error('[storage:updateObject]', err)
	}
}

/* Watch storage changes globally */
function watchStorageChanges(callback) {
	const listener = (changes, areaName) => {
		callback(changes, areaName)
	}

	browser.storage.onChanged.addListener(listener)

	return () => {
		browser.storage.onChanged.removeListener(listener)
	}
}

// Pre-configured area-specific functions
const storageLocal = {
	getItem: (key, defaultValue = null) => getItem(key, defaultValue, 'local'),
	getItems: (keys = []) => getItems(keys, 'local'),
	setItem: (key, value) => setItem(key, value, 'local'),
	setItems: (data = {}) => setItems(data, 'local'),
	removeItems: (keys) => removeItems(keys, 'local'),
	clearStorage: () => clearStorage('local'),
	getStorage: () => getStorage('local'),
	getBytesInUse: (keys = null) => getBytesInUse(keys, 'local'),
	getAllKeys: () => getAllKeys('local'),
	hasKey: (key) => hasKey(key, 'local'),
	updateObject: (key, updates) => updateObject(key, updates, 'local'),
}

const storageSync = {
	getItem: (key, defaultValue = null) => getItem(key, defaultValue, 'sync'),
	getItems: (keys = []) => getItems(keys, 'sync'),
	setItem: (key, value) => setItem(key, value, 'sync'),
	setItems: (data = {}) => setItems(data, 'sync'),
	removeItems: (keys) => removeItems(keys, 'sync'),
	clearStorage: () => clearStorage('sync'),
	getStorage: () => getStorage('sync'),
	getBytesInUse: (keys = null) => getBytesInUse(keys, 'sync'),
	getAllKeys: () => getAllKeys('sync'),
	hasKey: (key) => hasKey(key, 'sync'),
	updateObject: (key, updates) => updateObject(key, updates, 'sync'),
}
// Default export with all functions
export {
	STORAGE_AREAS,
	getItem,
	getItems,
	setItem,
	setItems,
	removeItems,
	clearStorage,
	getStorage,
	getBytesInUse,
	isAreaAvailable,
	getAllKeys,
	hasKey,
	updateObject,
	watchStorageChanges,
	storageLocal,
	storageSync,
}
