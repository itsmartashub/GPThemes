import browser from 'webextension-polyfill'
import { $, bind, removeVar, setVar, setVars } from '../../utils/dom.js'
import { getItems, setItem, setItems } from '../../utils/storage.js'
import { renderButton } from '../components/renderButtons'
import { renderFontBigCard, renderFontSmallCard } from '../components/renderFonts'
import { Notify } from '../components/renderNotify.js'
import {
	SK_TEXT_FONT_FAMILY,
	SK_TEXT_FONT_FAMILY_SECONDARY,
	SK_TEXT_FONT_SIZE,
	SK_TEXT_LETTER_SPACING,
	SK_TEXT_LINE_HEIGHT,
} from '../config/consts-storage.js'
import { SELECTORS } from '../config/selectors'
import { FONT_CATALOG_FILES, FONT_CATALOG_FINGERPRINT } from './fontCatalog.generated.js'

// let $rootSettings = null
let cachedElements = null
let storedValues = null

const focusValues = {}
const FONT_REGISTRY_KEY = '__gpthBundledFontRegistry'
const FONT_MUTATION_KEY = '__gpthFontMutationCoordinator'
const FONT_RUNTIME_OWNER = Symbol('gpth-font-runtime-owner')
const EXTENSION_PROTOCOL = /^(?:chrome|moz|safari-web)-extension:$/
let fontSyncVersion = 0
let packagedResources = null
const catalogPromises = new Map()
const fontMutations = globalThis[FONT_MUTATION_KEY] ?? {
	desiredPair: null,
	owner: null,
	pendingMutation: null,
	queue: Promise.resolve(),
	revision: 0,
	storageWrites: Promise.resolve(),
}
globalThis[FONT_MUTATION_KEY] = fontMutations
fontMutations.storageWrites ??= Promise.resolve()
fontMutations.pendingMutation ??= null
let fontLifecycleGeneration = 0
let fontLifecycleActive = false

function storedFontPair() {
	return {
		fontFamily: storedValues?.fontFamily ?? CONFIG.fontFamily.default,
		fontFamilySecondary:
			storedValues?.fontFamilySecondary ?? CONFIG.fontFamilySecondary.default,
	}
}

function desiredFontPair() {
	return { ...(fontMutations.desiredPair ?? storedFontPair()) }
}

function getPackagedResources() {
	if (packagedResources) return packagedResources
	const manifest = browser.runtime.getManifest()
	packagedResources =
		manifest.manifest_version === 3
			? manifest.web_accessible_resources.flatMap(({ resources }) => resources)
			: manifest.web_accessible_resources
	return packagedResources
}

function resolvePackagedResource(sourcePath) {
	const basename = sourcePath.split('/').at(-1)
	const extensionIndex = basename.lastIndexOf('.')
	const stem = basename.slice(0, extensionIndex)
	const extension = basename.slice(extensionIndex + 1)
	const escapedStem = stem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	const pattern = new RegExp(`(?:^|/)${escapedStem}(?:\\.[^./]+)?\\.${extension}$`)
	const matches = getPackagedResources().filter((resource) => pattern.test(resource))
	if (matches.length !== 1) {
		throw new Error(`Expected one packaged resource for ${sourcePath}, found ${matches.length}`)
	}
	const url = browser.runtime.getURL(matches[0])
	if (!EXTENSION_PROTOCOL.test(new URL(url).protocol)) {
		throw new Error(`Invalid packaged resource URL for ${sourcePath}`)
	}
	return url
}

async function loadFontCatalog(family) {
	const sourceFile = FONT_CATALOG_FILES[family]
	if (!sourceFile) return null
	let promise = catalogPromises.get(sourceFile)
	if (!promise) {
		const url = resolvePackagedResource(sourceFile)
		promise = fetch(url).then(async (response) => {
			if (!response.ok) throw new Error(`Font catalog request failed (${response.status})`)
			const descriptors = await response.json()
			if (!Array.isArray(descriptors)) throw new Error(`Invalid font catalog for ${family}`)
			return descriptors
		})
		catalogPromises.set(sourceFile, promise)
		promise.catch(() => catalogPromises.delete(sourceFile))
	}
	return promise
}

function removeRegisteredFaces(registry) {
	if (!registry) return
	for (const faces of registry.families.values()) {
		for (const face of faces) document.fonts.delete(face)
	}
	registry.families.clear()
}

