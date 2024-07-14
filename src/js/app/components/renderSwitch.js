import { icon_lock } from './icons'

function renderSwitchOption({ inputId, isChecked = false, icon, textTitle, textSubtitle }) {
	const sanitizedInputId = sanitizeString(inputId)
	const sanitizedTextTitle = sanitizeString(textTitle)
	const sanitizedTextSubtitle = sanitizeString(textSubtitle)

	return `
    <label class="gpth-switch" for="${sanitizedInputId}">
      <div class="gpth-switch__icon" aria-hidden="true">
        ${icon}
      </div>

      <div class="gpth-switch__text">
        <div class="title">${sanitizedTextTitle}</div>
        <div class="subtitle">${sanitizedTextSubtitle}</div>
      </div>

      <div class="gpth-switch__checkbox">
        <input 
          type="checkbox" 
          id="${sanitizedInputId}" 
          ${isChecked ? 'checked' : ''}
          aria-labelledby="${sanitizedInputId}-label"
        >
        <span class="slider" aria-hidden="true"></span>
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
	const sanitizedName = sanitizeString(name)
	const sanitizedInputId = sanitizeString(inputId)
	const sanitizedInputValue = sanitizeString(inputValue)
	const sanitizedInputPlaceholder = sanitizeString(inputPlaceholder)

	const lockIcon = isLocked ? icon_lock : ''

	return `
    <div 
      class="card card--range ${isLocked ? 'is-locked' : ''}" 
      data-gpth-err="${min}${inputPlaceholder === '100%' ? '%' : unit} &hArr; ${max}${
		inputPlaceholder === '100%' ? '%' : unit
	}"
    >
      <label 
        for="${sanitizedInputId}" 
        class="flex flex-col justify-center p-2 gap-4 h-full w-full rounded-xl"
      >
        <div class="flex items-center gap-2 w-full">
          <div 
            class="card__output flex-none h-10 w-10 font-semibold rounded-full grid items-center justify-center" 
            id="range-output-${sanitizedInputId}"
            aria-live="polite"
          >
            ${sanitizedInputValue}
          </div>
          <div class="card__unitname-wrapper grid">
            <p 
              class="card__unit rounded-full flex items-center justify-center mb-2 font-semibold" 
              id="unit-${sanitizedInputId}"
            >
              ${unit}
            </p>
            <p class="card__name uppercase font-semibold w-full break-words">
              ${sanitizedName}
            </p>
          </div>
        </div>

        <input 
          type="${inputType}" 
          id="${sanitizedInputId}" 
          value="${sanitizedInputValue}" 
          placeholder="${sanitizedInputPlaceholder}" 
          class="outline-none border-none" 
          min="${min}" 
          max="${max}"
          aria-valuemin="${min}"
          aria-valuemax="${max}"
          aria-valuenow="${sanitizedInputValue}"
          ${isLocked ? 'disabled' : ''}
        >
      </label>
      ${lockIcon}
    </div>`
}

function sanitizeString(str) {
	const div = document.createElement('div')
	div.textContent = str
	return div.innerHTML
}

export { renderSwitchOption, renderSmallCardOption }
