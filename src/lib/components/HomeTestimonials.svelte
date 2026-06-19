<script lang="ts">
    const testimonials = $state([
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
	])    
</script>

<section class="content-grid py-28 md:py-40">
	<div class="">
		<div class="mb-16">
			<!-- <p class="font-['Inter'] text-xs font-600 tracking-[0.3em] text-accent uppercase mb-4">
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
					class="transition-all duration-700 bg-black p-10 flex flex-col">
					<div class="flex gap-1 mb-6">
						{#each Array(5) as _}
							<span class="text-accent text-xs">★</span>
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