function getFontRegistry() {
	const existing = globalThis[FONT_REGISTRY_KEY]
	if (
		existing?.fingerprint === FONT_CATALOG_FINGERPRINT &&
		existing.owner === FONT_RUNTIME_OWNER
	) {
		return existing
	}
	if (existing) removeRegisteredFaces(existing)

	const registry = {
		fingerprint: FONT_CATALOG_FINGERPRINT,
		families: new Map(),
		owner: FONT_RUNTIME_OWNER,
	}
	globalThis[FONT_REGISTRY_KEY] = registry
	return registry
}

function registerBundledFontFamily(family, descriptors, registry) {
	if (!globalThis.FontFace || !document.fonts?.add || !document.fonts?.delete) {
		throw new Error('This browser does not support local FontFace registration')
	}

	if (registry.families.has(family)) return true

	const faces = []
	try {
		for (const descriptor of descriptors) {
			const assetUrl = resolvePackagedResource(descriptor.asset)
			const { asset: _asset, ...fontDescriptors } = descriptor
			const face = new FontFace(family, `url("${assetUrl}") format("woff2")`, fontDescriptors)
			document.fonts.add(face)
			faces.push(face)
		}
	} catch (error) {
		for (const face of faces) document.fonts.delete(face)
		throw error
	}

	registry.families.set(family, faces)
	return true
}

async function syncBundledFontFamilies(families, isCurrent = () => true) {
	const syncVersion = ++fontSyncVersion
	const activeFamilies = new Set(
		families.filter((family) => family && FONT_CATALOG_FILES[family]),
	)
	const catalogs = await Promise.all(
		[...activeFamilies].map(async (family) => [family, await loadFontCatalog(family)]),
	)
	if (syncVersion !== fontSyncVersion || !isCurrent()) return false

	const registry = activeFamilies.size > 0 ? getFontRegistry() : globalThis[FONT_REGISTRY_KEY]
	if (!registry) return true
	if (
		registry.fingerprint !== FONT_CATALOG_FINGERPRINT ||
		registry.owner !== FONT_RUNTIME_OWNER
	) {
		removeRegisteredFaces(registry)
		if (globalThis[FONT_REGISTRY_KEY] === registry) {
			delete globalThis[FONT_REGISTRY_KEY]
		}
		return true
	}
	for (const [family, catalog] of catalogs) {
		registerBundledFontFamily(family, catalog, registry)
	}

	for (const [family, faces] of registry.families) {
		if (activeFamilies.has(family)) continue
		for (const face of faces) document.fonts.delete(face)
		registry.families.delete(family)
	}
	return true
}

function unregisterAllBundledFonts() {
	fontSyncVersion += 1
	const registry = globalThis[FONT_REGISTRY_KEY]
	if (!registry || registry.owner !== FONT_RUNTIME_OWNER) return
	removeRegisteredFaces(registry)
	delete globalThis[FONT_REGISTRY_KEY]
}

// =====================================================
// CONFIG
// =====================================================
const FONT_FAMILIES = {
	Inter: '',
	Roboto: '',
	'Roboto Mono': '',
	'Roboto Serif': '',
	'DM Sans': '',
	'Reddit Mono': '',
	Poppins: '',
	Raleway: '',
	'Noto Sans': '',
	Lato: '',
	Quicksand: '',
	Outfit: '',
	'Share Tech Mono': '',
	'JetBrains Mono': '',
	'Work Sans': '',
	Lora: '',
	Manrope: '',
	'Libre Baskerville': '',
	'Bricolage Grotesque': '',
	'Hedvig Letters Serif': '',
	Literata: '',
	Syne: '',
	Sora: '',
	'Golos Text': '',
	'Google Sans Flex': '',
	'FK Grotesk Neue': '',
	'FK Grotesk': '',
}

const FONT_OPTIONS = [
	{ name: 'Default', label: 'Default' },
	...Object.entries(FONT_FAMILIES)
		.map(([name, badge]) => ({
			name,
			label: badge ? `${name} ${badge}` : name,
		}))
		.sort((a, b) => a.label.localeCompare(b.label)),
]

