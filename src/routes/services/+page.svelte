<script>
	import { onMount } from "svelte"

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("revealed")
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.12 },
		)
		document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
		return () => observer.disconnect()
	})

	const categories = [
		{
			id: "diagnostics",
			label: "Diagnostics",
			headline: "Computerized Diagnosis",
			tag: "Tech-Forward",
			desc: "We use Autel professional-grade diagnostic equipment to scan your vehicle's complete electronic architecture — engine, gearbox, ABS, airbags, emissions, and more. Every fault code is logged, explained, and actioned with your approval.",
			items: [
				"Full OBD-II/III scan across all ECUs",
				"Engine fault code diagnosis",
				"Transmission & gearbox diagnostics",
				"ABS and brake system scan",
				"Airbag & SRS system check",
				"Battery health & charging system test",
				"Live data monitoring & analysis",
				"Post-repair verification scan",
			],
			image: "/images/autel.webp",
		},
		{
			id: "engine",
			label: "Engine",
			headline: "Engine Services",
			tag: "Core Work",
			desc: "From simple tune-ups to full rebuilds, we do deep engine work that many garages won't touch. We're honest about what's needed and give you options before we start.",
			items: [
				"Engine tune-up & timing adjustment",
				"Top engine overhaul",
				"Full engine rebuild",
				"Valve adjustment & seals",
				"Head gasket replacement",
				"Fuel injector cleaning & replacement",
				"Turbo inspection & repair",
				"Engine mounts & belts",
			],
			image: "/images/pics/inline-6-close-ariel.webp",
		},
		{
			id: "suspension",
			label: "Suspension",
			headline: "Suspension & Steering",
			tag: "Ride & Handling",
			desc: "Bad roads are hard enough — your suspension shouldn't make them worse. We restore your vehicle's handling feel to factory spec, using quality parts that last.",
			items: [
				"Wheel alignment (computerized)",
				"Shock absorber replacement",
				"Coil spring & strut service",
				"Ball joint & tie rod replacement",
				"Steering rack & pump service",
				"Bushing replacement",
				"CV joint & drive shaft service",
				"Wheel bearing replacement",
			],
			image: "/images/pics/suspension-ripped-sq.webp",
		},
		{
			id: "maintenance",
			label: "Maintenance",
			headline: "General Repair & Maintenance",
			tag: "Regular Care",
			desc: "Consistent, timely servicing is the cheapest maintenance there is. We follow manufacturer schedules and document everything so you always know where your car stands.",
			items: [
				"Oil & filter change",
				"Air & cabin filter replacement",
				"Brake pad & disc service",
				"Coolant flush & top-up",
				"Transmission & differential fluid service",
				"Spark plug replacement",
				"Battery check & replacement",
				"Pre-purchase inspection",
			],
			image: "/images/pics/oil-topup-potrait.webp",
		},
		{
			id: "rescue",
			label: "Road Rescue",
			headline: "Road Rescue & On-Site Service",
			tag: "Mobile",
			desc: "If you're stranded, we're on our way. We also offer scheduled on-site servicing at your home or office — your vehicle gets serviced, you don't move.",
			items: [
				"Breakdown response (Kampala & surrounds)",
				"Battery jump-start & replacement",
				"Tyre change assistance",
				"On-site oil & filter change",
				"Minor electrical repair on-site",
				"Vehicle recovery coordination",
				"Scheduled home or office service",
				"Pre-trip inspection service",
			],
			image: "/images/pics/v8-engine-room.webp",
		},
		{
			id: "panel-beating",
			label: "Panel Beating",
			headline: "Panel Beating & Spray Painting",
			tag: "Body Work",
			desc: "From minor dents and scratches to major collision repairs, our panel beating and spray team restores your vehicle's body to factory finish. Professional colour matching and quality paint guaranteed.",
			items: [
				"Dent removal & panel straightening",
				"Bumper repair & replacement",
				"Door & window frame repair",
				"Fender damage correction",
				"Roof panel repair",
				"Welding & structural repair",
				"Spray painting & colour matching",
				"Clearcoat & protective finishing",
			],
			image: "/images/pics/spray-job-side.webp",
		},
	]
</script>

<svelte:head>
	<title>Services — Mechbrif Auto</title>
</svelte:head>

