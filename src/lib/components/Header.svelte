<script lang="ts">
    import { onMount } from "svelte"
    import { page } from "$app/state"

    let menuOpen = $state(false)
	let scrolled = $state(false)
    let scrolledDown = $state(false)
    let prevScrollY = $state(0)

	const navLinks = [
		{ label: "Home", href: "/" },
		{ label: "Services", href: "/services" },
		{ label: "About", href: "/about" },
	]

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 100

            // track scroll direction
            if (window.scrollY > 100){
                scrolledDown = window.scrollY > prevScrollY
                prevScrollY = window.scrollY
            }
		}
		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => window.removeEventListener("scroll", handleScroll)
	})

	function closeMenu() {
		menuOpen = false
	}

	let currentPath = $derived(page.url.pathname)
</script>

<!-- Global nav — fixed, transparent on hero, fills in on scroll -->
<header
	class="content-grid fixed top-0 left-0 right-0 z-50">
	<div class="flex items-center justify-between {scrolledDown ? 'h-16' : 'h-28'} transition-all duration-300">
		<!-- Logo -->
		<a
			href="/"
			class="z-50 relative" title="Mechbrif Auto">
			<img src="/logo.png" alt="Mechbrif Auto Logo" class="{scrolledDown ? 'h-10' : 'h-16'} transition-all duration-300" />
		</a>

		<!-- Desktop nav -->
		<nav class="hidden md:flex items-center gap-4">
            <div class="md:flex items-center border border-transparent transition-all duration-300 
            {scrolled ? 'bg-[#0D0D0D]/10 backdrop-blur-sm border-white/10' : 'bg-transparent'}
            {scrolledDown ? 'gap-4 py-2 px-4' : 'gap-10 py-3 px-6'}">
                {#each navLinks as link}
                    <a
                        href={link.href}
                        class="font-['Inter'] text-xs font-600 tracking-widest uppercase transition-colors
                {currentPath === link.href ? 'text-white' : 'text-white/50 hover:text-white'}">
                        {link.label}
                    </a>
                {/each}
            </div>
			<a
				href="/getintouch"
				class="font-['Inter'] font-600 text-xs tracking-widest uppercase transition-all duration-500 
                {currentPath === '/getintouch' ? 'bg-red-700 text-white' : 'bg-red-600 text-white hover:bg-red-700'}
                {scrolledDown ? 'py-2 px-4' : 'py-3 px-6'}">
				Book Now
			</a>
		</nav>

		<!-- Mobile hamburger -->
		<button
			class="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-end gap-1.5"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label={menuOpen ? "Close menu" : "Open menu"}>
			<span
				class="block h-0.5 bg-white transition-all duration-300 {menuOpen
					? 'w-6 rotate-45 translate-y-2'
					: 'w-7'}"></span>
			<span
				class="block h-0.5 bg-white transition-all duration-300 {menuOpen
					? 'w-0 opacity-0'
					: 'w-5'}"></span>
			<span
				class="block h-0.5 bg-white transition-all duration-300 {menuOpen
					? 'w-6 -rotate-45 -translate-y-2'
					: 'w-6'}"></span>
		</button>
	</div>
</header>

<!-- Mobile menu overlay -->
{#if menuOpen}
	<div
		class="fixed inset-0 z-40 bg-[#0D0D0D] flex flex-col justify-center px-8"
		role="dialog"
		aria-modal="true">
		<nav class="space-y-2">
			{#each [...navLinks, { label: "Contact", href: "/contact" }] as link}
				<a
					href={link.href}
					onclick={closeMenu}
					class="block font-['Barlow_Condensed'] font-900 uppercase text-[clamp(3rem,10vw,5rem)] leading-tight transition-colors
            {currentPath === link.href ? 'text-red-600' : 'text-white/80 hover:text-white'}">
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="absolute bottom-12 left-8 right-8">
			<div class="border-t border-white/10 pt-8 flex items-center justify-between">
				<a
					href="tel:+256765219273"
					class="font-['Inter'] text-sm text-white/40 hover:text-white transition-colors">
					+256 76 521 9273
				</a>
				<a
					href="https://wa.me/256759158049"
					target="_blank"
					rel="noopener"
					class="font-['Inter'] text-sm text-red-600 hover:text-red-400 transition-colors">
					WhatsApp →
				</a>
			</div>
		</div>
	</div>
{/if}

<style>
    
</style>
