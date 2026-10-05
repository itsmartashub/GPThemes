import { icon_lock } from './icons'

export function renderSliderCard({
	name,
	inputId,
	inputType,
	inputValue,
	inputPlaceholder = '',
	displayValue,
	displayUnit,
	min = 10,
	max = 100,
	step = 1,
	unit = '',
	isLocked = false,
}) {
	const sanitizedName = sanitizeString(name)
	const sanitizedInputId = sanitizeString(inputId)
	const sanitizedInputValue = sanitizeString(inputValue)
	const sanitizedInputPlaceholder = sanitizeString(inputPlaceholder)

	return `
        <div
            class="card card--range ${isLocked ? 'is-locked' : ''}"
            data-gpth-err="${min}${unit} &hArr; ${max}${unit}"
        >
            <label
                for="${sanitizedInputId}"
            >
                <div class="card__output-wrapper">
                    <div
                        class="card__output"
                        id="${displayValue}"
                    >
                        ${sanitizedInputValue}
                    </div>

                    <div class="card__unitname-wrapper">
                        <p
                            class="card__unit"
                            id="${displayUnit}"
                        >
                            ${unit}
                        </p>

                        <p class="card__name">
                            ${sanitizedName}
                        </p>
                    </div>
                </div>

                <input
                    type="${inputType}"
                    id="${sanitizedInputId}"
                    value="${sanitizedInputValue}"
                    placeholder="${sanitizedInputPlaceholder}"
                    min="${min}"
                    max="${max}"
                    step="${step}"
                    aria-valuemin="${min}"
                    aria-valuemax="${max}"
                    aria-valuenow="${sanitizedInputValue}"
                    ${isLocked ? 'disabled' : ''}
                >
            </label>

            ${icon_lock}
        </div>
    `
}

function sanitizeString(str) {
	const div = document.createElement('div')
	div.textContent = str
	return div.innerHTML
}