const CONFIG = {
	fontFamily: {
		id: SELECTORS.FONT.FAMILY_ID,
		label: 'Primary Font',
		default: 'Default',
		storageKey: SK_TEXT_FONT_FAMILY,
		cssVar: '--gpthFontFamily',
		options: FONT_OPTIONS,
	},
	fontFamilySecondary: {
		id: SELECTORS.FONT.FAMILY_SECONDARY_ID,
		label: 'Secondary Font',
		default: 'Default',
		storageKey: SK_TEXT_FONT_FAMILY_SECONDARY,
		cssVar: '--gpthFontFamilySecondary',
		options: FONT_OPTIONS,
	},
	fontSize: {
		id: SELECTORS.FONT.SIZE_ID,
		label: 'Font Size',
		default: 16,
		storageKey: SK_TEXT_FONT_SIZE,
		cssVar: '--gpthFontSize',
		unit: 'px',
		min: 12,
		max: 24,
	},
	lineHeight: {
		id: SELECTORS.FONT.LINE_HEIGHT_ID,
		label: 'Line Height',
		default: 28,
		storageKey: SK_TEXT_LINE_HEIGHT,
		cssVar: '--gpthLineHeight',
		unit: 'px',
		min: 12,
		max: 60,
	},
	letterSpacing: {
		id: SELECTORS.FONT.LETTER_SPACING_ID,
		label: 'Letter Space',
		default: 0,
		storageKey: SK_TEXT_LETTER_SPACING,
		cssVar: '--gpthLetterSpacing',
		unit: 'px',
		min: -30,
		max: 30,
	},
}

// =====================================================
// RENDER
// =====================================================

function templateHTML() {
	return `
    <section id="fontChangerPopover" class="fonts">
      <div class="fonts__props">
        <div class="fonts__bigcards-wrapper">
          ${renderFontFamilyCard('fontFamily')}

          ${renderFontBigCard({
				name: CONFIG.fontSize.label,
				className: SELECTORS.FONT.SIZE_CLASS,
				inputId: CONFIG.fontSize.id,
				inputType: 'number',
				inputValue: CONFIG.fontSize.default,
				inputPlaceholder: CONFIG.fontSize.default,
				unit: CONFIG.fontSize.unit,
				min: CONFIG.fontSize.min,
				max: CONFIG.fontSize.max,
			})}
        </div>
        <div class="fonts__smallcards-wrapper">
	          ${renderFontSmallCard({
					name: CONFIG.lineHeight.label,
					className: SELECTORS.FONT.LINE_HEIGHT_CLASS,
					inputId: CONFIG.lineHeight.id,
					inputType: 'number',
					inputValue: CONFIG.lineHeight.default,
					inputPlaceholder: CONFIG.lineHeight.default,
					unit: CONFIG.lineHeight.unit,
					min: CONFIG.lineHeight.min,
					max: CONFIG.lineHeight.max,
				})}
          ${renderFontSmallCard({
				name: CONFIG.letterSpacing.label,
				className: SELECTORS.FONT.LETTER_SPACING_CLASS,
				inputId: CONFIG.letterSpacing.id,
				inputType: 'number',
				inputValue: CONFIG.letterSpacing.default,
				inputPlaceholder: CONFIG.letterSpacing.default,
				unit: CONFIG.letterSpacing.unit,
				min: CONFIG.letterSpacing.min,
				max: CONFIG.letterSpacing.max,
			})}
        </div>
        <div class="fonts__bigcards-wrapper">
          ${renderFontFamilyCard('fontFamilySecondary')}
        </div>
      </div>
      <footer class="flex justify-center mt-8">
        ${renderButton({
			id: SELECTORS.FONT.RESET_BTN_ID,
			content: 'Reset Fonts',
			disabled: false,
			className: 'btn-primary',
		})}
      </footer>
    </section>
  `
}

function renderFontFamilyCard(configKey) {
	const cfg = CONFIG[configKey]

	return `
          <div class="fonts__family fonts__group card card--big h-full">
            <label for="${cfg.id}" class="flex flex-col gap-1 h-full w-full">
                <div>
                    <p class="card__unit card__icon">T</p>
                    <p class="card__name uppercase font-semibold">${cfg.label.toUpperCase()}</p>
                </div>
                <select id="${cfg.id}" class="flex-1 border-none outline-none focus:none font-bold" role="listbox">
                    ${cfg.options
						.map((f) => {
							const val = f.name === 'Default' ? cfg.default : f.name
							return `<option value="${escapeHTML(val)}">${f.label}</option>`
						})
						.join('')}
                </select>
            </label>
          </div>
	`
}

