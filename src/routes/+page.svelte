<script>
	import HomeHero from "$lib/components/HomeHero.svelte"
    import Carousel from "$lib/components/Carousel.svelte"
    import { onMount } from "svelte"
	import Carousel2 from "$lib/components/Carousel2.svelte"
	import Carousel3 from "$lib/components/Carousel3.svelte"

	let heroVisible = $state(false)

	const services = [
		{
			label: "DIAGNOSTICS",
			title: "Computerized Diagnosis",
			desc: "Autel-powered scans that pinpoint the exact fault — no guessing, no unnecessary parts.",
			icon: "⬡",
		},
		{
			label: "ENGINE",
			title: "Engine Services",
			desc: "Full engine repair, overhaul, and tune-up. We work on what others turn away.",
			icon: "◈",
		},
		{
			label: "SUSPENSION",
			title: "Suspension & Steering",
			desc: "Alignment, shocks, bushings, and steering systems restored to factory feel.",
			icon: "◎",
		},
		{
			label: "MAINTENANCE",
			title: "General Service",
			desc: "Oils, filters, brakes, fluids — all the regular care that keeps you moving.",
			icon: "◇",
		},
		{
			label: "RESCUE",
			title: "Road Rescue",
			desc: "Broke down? We come to you. On-site repair anywhere in and around Kampala.",
			icon: "◉",
		},
		{
			label: "RESTORATION",
			title: "Vehicle Restoration",
			desc: "Bringing older vehicles back to life — mechanical, electrical, and cosmetic.",
			icon: "◈",
		},
	]

	const stats = [
		{ value: "320+", image: null, label: "Vehicles Serviced" },
		{ value: "6+", image: null, label: "Years Operating" },
		{ value: "100%", image: null, label: "Digital Reports" },
		{ value: "2", image: 'images/toyota-subaru-logos.png', label: "Expertise" },
	]

	const testimonials = [
		{
			name: "Sarah M.",
			text: "The team came to my office and serviced my car while I worked. They even provided a detailed report afterward. Absolutely seamless.",
			role: "Regular Client",
		},
		{
			name: "John D.",
			text: "Their computerized diagnostics were spot-on. Fixed the issue the same day. I've never had a mechanic this efficient.",
			role: "Fleet Manager",
		},
		{
			name: "Jane S.",
			text: "Fast, professional, and fair pricing. The team actually explains what's wrong with your car in plain language.",
			role: "Returning Client",
		},
	]

	const process = $state([
		{
			step: "01",
			title: "Reception & Check-In",
			desc: "We register your vehicle and run a full pre-operation check to document its condition before we start.",
		},
		{
			step: "02",
			title: "Diagnosis",
			desc: "Our Autel scanner reads every fault code. We brief you on exactly what we find, before doing anything.",
		},
		{
			step: "03",
			title: "Repair & Service",
			desc: "Approved repairs only. We use quality parts and keep you updated as the work progresses.",
		},
		{
			step: "04",
			title: "Testing & Delivery",
			desc: "We road-test and validate every fix before handing back your car with a full digital service report.",
		},
	])
</script>

<svelte:head>
	<title>Mechbrif Auto — Expert Auto Care, Kampala</title>
</svelte:head>

<!-- <Carousel3 /> -->
<HomeHero />

