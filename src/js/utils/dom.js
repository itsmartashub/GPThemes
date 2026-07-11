export const $ = (s, root = document) => root.querySelector(s)
export const $$ = (s, root = document) => root.querySelectorAll(s)

export const ROOT_HTML = new Proxy({}, {
	get(target, prop) {
		const root = document.documentElement
		if (!root) return undefined
		const val = root[prop]
		return typeof val === 'function' ? val.bind(root) : val
	},
	set(target, prop, value) {
		const root = document.documentElement
		if (root) {
			root[prop] = value
			return true
		}
		return false
	}
})

export const ROOT_STYLE = new Proxy({}, {
	get(target, prop) {
		const root = document.documentElement
		if (!root) return undefined
		const val = root.style[prop]
		return typeof val === 'function' ? val.bind(root.style) : val
	},
	set(target, prop, value) {
		const root = document.documentElement
		if (root) {
			root.style[prop] = value
			return true
		}
		return false
	}
})

// Helper to ensure the CSS var name starts with '--'
const formatVarName = (name) => (name.startsWith('--') ? name : `--${name}`)

export const getVar = (varName, fallback = '') => {
	// Note: getComputedStyle requires the full '--' name
	const root = document.documentElement
	if (!root) return fallback
	const fullVarName = formatVarName(varName)
	const value = getComputedStyle(root).getPropertyValue(fullVarName)
	return value ? value.trim() : fallback
}

// All setters now accept names *with or without* the '--' prefix.
export const setVar = (varName, value) => ROOT_STYLE.setProperty(formatVarName(varName), value)
export const removeVar = (varName) => ROOT_STYLE.removeProperty(formatVarName(varName))

export const getVars = (varNames) => {
	const values = {}
	// Iterates over the list of requested names
	varNames.forEach((name) => {
		const fullVarName = formatVarName(name)
		// Use the existing getVar to retrieve the value
		values[fullVarName] = getVar(name)
	})

	return values
}
export function setVars(vars) {
	for (const name in vars) {
		if (Object.hasOwn(vars, name)) ROOT_STYLE.setProperty(formatVarName(name), vars[name])
	}
}
export const removeVars = (varNames) => {
	varNames.forEach((name) => {
		removeVar(name)
	})
}
export const bind = (el, events) =>
	el &&
	Object.entries(events).forEach(([ev, fn]) => {
		el.addEventListener(ev, fn)
	})

export const openElement = (selector, classname) => $(selector)?.classList.add(classname)
export const closeElement = (selector, classname) => $(selector)?.classList.remove(classname)

export const debounce = (fn, delay = 300) => {
	let timeoutId
	return (...args) => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => fn(...args), delay)
	}
}
export const rafThrottle = (fn) => {
	let rafId = null
	const throttled = (...args) => {
		if (rafId !== null) return
		rafId = requestAnimationFrame(() => {
			rafId = null
			fn(...args)
		})
	}
	throttled.cancel = () => {
		if (rafId === null) return
		cancelAnimationFrame(rafId)
		rafId = null
	}
	return throttled
}

export const onEnter = (fn) => (e) => {
	if (e.key === 'Enter') {
		e.preventDefault()
		fn(e)
		e.target.blur()
	}
}
