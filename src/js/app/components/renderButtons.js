export function renderButton({ className, id, content, disabled = false }) {
	return `
        <button id="${id}" class="btn m-auto w-2/3 text-center ${className}" ${disabled ? 'disabled' : ''}>
            ${content}
        </button>
	`
}
