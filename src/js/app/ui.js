function fillCanvas() {
	const canvases = document.querySelectorAll('.lk-room-container canvas')

	canvases.forEach((canvas) => {
		console.log(canvas)

		// if (!canvas) return

		const ctx = canvas.getContext('2d')

		if (ctx) {
			// console.log(ctx)
			console.log(ctx.getImageData(0, 0, canvas.width, canvas.height))
			// ctx.fillStyle = 'red'
			// ctx.fill()
		}
	})
}

function initCanvasObserver() {
	// Observer to detect when canvas elements are added
	const targetNode = document.body

	const config = {
		childList: true,
		subtree: true,
	}

	const observerCallback = (mutationsList, observer) => {
		const canvases = document.querySelectorAll('.lk-room-container canvas')

		if (canvases.length > 0) {
			fillCanvas() // Call your function
			// observer.disconnect() // Stop observing if canvases are found
		}
	}

	const observer = new MutationObserver(observerCallback)
	observer.observe(targetNode, config)
}

export { initCanvasObserver }
