// const $ = (s) => document.querySelector(s)
// const $$ = (s) => document.querySelectorAll(s)

const $ = (s, root = document) => root.querySelector(s)
const $$ = (s, root = document) => root.querySelectorAll(s)

const ROOT_DOC = document.documentElement
const ROOT_STYLE = ROOT_DOC.style

const getVar = (varName, fallback = '') => {
	const value = getComputedStyle(ROOT_DOC).getPropertyValue(varName)
	return value ? value.trim() : fallback
}

const setVar = (varName, value) => ROOT_STYLE.setProperty(varName, value)

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
	setVar,
	getVar,
	ROOT_STYLE,
	ROOT_DOC,
}
