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

    const dim = ref({dy: `${100 / props.count}%`, dx: '0%'} );

    const rootClasses = computed(() => twMerge('relative flex flex-col gap-10 h-108 items-center justify-center', props.tw_position, props.tw_display, props.tw_padding, props.tw_gap, props.tw_height, props.tw_width));
    const scrollbarClasses = computed(() => twMerge('relative w-0.75 h-full bg-[#FFFFFF67] overflow-hidden', props.radius));
    const barClasses = computed(() => twMerge('absolute w-full', props.bar_color, props.radius));

    const emit = defineEmits<{
        (e: 'change', page: number): void
    }>();

    watch(() => props.page, async (newPage) => {
        tweens.deltax_std(dim, `${newPage < 2 ? 0 : (newPage - 1) * 100}%`, 0.5);
    });
</script>

<template>
    <div :class="rootClasses">
        <div class="relative p-2 border border-white rounded-full cursor-pointer" @click.stop="emit('change', page + 1 > props.count ? 1 : page + 1)">
            <VectorRenderer path="icons/arrow.svg" :width="18" :height="18" :paths="[{fill: props.color, stroke: props.color}]" />
        </div>
        <div class="relative flex flex-col h-full gap-4 items-center">
            <TextBlock :as="'div'" :label="`${props.page > 9? props.page : '0' + props.page}`"  :style_bindings="{color: props.color}"/>
            <div :class="scrollbarClasses"><div :class="barClasses" :style="{height: dim.dy, translate: `0 ${dim.dx}`}"></div></div>
            <TextBlock :as="'div'" :label="`${props.count > 9 ? props.count : '0' + props.count}`" :style_bindings="{color: props.color}" />
        </div>
        <div class="relative p-2 border border-white rounded-full cursor-pointer" @click.stop="emit('change', page - 1 < 1 ? props.count : page - 1)">
            <VectorRenderer path="icons/arrow.svg" :width="18" :height="18" :paths="[{fill: props.color, stroke: props.color}]" class="rotate-180" />
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>