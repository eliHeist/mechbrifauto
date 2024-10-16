<script>
  import Footer from "$lib/sections/footer.svelte";
import Navbar from "$lib/sections/navbar.svelte";
import "../app.scss";
</script>

<div class="h-screen w-screen overflow-x-hidden content-grid">
    <Navbar/>
    <div class="full-width content-grid">
        <slot />
    </div>
    <Footer/>
</div>
