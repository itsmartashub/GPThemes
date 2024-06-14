function renderSwitchOption({ inputId, isChecked = false, icon, textTitle, textSubtitle }) {
	return `
        <label class="gpth-switch" for="${inputId}">
            <div class="gpth-switch__icon">
                ${icon}
            </div>

            <div class="gpth-switch__text">
                <div class="title">${textTitle}</div>
                <div class="subtitle">${textSubtitle}</div>
            </div>

            <div class="gpth-switch__checkbox">
                <input type="checkbox" id="${inputId}" ${isChecked ? 'checked' : ''}>
                <span class="slider"></span>
            </div>
        </label>`
}

function renderSmallCardOption({
	name,
	inputId,
	inputType,
	inputValue,
	inputPlaceholder,
	min = 10,
	max = 100,
	unit = '%',
}) {
	return `
        <div class="card card--range" data-gpth-err="${min}${unit} &hArr; ${max}${unit}">
            <label for="${inputId}" class="grid justify-center content-space-between p-2 gap-2 h-full w-full rounded-xl">
                <div class="flex items-center gap-2 w-full">
                    <div class="card__output font-semibold p-1 rounded-full grid items-center justify-center">
                        100
                    </div>
                    <div class="card__unitname-wrapper w-full grid">
                        <p class="card__unit rounded-full flex items-center justify-center mb-1 font-semibold">${
							unit === '%' ? '%' : 'pixels'
						}</p>
                        <p class="card__name uppercase font-semibold">${name}</p>
                    </div>
                </div>

                <input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" class="outline-none border-none" minlength="${min}" maxlength="${max}">
            </label>
        </div>`
}

export { renderSwitchOption, renderSmallCardOption }
