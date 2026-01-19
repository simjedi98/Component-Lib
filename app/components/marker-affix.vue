<script setup lang="ts">
    import { twJoin } from 'tailwind-merge';

    type Vector = {
        fill?: string,
        stroke?: string,
        strokeWidth?: number,
        opacity?: number
    }

    const props = withDefaults(defineProps<{
        path?: string, // specify path to the marker intended for use, strongly recommend use of .svg to prevent unpredictable behavior
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned for your use case.
        tw_padding?: string, // specify padding for your use case
        tw_background?: string, // specify background color of block
        tw_border_radius?: string, // specify radius of block
        tw_border_color?: string, // specify border color of block
        tw_border_width?: string, // specify border width of block
        marker_width?: number, // specify width of marker
        marker_height?: number, // specify height of marker
        fill?: string,
        viewBox?: string,
        path_props?: Vector[],
        style_bindings?: {}
    }>(), {
        tw_position: 'relative',
        tw_padding: 'p-0',
        tw_background: 'bg-transparent',
        tw_border_radius: 'rounded-full',
        tw_border_color: 'border-transparent',
        tw_border_width: 'border-0',
        marker_width: 32,
        marker_height: 32
    });

    const markerClasses = 'relative flex items-center justify-center';

    const rootClasses = computed(() => twJoin('w-fit h-fit', props.tw_position, props.tw_padding, props.tw_background, props.tw_border_radius, props.tw_border_color, props.tw_border_width) );

</script>

<template>
    <div :class="rootClasses" :style="props.style_bindings">
        <div :class="markerClasses" >
            <VectorRenderer v-if="props.path" :path="props.path" :width="props.marker_width" :height="props.marker_height" :view-box="props.viewBox" :fill="props.fill" :paths="props.path_props" />
            <div v-if="!props.path" class="relative w-2.5 h-2.5 bg-black rounded-full"></div>
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";

</style>