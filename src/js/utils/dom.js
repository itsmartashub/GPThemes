const $ = (s, root = document) => root.querySelector(s)
const $$ = (s, root = document) => root.querySelectorAll(s)

const ROOT_DOC = document.documentElement
const ROOT_STYLE = ROOT_DOC.style

// Helper to ensure the CSS variable name starts with '--'
const formatVarName = (name) => (name.startsWith('--') ? name : `--${name}`)

const getVar = (varName, fallback = '') => {
	// Note: getComputedStyle requires the full '--' name
	const fullVarName = formatVarName(varName)
	const value = getComputedStyle(ROOT_DOC).getPropertyValue(fullVarName)
	return value ? value.trim() : fallback
}

// All setters now accept names *with or without* the '--' prefix.
const setVar = (varName, value) => ROOT_STYLE.setProperty(formatVarName(varName), value)
const removeVar = (varName) => ROOT_STYLE.removeProperty(formatVarName(varName))

const getVars = (varNames) => {
	const values = {}
	// Iterates over the list of requested names
	varNames.forEach((name) => {
		const fullVarName = formatVarName(name)
		// Use the existing getVar to retrieve the value
		values[fullVarName] = getVar(name)
	})

	return values
}
function setVars(vars) {
	for (const name in vars) {
		if (Object.hasOwn(vars, name)) ROOT_STYLE.setProperty(formatVarName(name), vars[name])
	}
}
const removeVars = (varNames) => {
	varNames.forEach((name) => {
		removeVar(name)
	})
}
const bind = (el, events) => el && Object.entries(events).forEach(([ev, fn]) => el.addEventListener(ev, fn))

const handleEnter = (fn) => (e) => {
	if (e.key === 'Enter') {
		e.preventDefault()
		fn(e)
		e.target.blur()
	}
}

const openElement = (selector, classname) => $(selector)?.classList.add(classname)
const closeElement = (selector, classname) => $(selector)?.classList.remove(classname)

const debounce = (fn, delay = 300) => {
	let timeoutId
	return (...args) => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => fn(...args), delay)
	}
}
const rafThrottle = (fn) => {
	let rafId = null
	return (...args) => {
		if (rafId) return
		rafId = requestAnimationFrame(() => {
			fn(...args)
			rafId = null
		})
	}
}

export {
	closeElement,
	openElement,
	debounce,
	$,
	$$,
	bind,
	handleEnter,
	rafThrottle,
	ROOT_STYLE,
	ROOT_DOC,
	getVars,
	getVar,
	setVar,
	removeVar,
	setVars,
	removeVars,
}
