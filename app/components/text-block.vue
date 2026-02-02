<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        tw_classes?: string // tailwind utility for custom styling text-block
        label?: string, // text value to be rendered
        as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div',
        style_bindings?: {}
    }>(),{
        label: 'Hello world!',
        as: 'p',
        tw_classes: ''
    });

    const baseClasses =  computed(() => twMerge('relative text-sm md:text-base lg:text-xl text-black dark:text-white font-normal leading-5 md:leading-5.5 lg:leading-6.5', props.tw_classes) );

</script>

<template>
     <component :is="props.as" :class="baseClasses" :style="props.style_bindings" >{{props.label}}</component>
</template>

<style scoped>
@import "tailwindcss";

</style> 