function escapeHTML(str) {
	return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

function getElements() {
	if (cachedElements) return cachedElements

	// const container = $('#fontChangerPopover', $rootSettings)
	const container = document.getElementById('fontChangerPopover')
	if (!container) return null

	cachedElements = {
		fontFamily: $(`#${CONFIG.fontFamily.id}`, container),
		fontFamilySecondary: $(`#${CONFIG.fontFamilySecondary.id}`, container),
		fontSize: $(`#${CONFIG.fontSize.id}`, container),
		lineHeight: $(`#${CONFIG.lineHeight.id}`, container),
		letterSpacing: $(`#${CONFIG.letterSpacing.id}`, container),
		resetBtn: $(`#${SELECTORS.FONT.RESET_BTN_ID}`, container),
	}

	return cachedElements
}

function updateInputs(values) {
	// console.log('[🎨GPThemes]: updateInputs', values) // Object: { fontFamily: 'Lora', fontSize: 16, lineHeight: 28, letterSpacing: 0 }

	const elements = getElements()

	if (!elements) return

	if (values?.fontFamily != null) elements.fontFamily.value = values.fontFamily
	if (values?.fontFamilySecondary != null)
		elements.fontFamilySecondary.value = values.fontFamilySecondary
	if (values?.fontSize != null) elements.fontSize.value = values.fontSize
	if (values?.lineHeight != null) elements.lineHeight.value = values.lineHeight
	if (values?.letterSpacing != null) elements.letterSpacing.value = values.letterSpacing
}

// =====================================================
// HANDLERS
// =====================================================

async function handleNumeric(e, key) {
	// console.log('[🎨GPThemes]: handleNumeric', key, e.target.value)

	const cfg = CONFIG[key]
	const newVal = formatNum(e.target.value)
	const oldVal = focusValues[key]

	if (newVal === oldVal) return

	if (!validate(newVal, cfg.min, cfg.max)) {
		e.target.value = oldVal
		return
	}

	setVar(cfg.cssVar, newVal)
	await setItem(cfg.storageKey, newVal)
	storedValues = { ...storedValues, [key]: newVal }
}

const formatFontForCSS = (font) => {
	if (!font || font === 'Default') return 'Default'

	if (font === 'FK Grotesk Neue') {
		return '"FK Grotesk Neue", "FK Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
	}
	if (font === 'FK Grotesk') {
		return '"FK Grotesk", "FK Grotesk Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
	}

	// Only wrap family names containing spaces.
	return font.includes(' ') && !font.startsWith('"') ? `"${font}"` : font
}

function fontStorageValues(pair) {
	return {
		[CONFIG.fontFamily.storageKey]: pair.fontFamily,
		[CONFIG.fontFamilySecondary.storageKey]: pair.fontFamilySecondary,
	}
}

function previousStorageValues(storageValues, previousPair) {
	const previousValues = {
		...fontStorageValues(previousPair),
		[CONFIG.fontSize.storageKey]: storedValues?.fontSize ?? CONFIG.fontSize.default,
		[CONFIG.lineHeight.storageKey]: storedValues?.lineHeight ?? CONFIG.lineHeight.default,
		[CONFIG.letterSpacing.storageKey]:
			storedValues?.letterSpacing ?? CONFIG.letterSpacing.default,
	}
	return Object.fromEntries(
		Object.keys(storageValues).map((storageKey) => [storageKey, previousValues[storageKey]]),
	)
}

function setFontStorageItems(storageValues) {
	const write = setItems(storageValues)
	fontMutations.storageWrites = write.then(
		() => undefined,
		() => undefined,
	)
	return write
}

function applyFontPair(pair) {
	for (const key of ['fontFamily', 'fontFamilySecondary']) {
		const value = pair[key]
		const cssVar = CONFIG[key].cssVar
		if (value === 'Default') removeVar(cssVar)
		else setVar(cssVar, formatFontForCSS(value))
	}
}

async function preloadBundledFontFamilies(pair) {
	const families = new Set(
		[pair.fontFamily, pair.fontFamilySecondary].filter((family) => FONT_CATALOG_FILES[family]),
	)
	await Promise.all([...families].map((family) => loadFontCatalog(family)))
}

function isCurrentFontMutation(revision, lifecycleGeneration) {
	return (
		fontLifecycleActive &&
		fontMutations.owner === FONT_RUNTIME_OWNER &&
		lifecycleGeneration === fontLifecycleGeneration &&
		revision === fontMutations.revision
	)
}

function enqueueFontMutation({ pair, storageValues, commit, successMessage, errorMessage }) {
	if (!fontLifecycleActive || fontMutations.owner !== FONT_RUNTIME_OWNER) {
		return Promise.resolve(false)
	}

	const revision = ++fontMutations.revision
	const lifecycleGeneration = fontLifecycleGeneration
	const previousPair = storedFontPair()
	const rollbackStorageValues = previousStorageValues(storageValues, previousPair)
	fontMutations.desiredPair = { ...pair }
	fontMutations.pendingMutation = {
		pair: { ...pair },
		rollbackStorageValues: { ...rollbackStorageValues },
		storageValues: { ...storageValues },
	}

	const operation = fontMutations.queue.then(async () => {
		try {
			await preloadBundledFontFamilies(pair)
			if (!isCurrentFontMutation(revision, lifecycleGeneration)) return false

			await setFontStorageItems(storageValues)
			if (!isCurrentFontMutation(revision, lifecycleGeneration)) return false

			const synced = await syncBundledFontFamilies(
				[pair.fontFamily, pair.fontFamilySecondary],
				() => isCurrentFontMutation(revision, lifecycleGeneration),
			)
			if (!synced || !isCurrentFontMutation(revision, lifecycleGeneration)) return false

			commit()
			fontMutations.desiredPair = { ...pair }
			fontMutations.pendingMutation = null
			Notify.success(successMessage)
			return true
		} catch (error) {
			console.error('Font mutation failed:', error)
			if (!isCurrentFontMutation(revision, lifecycleGeneration)) return false

			try {
				await setFontStorageItems(rollbackStorageValues)
			} catch (rollbackError) {
				console.error('Font storage rollback failed:', rollbackError)
			}
			if (!isCurrentFontMutation(revision, lifecycleGeneration)) return false

			fontMutations.desiredPair = { ...previousPair }
			fontMutations.pendingMutation = null
			await syncBundledFontFamilies(
				[previousPair.fontFamily, previousPair.fontFamilySecondary],
				() => isCurrentFontMutation(revision, lifecycleGeneration),
			)
			if (!isCurrentFontMutation(revision, lifecycleGeneration)) return false
			applyFontPair(previousPair)
			updateInputs(previousPair)
			Notify.error(errorMessage)
			return false
		}
	})

	fontMutations.queue = operation.catch(() => false)
	return operation
}

async function handleFontFamilyChange(e, configKey) {
	const selectedFontFamily = e.target.value
	const pair = { ...desiredFontPair(), [configKey]: selectedFontFamily }

	return enqueueFontMutation({
		pair,
		storageValues: fontStorageValues(pair),
		commit: () => {
			storedValues = { ...storedValues, ...pair }
			applyFontPair(pair)
			updateInputs(pair)
		},
		successMessage: 'Font updated successfully',
		errorMessage: 'Failed to update font',
	})
}

async function handleFontFamily(e) {
	await handleFontFamilyChange(e, 'fontFamily')
}

async function handleFontFamilySecondary(e) {
	await handleFontFamilyChange(e, 'fontFamilySecondary')
}

async function resetAll() {
	const defaults = {
		fontFamily: CONFIG.fontFamily.default,
		fontFamilySecondary: CONFIG.fontFamilySecondary.default,
		fontSize: CONFIG.fontSize.default,
		lineHeight: CONFIG.lineHeight.default,
		letterSpacing: CONFIG.letterSpacing.default,
	}
	const defaultsValues = {
		[CONFIG.fontFamily.storageKey]: defaults.fontFamily,
		[CONFIG.fontFamilySecondary.storageKey]: defaults.fontFamilySecondary,
		[CONFIG.fontSize.storageKey]: defaults.fontSize,
		[CONFIG.lineHeight.storageKey]: defaults.lineHeight,
		[CONFIG.letterSpacing.storageKey]: defaults.letterSpacing,
	}
	const pair = {
		fontFamily: defaults.fontFamily,
		fontFamilySecondary: defaults.fontFamilySecondary,
	}

	return enqueueFontMutation({
		pair,
		storageValues: defaultsValues,
		commit: () => {
			storedValues = defaults
			updateInputs(defaults)
			applyFontPair(pair)
			setVars({
				[CONFIG.fontSize.cssVar]: defaults.fontSize,
				[CONFIG.lineHeight.cssVar]: defaults.lineHeight,
				[CONFIG.letterSpacing.cssVar]: defaults.letterSpacing,
			})
		},
		successMessage: '✅ All fonts have been reset',
		errorMessage: 'Failed to reset fonts',
	})
}

// =====================================================
// EVENTS
// =====================================================

function addListeners() {
	const elements = getElements()
	if (!elements) return

	const onEnter = (fn) => (e) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			fn(e)
			e.target.blur()
		}
	}
	const track = (key) => (e) => {
		focusValues[key] = formatNum(e.target.value)
	}

	bind(elements.fontFamily, { change: handleFontFamily })
	bind(elements.fontFamilySecondary, { change: handleFontFamilySecondary })

	bind(elements.fontSize, {
		focus: track('fontSize'),
		blur: (e) => handleNumeric(e, 'fontSize'),
		keypress: onEnter((e) => handleNumeric(e, 'fontSize')),
	})

	bind(elements.lineHeight, {
		focus: track('lineHeight'),
		blur: (e) => handleNumeric(e, 'lineHeight'),
		keypress: onEnter((e) => handleNumeric(e, 'lineHeight')),
	})

	bind(elements.letterSpacing, {
		focus: track('letterSpacing'),
		blur: (e) => handleNumeric(e, 'letterSpacing'),
		keypress: onEnter((e) => handleNumeric(e, 'letterSpacing')),
	})

	bind(elements.resetBtn, { click: resetAll })
}

