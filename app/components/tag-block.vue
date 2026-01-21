<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        value?: string,
        custom?: boolean,
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        tw_direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        tw_padding?: string,
        tw_background?: string,
        tw_border?: string,
        tw_radius?: string,
        tw_width?: string,
        tw_text_classes?: string,
        style_bindings?: {}
        text_style_bindings?: {}
    }>(), {
        value: 'tag block',
        custom: false,
        tw_position: 'relative',
        tw_direction: 'flex-row',
        tw_padding: '',
        tw_background: '',
        tw_border: '',
        tw_radius: '',
        tw_width:'',
        text_classes: ''
    });

    const rootClasses = computed(() => twMerge(props.tw_position,'flex gap-0 items-center px-6 py-1 rounded-[5px] bg-[#b3b3b3]', props.tw_direction, props.tw_padding, props.tw_radius, props.tw_background, props.tw_border, props.tw_width));
    const textClasses = computed(() => twMerge(props.tw_text_classes));
</script>

<template>
    <div :class="rootClasses" :style="props.style_bindings">
        <TextBlock v-if="!props.custom" :tw_classes="textClasses" :label="props.value" as="p" :style_bindings="props.text_style_bindings" />
        <slot v-if="props.custom" />
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>