export function renderFontSmallCard({
	name,
	className,
	inputId,
	inputType,
	inputValue,
	inputPlaceholder,
	min = 16,
	max = 24,
	unit = 'px',
}) {
	return `
        <div class="${className} card card--small" data-gpth-err="${min}${unit} &hArr; ${max}${unit}">
            <label for="${inputId}">
                <input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" minlength="${min}" maxlength="${max}">

                <div class="card__unitname-wrapper">
                    <p class="card__unit">pixels</p>
                    <p class="card__name">${name}</p>
                </div>
            </label>
        </div>`
}

export function renderFontBigCard({
	name,
	className,
	inputId,
	inputType,
	inputValue,
	inputPlaceholder,
	min = 0,
	max = 20,
	unit = 'px',
}) {
	return `
        <div class="${className} fonts__group card card--big" data-gpth-err="${min}${unit} &hArr; ${max}${unit}">
            <label for="${inputId}">
                <div class="card__unitname-wrapper">
                    <p class="card__unit card__icon">PX</p>
                    <p class="card__name">${name}</p>
                </div>

                <input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" minlength="${min}" maxlength="${max}">
            </label>
        </div>`
}
