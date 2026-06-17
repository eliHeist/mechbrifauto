<script>
	import Footer from "$lib/components/Footer.svelte"
	import Header from "$lib/components/Header.svelte"

    import './layout.css'

    let { children } = $props();
</script>

<Header />

<!-- Page content -->
<main class="content-grid bg-[#0D0D0D] min-h-screen">
	{@render children()}
</main>

<Footer />

<style>
</style>
