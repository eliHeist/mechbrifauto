// useGsap.ts
import { onMount, onDestroy } from "svelte";

let gsapPromise: Promise<any> | null = null;

async function loadGsap() {
    if (!gsapPromise) {
        gsapPromise = (async () => {
            const gsapModule = await import("gsap");
            const ScrollTriggerModule = await import("gsap/dist/ScrollTrigger");
            const ScrollSmootherModule = await import("gsap/dist/ScrollSmoother");
            const SplitTextModule = await import("gsap/dist/SplitText");
            
            const gsap = gsapModule.default;
            const ScrollTrigger = ScrollTriggerModule.default;
            const ScrollSmoother = ScrollSmootherModule.default;
            const SplitText = SplitTextModule.default;
            
            gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
            
            return { gsap, ScrollTrigger, ScrollSmoother, SplitText };
        })();
    }
    return gsapPromise;
}

export async function useGsap(setup: () => (() => void) | void) {
    let cleanup: (() => void) | void;

    onMount(async () => {
        await loadGsap(); // Just ensure GSAP is loaded
        cleanup = setup();
        const { ScrollTrigger, ScrollSmoother } = await loadGsap();
        ScrollTrigger.refresh();
        ScrollSmoother.refresh();
    });

    onDestroy(() => {
        cleanup?.();
    });
}