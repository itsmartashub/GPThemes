import { $ } from '../../utils/dom.js'
import { getItem, setItem } from '../../utils/storage.js'
import { renderSlider, paintSlider, roundToStep } from './renderSlider.js'

export function createSliderSetting(config) {
	const {
		storageKey,
		cssVar,
		cssTarget = () => document.documentElement,
		sliderId,
		displayValueId,
		displayUnitId,
		name,
		min,
		max,
		step = 1,
		unit = '',
		defaultValue,
		toCssValue = (value) => `${value}${unit}`,
	} = config

	function normalizeValue(value) {
		const numericValue = Number(value)
		if (!Number.isFinite(numericValue)) return defaultValue
		return roundToStep(numericValue, step, min, max)
	}

	function templateHTML() {
		return renderSlider({
			name,
			inputId: sliderId,
			inputValue: defaultValue,
			displayValueId,
			displayUnitId,
			min,
			max,
			step,
			unit,
		})
	}

	async function loadState() {
		try {
			const stored = await getItem(storageKey)
			return stored == null ? defaultValue : normalizeValue(stored)
		} catch (error) {
			console.error(`[↔️ GPThemes] Failed to load "${storageKey}":`, error)
			return defaultValue
		}
	}

	async function saveState(value) {
		try {
			await setItem(storageKey, value)
		} catch (error) {
			console.error(`[↔️ GPThemes] Failed to save "${storageKey}":`, error)
		}
	}

	function applyCssVar(value) {
		cssTarget()?.style.setProperty(cssVar, toCssValue(value))
	}

	function applyState(slider, value) {
		slider.value = value
		applyCssVar(value)
		paintSlider(slider, value, min, max, step)
	}

	function onInput({ currentTarget }) {
		const value = normalizeValue(currentTarget.value)
		applyCssVar(value)
		paintSlider(currentTarget, value, min, max, step)
	}

	function onChange({ currentTarget }) {
		void saveState(normalizeValue(currentTarget.value))
	}

	async function mount() {
		const slider = $(`#${sliderId}`)
		if (!slider) {
			console.warn(`createSliderSetting: element with ID "${sliderId}" not found`)
			return
		}

		const value = await loadState()
		applyState(slider, value)

		slider.addEventListener('input', onInput)
		slider.addEventListener('change', onChange)
	}

	return { templateHTML, mount }
}
