<script lang="ts">
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

<style>
    
</style>
