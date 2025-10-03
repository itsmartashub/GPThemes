// Minimal OKLCH/OKLCH(from ...) to hex converter for browser extension use

/**
 * Convert oklch() or oklch(from ...) CSS color to hex (best effort).
 * Returns "#RRGGBB" string, or undefined if unable to resolve.
 */
export function oklchFromToHex(cssString) {
	// Helper: Convert sRGB [0..1] to hex
	function rgbToHex([r, g, b]) {
		function fn(x) {
			x = Math.max(0, Math.min(1, x))
			return Math.round(x * 255)
				.toString(16)
				.padStart(2, '0')
		}
		return '#' + fn(r) + fn(g) + fn(b)
	}

	// Helper: Hex string to sRGB [0..1]
	function hexToRgb(hex) {
		hex = hex.replace(/^#/, '')
		if (hex.length === 3)
			hex = hex
				.split('')
				.map((x) => x + x)
				.join('')
		const num = parseInt(hex, 16)
		return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255]
	}

	// sRGB [0..1] to linear
	function srgbToLinear(x) {
		return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4)
	}
	function rgbToLinear([r, g, b]) {
		return [srgbToLinear(r), srgbToLinear(g), srgbToLinear(b)]
	}

	// Linear sRGB [0..1] to OKLab
	function rgbToOklab([r, g, b]) {
		r = srgbToLinear(r)
		g = srgbToLinear(g)
		b = srgbToLinear(b)
		let l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b
		let m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b
		let s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b
		l = Math.cbrt(l)
		m = Math.cbrt(m)
		s = Math.cbrt(s)
		return [
			0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
			1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
			0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
		]
	}

	// OKLab to OKLCH
	function oklabToOklch([L, a, b]) {
		const c = Math.sqrt(a * a + b * b)
		let h = (Math.atan2(b, a) * 180) / Math.PI
		if (h < 0) h += 360
		return [L, c, h]
	}

	// OKLCH to OKLab
	function oklchToOklab([L, C, H]) {
		const hRad = (H * Math.PI) / 180
		return [L, C * Math.cos(hRad), C * Math.sin(hRad)]
	}

	// OKLab to linear sRGB
	function oklabToLinearRgb([L, a, b]) {
		const l = Math.pow(L + 0.3963377774 * a + 0.2158037573 * b, 3)
		const m = Math.pow(L - 0.1055613458 * a - 0.0638541728 * b, 3)
		const s = Math.pow(L - 0.0894841775 * a - 1.291485548 * b, 3)
		return [
			+4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
			-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
			-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
		]
	}

	// Linear sRGB to sRGB
	function linearToSrgb(x) {
		return x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055
	}
	function linearRgbToSrgb([r, g, b]) {
		return [linearToSrgb(r), linearToSrgb(g), linearToSrgb(b)]
	}

	// -------- Main Parsing Logic --------

	// 1. oklch(from ...) syntax
	let m = cssString.match(/oklch\s*\(\s*from\s+([#a-fA-F0-9]{3,8})\s+([^\s)]+)\s+([^\s)]+)\s+([^\s)]+)\s*\)/i)
	if (m) {
		const [, baseHex, lStr, cStr, hStr] = m
		// Convert baseHex to OKLCH
		const rgb = hexToRgb(baseHex)
		const oklab = rgbToOklab(rgb)
		const oklch = oklabToOklch(oklab)

		// Evaluate channel expressions (support l c h and basic calc)
		function evalChannel(expr, ch) {
			if (/^calc\((.+)\)$/i.test(expr)) {
				let jsExpr = RegExp.$1.replace(/\bl\b/g, ch.l).replace(/\bc\b/g, ch.c).replace(/\bh\b/g, ch.h)
				try {
					// Safe eval: only numbers, math, and . allowed
					if (!/[^-+*/().\d\s]/.test(jsExpr)) {
						return Function('"use strict";return (' + jsExpr + ')')()
					}
				} catch (e) {}
				return ch[expr] || parseFloat(expr)
			}
			if (expr === 'l') return ch.l
			if (expr === 'c') return ch.c
			if (expr === 'h') return ch.h
			return parseFloat(expr)
		}
		const ch = { l: oklch[0], c: oklch[1], h: oklch[2] }
		const l = evalChannel(lStr, ch)
		const c = evalChannel(cStr, ch)
		const h = evalChannel(hStr, ch)

		// Convert OKLCH to hex
		const oklab2 = oklchToOklab([l, c, h])
		const rgb2 = oklabToLinearRgb(oklab2)
		const srgb2 = linearRgbToSrgb(rgb2)
		return rgbToHex(srgb2)
	}

	// 2. Plain oklch(l c h)
	m = cssString.match(/oklch\s*\(\s*([\d.]+%?)\s+([\d.]+)\s+([\d.]+)(deg)?\s*\)/i)
	if (m) {
		let l = m[1].includes('%') ? parseFloat(m[1]) / 100 : parseFloat(m[1])
		let c = parseFloat(m[2])
		let h = parseFloat(m[3])
		// Convert OKLCH to hex
		const oklab = oklchToOklab([l, c, h])
		const rgb = oklabToLinearRgb(oklab)
		const srgb = linearRgbToSrgb(rgb)
		return rgbToHex(srgb)
	}

	// 3. Hex color (just return normalized)
	m = cssString.match(/#([a-fA-F0-9]{3,8})/)
	if (m) {
		return '#' + m[1].toLowerCase()
	}

	// 4. rgb() - try to parse and convert to hex
	m = cssString.match(/rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)/i)
	if (m) {
		const [, r, g, b] = m
		return rgbToHex([+r / 255, +g / 255, +b / 255])
	}

	// 5. Fallback: try getComputedStyle if running in browser and the string is a CSS var
	if (typeof window !== 'undefined' && /^var\(.+\)$/.test(cssString)) {
		const el = document.createElement('div')
		el.style.display = 'none'
		el.style.color = cssString
		document.body.appendChild(el)
		const computed = getComputedStyle(el).color
		el.remove()
		// Try to parse computed rgb string
		const m2 = computed.match(/rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)/i)
		if (m2) {
			return rgbToHex([+m2[1] / 255, +m2[2] / 255, +m2[3] / 255])
		}
		return computed
	}

	// 6. If all else fails, return undefined (or you can return original string)
	return undefined
}
