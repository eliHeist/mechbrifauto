<script lang="ts">
	import Carousel3 from "./Carousel3.svelte"
    import { Check } from "@lucide/svelte"

</script>

<section class="relative min-h-screen flex flex-col justify-end overflow-hidden content-grid">
	<!--
        IMAGE: Full-bleed hero background.
        Use a real photo — a mechanic in a dark garage bay, torchlight catching engine chrome.
        Dramatic top-down or 3/4 angle. Should feel cinematic and slightly underexposed.
        Overlay gradient below keeps text readable.
        -->
        <div class="absolute inset-0 z-0 full-width">
            <Carousel3 />
	    </div>

	<!-- Hero text -->
	<div class="relative z-10 text-center grid justify-items-center content-end pb-20">
		<!-- <p class="font-['Inter'] text-xs font-600 tracking-[0.15em] text-accent uppercase mb-6">
			Kampala's Tech-Forward Garage
		</p> -->
		<h1 class="font-['Barlow_Condensed'] font-900 uppercase leading-[0.88] text-white text-[clamp(4rem,12vw,8rem)] flex gap-6 flex-wrap justify-center">
			<div class="">Your</div>
			<div class="">Car</div>
			<div class="">Deserves</div>
			<div class="flex gap-1">
                <span class="underline decoration-accent">Surety</span> 
                <span class="rounded-full grid place-content-center bg-accent aspect-square size-8">
                    <Check class="size-6 text-white" />
                </span>
            </div>
		</h1>
		<div class="mt-10 flex flex-col sm:flex-row gap-4 items-start">
			<a
				href="/contact"
				class="font-['Inter'] font-600 text-sm tracking-widest uppercase bg-accent text-white px-10 py-4 hover:bg-red-700 transition-colors">
				Book a service
			</a>
			<a
				href="/services"
				class="font-['Inter'] font-600 text-sm tracking-widest uppercase border border-white/30 text-white px-10 py-4 hover:border-white transition-colors">
				Our Services
			</a>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 right-8 md:right-16 z-10 flex items-center gap-3 text-white/40">
		<span class="font-['Inter'] text-xs tracking-widest uppercase">Scroll</span>
		<div class="w-px h-10 bg-white/20 relative overflow-hidden">
			<div class="absolute top-0 w-full h-1/2 bg-white/60 animate-bounce"></div>
		</div>
	</div>
</section>