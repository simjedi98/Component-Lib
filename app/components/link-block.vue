<script setup lang="ts">
    import { twJoin } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        as?: 'nuxt' | 'a', // html element link can be rendered as
        url?: string, // url value
        label?: string, // rendered link label
        default_color?: string, // default state color
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        padding?: string, // specify padding around block
        text_decoration?: string, // specify text decoration
        font_family?: string, // specify link font family
        font_size?: string, // specify link font size
        font_weight?: string, // specify link font weight
    }>(), {
        as: 'nuxt',
        url: '/',
        label: 'home',
        default_color: '#0051f2',
        position: 'relative',
        padding: 'p-0',
        underline: 'no-underline',
        font_family: '',
        font_size: 'text-base',
        font_weight: 'font-normal'
    });

    const accent = ref({accent: props.default_color});
    const rootClasses = 'cursor-pointer';

    const joinedrootClass = twJoin(rootClasses, props.text_decoration, props.position, props.padding, props.font_family, props.font_size, props.font_weight);

    const onhoveron = () => {

    }

    const onhoveroff = () => {

    }

    const onclick = () => {

    }
</script>

<template>
    <NuxtLink v-if="props.as === 'nuxt'" :class="joinedrootClass" :to="props.url" :style="{color: accent.accent}" @mouseenter="onhoveron" @mouseleave="onhoveroff" @click="onclick" >{{ props.label }}</NuxtLink>
    <a v-if="props.as === 'a'" :class="joinedrootClass" :href="props.url" :style="{color: accent.accent}" @mouseenter="onhoveron" @mouseleave="onhoveroff" @click="onclick" target="_blank" rel="noopener" >{{ props.label }}</a>
</template>

<style scoped>
   @import "tailwindcss";
</style>