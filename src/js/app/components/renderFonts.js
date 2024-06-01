export function renderFont({
	name,
	className,
	inputId,
	inputType,
	inputValue,
	inputPlaceholder,
	min = 0,
	max = 24,
	unit = 'px',
}) {
	return `
        <div class="${className} card card--small">
            <label for="${inputId}" class="rounded-full flex items-center gap-2 h-full w-full">
                <input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" class="rounded-full outline-none border-none font-bold" minlength="${min}" maxlength="${max}">

                <div class="card__unitname-wrapper">
                    <p class="card__unit rounded-full flex items-center justify-center">pixels</p>
                    <p class="card__name uppercase font-semibold">${name}</p>
                </div>
            </label>
        </div>`
}

export function renderFontBigCards({
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
        <div class="${className} fonts__group card card--big h-full">
            <label for="${inputId}" class="grid gap-1 h-full w-full">
                <div>
                    <p class="card__unit card__icon">PX</p>
                    <p class="card__name uppercase font-semibold">${name}</p>
                </div>

                <input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" class="outline-none border-none focus:outline-none focus:border-none font-bold" minlength="${min}" maxlength="${max}">
            </label>
        </div>`
}

export function renderButton({ name, className, id, content, disabled = false }) {
	return `
        <button id="${id}" class="btn block relative text-center ${className}" ${disabled ? 'disabled' : ''}>
            ${content}
        </button>
	`
}
