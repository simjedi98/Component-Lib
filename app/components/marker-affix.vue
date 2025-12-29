<script setup lang="ts">
    import { twJoin } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        path?: string | null, // specify path to the marker intended for use, strongly recommend use of .svg to prevent unpredictable behavior
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned for your use case.
        padding?: string, // specify padding for your use case
        background?: string, // specify background color of block
        border_radius?: string, // specify radius of block
        border_color?: string, // specify border color of block
        border_width?: string, // specify border width of block
        marker_width?: string, // specify width of marker
        marker_height?: string // specify height of marker
    }>(), {
        path: null,
        position: 'relative',
        padding: 'p-0',
        background: 'bg-transparent',
        border_radius: 'rounded-full',
        border_color: 'border-transparent',
        border_width: 'border-0',
        marker_width: 'w-6',
        marker_height: 'h-6'
    });

    const rootClasses = 'w-fit h-fit';
    const markerClasses = 'relative flex items-center justify-center';

    const rootjoinedClasses = twJoin(rootClasses, props.position, props.padding, props.background, props.border_radius, props.border_color, props.border_width);
    const markerjoinedClasses = twJoin(markerClasses, props.marker_width, props.marker_height)
</script>

<template>
    <div :class="rootjoinedClasses">
        <div :class="markerjoinedClasses" >
            <NuxtImg v-if="props.path" class="w-full h-full object-cover" :src="props.path" />
            <div v-if="!props.path" class="relative w-2.5 h-2.5 bg-black rounded-full"></div>
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";

</style>