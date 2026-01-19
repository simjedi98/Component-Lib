<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        classes?: string // tailwind utility for custom styling text-block
        label?: string, // text value to be rendered
        as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div',
        style_bindings?: {}
    }>(),{
        label: 'Hello world!',
        as: 'p',
        classes: ''
    });

    const baseClasses = 'relative text-base md:text-xl lg:text-xl text-black dark:text-white font-normal leading-5.5 md:leading-6.5 lg:leading-6.5';

    const mergedClasses =  twMerge(baseClasses, props.classes);

</script>

<template>
     <component :is="props.as" :class="mergedClasses" :style="props.style_bindings" >{{props.label}}</component>
</template>

<style scoped>
@import "tailwindcss";

</style> 