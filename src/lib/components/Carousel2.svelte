<script lang="ts">
	import { onMount, onDestroy } from "svelte"
	import * as THREE from "three"
    import { browser } from "$app/environment"
	import { CSS3DRenderer, CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js"
	import gsap from "gsap"

	// ─── Props ────────────────────────────────────────────────────────────────────
	let images: string[] = [
		"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
		"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600",
		"https://images.unsplash.com/photo-1682695794816-b6f1d4b9a6b4?w=900",
		"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700",
		"https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800",
		"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600",
	]

	/** Card height in CSS pixels (all cards share this height; width is auto from image) */
	let cardHeightPx: number = 280
	/** Ring radius in CSS3D units (px-scale world units) */
	let radius: number = 1100
	/** Auto-rotate speed in radians/sec; 0 to disable */
	let autoRotateSpeed: number = 0.18
	/** Drag sensitivity: radians per pixel dragged */
	let dragSensitivity: number = 0.0022
	/** Max skew angle in degrees at the screen edges */
	let maxSkewDeg: number = 18
	/** Angular gap between cards (radians) */
	let angularGap: number = 0.06

	// ─── Internal ─────────────────────────────────────────────────────────────────
	const MIN_ITEMS = 8

	let container: HTMLDivElement
	let cssRenderer: CSS3DRenderer
	let scene: THREE.Scene
	let camera: THREE.PerspectiveCamera

	// Each entry in the ring
	type Card = {
		object: CSS3DObject
		img: HTMLImageElement
		baseAngle: number // fixed slot angle on ring (radians)
	}
	let cards: Card[] = []

	let ringAngle = 0 // current rotation of the whole ring (Y axis, radians)
	let targetAngle = 0

	let rafId: number
	let lastTime = 0

	// Drag state
	let isDragging = false
	let pointerStartX = 0
	let angleAtDragStart = 0
	let autoRotatePaused = false
	let resumeTimer: ReturnType<typeof setTimeout>

	// ─── Helpers ──────────────────────────────────────────────────────────────────
	function fillImages(srcs: string[]): string[] {
		if (!srcs.length) return []
		const result = [...srcs]
		while (result.length < MIN_ITEMS) result.push(...srcs)
		return result
	}

	/** Wait for an image to load and return its natural dimensions */
	function loadImage(src: string): Promise<HTMLImageElement> {
		return new Promise((resolve) => {
			const img = new Image()
			img.crossOrigin = "anonymous"
			img.onload = () => resolve(img)
			img.onerror = () => resolve(img) // resolve anyway, will just be broken
			img.src = src
		})
	}

	// ─── Build scene ─────────────────────────────────────────────────────────────
	async function init() {
		const W = container.clientWidth
		const H = container.clientHeight

		// Scene & camera
		scene = new THREE.Scene()
		camera = new THREE.PerspectiveCamera(60, W / H, 1, 10000)
		camera.position.set(0, 0, 0)

		// CSS3D renderer
		cssRenderer = new CSS3DRenderer()
		cssRenderer.setSize(W, H)
		// The renderer creates a div; slot it into our container
		const rendererEl = cssRenderer.domElement
		rendererEl.style.position = "absolute"
		rendererEl.style.inset = "0"
		container.appendChild(rendererEl)

		// Load images to get natural sizes
		const srcs = fillImages(images)
		const loadedImgs = await Promise.all(srcs.map(loadImage))

		// Compute card angular widths based on real aspect ratios
		const cardAngles: number[] = loadedImgs.map((img) => {
			const aspect =
				img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 1
			const w = cardHeightPx * aspect
			// Arc angle this card occupies at the given radius
			return 2 * Math.atan2(w / 2, radius) + angularGap
		})

		const totalArc = cardAngles.reduce((a, b) => a + b, 0)
		// Scale radius so cards fill the ring exactly
		const effectiveRadius = (totalArc / (2 * Math.PI)) * radius

		// Place cards
		let cursor = 0
		for (let i = 0; i < srcs.length; i++) {
			const img = loadedImgs[i]
			const aspect =
				img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 1
			const w = cardHeightPx * aspect
			const slotAngle = cursor + cardAngles[i] / 2
			cursor += cardAngles[i]

			// Build DOM element
			const el = document.createElement("div")
			el.style.cssText = `
        width: ${w}px;
        height: ${cardHeightPx}px;
        overflow: hidden;
        border-radius: 6px;
        box-shadow: 0 8px 40px rgba(0,0,0,0.5);
        will-change: transform;
        backface-visibility: hidden;
      `

			const imgEl = document.createElement("img")
			imgEl.src = srcs[i]
			imgEl.crossOrigin = "anonymous"
			imgEl.draggable = false
			imgEl.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        pointer-events: none;
        user-select: none;
      `
			el.appendChild(imgEl)

			const cssObj = new CSS3DObject(el)
			scene.add(cssObj)

			cards.push({ object: cssObj, img: imgEl, baseAngle: slotAngle })

			// Position immediately for first frame
			updateCard(cards[cards.length - 1], effectiveRadius, 0)
		}

		// Store effective radius for tick
		;(scene as any).__radius = effectiveRadius

		lastTime = performance.now()
		tick()
	}

	// ─── Update a single card's 3D position + CSS skew ────────────────────────────
	function updateCard(card: Card, r: number, ringRot: number) {
		const angle = card.baseAngle + ringRot

		// World position on the ring
		const x = Math.sin(angle) * r
		const z = -Math.cos(angle) * r

		card.object.position.set(x, 0, z)
		// Face inward (toward camera at origin)
		card.object.rotation.y = -angle

		// ── Visibility & skew ──────────────────────────────────────────────────────
		// cosAngle: 1 = directly in front of camera, -1 = directly behind
		const cosA = Math.cos(angle)
		// sinAngle: side offset (-1 left, 0 center, +1 right)
		const sinA = Math.sin(angle)

		const el = card.object.element as HTMLDivElement

		if (cosA < 0.05) {
			// Behind camera — hide completely
			el.style.opacity = "0"
			el.style.pointerEvents = "none"
			return
		}

		// Fade at the edges (smooth step between cosA 0.15 → 0.45)
		const fade = Math.min(1, Math.max(0, (cosA - 0.15) / 0.3))
		el.style.opacity = String(fade)

		// Skew: proportional to how far to the side the card is.
		// sinA ≈ 0 at front center, ±1 at 90°.
		// We want the skew to lean away from center, so skewY = -sinA * max
		const skewDeg = -sinA * maxSkewDeg * (1 - cosA * 0.4)
		el.style.transform = `skewY(${skewDeg.toFixed(2)}deg)`
	}

	// ─── Render loop ──────────────────────────────────────────────────────────────
	function tick() {
		rafId = requestAnimationFrame(tick)
		const now = performance.now()
		const dt = Math.min((now - lastTime) / 1000, 0.05) // cap dt
		lastTime = now

		const r = ((scene as any).__radius as number) ?? radius

		if (!isDragging) {
			if (!autoRotatePaused && autoRotateSpeed !== 0) {
				// Auto-rotate: advance target directly
				targetAngle += autoRotateSpeed * dt
				ringAngle = targetAngle
			} else {
				// Ease toward target after drag release
				ringAngle += (targetAngle - ringAngle) * Math.min(1, dt * 7)
			}
		}

		for (const card of cards) {
			updateCard(card, r, ringAngle)
		}

		cssRenderer.render(scene, camera)
	}

	// ─── Resize ───────────────────────────────────────────────────────────────────
	function onResize() {
		if (!cssRenderer || !camera) return
		const W = container.clientWidth
		const H = container.clientHeight
		cssRenderer.setSize(W, H)
		camera.aspect = W / H
		camera.updateProjectionMatrix()
	}

	// ─── Pointer drag ─────────────────────────────────────────────────────────────
	function onPointerDown(e: PointerEvent) {
		isDragging = true
		autoRotatePaused = true
		clearTimeout(resumeTimer)
		pointerStartX = e.clientX
		angleAtDragStart = targetAngle
		container.setPointerCapture(e.pointerId)
	}

	function onPointerMove(e: PointerEvent) {
		if (!isDragging) return
		const dx = e.clientX - pointerStartX
		targetAngle = angleAtDragStart - dx * dragSensitivity
		ringAngle = targetAngle // immediate during drag
	}

	function onPointerUp() {
		if (!isDragging) return
		isDragging = false
		clearTimeout(resumeTimer)
		resumeTimer = setTimeout(() => {
			autoRotatePaused = false
		}, 2200)
	}

	// ─── Lifecycle ────────────────────────────────────────────────────────────────
	onMount(() => {
		init()
		window.addEventListener("resize", onResize)
	})

	onDestroy(() => {
        if (browser) {
            cancelAnimationFrame(rafId)
			window.removeEventListener("resize", onResize)
		}
		clearTimeout(resumeTimer)
		cssRenderer?.domElement.remove()
	})
</script>

<div
	bind:this={container}
	class="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none full-width h-screen"
	style="perspective: 1200px;"
	onpointerdown={onPointerDown}
	onpointermove={onPointerMove}
	onpointerup={onPointerUp}
	onpointercancel={onPointerUp}
	role="region"
	aria-label="Image carousel — drag or scroll to browse">
	<!-- CSS3DRenderer mounts its div inside here -->

	<!-- Vignette: darkens left/right edges so cards fade out naturally -->
	<div
		class="pointer-events-none absolute inset-0 z-10"
		style="background: linear-gradient(to right, rgba(0,0,0,0.75) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.75) 100%);">
	</div>

	<!-- Drag hint -->
	<p
		class="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-white/25 text-xs tracking-widest uppercase">
		drag · scroll
	</p>
</div>
