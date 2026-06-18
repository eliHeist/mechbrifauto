<script>
	import Footer from "$lib/components/Footer.svelte"
	import Header from "$lib/components/Header.svelte"
	import { useGsap } from "$lib/utils/UseGsap"
    import ScrollSmoother from "gsap/dist/ScrollSmoother";
    import gsap from "gsap"

	import "./layout.css"

	let { children } = $props()

    useGsap(() => {
        const cursor = document.querySelector("#cursor")
        const cursorDot = document.querySelector("#cursor-dot")
        if (cursor && cursorDot) {
            window.addEventListener("mousemove", (e) => {
                gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.55, ease: "power2.out" })
                gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.12, ease: "none" })
            })
            document.querySelectorAll("a, button, input, textarea, select").forEach((el) => {
                el.addEventListener("mouseenter", () =>
                    gsap.to(cursor, { scale: 2.4, opacity: 0.45, duration: 0.3 }),
                )
                el.addEventListener("mouseleave", () =>
                    gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 }),
                )
            })
        }

        // Smooth scroll
        ScrollSmoother.create({
            smooth: 2,
            effects: true,
        });
    })

</script>
<!-- Custom cursor -->
<div id="cursor" class="cursor-ring hidden md:block"></div>
<div id="cursor-dot" class="cursor-dot hidden md:block"></div>

<Header />

<!-- Page content -->
<main class="content-grid bg-[#0D0D0D] min-h-screen">
	{@render children()}
</main>

<Footer />

<style>
    .cursor-ring {
		position: fixed;
		top: 0;
		left: 0;
		width: 36px;
		height: 36px;
		border: 1.5px solid rgba(220, 38, 38, 0.7);
		border-radius: 50%;
		pointer-events: none;
		z-index: 9999;
		transform: translate(-50%, -50%);
		mix-blend-mode: difference;
		will-change: transform;
	}
	.cursor-dot {
		position: fixed;
		top: 0;
		left: 0;
		width: 5px;
		height: 5px;
		background: #dc2626;
		border-radius: 50%;
		pointer-events: none;
		z-index: 9999;
		transform: translate(-50%, -50%);
		will-change: transform;
	}
	@media (pointer: fine) {
		:global(body) {
			cursor: none;
		}
	}

    @media (prefers-reduced-motion: reduce) {
		.cursor-ring,
		.cursor-dot {
			display: none !important;
		}
		:global(body) {
			cursor: auto !important;
		}
	}
</style>
