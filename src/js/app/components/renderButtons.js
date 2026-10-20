export function renderButton({ className = 'gpth-btn-primary', id, content, disabled = false }) {
	return `
        <button id="${id}" class="${className}" ${disabled ? 'disabled' : ''}>
            ${content}
        </button>
	`
}
