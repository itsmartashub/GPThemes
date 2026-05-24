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
	const labelId = `${id}-label`
	const descriptionId = `${id}-description`

	if (card) {
		return `
            <label class="gpth-switch ${className}" for="${id}">
                ${icon ? `<div class="gpth-switch__icon" aria-hidden="true">${icon}</div>` : ''}
                <div class="gpth-switch__text">
                    <div id="${labelId}" class="title mb-1">${label}</div>
                    ${subtitle ? `<div id="${descriptionId}" class="subtitle">${subtitle}</div>` : ''}
                </div>
                <div class="gpth-switch__checkbox">
                    <input
                        type="checkbox"
                        id="${id}"
                        ${checked ? 'checked' : ''}
                        ${disabled ? 'disabled' : ''}
                        aria-labelledby="${labelId}"
                        ${subtitle ? `aria-describedby="${descriptionId}"` : ''}
                    >
                    <span class="slider" aria-hidden="true"></span>
                </div>
            </label>
        `
	} else {
		return `
            <label class="gpth-checkbox-wrapper ${className}" for="${id}">
                ${label ? `<span class="gpth-checkbox__text">${label}</span>` : ''}
                <div class="gpth-checkbox">
                <input
                    type="checkbox"
                    id="${id}"
                    class="gpth-checkbox__input"
                    ${checked ? 'checked' : ''}
                    ${disabled ? 'disabled' : ''}
                    aria-label="Toggle ${label}"
                    ${dataType ? `data-type="${dataType}"` : ''}
                >
                <span class="gpth-checkbox__slider"></span>
                </div>
            </label>
        `
	}
}
