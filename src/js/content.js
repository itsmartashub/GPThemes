import { init as initThemes } from './app/themeManager'
import { init as initFloating } from './app/floatingBtn'
import { init as initColors } from './app/mainColors'
import { init as initFonts } from './app/mainFonts'
import { init as initWidths } from './app/mainWidths'
import { init as initScrolldown } from './app/scrolldown'

initExtension()

function initExtension() {
	initThemes()
	initFloating()
	initColors()
	initFonts()
	initWidths()
	initScrolldown()
}
