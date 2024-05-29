export function renderFont({ name, className, inputId, inputType, inputValue, inputPlaceholder }) {
	return `
        <div class="${className} text-xs mb-2 flex flex-col flex-1">
            <label for="${inputId}" class="uppercase text-xs mb-1 font-semibold">${name} ${
		inputId === 'fontSize' ? '(<code class="text-xs">px</code>)' : ''
	}:</label>
            <input type="${inputType}" id="${inputId}" value="${inputValue}" placeholder="${inputPlaceholder}" class="bg-token-sidebar-surface-secondary rounded-lg outline-none border-none p-3">
        </div>`
}

export function renderButton({ name, className, id, content, disabled = false }) {
	return `
        <button id="${id}" class="btn block relative text-center ${className}" ${disabled ? 'disabled' : ''}>
            ${content}
        </button>`
}
