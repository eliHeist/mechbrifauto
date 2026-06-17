<script>

	const values = [
		{
			title: "Transparency First",
			desc: "Every repair is documented. We show you what's wrong before we fix it, and give you a written report when we're done. No surprises, ever.",
		},
		{
			title: "Diagnosis Before Guessing",
			desc: "We scan before we spanner. Autel-powered diagnostics mean we know exactly what's wrong — so we don't charge you to find out the hard way.",
		},
		{
			title: "Service That Fits Your Life",
			desc: "Garage or on-site, we work around you. Busy schedule? We come to your office or home. Your car gets fixed, you don't lose a day.",
		},
		{
			title: "Quality Parts, Honest Advice",
			desc: "We recommend what your car actually needs, using quality parts that last. We'd rather lose a small job than earn a reputation for recommending unnecessary work.",
		},
	]
</script>

<svelte:head>
	<title>About — Mechbrif Auto</title>
</svelte:head>

<!-- ─── HERO ─────────────────────────────────────────────────────────────── -->
<section class="relative min-h-[80vh] bg-[#0D0D0D] flex items-end overflow-hidden">
	<!--
    IMAGE: A full-bleed photo of the Mechbrif team — mechanics standing in the
    garage bay, arms folded or looking at camera. Confident, professional, approachable.
    Not forced smiles. Natural. Dark background, workshop lighting.
  -->
	<div class="absolute inset-0 z-0">
		<img
			src="/images/team.webp"
			alt="Mechbrif Auto team"
			class="w-full h-full object-cover object-top opacity-40" />
		<div
			class="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent">
		</div>
	</div>
	<div class="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-24 pt-40">
		<h1
			class="font-['Barlow_Condensed'] font-900 uppercase text-white leading-[0.88] text-[clamp(4rem,10vw,9rem)] max-w-3xl">
			Built on<br />Straight Talk.
		</h1>
	</div>
</section>

<!-- ─── STORY ─────────────────────────────────────────────────────────────── -->
<section class="content-grid py-24 md:py-36 px-8 md:px-16">
	<div class="grid md:grid-cols-2 gap-16 md:gap-28 items-start">
		<div class="">
			<h2 class="font-['Barlow_Condensed'] font-900 uppercase text-white leading-[0.9] text-[clamp(2.5rem,5vw,4rem)]">
				Who We Are<span class="text-red-600">.</span>
			</h2>
		</div>
		<div class="space-y-6">
			<p class="font-['Inter'] text-white/70 text-xl leading-relaxed">
				Mechbrif Auto started with a simple frustration: too many garages that guessed,
				overcharged, and gave no explanation. We built something different.
			</p>
			<p class="font-['Inter'] text-white/60 text-lg leading-relaxed">
				Based at Plot 7, Namugongo Kyaliwajjala in Kampala, we serve both individual vehicle
				owners and fleet managers across the city. Our team combines hands-on mechanical
				experience with computerized diagnostic technology — so we fix things properly, the
				first time.
			</p>
			<p class="font-['Inter'] text-white/60 text-lg leading-relaxed">
				We also offer on-site service — we come to your location, do the work, and leave you
				with a full report. Because your time is part of the cost too.
			</p>
		</div>
	</div>
</section>

<!-- ─── LARGE IMAGE BREAK ─────────────────────────────────────────────────── -->
<section class="bg-[#141414] full-width">
	<!--
    IMAGE: A wide panoramic shot of the interior of the Mechbrif garage —
    vehicles on lifts, lit tools on the workbench, mechanics visible in background.
    Sense of scale and competence. Should feel like an editorial portrait of the space.
  -->
	<img
		src="/images/pics/bay.webp"
		alt="Mechbrif Auto garage interior"
		class="w-full h-[55vw] max-h-[700px] object-cover object-center" />
</section>

