// export function renderFont({ name, className, inputId, inputType, inputValue, inputPlaceholder }) {
// 	return `
//         <div class="${className} fonts__group text-xs mb-2 flex flex-col flex-1">
//             <label for="${inputId}" class="uppercase text-xs mb-1 font-semibold">${name} ${
// 		inputId === 'fontSize' ? '(<code class="text-xs">px</code>)' : ''
// 	}:</label>
//             <input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" class="bg-token-sidebar-surface-secondary rounded-lg outline-none border-none p-3">
//         </div>`
// }
export function renderFont({
	name,
	className,
	inputId,
	inputType,
	inputValue,
	inputPlaceholder,
	min = 0,
	max = 28,
	unit = 'px',
}) {
	// return `
	//     <div class="${className} fonts__group">
	//         <label for="${inputId}" class="rounded-full flex items-center gap-1 h-full">
	//             <input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" class="rounded-full outline-none border-none font-bold" minlength="${min}" maxlength="${max}">
	//             <div>
	//                 <p class="fonts__unit rounded-full flex items-center justify-center mb-1">pixels</p>
	//                 <p class="fonts__name uppercase font-semibold">${name}</p>
	//             </div>
	//         </label>
	//     </div>`

	return `
        <div class="${className} fonts__group cards--small">
            <label for="${inputId}" class="rounded-full flex items-center gap-2 h-full">
                <input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" class="rounded-full outline-none border-none font-bold" minlength="${min}" maxlength="${max}">
                <div>
                    <p class="fonts__unit rounded-full flex items-center justify-center mb-1 p-1">pixels</p>
                    <p class="fonts__name uppercase font-semibold">${name}</p>
                </div>
            </label>
        </div>`
}

export function renderButton({ name, className, id, content, disabled = false }) {
	return `
        <button id="${id}" class="btn block relative text-center ${className}" ${disabled ? 'disabled' : ''}>
            ${content}
        </button>`
}

export function renderFontBigCards({
	name,
	className,
	inputId,
	inputType,
	inputValue,
	inputPlaceholder,
	min = 0,
	max = 28,
	unit = 'px',
}) {
	return `
        <div class="${className} fonts__group cards--big">
            <label for="${inputId}" class="h-full">
                <div>
                    <p class="fonts__unit fonts__icon">PX</p>
                    <p class="fonts__name uppercase font-semibold">${name}</p>
                </div>
                <input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" class="outline-none border-none focus:outline-none focus:border-none font-bold" minlength="${min}" maxlength="${max}">
            </label>
        </div>`
}
