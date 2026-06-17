<script lang="ts">
	import { onMount, onDestroy } from "svelte"
	import { browser } from "$app/environment"
	import * as THREE from "three"
	import gsap from "gsap"

	// ─── Props ───────────────────────────────────────────────────────────────────
	let images: string[] = $state([
		"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
		"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600",
		"https://images.unsplash.com/photo-1682695794816-b6f1d4b9a6b4?w=900",
		"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700",
		"https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800",
		"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600",
	])

	// Height of each card in Three.js world units
	let cardHeight: number = $state(2.4)
	// Gap between cards in radians (extra angular padding)
	let angularGap: number = $state(0.08)
	// Radius of the ring
	let radius: number = $state(7)
	// How quickly carousel auto-rotates (radians/sec); 0 to disable
	let autoRotateSpeed: number = $state(0.18)
	// Drag sensitivity
	let dragSensitivity: number = $state(0.006)

	// ─── Internal state ───────────────────────────────────────────────────────────
	let container: HTMLDivElement
	let renderer: THREE.WebGLRenderer
	let scene: THREE.Scene
	let camera: THREE.PerspectiveCamera
	let animFrameId: number
	let planes: THREE.Mesh[] = []
	let ringRotation = 0 // current ring Y rotation (radians)
	let targetRotation = 0 // where we're GSAP-ing to
	let isDragging = false
	let dragStartX = 0
	let dragStartRotation = 0
	let autoRotatePaused = false
	let pauseTimeout: ReturnType<typeof setTimeout>

	// Minimum number of images to avoid gaps in the ring
	const MIN_IMAGES = 8

	// ─── Skew shader ─────────────────────────────────────────────────────────────
	// skewFactor: -1 (far left) → 0 (center) → 1 (far right)
	// We skew UVs horizontally so edges warp as they slide to screen edges.
	const vertexShader = /* glsl */ `
    varying vec2 vUv;
    uniform float skewFactor;   // -1 … 1
    uniform float skewStrength; // max skew amount in UV space

    void main() {
      vUv = uv;

      // Skew: shift x position based on y and skewFactor
      vec3 pos = position;
      pos.x += pos.y * skewFactor * skewStrength;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `

	const fragmentShader = /* glsl */ `
    varying vec2 vUv;
    uniform sampler2D map;
    uniform float alpha;        // fade at edges
    uniform float skewFactor;
    uniform float skewStrength;

    void main() {
      // Compensate UV for the skew so texture doesn't stretch
      vec2 uv = vUv;
      uv.x -= (uv.y - 0.5) * skewFactor * skewStrength;

      // Clamp UV so we don't sample outside the texture
      uv = clamp(uv, 0.0, 1.0);

      vec4 tex = texture2D(map, uv);
      gl_FragColor = vec4(tex.rgb, tex.a * alpha);
    }
  `

	// ─── Helpers ─────────────────────────────────────────────────────────────────
	function ensureMinImages(srcs: string[]): string[] {
		if (srcs.length === 0) return []
		let result = [...srcs]
		while (result.length < MIN_IMAGES) {
			result = [...result, ...srcs]
		}
		return result
	}

	function loadTexture(src: string): Promise<THREE.Texture> {
		return new Promise((resolve, reject) => {
			new THREE.TextureLoader().load(
				src,
				(tex) => {
					tex.colorSpace = THREE.SRGBColorSpace
					resolve(tex)
				},
				undefined,
				reject,
			)
		})
	}

	// Given a texture, compute card width preserving aspect ratio at fixed cardHeight
	function cardWidth(tex: THREE.Texture): number {
		const img = tex.image as HTMLImageElement
		if (!img || !img.naturalWidth) return cardHeight // fallback square
		return (img.naturalWidth / img.naturalHeight) * cardHeight
	}

	// ─── Three.js setup ───────────────────────────────────────────────────────────
	async function init() {
		const W = container.clientWidth
		const H = container.clientHeight

		// Renderer
		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
		renderer.setSize(W, H)
		renderer.setClearColor(0x000000, 0)
		container.appendChild(renderer.domElement)

		// Scene
		scene = new THREE.Scene()

		// Camera — looks down -Z; we rotate the ring around Y
		camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 100)
		camera.position.set(0, 0, 0)
		camera.lookAt(0, 0, -1)

		// Load textures
		const srcs = ensureMinImages(images)
		const textures = await Promise.all(srcs.map((src) => loadTexture(src).catch(() => null)))

		// Calculate total arc needed
		// We'll distribute cards evenly around the full circle
		const count = srcs.length

		// First pass: measure widths to get angular sizes
		const widths = textures.map((tex) => (tex ? cardWidth(tex) : cardHeight))
		const angularSizes = widths.map((w) => {
			// Arc angle for this card width at the given radius
			return 2 * Math.atan2(w / 2, radius) + angularGap
		})
		const totalArc = angularSizes.reduce((a, b) => a + b, 0)
		const scaleToFit = (2 * Math.PI) / totalArc

		// Build planes
		let currentAngle = 0
		for (let i = 0; i < count; i++) {
			const tex = textures[i]
			if (!tex) continue

			const w = widths[i] * scaleToFit
			const h = cardHeight * scaleToFit
			const angSize = angularSizes[i] * scaleToFit
			const planeAngle = currentAngle + angSize / 2
			currentAngle += angSize

			const geo = new THREE.PlaneGeometry(w, h, 1, 16)

			const mat = new THREE.ShaderMaterial({
				uniforms: {
					map: { value: tex },
					skewFactor: { value: 0.0 },
					skewStrength: { value: 0.35 },
					alpha: { value: 1.0 },
				},
				vertexShader,
				fragmentShader,
				transparent: true,
				side: THREE.FrontSide,
			})

			const mesh = new THREE.Mesh(geo, mat)

			// Place on ring: rotate around Y, push out to radius, face inward (-Z direction)
			// We place cards so they face the camera (origin) — face inward along the ring
			mesh.position.set(Math.sin(planeAngle) * radius, 0, -Math.cos(planeAngle) * radius)
			// Cards face center (camera at origin), so rotate Y to match ring position
			mesh.rotation.y = -planeAngle

			// Store angle for rotation logic
			;(mesh as any).__angle = planeAngle
			;(mesh as any).__mat = mat

			scene.add(mesh)
			planes.push(mesh)
		}

		// Start loop
		startRenderLoop()
	}

	// ─── Render loop ─────────────────────────────────────────────────────────────
	function startRenderLoop() {
		let lastTime = performance.now()

		const tick = () => {
			animFrameId = requestAnimationFrame(tick)
			const now = performance.now()
			const dt = (now - lastTime) / 1000
			lastTime = now

			// Auto rotate
			if (!isDragging && !autoRotatePaused && autoRotateSpeed !== 0) {
				targetRotation += autoRotateSpeed * dt
				ringRotation = targetRotation // direct assignment when auto
			} else {
				// Smooth lerp toward target when from drag release
				ringRotation += (targetRotation - ringRotation) * Math.min(1, dt * 6)
			}

			// Update ring: rotate all planes around Y axis
			for (const mesh of planes) {
				const baseAngle = (mesh as any).__angle
				const effectiveAngle = baseAngle + ringRotation

				// World position on the ring
				mesh.position.set(
					Math.sin(effectiveAngle) * radius,
					0,
					-Math.cos(effectiveAngle) * radius,
				)
				mesh.rotation.y = -effectiveAngle

				// Visibility culling + skew calculation
				// We only want to show cards in front of camera (negative Z half)
				// Camera looks at -Z. Card is "in front" if its Z is negative relative to camera.
				const mat = (mesh as any).__mat as THREE.ShaderMaterial

				// normalised position: +1 = directly behind camera, -1 = directly in front
				const cosAngle = Math.cos(effectiveAngle) // 1 = front, -1 = back

				// FOV cutoff — hide cards beyond ~80° from front
				const frontness = cosAngle // 1 = directly in front
				const visible = frontness > 0.1

				if (!visible) {
					mat.uniforms.alpha.value = 0
					mesh.visible = false
					continue
				}
				mesh.visible = true

				// How far to the side (sin = side factor: -1 left, 0 centre, 1 right)
				const side = Math.sin(effectiveAngle) // -1 … 1

				// Skew increases as card goes sideways
				const skew = side * (1 - frontness * 0.5)
				mat.uniforms.skewFactor.value = skew

				// Fade alpha at the periphery
				const fadeStart = 0.3 // start fading when cosAngle < this
				const alpha = THREE.MathUtils.smoothstep(frontness, fadeStart, 0.55)
				mat.uniforms.alpha.value = alpha
			}

			renderer.render(scene, camera)
		}

		tick()
	}

	// ─── Resize ──────────────────────────────────────────────────────────────────
	function onResize() {
		if (!renderer || !camera) return
		const W = container.clientWidth
		const H = container.clientHeight
		renderer.setSize(W, H)
		camera.aspect = W / H
		camera.updateProjectionMatrix()
	}

	// ─── Drag / Touch ────────────────────────────────────────────────────────────
	function onPointerDown(e: PointerEvent) {
		isDragging = true
		autoRotatePaused = true
		dragStartX = e.clientX
		dragStartRotation = targetRotation
		container.setPointerCapture(e.pointerId)
	}

	function onPointerMove(e: PointerEvent) {
		if (!isDragging) return
		const dx = e.clientX - dragStartX
		targetRotation = dragStartRotation - dx * dragSensitivity
		ringRotation = targetRotation // live during drag
	}

	function onPointerUp() {
		isDragging = false
		// Resume auto-rotate after a pause
		clearTimeout(pauseTimeout)
		pauseTimeout = setTimeout(() => {
			autoRotatePaused = false
		}, 2000)
	}

	// ─── Wheel ───────────────────────────────────────────────────────────────────
	function onWheel(e: WheelEvent) {
		e.preventDefault()
		autoRotatePaused = true
		targetRotation += e.deltaY * 0.002
		clearTimeout(pauseTimeout)
		pauseTimeout = setTimeout(() => {
			autoRotatePaused = false
		}, 2000)
	}

	// ─── Lifecycle ───────────────────────────────────────────────────────────────
	onMount(() => {
		init()
		window.addEventListener("resize", onResize)
	})

	onDestroy(() => {
		if (browser) {
			cancelAnimationFrame(animFrameId)
			window.removeEventListener("resize", onResize)
		}
		clearTimeout(pauseTimeout)
		renderer?.dispose()
		for (const mesh of planes) {
			mesh.geometry.dispose()
			;(mesh.material as THREE.Material).dispose()
		}
	})
</script>

<div
	bind:this={container}
	class="relative w-screen h-screen full-width overflow-hidden cursor-grab active:cursor-grabbing select-none"
	onpointerdown={onPointerDown}
	onpointermove={onPointerMove}
	onpointerup={onPointerUp}
	onpointercancel={onPointerUp}
	onwheel={onWheel}
	role="region"
	aria-label="Image carousel">
	<!-- Three.js canvas is injected here by the renderer -->

	<!-- Optional: subtle vignette overlay for depth -->
	<div
		class="pointer-events-none absolute inset-0 z-10"
		style="background: radial-gradient(ellipse 70% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%);">
	</div>

	<!-- Drag hint -->
	<p
		class="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white/30 text-xs tracking-widest uppercase select-none">
		drag or scroll
	</p>
</div>
