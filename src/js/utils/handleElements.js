const $ = (s) => document.querySelector(s)
const $$ = (s) => document.querySelectorAll(s)

const openElement = (selector, classname) => $(selector)?.classList.add(classname)
const closeElement = (selector, classname) => $(selector)?.classList.remove(classname)

const debounce = (fn, delay = 300) => {
	let id
	return (...args) => {
		clearTimeout(id)
		id = setTimeout(() => fn(...args), delay)
	}
}

export { closeElement, openElement, debounce, $, $$ }
