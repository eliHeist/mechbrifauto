<script lang="ts">
	import { onMount } from 'svelte';
	import * as Card from '$lib/components/ui/card';

	let items = [
		{
			text: "I've never experienced such great customer service! The team at Mechbrif Auto came to my office and serviced my car while I worked. It was so convenient, and they even provided a detailed report afterward. I'll definitely be using their services again!",
			author: 'Sarah M'
		},
		{
			text: 'Mechbrif Auto saved me time and money with their on-site service. Their computerized diagnostics were spot-on, and they fixed the issue the same day. Highly recommended for anyone needing quick, reliable service!',
			author: 'John D'
		},
		{
			text: "Fast, professional, and reasonably priced. The team was friendly and knowledgeable. I'm so glad I found Mechbrif Auto!",
			author: 'Jane S'
		}
	];

    let carouselContainer: HTMLElement;
    let startX: number;
    let currentIndex = 0;

    // Intersection Observer function
    function observeElements() {
        const elements = document.querySelectorAll('.slide');

        const observerOptions: IntersectionObserverInit = {
            threshold: 1.0 // Element is fully visible
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    (entry.target as HTMLElement).style.opacity = "1";
                } else {
                    (entry.target as HTMLElement).style.opacity = "0.5";
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        elements.forEach(element => {
            observer.observe(element);
        });
    }

    function getSlideWidthAndGap() {
        const slide = document.querySelector('.slide') as HTMLElement;
        const gap = 24;

        return slide.offsetWidth + gap;
    }

    function nextSlide() {
        const scrollAmount = getSlideWidthAndGap();
        carouselContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    function previousSlide() {
        const scrollAmount = getSlideWidthAndGap();
        carouselContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }

    function handleTouchStart(event: TouchEvent) {
        startX = event.touches[0].clientX;
    }
    
    function handleTouchMove(event: TouchEvent) {
        if (!startX) return;
        
        let endX = event.touches[0].clientX;
        let diffX = startX - endX;

        if (diffX > 5) {
            nextSlide();
        } else if (diffX < -5) {
            previousSlide();
        }

        startX = 0;
    }

    // onMount lifecycle to call the observeElements function
    onMount(() => {
        observeElements();
    });
</script>

<div class="carousel-container" bind:this={carouselContainer} on:touchstart={handleTouchStart} on:touchmove={handleTouchMove}>
	<div class="carousel">
		{#each items as { text, author }, i}
            <div class="slide w-[18rem] sm:w-full">
                <Card.Root>
                    <Card.Header>
                        <Card.Title>{author}</Card.Title>
                    </Card.Header>
                    <Card.Content>{text}</Card.Content>
                </Card.Root>
            </div>
		{/each}
	</div>
</div>
<div class="control content-grid">
    <div class="space-x-8 mx-auto">
        <button on:click={previousSlide} type="button" class="text-3xl aspect aspect-square w-12 sm:w-16 rounded-full border-2 border-dark-3 rotate-180 transition-all hover:bg-dark-3">
            &#10141;
        </button>
        <button on:click={nextSlide} type="button" class="text-3xl aspect aspect-square w-12 sm:w-16 rounded-full border-2 border-dark-3 transition-all hover:bg-dark-3">
            &#10141;
        </button>
    </div>
</div>

<style lang="scss">
	.carousel-container {
		width: 100%;
		position: relative;
        display: grid;
        place-items: center;
        overflow-x: scroll;
        padding: 1rem;

		.carousel {
			display: grid;
            grid-auto-flow: column;
			overflow: hidden;
			position: relative;
            width: max-content;
            gap: 1.5rem;

            .slide {
                opacity: 0.5;
                transition: opacity 0.5s ease-in-out;
                @media (min-width: 640px){
                    max-width: 33.625rem;
                }
            }
		}
	}
</style>
