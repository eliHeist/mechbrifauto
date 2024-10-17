<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { cn } from "$lib/utils.js";

    type $$Props = HTMLAttributes<HTMLHeadingElement> & {};
    let className: $$Props["class"] = undefined;
    export { className as class }
</script>

<li class={className}>
    <svg class="w-3" viewBox="0 0 10 10" fill="none">
        <path d="M5.00023 9.75999C2.36823 9.75999 0.240234 7.63199 0.240234 4.99999C0.240234 2.36799 2.36823 0.23999 5.00023 0.23999C7.63223 0.23999 9.76023 2.36799 9.76023 4.99999C9.76023 7.63199 7.63223 9.75999 5.00023 9.75999ZM5.00023 0.79999C2.67623 0.79999 0.800234 2.67599 0.800234 4.99999C0.800234 7.32399 2.67623 9.19999 5.00023 9.19999C7.32423 9.19999 9.20023 7.32399 9.20023 4.99999C9.20023 2.67599 7.32423 0.79999 5.00023 0.79999Z" fill="#DDC0C0"/>
        <path d="M4.43991 7.07202L2.00391 4.63602L2.39591 4.24402L4.43991 6.28802L7.60391 3.12402L7.99591 3.51602L4.43991 7.07202Z" fill="#DDC0C0"/>
    </svg>
    <div><slot /></div>
</li>

<style>
    li{
        display: flex;
        align-items: center;
        align-content: center;
        column-gap: 0.563rem;
    }
</style>
