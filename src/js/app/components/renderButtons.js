export function renderButton({ name, className, id, content, disabled = false }) {
	return `
        <button id="${id}" class="btn block relative text-center ${className}" ${disabled ? 'disabled' : ''}>
            ${content}
        </button>
	`
}
