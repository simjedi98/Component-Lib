<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';

    const model = defineModel<boolean>();
    const props = withDefaults(defineProps<{
        label?: string,
        position?: 'static'|'fixed'|'absolute'|'relative'|'sticky',
        display?: string,
        padding?: string,
        width?: string,
        height?: string,
        custom?: boolean,
        default_color?: string,
        hover_color?: string,
        text_classes?: string
    }>(), {
        label: 'Filter',
        position: 'relative',
        display: '',
        padding: '',
        width: '',
        height: '',
        custom: false,
        default_color: '#808080',
        hover_color: '#333333',
        text_classes: ''
    });

    const color = ref({accent: props.default_color});

    const rootClasses = 'flex cursor-pointer';
    const textClasses = 'relative text-base md:text-xl lg:text-xl font-normal';

    const mergedrootClasses = twMerge(rootClasses, props.position, props.display, props.padding, props.width, props.height);
    const mergedtextClasses = twMerge(textClasses, props.text_classes);

    const toggle = () => model.value = !model.value;

    const hoveron = () => tweens.changeaccent_std(color, props.hover_color, 0.5);

    const hoveroff = () => tweens.changeaccent_std(color, props.default_color, 0.5);

</script>

<template>
    <div :class="mergedrootClasses" @click="toggle" @mouseenter="hoveron" @mouseleave="hoveroff">
        <slot v-if="props.custom" />
        <p v-if="!props.custom" :class="mergedtextClasses" :style="{color: color.accent}">{{ props.label }} {{ model? 'ON' : 'OFF' }}</p>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>