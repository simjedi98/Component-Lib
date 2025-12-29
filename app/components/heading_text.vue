<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        classes?: string // tailwind utility for custom styling text-block
        label?: string, // text value to be rendered
        as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div',
    }>(),{
        label: 'Hello world!',
        as: 'p',
        classes: ''
    });

    const baseClasses = 'relative text-base text-black font-normal';

    const mergedClasses =  twMerge(baseClasses, props.classes);

</script>

<template>
     <component :is="props.as" :class="mergedClasses" >{{props.label}}</component>
</template>

<style scoped>
@import "tailwindcss";

</style> 