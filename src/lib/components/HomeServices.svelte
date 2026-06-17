<script lang="ts">
    const services = $state([
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
	])
</script>

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

<style>
    
</style>
