<script setup lang="ts">
import { twJoin, twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        progress?: number,
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        tw_border?: string,
        tw_radius?: string,
        tw_width?: string,
        tw_height?: string,
        tw_background?: string,
        shadow_color?: string
    }>(), {
        tw_position: 'relative',
        tw_border: '',
        tw_radius: '',
        tw_width: 'w-100',
        tw_height: 'h-6.25',
        tw_background: 'bg-white',
        shadow_color: '#ffffff'
    });

    const rootClasses = computed(() => twMerge(props.tw_position, 'flex p-2 border-2 border-white', props.tw_border, props.tw_radius, props.tw_width, props.tw_height) );
    const barClasses = computed(() => twMerge('relative h-full', props.tw_background) );
</script>

<template>
    <div :class="rootClasses" :style="{boxShadow: `0 0 20px 0px ${props.shadow_color}67, inset 0 0 20px 0px ${props.shadow_color}67`}">
        <div :class="barClasses" :style="{width: `${props.progress}%`, boxShadow: `0 0 20px 0px ${props.shadow_color}`}"></div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>