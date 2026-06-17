<script lang="ts">
	import * as THREE from 'three';
	import { onMount } from 'svelte';

	// Define the props using Svelte 5 Runes
	// let { images = [] }: { images: string[] } = $props();
    let imagesOriginal: string[] = $state([
        "/images/pics/bay.webp",
        "/images/pics/client-tag-look.webp",
        "/images/pics/oil-topup.webp",
        "/images/pics/autel-in-use.webp",
        "/images/pics/inline-4-engine.webp",
        "/images/pics/garagebays.webp",
        "/images/pics/tech-engine-room-top-down.webp",
        "/images/pics/spray-job-back.webp",
    ]);

    const multiplier = $state(3); // Number of times to repeat the image set for a longer carousel
    const images = $derived(Array(multiplier).fill(imagesOriginal).flat()) // Duplicate the images for a longer carousel
    const finalImageCount = $derived(images.length) // Total number of images after duplication;

	// Reference to the DOM element where the canvas will live
	let container: HTMLDivElement;

	onMount(() => {
		if (!container || images.length === 0) return;

		// --- 1. SETUP SCENE, CAMERA, & RENDERER ---
		const width = container.clientWidth;
		const height = container.clientHeight;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(56, width / height, 0.1, 1000);
		camera.position.set(0, 0, finalImageCount*0.15);
		camera.lookAt(0, -1, 10);

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(width, height);
		container.appendChild(renderer.domElement);

		// --- 2. LIGHTING ---
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
		directionalLight.position.set(5, 10, 7);
		scene.add(directionalLight);

		// --- 3. CREATING THE CAROUSEL ---
		const radius = images.length * 0.5; // Distance from the center
		const cardGroup = new THREE.Group(); // Parent group to hold all images
		scene.add(cardGroup);

		// Geometry for the image "cards" (Standard 16:9 aspect ratio placeholder)
		const geometry = new THREE.PlaneGeometry(3, 1.69);
		const textureLoader = new THREE.TextureLoader();

		images.forEach((url, index) => {
			// Calculate angle for even spacing around the circle
			const angle = (index / images.length) * Math.PI * 2;

			// Load the image texture
			const texture = textureLoader.load(url);
			const material = new THREE.MeshStandardMaterial({
				map: texture,
				side: THREE.DoubleSide // Visible from both sides
			});

			const mesh = new THREE.Mesh(geometry, material);

			// Position mesh in a circle using polar to Cartesian coordinates
			mesh.position.x = Math.cos(angle) * radius;
			mesh.position.z = Math.sin(angle) * radius;

			// Rotate the mesh to face outward from the center
			mesh.rotation.y = -angle + Math.PI / 2;

			cardGroup.add(mesh);
		});

		// --- 4. ANIMATION LOOP ---
		let animationFrameId: number;

		const animate = () => {
			animationFrameId = requestAnimationFrame(animate);

			// Rotate the entire group of images
			cardGroup.rotation.y += 0.00125;

			renderer.render(scene, camera);
		};

		animate();

		// --- 5. CLEANUP ON UNMOUNT ---
		return () => {
			cancelAnimationFrame(animationFrameId);
			renderer.dispose();
			geometry.dispose();
			
			// Dispose materials and textures to prevent memory leaks
			cardGroup.children.forEach((child:any) => {
				if (child instanceof THREE.Mesh) {
					child.material.dispose();
					if (child.material.map) child.material.map.dispose();
				}
			});

			if (container && renderer.domElement) {
				container.removeChild(renderer.domElement);
			}
		};
	});
</script>

<div bind:this={container} class="canvas-container full-width h-screen"></div>

<style>
</style>