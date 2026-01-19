<script setup lang="ts">
    import { twJoin } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        as?: 'nuxt' | 'a', // html element link can be rendered as
        url?: string, // url value
        label?: string, // rendered link label
        default_color?: string, // default state color
        hover_color?: string, // hover state color
        active_color?: string, // active state color
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        tw_padding?: string, // specify padding around block
        tw_text_decoration?: string, // specify text decoration
        tw_font_family?: string, // specify link font family
        tw_font_size?: string, // specify link font size
        tw_font_weight?: string, // specify link font weight
    }>(), {
        as: 'nuxt',
        url: '/',
        label: 'home',
        default_color: '#808080',
        hover_color: '#333333',
        active_color: '#0051f2',
        tw_position: 'relative',
        tw_padding: 'p-0',
        tw_underline: 'no-underline',
        tw_font_family: '',
        tw_font_size: 'text-base',
        tw_font_weight: 'font-normal'
    });

    const accent = ref({accent: props.default_color});
    const activeaccent = ref({accent: props.default_color});
    const route = useRoute();
    const isActive = computed(() => (route.path === props.url) );


    const rootClasses = computed(() => twJoin('cursor-pointer', props.tw_text_decoration, props.tw_position, props.tw_padding, props.tw_font_family, props.tw_font_size, props.tw_font_weight) );

    const onhoveron = () => {
        const tween = tweens.changeaccent_std(accent, props.hover_color, 0.5);
    }

    const onhoveroff = () => {
        const tween = tweens.changeaccent_std(accent, activeaccent.value.accent, 0.5);
    }

    watch(isActive, async (newVal) => {
        if(newVal) {
            activeaccent.value.accent = props.active_color;
            const tween = tweens.changeaccent_std(accent, activeaccent.value.accent, 0.5);
        } else {
            activeaccent.value.accent = props.default_color;
            const tween = tweens.changeaccent_std(accent, activeaccent.value.accent, 0.5);
        }
    }, {immediate: true});
</script>

<template>
    <NuxtLink v-if="props.as === 'nuxt'" :class="rootClasses" :to="props.url" :style="{color: accent.accent}" @mouseenter="onhoveron" @mouseleave="onhoveroff" >{{ props.label }}</NuxtLink>
    <a v-if="props.as === 'a'" :class="rootClasses" :href="props.url" :style="{color: accent.accent}" @mouseenter="onhoveron" @mouseleave="onhoveroff" target="_blank" rel="noopener" >{{ props.label }}</a>
</template>

<style scoped>
   @import "tailwindcss";
</style>