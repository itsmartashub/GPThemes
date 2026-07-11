import browser from 'webextension-polyfill'
import faviconUrl from 'url:../assets/icons/32.png'
import { init as initFAB } from './app/custom-fab/index.js'
import { mount as mountSuggestedPrompts } from './app/custom-layouts/suggestedPrompts.js'
import { mount as mountLibraryPageMarkers } from './app/pageMarkers/library.js'
import { init as initThemes } from './app/themeManager.js'
import { subscribeDomMutations } from './runtime/domMutations.js'

const CLEANUP_KEY = '_gpthCleanup'
const runtimeCleanups = []
let started = false
let lifecycleGeneration = 0

function resolveExtensionUrl(assetUrl) {
	if (typeof assetUrl !== 'string') return null
	if (/^[a-z][a-z\d+.-]*:/i.test(assetUrl)) return assetUrl
	return browser.runtime.getURL(assetUrl.replace(/^\//, ''))
}

function installFavicon() {
	const resolvedUrl = resolveExtensionUrl(faviconUrl)
	const head = document.head
	if (!resolvedUrl || !head) return

	const originalHrefs = new Map()
	const existingManagedLink = head.querySelector('link[data-gpth-favicon]')
	const managedLink = existingManagedLink || document.createElement('link')
	const createdManagedLink = !existingManagedLink

	if (createdManagedLink) {
		managedLink.rel = 'icon'
		managedLink.setAttribute('data-gpth-favicon', '')
		head.appendChild(managedLink)
	}

	const applyFavicon = () => {
		if (!managedLink.isConnected) head.appendChild(managedLink)

		const links = head.querySelectorAll("link[rel*='icon']")
		for (const link of links) {
			if (!originalHrefs.has(link)) originalHrefs.set(link, link.getAttribute('href'))
			if (link.getAttribute('href') !== resolvedUrl) link.setAttribute('href', resolvedUrl)
		}
	}

	applyFavicon()
	const observer = new MutationObserver(applyFavicon)
	observer.observe(head, {
		attributeFilter: ['href', 'rel'],
		attributes: true,
		childList: true,
		subtree: true,
	})

	return () => {
		observer.disconnect()
		for (const [link, originalHref] of originalHrefs) {
			if (!link.isConnected || link === managedLink) continue
			if (originalHref == null) link.removeAttribute('href')
			else link.setAttribute('href', originalHref)
		}
		if (createdManagedLink) managedLink.remove()
	}
}

function addCleanup(cleanup) {
	if (typeof cleanup === 'function') runtimeCleanups.push(cleanup)
}

function isCurrentLifecycle(generation) {
	return started && generation === lifecycleGeneration
}

function disposeFeature(name, cleanup) {
	if (typeof cleanup !== 'function') return
	try {
		cleanup()
	} catch (error) {
		console.warn(`[GPThemes] ${name} stale initialization cleanup failed:`, error)
	}
}

async function mountFeature(name, initializer, generation) {
	try {
		const cleanup = await initializer()
		if (!isCurrentLifecycle(generation)) {
			disposeFeature(name, cleanup)
			return false
		}

		addCleanup(cleanup)
		return true
	} catch (error) {
		console.error(`[GPThemes] ${name} failed to initialize:`, error)
		return false
	}
}

async function mountFloatingThemeMenu() {
	let disposed = false
	let fabCleanup = null
	let remountPromise = null

	async function mountFAB() {
		const cleanup = await initFAB()
		if (disposed) {
			disposeFeature('floating theme menu', cleanup)
			return
		}
		fabCleanup = cleanup
	}

	function ensureFAB() {
		if (disposed || document.querySelector('.gpth-fab') || remountPromise) return

		disposeFeature('floating theme menu', fabCleanup)
		fabCleanup = null
		remountPromise = mountFAB()
			.catch((error) => {
				console.error('[GPThemes] Floating theme menu remount failed:', error)
			})
			.finally(() => {
				remountPromise = null
			})
	}

	await mountFAB()
	if (disposed) return

	const removeGuard = subscribeDomMutations(ensureFAB)
	ensureFAB()

	return () => {
		disposed = true
		removeGuard()
		disposeFeature('floating theme menu', fabCleanup)
		fabCleanup = null
	}
}

async function start() {
	if (started || !document.body) return
	started = true
	const generation = ++lifecycleGeneration

	await Promise.all([
		mountFeature('theme manager', initThemes, generation),
		mountFeature('favicon', installFavicon, generation),
		mountFeature('library page markers', mountLibraryPageMarkers, generation),
		mountFeature('suggested prompt markers', mountSuggestedPrompts, generation),
	])
	if (!isCurrentLifecycle(generation)) return

	await mountFeature('floating theme menu', mountFloatingThemeMenu, generation)
	if (!isCurrentLifecycle(generation)) return

	console.info('[GPThemes] Runtime initialized')
}

function cleanup() {
	started = false
	lifecycleGeneration++
	while (runtimeCleanups.length) {
		const dispose = runtimeCleanups.pop()
		try {
			dispose()
		} catch (error) {
			console.warn('[GPThemes] Runtime cleanup failed:', error)
		}
	}
}

if (typeof window[CLEANUP_KEY] === 'function') window[CLEANUP_KEY]()
window[CLEANUP_KEY] = cleanup

if (document.body) {
	start()
} else {
	document.addEventListener('DOMContentLoaded', start, { once: true })
	addCleanup(() => document.removeEventListener('DOMContentLoaded', start))
}
