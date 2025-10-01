// Cache root element once
const rootEl = document.documentElement

export function getCssVar(varName, fallback = '') {
	const value = getComputedStyle(rootEl).getPropertyValue(varName)
	return value ? value.trim() : fallback
}
// Usage:
// const fontFamilyDefault = getCssVar('--fontFamilyDefault', 'Arial, sans-serif');
