const closeElement = (selector, classname) => document.querySelector(selector)?.classList.remove(classname)
const openElement = (selector, classname) => document.querySelector(selector)?.classList.add(classname)

const $ = (s) => document.querySelector(s)
// const $$ = (s) => document.querySelectorAll(s)

const debounce = (fn, delay = 300) => {
	let id
	return (...args) => {
		clearTimeout(id)
		id = setTimeout(() => fn(...args), delay)
	}
}

export { closeElement, openElement, debounce, $ }
