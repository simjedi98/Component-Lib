<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        display?: string,
        width?: string,
        height?: string,
        gradient?: string,
        radius?: string,
        padding?: string,
        alignment?: string
    }>(), {
        position: 'relative',
        display: '',
        width: 'w-fit',
        height: 'h-fit',
        gradient: '',
        radius: 'rounded-[10px]',
        padding: 'p-4',
        alignment: 'items-center'
    });

    const rootClasses = 'flex flex-col gap-0 bg-linear-[#f5f5f5,#ffffff]';

    const mergedrootClasses = twMerge(props.position, rootClasses, props.padding, props.display, props.width, props.height, props.gradient, props.radius, props.alignment);
</script>

<template>
    <div :class="mergedrootClasses">
        <slot />
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>