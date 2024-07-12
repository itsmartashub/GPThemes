import { icon_lock } from './icons'

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
	isLocked = false,
}) {
	const lockIcon = isLocked ? icon_lock : ''

	// <label for="${inputId}" class="grid justify-center content-space-between p-2 gap-4 h-full w-full rounded-xl">

	return `
        <div class="card card--range ${isLocked ? 'is-locked' : ''}" data-gpth-err="${min}${unit} &hArr; ${max}${unit}">
            <label for="${inputId}" class="flex flex-col justify-center p-2 gap-4 h-full w-full rounded-xl">
                <div class="flex items-center gap-2 w-full">
                    <div class="card__output flex-none h-10 w-10 font-semibold rounded-full grid items-center justify-center" id="range-output-${inputId}">
                        100
                    </div>
                    <div class="card__unitname-wrapper grid">
                        <p class="card__unit rounded-full flex items-center justify-center mb-2 font-semibold" id="unit-${inputId}">${unit}</p>
                        <p class="card__name uppercase font-semibold w-full break-words">${name}</p>
                    </div>
                </div>

                <input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" class="outline-none border-none" minlength="${min}" maxlength="${max}">

            </label>
            ${lockIcon}
        </div>`
}

export { renderSwitchOption, renderSmallCardOption }
