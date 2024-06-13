function renderSwitchOption({ inputId, isChecked = false, icon, textTitle, textSubtitle }) {
	return `
        <label class="gpth-switch" for="${inputId}">
            <div class="gpth-switch__icon">
                <i class="material-icons">${icon}</i>
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

export { renderSwitchOption }
