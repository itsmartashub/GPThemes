import { escapeHTML } from '../../utils/dom.js'
import { icon_lock, icon_reset } from './icons'

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
    resetId = '',
}) {
    const safeName = escapeHTML(name)
    const safeInputId = escapeHTML(inputId)
    const safeInputValue = escapeHTML(inputValue)
    const safeInputPlaceholder = escapeHTML(inputPlaceholder)

    // Optional per-card reset: only rendered when the caller passes a resetId
    const resetButton = resetId
        ? `
            <button
                type="button"
                id="${escapeHTML(resetId)}"
                class="card__reset"
                title="Reset to default"
                aria-label="Reset ${safeName} to default"
            >
                ${icon_reset}
            </button>`
        : ''

    return `
        <div
            class="card card--range ${isLocked ? 'is-locked' : ''}"
            data-gpth-err="${min}${unit} &hArr; ${max}${unit}"
        >
            <label
                for="${safeInputId}"
            >
                <div class="card__output-wrapper">
                    <div
                        class="card__output"
                        id="${displayValue}"
                    >
                        ${safeInputValue}
                    </div>

                    <div class="card__unitname-wrapper">
                        <p
                            class="card__unit"
                            id="${displayUnit}"
                        >
                            ${unit}
                        </p>

                        <p class="card__name">
                            ${safeName}
                        </p>
                    </div>
                </div>

                <input
                    type="${inputType}"
                    id="${safeInputId}"
                    value="${safeInputValue}"
                    placeholder="${safeInputPlaceholder}"
                    min="${min}"
                    max="${max}"
                    step="${step}"
                    aria-valuemin="${min}"
                    aria-valuemax="${max}"
                    aria-valuenow="${safeInputValue}"
                    ${isLocked ? 'disabled' : ''}
                >
            </label>

            ${resetButton}

            ${icon_lock}
        </div>
    `
}
