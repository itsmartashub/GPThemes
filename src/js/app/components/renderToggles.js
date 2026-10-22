import { renderCheckbox } from './renderCheckbox.js'

export function renderToggle({
	id,
	checked = false,
	label = '',
	subtitle = '',
	icon = '',
	badge = '',
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
		const badges = (Array.isArray(badge) ? badge : [badge]).filter(Boolean)
		const badgesHTML = badges
			.map((text) => `<span class="gpth-switch__badge">${text}</span>`)
			.join('')

		return `
            <label class="gpth-switch ${className}" for="${id}">
                ${icon ? `<div class="gpth-switch__icon" aria-hidden="true">${icon}</div>` : ''}

                <div class="gpth-switch__text">
                    <div class="title">
                        ${label}
                        ${badgesHTML ? `<span class="gpth-switch__badges">${badgesHTML}</span>` : ''}
                    </div>
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
