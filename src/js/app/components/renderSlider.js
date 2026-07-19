function decimalsOf(step) {
	return (String(step).split('.')[1] || '').length
}

// Snaps to step, rounds off float drift, clamps to range
export function roundToStep(value, step, min, max) {
	const decimals = decimalsOf(step)
	const snapped = Math.round(value / step) * step
	const rounded = decimals > 0 ? Number(snapped.toFixed(decimals)) : snapped
	return Math.min(max, Math.max(min, rounded))
}

// Formats a value using the precision implied by step (0.05 -> "1.25", 1 -> "8")
function formatStepValue(value, step) {
	const decimals = decimalsOf(step)
	return decimals > 0 ? Number(value).toFixed(decimals) : String(value)
}
export function renderSlider({
	name,
	inputId,
	inputValue,
	displayValueId,
	displayUnitId,
	min,
	max,
	step = 1,
	unit = '',
}) {
	const percent = ((inputValue - min) / (max - min)) * 100
	const displayValue = formatStepValue(inputValue, step)

	return `
		<div class="gpth-slider__wrapper" style="--gpth-slider-percent:${percent}%">
			<div class="gpth-slider__bg">
				<div class="gpth-slider__fill"></div>
			</div>

			<div class="gpth-slider__marker"></div>

			<span class="gpth-slider__label">${name}</span>

			<input
				type="range"
				id="${inputId}"
				class="gpth-slider__input"
				min="${min}"
				max="${max}"
				step="${step}"
				value="${inputValue}"
				aria-label="${name}"
			>

			<span class="gpth-slider__value">
				<span id="${displayValueId}">${displayValue}</span><span id="${displayUnitId}">${unit}</span>
			</span>
		</div>
	`
}

// Call from any input/change handlr
export function paintSlider(inputEl, value, min, max, step = 1) {
	const wrapper = inputEl.closest('.gpth-slider__wrapper')
	if (!wrapper) return

	const percent = ((value - min) / (max - min)) * 100
	wrapper.style.setProperty('--gpth-slider-percent', `${percent}%`)

	const display = wrapper.querySelector('.gpth-slider__value span:first-child')
	if (display) display.textContent = formatStepValue(value, step)
}
