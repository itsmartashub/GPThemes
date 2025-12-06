import { icon_info, icon_warning, icon_danger, icon_success } from '../components/icons.js'

const ICON_MAP = {
	info: icon_info,
	warning: icon_warning,
	danger: icon_danger,
	success: icon_success,
}

export function renderInfo({ text, type = 'info', classNames = '', iconSvg }) {
	const icon = iconSvg ?? ICON_MAP[type]

	return `
		<div class="gpth-info ${classNames}" data-type="${type}">
		${icon}
			<p class="gpth-info__text">${text}</p>
		</div>`
}