// =====================================================
// UTILS
// =====================================================

const formatNum = (val) => {
	if (val === null || val === undefined || val === '') return null
	const num = parseFloat(val)
	if (Number.isNaN(num)) return null
	return num % 1 === 0 ? String(Math.round(num)) : num.toFixed(2).replace(/\.?0+$/, '')
}

const validate = (val, min, max) => {
	const num = parseFloat(val)
	if (Number.isNaN(num) || val === null) {
		Notify.error('🚨 Invalid number')
		return false
	}
	if (num < min || num > max) {
		Notify.warning(`⚠️ Must be between ${min} and ${max}`)
		return false
	}
	return true
}

// =====================================================
// INIT
// =====================================================

async function init() {
	// console.log('[INIT FONTS]')
	const lifecycleGeneration = ++fontLifecycleGeneration
	fontLifecycleActive = true
	const inheritedMutation = fontMutations.pendingMutation
		? {
				pair: { ...fontMutations.pendingMutation.pair },
				rollbackStorageValues: {
					...fontMutations.pendingMutation.rollbackStorageValues,
				},
				storageValues: { ...fontMutations.pendingMutation.storageValues },
			}
		: null
	if (fontMutations.owner !== FONT_RUNTIME_OWNER) {
		fontMutations.queue = Promise.resolve()
	}
	fontMutations.owner = FONT_RUNTIME_OWNER
	const initializationRevision = ++fontMutations.revision
	await fontMutations.storageWrites
	await fontMutations.queue
	if (
		!fontLifecycleActive ||
		lifecycleGeneration !== fontLifecycleGeneration ||
		fontMutations.owner !== FONT_RUNTIME_OWNER ||
		initializationRevision !== fontMutations.revision
	) {
		return
	}

	// 1. Get stored values from storage
	const keys = [
		CONFIG.fontFamily.storageKey,
		CONFIG.fontFamilySecondary.storageKey,
		CONFIG.fontSize.storageKey,
		CONFIG.lineHeight.storageKey,
		CONFIG.letterSpacing.storageKey,
	]

	const stored = await getItems(keys)
	if (
		!fontLifecycleActive ||
		lifecycleGeneration !== fontLifecycleGeneration ||
		fontMutations.owner !== FONT_RUNTIME_OWNER ||
		initializationRevision !== fontMutations.revision
	) {
		return
	}
	const getStoredOrDefault = (configKey) =>
		stored[CONFIG[configKey].storageKey] ?? CONFIG[configKey].default
	const isInitializationCurrent = () =>
		fontLifecycleActive &&
		lifecycleGeneration === fontLifecycleGeneration &&
		fontMutations.owner === FONT_RUNTIME_OWNER &&
		initializationRevision === fontMutations.revision

	const pendingValueOrStored = (configKey) =>
		inheritedMutation?.storageValues[CONFIG[configKey].storageKey] ??
		getStoredOrDefault(configKey)
	let fontFamily = inheritedMutation?.pair.fontFamily ?? getStoredOrDefault('fontFamily')
	let fontFamilySecondary =
		inheritedMutation?.pair.fontFamilySecondary ?? getStoredOrDefault('fontFamilySecondary')
	let fontSize = pendingValueOrStored('fontSize')
	let lineHeight = pendingValueOrStored('lineHeight')
	let letterSpacing = pendingValueOrStored('letterSpacing')
	let pair = { fontFamily, fontFamilySecondary }
	fontMutations.desiredPair = { ...pair }
	const pendingStorageNeedsWrite =
		inheritedMutation &&
		Object.entries(inheritedMutation.storageValues).some(
			([storageKey, value]) => stored[storageKey] !== value,
		)
	let inheritedStorageWritten = Boolean(inheritedMutation && !pendingStorageNeedsWrite)
	let isCurrent
	try {
		if (pendingStorageNeedsWrite) {
			await preloadBundledFontFamilies(pair)
			if (!isInitializationCurrent()) return
			await setFontStorageItems(inheritedMutation.storageValues)
			inheritedStorageWritten = true
			if (!isInitializationCurrent()) return
		}
		isCurrent = await syncBundledFontFamilies(
			[fontFamily, fontFamilySecondary],
			isInitializationCurrent,
		)
	} catch (error) {
		if (!inheritedMutation || !isInitializationCurrent()) throw error
		console.error('Inherited font mutation failed:', error)
		if (inheritedStorageWritten) {
			try {
				await setFontStorageItems(inheritedMutation.rollbackStorageValues)
			} catch (rollbackError) {
				console.error('Inherited font storage rollback failed:', rollbackError)
			}
			if (!isInitializationCurrent()) return
		}

		const restored = {
			...stored,
			...(inheritedStorageWritten ? inheritedMutation.rollbackStorageValues : {}),
		}
		const restoredOrDefault = (configKey) =>
			restored[CONFIG[configKey].storageKey] ?? CONFIG[configKey].default
		fontFamily = restoredOrDefault('fontFamily')
		fontFamilySecondary = restoredOrDefault('fontFamilySecondary')
		fontSize = restoredOrDefault('fontSize')
		lineHeight = restoredOrDefault('lineHeight')
		letterSpacing = restoredOrDefault('letterSpacing')
		pair = { fontFamily, fontFamilySecondary }
		fontMutations.desiredPair = { ...pair }
		fontMutations.pendingMutation = null
		isCurrent = await syncBundledFontFamilies(
			[fontFamily, fontFamilySecondary],
			isInitializationCurrent,
		)
	}
	if (!isCurrent || !isInitializationCurrent()) return

	// 2. Update DOM (CSS vars)
	applyFontPair(pair)

	setVars({
		[CONFIG.fontSize.cssVar]: fontSize,
		[CONFIG.lineHeight.cssVar]: lineHeight,
		[CONFIG.letterSpacing.cssVar]: letterSpacing,
	})

	storedValues = { fontFamily, fontFamilySecondary, fontSize, lineHeight, letterSpacing }
	fontMutations.pendingMutation = null

	// console.log(storedValues)

	// 4. Update inputs using helper -> moved in MOUNT since its DOM dependent
	// updateInputs({ fontFamily, fontSize, lineHeight, letterSpacing })
}

// function mount(rootSettings) {
function mount() {
	// console.log('[MOUNT FONTS]')

	// Update inputs using helper
	updateInputs(storedValues)
	// $rootSettings = rootSettings
	addListeners()
}

function cleanup() {
	fontLifecycleActive = false
	fontLifecycleGeneration += 1
	if (fontMutations.owner === FONT_RUNTIME_OWNER) {
		fontMutations.revision += 1
		fontMutations.owner = null
	}
	unregisterAllBundledFonts()
	cachedElements = null
	for (const key of Object.keys(focusValues)) {
		delete focusValues[key]
	}
}

export {
	addListeners as handleFontsListeners,
	cleanup,
	init,
	mount,
	templateHTML as renderFontsTab,
	resetAll as resetAllFonts,
}
