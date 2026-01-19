<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        padding?: string
        alignment?: string,
        width?: string,
    }>(), {
        position: 'relative',
        direction: 'flex-row',
        padding: '',
        alignment: '',
        width: 'w-full'
    });

    const rootClasses = computed(() => twMerge(props.position, 'flex gap-8 items-center justify-center', props.direction, props.padding, props.alignment, props.width))
</script>

<template>
    <div :class="rootClasses">
        <slot />
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>