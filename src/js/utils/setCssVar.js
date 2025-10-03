// Put this code somewhere in your app
let rafId = null
const pendingVars = {}

function setCssVars(vars) {
	// console.log('[🎨GPThemes]: setCssVars', vars)

	Object.entries(vars).forEach(([key, value]) => {
		pendingVars[key] = value
	})

	if (!rafId) {
		rafId = requestAnimationFrame(() => {
			const rootStyle = document.documentElement.style
			Object.entries(pendingVars).forEach(([key, value]) => {
				rootStyle.setProperty(`--${key}`, value)
			})
			Object.keys(pendingVars).forEach((key) => delete pendingVars[key])
			rafId = null
		})
	}
}

export { setCssVars }
