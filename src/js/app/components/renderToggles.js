import { renderCheckbox } from './renderCheckbox.js'

export function renderToggle({
	id,
	checked = false,
	label = '',
	subtitle = '',
	icon = '',
	disabled = false,
	card = false,
	className = '',
	dataType = '',
}) {
	const checkbox = renderCheckbox({
		id,
		checked,
		disabled,
		dataType: card ? '' : dataType,
		ariaLabel: card ? label : `Toggle ${label}`,
	})

	if (card) {
		return `
            <label class="gpth-switch ${className}" for="${id}">
                ${icon ? `<div class="gpth-switch__icon" aria-hidden="true">${icon}</div>` : ''}

                <div class="gpth-switch__text">
                    <div class="title">${label}</div>
                    ${subtitle ? `<div class="subtitle">${subtitle}</div> ` : ''}
                </div>

                ${checkbox}
            </label>
        `
	}

	return `
        <label class="gpth-checkbox-wrapper ${className}" for="${id}">
            ${label ? `<span class="gpth-checkbox__text">${label}</span>` : ''}

            ${checkbox}
        </label>
    `
}
