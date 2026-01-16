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
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned for your use case.
        padding?: string, // specify padding for your use case
        background?: string, // specify background color of block
        border_radius?: string, // specify radius of block
        border_color?: string, // specify border color of block
        border_width?: string, // specify border width of block
        marker_width?: number, // specify width of marker
        marker_height?: number, // specify height of marker
        fill?: string,
        viewBox?: string,
        path_props?: Vector[]
    }>(), {
        position: 'relative',
        padding: 'p-0',
        background: 'bg-transparent',
        border_radius: 'rounded-full',
        border_color: 'border-transparent',
        border_width: 'border-0',
        marker_width: 32,
        marker_height: 32
    });

    const rootClasses = 'w-fit h-fit';
    const markerClasses = 'relative flex items-center justify-center';

    const rootjoinedClasses = twJoin(rootClasses, props.position, props.padding, props.background, props.border_radius, props.border_color, props.border_width);

</script>

<template>
    <div :class="rootjoinedClasses">
        <div :class="markerClasses" >
            <VectorRenderer v-if="props.path" :path="props.path" :width="props.marker_width" :height="props.marker_height" :view-box="props.viewBox" :fill="props.fill" :paths="props.path_props" />
            <div v-if="!props.path" class="relative w-2.5 h-2.5 bg-black rounded-full"></div>
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";

</style>