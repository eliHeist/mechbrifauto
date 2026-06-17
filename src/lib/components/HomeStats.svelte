<script lang="ts">
    const stats = $state([
		{ value: "320+", image: null, label: "Vehicles Serviced" },
		{ value: "6+", image: null, label: "Years Operating" },
		{ value: "100%", image: null, label: "Digital Reports" },
		{ value: "2", image: 'images/toyota-subaru-logos.png', label: "Expertise" },
	])
</script>

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

<style>
    
</style>