<!-- ─── STATS BAR ─────────────────────────────────────────────────────────── -->
<section class="breakout bg-[#141414] border border-white/10">
	<div class="py-10 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
		{#each stats as stat}
			<div class="px-8 first:pl-0 text-center">
                {#if stat.image}
                    <img src={stat.image} alt={`${stat.value} ${stat.label}`} class="mx-auto mb-2 h-[clamp(2.5rem,5vw,4rem)]" />
                {:else}
                    <div class="font-['Barlow_Condensed'] font-900 text-[clamp(2.5rem,5vw,4rem)] leading-none text-white">
                        {stat.value}
                    </div>
                {/if}
				<div class="font-['Inter'] text-xs tracking-widest uppercase text-white/40 mt-1">
					{stat.label}
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- ─── DIFFERENTIATOR ────────────────────────────────────────────────────── -->
<section class="py-28 md:py-40 overflow-hidden">
	<div class="">
		<div class="">
			<!-- <p class="font-['Inter'] text-xs font-600 tracking-[0.3em] text-red-600 uppercase mb-6">
				What Sets Us Apart
			</p> -->
			<h2
				class="font-['Barlow_Condensed'] font-900 uppercase text-white leading-[0.9] text-[clamp(3rem,8vw,7rem)] max-w-4xl">
				We Find Exactly What's Wrong.
			</h2>
		</div>

		<div class="mt-16 md:mt-24 grid md:grid-cols-2 gap-0">
			<!-- Left: image -->
			<div
				class="relative">
				<!--
          IMAGE: Close-up of the Autel diagnostic scanner screen in use —
          showing a live vehicle fault code readout. Shot in a dark garage, red/orange
          screen glow on the mechanic's face. High contrast, editorial quality.
        -->
				<img
					src="/images/autel.webp"
					alt="Autel computerized diagnostics"
					class="w-full h-125 object-cover" />
				<div
					class="absolute top-6 left-6 bg-red-600 text-white font-['Inter'] text-xs font-600 tracking-widest uppercase px-4 py-2">
					Autel-Powered
				</div>
			</div>

			<!-- Right: copy -->
			<div
				class="bg-[#141414] p-10 md:p-16 flex flex-col justify-center">
				<p class="font-['Inter'] text-white/70 text-lg leading-relaxed">
					We don't guess. We scan first.
				</p>
				<p class="font-['Inter'] text-white/70 text-lg leading-relaxed mt-4">
					Our Autel computerized diagnostic system reads your vehicle's exact fault codes
					across the engine, transmission, ABS, airbags, and all electronic systems before
					a single spanner is touched.
				</p>
				<p class="font-['Inter'] text-white/70 text-lg leading-relaxed mt-4">
					That means faster repairs, correct parts the first time, and a detailed report
					you can actually read.
				</p>
				<a
					href="/services"
					class="mt-10 self-start font-['Inter'] font-600 text-sm tracking-widest uppercase text-red-600 flex items-center gap-3 group">
					See All Services
					<span class="inline-block transition-transform group-hover:translate-x-2"
						>→</span>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ─── SERVICES GRID ─────────────────────────────────────────────────────── -->
<section class="content-grid bg-[#141414] py-28 md:py-40">
	<div class="">
		<div
			class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
			<div>
				<!-- <p
					class="font-['Inter'] text-xs font-600 tracking-[0.3em] text-red-600 uppercase mb-4">
					What We Do
				</p> -->
				<h2
					class="font-['Barlow_Condensed'] font-900 uppercase text-white leading-[0.9] text-[clamp(3rem,6vw,5.5rem)]">
					Full-Spectrum<br />Auto Care.
				</h2>
			</div>
			<a
				href="/services"
				class="font-['Inter'] font-500 text-sm tracking-widest uppercase border border-white/20 text-white/60 px-8 py-4 hover:border-white hover:text-white transition-colors self-start md:self-end">
				All Services →
			</a>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
			{#each services as service, i}
				<div class="transition-all duration-700 bg-[#141414] p-10 hover:bg-[#1A1A1A] group">
					<div
						class="font-['Inter'] text-xs tracking-[0.3em] text-red-600 uppercase mb-6">
						{service.label}
					</div>
					<h3
						class="font-['Barlow_Condensed'] font-800 text-white uppercase text-3xl leading-tight mb-4 group-hover:text-red-600 transition-colors">
						{service.title}
					</h3>
					<p class="font-['Inter'] text-white/50 text-sm leading-relaxed">
						{service.desc}
					</p>
					<div
						class="mt-8 w-8 h-px bg-red-600 group-hover:w-16 transition-all duration-300">
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── HOW WE WORK ───────────────────────────────────────────────────────── -->
<section class="content-grid py-28 md:py-40">
	<div class="">
		<div class="mb-20">
			<!-- <p class="font-['Inter'] text-xs font-600 tracking-[0.3em] text-red-600 uppercase mb-4">
				The Process
			</p> -->
			<h2
				class="font-['Barlow_Condensed'] font-900 uppercase text-white leading-[0.9] text-[clamp(3rem,6vw,5.5rem)]">
				How We Work.
			</h2>
		</div>

		<div class="grid md:grid-cols-4 gap-16">
			{#each process as step, i}
				<div class="pt-10 pb-10">
					<div
						class="font-['Barlow_Condensed'] font-900 text-[5rem] leading-none text-white/10 mb-4 select-none">
						{step.step}
					</div>
					<h3
						class="font-['Barlow_Condensed'] font-800 text-white uppercase text-2xl leading-tight mb-4">
						{step.title}
					</h3>
					<p class="font-['Inter'] text-white/50 text-sm leading-relaxed">{step.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── FULL-BLEED CTA BANNER ─────────────────────────────────────────────── -->
<section class="full-width relative bg-[#141414] py-0 overflow-hidden">
	<!--
    IMAGE: A wide-angle shot inside the Mechbrif garage bay — multiple cars visible,
    mechanics working, bright workshop lights overhead against the dark ceiling.
    Should feel busy, competent, and real. Not staged.
  -->
	<div class="absolute inset-0">
		<img
			src="/images/garage-bay-wide.webp"
			alt="Mechbrif Auto garage bay"
			class="w-full h-full object-cover opacity-20" />
		<div
			class="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent">
		</div>
	</div>
	<div class="relative z-10 content-grid px-8 md:px-16 py-28 md:py-40">
		<div class="max-w-2xl">
			<h2
				class="font-['Barlow_Condensed'] font-900 uppercase text-white leading-[0.9] text-[clamp(3rem,7vw,6rem)] mb-8">
				We Come To You.<br />Or You Come To Us.
			</h2>
			<p class="font-['Inter'] text-white/60 text-lg leading-relaxed mb-10">
				On-site service at your home or office. Or drop in to our Namugongo garage. Either
				way, you get the same expert care.
			</p>
			<div class="flex flex-col sm:flex-row gap-4">
				<a
					href="/contact"
					class="font-['Inter'] font-600 text-sm tracking-widest uppercase bg-red-600 text-white px-10 py-4 hover:bg-red-700 transition-colors text-center">
					Book On-Site Service
				</a>
				<a
					href="https://wa.me/256759158049"
					target="_blank"
					rel="noopener"
					class="font-['Inter'] font-600 text-sm tracking-widest uppercase border border-white/30 text-white px-10 py-4 hover:border-white transition-colors text-center">
					WhatsApp Us
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ─── TESTIMONIALS ───────────────────────────────────────────────────────── -->
<section class="content-grid py-28 md:py-40">
	<div class="">
		<div class="mb-16">
			<!-- <p class="font-['Inter'] text-xs font-600 tracking-[0.3em] text-red-600 uppercase mb-4">
				Client Feedback
			</p> -->
			<h2
				class="font-['Barlow_Condensed'] font-900 uppercase text-white leading-[0.9] text-[clamp(3rem,6vw,5.5rem)]">
				Real People.<br />Real Results.
			</h2>
		</div>

		<div class="grid md:grid-cols-3 gap-px bg-white/10">
			{#each testimonials as t, i}
				<div
					class="transition-all duration-700 bg-[#0D0D0D] p-10 flex flex-col">
					<div class="flex gap-1 mb-6">
						{#each Array(5) as _}
							<span class="text-red-600 text-xs">★</span>
						{/each}
					</div>
					<p class="font-['Inter'] text-white/80 text-lg leading-relaxed mb-8 flex-1">
						"{t.text}"
					</p>
					<div class="border-t border-white/10 pt-6 ">
						<div
							class="font-['Barlow_Condensed'] font-700 text-white uppercase text-xl">
							{t.name}
						</div>
						<div
							class="font-['Inter'] text-xs text-white/40 tracking-widest uppercase mt-1">
							{t.role}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
</style>
