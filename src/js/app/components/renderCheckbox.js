export function renderCheckbox({
	id,
	checked = false,
	disabled = false,
	ariaLabel = '',
	ariaLabelledby = '',
	dataType = '',
}) {
	return `
        <div class="gpth-checkbox">
            <input
                type="checkbox"
                id="${id}"
                class="gpth-checkbox__input"
                ${checked ? 'checked' : ''}
                ${disabled ? 'disabled' : ''}
                ${ariaLabel ? `aria-label="${ariaLabel}"` : ''}
                ${ariaLabelledby ? `aria-labelledby="${ariaLabelledby}"` : ''}
                ${dataType ? `data-type="${dataType}"` : ''}
            >
            <span class="gpth-checkbox__slider" aria-hidden="true"></span>
        </div>
    `
}
