<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        tw_direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        tw_padding?: string
        tw_alignment?: string,
        tw_width?: string,
    }>(), {
        tw_position: 'relative',
        tw_direction: 'flex-row',
        tw_padding: '',
        tw_alignment: '',
        tw_width: 'w-full'
    });

    const rootClasses = computed(() => twMerge(props.tw_position, 'flex gap-8 items-center justify-center', props.tw_direction, props.tw_padding, props.tw_alignment, props.tw_width))
</script>

<template>
    <div :class="rootClasses">
        <slot />
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>