createAndAppendSVGStickyBtn()

function createAndAppendSVGStickyBtn() {
	const gpthFloatingBtn = document.createElement('div')
	gpthFloatingBtn.id = 'gpthCustomizerBtn'
	gpthFloatingBtn.className = 'gpth__svg'

	gpthFloatingBtn.innerHTML = `
        <div class="gpth__svg-icon">🎨</div>
        <div class="gpth__options">
            <div class="gpth__themes">
                <h5>THEMES</h5>
                <div class="gpth__themes-btns">
                    <button id="light" data-gpth-theme="light">☀️</button>
                    <button id="dark" data-gpth-theme="dark">🌙</button>
                    <button id="oled" data-gpth-theme="black">🌖</button>
                </div>
            </div>
        </div>
    `

	document.body.appendChild(gpthFloatingBtn)
}
