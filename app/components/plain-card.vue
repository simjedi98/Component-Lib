<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        display?: string,
        width?: string,
        height?: string,
        color?: string,
        radius?: string,
        border_width?: string,
        border_style?: string,
        border_color?: string,
        padding?: string,
        shadow?: string,
        alignment?: string
    }>(), {
        position: 'relative',
        display: 'flex flex-col gap-0',
        width: 'w-fit',
        height: 'h-fit',
        color: 'bg-white',
        radius: 'rounded-[10px]',
        border_width: '',
        border_style: '',
        border_color: '',
        padding: 'p-4',
        shadow: 'shadow-[0_1px_4px_rgba(0,0,0,0.25)]',
        alignment: 'items-center'
    });

    const rootClasses = 'dark:bg-[#333333]';

    const mergedrootClasses = twMerge(rootClasses, props.position, props.display, props.width, props.height, props.color, props.radius, props.border_width, props.border_style, props.border_color, props.padding, props.alignment, props.shadow);
</script>

<template>
    <div :class="mergedrootClasses">
        <slot />
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>