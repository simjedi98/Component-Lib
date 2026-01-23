<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';
    const props = withDefaults(defineProps<{
        path: string,
        as?: 'div' | 'span',
        tag?: 'nuxt' | 'img',
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky',
        tw_padding?: string
        tw_width?: string,
        tw_height?: string,
        tw_aspect?: string,
        tw_radius?: string,
        tw_fit?: 'object-contain'|'object-cover'|'object-fill'|'object-none'|'object-scale-down',
        tw_scale?: string
    }>(), {
        as: 'div',
        tag: 'nuxt',
        tw_position: 'relative',
        tw_padding: '',
        tw_width: '',
        tw_height: '',
        tw_aspect: '',
        tw_radius: '',
        tw_fit: 'object-cover',
        tw_scale: '',
    });

    const rootClasses = computed(() => twMerge('w-full h-full overflow-hidden', props.tw_position, props.tw_padding, props.tw_width, props.tw_height, props.tw_radius) );
    const imgClasses = computed(() => twMerge('w-full h-full object-cover', props.tw_fit, props.tw_scale, props.tw_aspect) );
</script>

<template>
    <component :is="props.as" :class="rootClasses" >
        <NuxtImg v-if="props.tag === 'nuxt' &&  props.path" :class="imgClasses" :src="props.path" />
        <img v-if="props.tag === 'img' &&  props.path" :class="imgClasses" :src="props.path" >
    </component>
</template>

<style scoped>
   @import "tailwindcss";
</style>