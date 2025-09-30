// const $ = (s) => document.querySelector(s)
// const $$ = (s) => document.querySelectorAll(s)

const q = (s, root = document) => root.querySelector(s)
const qq = (s, root = document) => root.querySelectorAll(s)

const bind = (el, events) => el && Object.entries(events).forEach(([ev, fn]) => el.addEventListener(ev, fn))

const handleEnter = (fn) => (e) => {
	if (e.key === 'Enter') {
		e.preventDefault()
		fn(e)
		e.target.blur()
	}
}

const openElement = (selector, classname) => q(selector)?.classList.add(classname)
const closeElement = (selector, classname) => q(selector)?.classList.remove(classname)

const debounce = (fn, delay = 300) => {
	let timeoutId
	return (...args) => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => fn(...args), delay)
	}
}

export { closeElement, openElement, debounce, q, qq, bind, handleEnter }
