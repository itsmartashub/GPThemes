// Import the `setTheme` function from the extension's main JavaScript file (e.g., background.js)
import { setTheme } from './background.js' // Adjust the path as needed

// Get references to the theme buttons
const lightThemeButton = document.getElementById('light-theme-button')
const darkThemeButton = document.getElementById('dark-theme-button')
const amoledThemeButton = document.getElementById('amoled-theme-button')

// Attach click event listeners to the buttons
lightThemeButton.addEventListener('click', () => setTheme('light'))
darkThemeButton.addEventListener('click', () => setTheme('dark'))
amoledThemeButton.addEventListener('click', () => setTheme('amoled'))