<!-- ─── HERO ─────────────────────────────────────────────────────────────── -->
<section class="pt-40 pb-20 content-grid">
	<div class="">
		<h1
			class="font-['Barlow_Condensed'] font-900 uppercase text-white leading-[0.88] text-[clamp(4rem,10vw,9rem)]">
			Every<br />Service<br />You Need.
		</h1>
		<div class="mt-10 max-w-xl">
			<p class="font-['Inter'] text-white/60 text-xl leading-relaxed">
				From a computerized diagnostic scan to a full engine rebuild all under one roof, with digital reports for every job.
			</p>
		</div>
	</div>
</section>

<!-- Sticky nav for service categories -->
<!-- <div class="sticky top-20 z-30 bg-[#141414] border-b border-white/10 content-grid">
	<div class="content-grid">
        <div class="flex gap-0">
            {#each categories as cat}
                <a
                    href="#{cat.id}"
                    class="font-['Inter'] text-xs font-600 tracking-widest uppercase text-white/50 px-6 py-5 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap">
                    {cat.label}
                </a>
            {/each}
        </div>
	</div>
</div> -->

<!-- ─── SERVICE CATEGORIES ─────────────────────────────────────────────────── -->
{#each categories as cat, i}
	<section
		id={cat.id}
		class="{i % 2 === 0 ? 'bg-[#0D0D0D]' : 'bg-[#141414]'} py-24 md:py-32 scroll-mt-16">
		<div class="content-grid px-8 lg:px-16">
			<div class="reveal opacity-0 translate-y-8 transition-all duration-700 grid md:grid-cols-2 gap-12 md:gap-20 items-center {i % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}">
				<!-- Image -->
				<div class="relative">
					<img
						src={cat.image}
						alt={cat.headline}
						class="w-full h-105 md:h-130 object-cover" />
					<div
						class="absolute top-6 left-6 bg-red-600 text-white font-['Inter'] text-xs font-600 tracking-widest uppercase px-4 py-2">
						{cat.tag}
					</div>
				</div>

				<!-- Content -->
				<div>
					<h2
						class="font-['Barlow_Condensed'] font-900 uppercase text-white leading-[0.9] text-[clamp(2.5rem,5vw,4.5rem)] mb-6">
						{cat.headline}
					</h2>
					<p class="font-['Inter'] text-white/60 text-lg leading-relaxed mb-10">
						{cat.desc}
					</p>

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-white/0">
						{#each cat.items as item}
							<div class="flex items-center gap-3 py-3 border-b border-white/0">
								<span class="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
								<span class="font-['Inter'] text-sm text-white/70">{item}</span>
							</div>
						{/each}
					</div>

					<a
						href="/getintouch?service={cat.id}"
						class="mt-10 inline-block font-['Inter'] font-600 text-sm tracking-widest uppercase bg-red-600 text-white px-10 py-4 hover:bg-red-700 transition-colors">
						Book This Service
					</a>
				</div>
			</div>
		</div>
	</section>
{/each}

<!-- ─── BOTTOM CTA ─────────────────────────────────────────────────────────── -->
<section class="bg-[#0D0D0D] border-t border-white/10 py-28 md:py-40 px-8 md:px-16 text-center">
	<div class="reveal opacity-0 translate-y-8 transition-all duration-700 max-w-2xl mx-auto">
		<h2
			class="font-['Barlow_Condensed'] font-900 uppercase text-white leading-[0.9] text-[clamp(2.5rem,6vw,5rem)] mb-6">
			Not Sure What You Need?
		</h2>
		<p class="font-['Inter'] text-white/60 text-lg leading-relaxed mb-10">
			Come in for a diagnostic scan. We'll tell you exactly what's going on no pressure.
		</p>
		<a
			href="/contact"
			class="inline-block font-['Inter'] font-600 text-sm tracking-widest uppercase bg-red-600 text-white px-12 py-5 hover:bg-red-700 transition-colors">
			Get a Diagnosis
		</a>
	</div>
</section>

<style>
	:global(.reveal.revealed) {
		opacity: 1 !important;
		transform: translateY(0) !important;
	}
	@media (prefers-reduced-motion: reduce) {
		:global(.reveal) {
			opacity: 1 !important;
			transform: none !important;
		}
	}
</style>
