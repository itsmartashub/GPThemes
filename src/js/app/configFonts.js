const DEFAULTS = {
	fontFamily: getComputedStyle(document.documentElement).getPropertyValue('--f-family-default'),
	fontSize: 16,
	letterSpacing: 0,
	lineHeight: 28,
}

const FONT_NAMES = [
	'Default',
	'Inter',
	'Roboto',
	'Roboto Mono',
	'DM Sans',
	'Reddit Mono',
	'Poppins',
	'Noto Sans',
	'Monospace',
	'Lato',
	'Quicksand',
	'Outfit',
]

const GOOGLE_FONT_WEIGHTS = `:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900`

module.exports = {
	DEFAULTS,
	FONT_NAMES,
	GOOGLE_FONT_WEIGHTS,
}
