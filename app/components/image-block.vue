<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';
    const props = withDefaults(defineProps<{
        path: string,
        as?: 'div' | 'span',
        tag?: 'nuxt' | 'img',
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky',
        padding?: string
        width?: string,
        height?: string,
        aspect?: string,
        radius?: string,
        fit?: 'object-contain'|'object-cover'|'object-fill'|'object-none'|'object-scale-down',
        scale?: string
    }>(), {
        as: 'div',
        tag: 'nuxt',
        position: 'relative',
        padding: '',
        width: 'w-screen',
        height: 'h-35',
        aspect: '',
        radius: '',
        fit: 'object-cover',
        scale: '',
    });

    const rootClasses = 'w-full h-full overflow-hidden';
    const imgClasses = 'w-full h-full object-cover';

    const mergedrootClasses = twMerge(rootClasses, props.position, props.padding, props.width, props.height, props.radius);
    const mergedimgClasses = twMerge(imgClasses, props.fit, props.scale);
</script>

<template>
    <component :is="props.as" :class="mergedrootClasses" >
        <NuxtImg v-if="props.tag === 'nuxt'" :class="mergedimgClasses" :src="props.path" />
        <img v-if="props.tag === 'img'" :class="mergedimgClasses" src="" alt="" >
    </component>
</template>

<style scoped>
   @import "tailwindcss";
</style>