<!-- ─── VALUES ────────────────────────────────────────────────────────────── -->
<section class="bg-[#141414] content-grid py-24 md:py-36 px-8 md:px-16">
	<div class="">
		<div class="mb-16">
			<h2
				class="font-['Barlow_Condensed'] font-900 uppercase text-white leading-[0.9] text-[clamp(2.5rem,5vw,4.5rem)]">
				Our Principles.
			</h2>
		</div>

		<div class="grid md:grid-cols-2 gap-px bg-white/10">
			{#each values as value, i}
				<div
					class="bg-[#141414] p-10 md:p-14">
					<div class="w-8 h-px bg-red-600 mb-8"></div>
					<h3
						class="font-['Barlow_Condensed'] font-800 uppercase text-white text-3xl leading-tight mb-4">
						{value.title}
					</h3>
					<p class="font-['Inter'] text-white/60 text-base leading-relaxed">
						{value.desc}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ─── LOCATION ───────────────────────────────────────────────────────────── -->
<section class="content-grid py-24 md:py-36 px-8 md:px-16">
	<div class="">
		<div
			class="grid md:grid-cols-2 gap-16 items-start">
			<div>
				<h2
					class="font-['Barlow_Condensed'] font-900 uppercase text-white leading-[0.9] text-[clamp(2.5rem,5vw,4.5rem)] mb-10">
					Where<br />We Are<span class="text-red-600">.</span>
				</h2>

				<div class="gap-8 grid md:grid-cols-2">
					<div>
						<div
							class="font-['Inter'] text-xs tracking-widest uppercase text-white/40 mb-2">
							Address
						</div>
						<div
							class="font-['Barlow_Condensed'] font-700 text-white uppercase text-2xl leading-tight">
							Plot 7, Namugongo<br />Kyaliwajjala, Kampala
						</div>
					</div>
					<div>
						<div
							class="font-['Inter'] text-xs tracking-widest uppercase text-white/40 mb-2">
							Hours
						</div>
						<div
							class="font-['Barlow_Condensed'] font-700 text-white uppercase text-2xl">
							Mon - Sat &nbsp; 8AM - 6PM
						</div>
					</div>
					<div>
						<div
							class="font-['Inter'] text-xs tracking-widest uppercase text-white/40 mb-2">
							Phone
						</div>
						<div class="space-y-1">
							<a
								href="tel:+256765219273"
								class="block font-['Barlow_Condensed'] font-700 text-white uppercase text-2xl hover:text-red-600 transition-colors">
								+256 765 219 273
							</a>
							<a
								href="https://wa.me/256759158049"
								target="_blank"
								rel="noopener"
								class="block font-['Barlow_Condensed'] font-700 text-white uppercase text-2xl hover:text-red-600 transition-colors">
								+256 759 158 049 <span class="text-red-600 text-lg"
									>(WhatsApp)</span>
							</a>
						</div>
					</div>
					<div>
						<div
							class="font-['Inter'] text-xs tracking-widest uppercase text-white/40 mb-2">
							Email
						</div>
						<a
							href="mailto:connect@mechbrifauto.com"
							class="font-['Inter'] font-500 text-white/70 text-lg hover:text-white transition-colors">
							connect@mechbrifauto.com
						</a>
					</div>
				</div>
			</div>

			<!-- Map placeholder -->
			<div
				class="relative h-[400px] md:h-full min-h-[400px] bg-[#141414] border border-white/10 flex items-center justify-center">
				<!--
          Embed a Google Maps iframe here for the actual location.
          Replace the src with the correct embed URL for Plot 7, Namugongo Kyaliwajjala.
        -->
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7288977993317!2d32.6506471!3d0.383606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db72a305f9897%3A0x337e6fe0ce7e6130!2sMechbrif%20auto%20Ltd%20-%20MBF%20auto%20_%20namugongo!5e0!3m2!1sen!2sug!4v1781196938230!5m2!1sen!2sug"
					width="100%"
					height="100%"
					class="absolute inset-0 grayscale opacity-60"
					style="border:0; filter: invert(90%) hue-rotate(180deg) grayscale(50%);"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Mechbrif Auto location"></iframe>
				<div class="absolute inset-0 pointer-events-none border border-white/10"></div>
			</div>
		</div>
	</div>
</section>

<style>
</style>
