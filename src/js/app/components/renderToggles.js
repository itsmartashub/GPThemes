function renderToggle({
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
	if (card) {
		return `
            <label class="gpth-switch ${className}" for="${id}">
                ${icon ? `<div class="gpth-switch__icon" aria-hidden="true">${icon}</div>` : ''}
                <div class="gpth-switch__text">
                <div class="title mb-1">${label}</div>
                ${subtitle ? `<div class="subtitle">${subtitle}</div>` : ''}
                </div>
                <div class="gpth-switch__checkbox">
                <input
                    type="checkbox"
                    id="${id}"
                    ${checked ? 'checked' : ''}
                    ${disabled ? 'disabled' : ''}
                    aria-labelledby="${id}-label"
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

export { renderToggle }
