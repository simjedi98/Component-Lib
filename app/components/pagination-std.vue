<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        count: number,
        page: number,
        tw_position?: 'absolute' | 'relative' | 'fixed' | 'static' | 'sticky' | '',
        tw_display?: string,
        tw_padding?: string,
        tw_gap?: string,
        tw_height?: string,
        tw_width?: string,
        color?: string,
        bar_color?: string,
        radius?: string,
    }>(), {
        tw_position: '',
        tw_display: '',
        tw_padding: '',
        tw_gap: '',
        tw_height: '',
        tw_width: '',
        color: '#FFFFFF',
        bar_color: 'bg-white',
        radius: ''
    });

    const rootClasses = computed(() => twMerge('relative flex flex-col gap-10 h-108 items-center justify-center', props.tw_position, props.tw_display, props.tw_padding, props.tw_gap, props.tw_height, props.tw_width));
    const barClasses = computed(() => twMerge('absolute w-0.75', props.bar_color, props.radius));

    const emit = defineEmits<{
        (e: 'change', page: number): void
    }>();
</script>

<template>
    <div :class="rootClasses">
        <div class="relative p-2 border rounded-full cursor-pointer" @click="emit('change', page + 1 > props.count ? 1 : page + 1)">
            <VectorRenderer path="././app/assets/icons/arrow.svg" :width="18" :height="18" :paths="[{fill: props.color, stroke: props.color}]" />
        </div>
        <div><div :class="barClasses"></div></div>
        <div class=""></div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>