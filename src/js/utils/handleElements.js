// const $ = (s) => document.querySelector(s)
// const $$ = (s) => document.querySelectorAll(s)

const q = (s, root = document) => root.querySelector(s)
const qq = (s, root = document) => root.querySelectorAll(s)

const openElement = (selector, classname) => q(selector)?.classList.add(classname)
const closeElement = (selector, classname) => q(selector)?.classList.remove(classname)

const debounce = (fn, delay = 300) => {
	let id
	return (...args) => {
		clearTimeout(id)
		id = setTimeout(() => fn(...args), delay)
	}
}

export { closeElement, openElement, debounce, q, qq }
