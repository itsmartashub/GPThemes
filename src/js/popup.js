import styles from '../sass/index.scss'

// Function to update CSS variables and theme class based on selected theme
function setTheme(theme) {
	const root = document.documentElement

	// Reset variables for all themes
	root.style.setProperty('--accent-hsl', '')
	root.style.setProperty('--txt-hsl', '')
	root.style.setProperty('--surface-hsl', '')
	root.style.setProperty('--danger-hsl', '')

	// Update variables for the selected theme
	switch (theme) {
		case 'light':
			root.style.setProperty('--accent-hsl', '250 99% 65%')
			root.style.setProperty('--txt-hsl', '0 0% 0%')
			root.style.setProperty('--surface-hsl', '0 0% 85%')
			root.style.setProperty('--danger-hsl', '346 51% 45%')
			root.classList.remove('dark', 'amoled')
			root.classList.add('light')
			break
		case 'dark':
			root.style.setProperty('--accent-hsl', '272 93% 78%')
			root.style.setProperty('--txt-hsl', '255 86% 92%')
			root.style.setProperty('--surface-hsl', '249 19% 13%')
			root.style.setProperty('--danger-hsl', '356 77% 76%')
			root.classList.remove('light', 'amoled')
			root.classList.add('dark')
			break
		case 'amoled':
			// Define AMOLED-specific variables here
			root.classList.remove('light', 'dark')
			root.classList.add('amoled')
			break
		default:
			console.error('Invalid theme:', theme)
	}
}

// Example usage: Create a button for each theme and attach a click event listener
const lightThemeButton = document.getElementById('light-theme-button')
const darkThemeButton = document.getElementById('dark-theme-button')
const amoledThemeButton = document.getElementById('amoled-theme-button')

lightThemeButton.addEventListener('click', () => setTheme('light'))
darkThemeButton.addEventListener('click', () => setTheme('dark'))
amoledThemeButton.addEventListener('click', () => setTheme('amoled'))

// Set the initial theme (optional)
setTheme('light') // Or setTheme('dark') or setTheme('amoled')
