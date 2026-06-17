<script lang="ts">
	import gsap from 'gsap';

	let isScrolled = $state(false);
	let headerRef: HTMLElement;

	$effect(() => {
		// GSAP Entrance
		gsap.from(headerRef, {
			y: -100,
			opacity: 0,
			duration: 1.2,
			ease: 'power4.out',
			delay: 0.2
		});

		// Scroll listener for sticky bg
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header 
	bind:this={headerRef}
	class="fixed top-0 left-0 w-full z-50 transition-colors duration-500 {isScrolled ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800' : 'bg-transparent'}"
>
	<div class="py-4 flex justify-between items-center">
		<a href="/" class="text-2xl font-bold tracking-tighter text-white uppercase group">
			Mechbrif<span class="text-red-600 transition-colors duration-300 group-hover:text-red-500">Auto</span>
		</a>

		<nav class="hidden md:flex gap-8 text-sm font-medium tracking-wide">
			<a href="#services" class="hover:text-red-500 transition-colors">Services</a>
			<a href="#about" class="hover:text-red-500 transition-colors">About</a>
			<a href="#contact" class="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all hover:scale-105 active:scale-95">
				Book a Mechanic
			</a>
		</nav>
	</div>
</header>