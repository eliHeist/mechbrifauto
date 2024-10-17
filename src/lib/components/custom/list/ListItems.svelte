<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    type $$Props = HTMLAttributes<HTMLHeadingElement> & {};
    let className: $$Props["class"] = undefined;
    export { className as class }
</script>

<ul class={className}>
    <slot />
</ul>
