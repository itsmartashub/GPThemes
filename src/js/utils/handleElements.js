function closeElement(selector, classname) {
	document.querySelector(selector)?.classList.remove(classname)
}
function openElement(selector, classname) {
	document.querySelector(selector)?.classList.add(classname)
}

export { closeElement, openElement }
