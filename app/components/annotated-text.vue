<script setup lang="ts">
    import { twJoin } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        text_value?: string, // text value to be rendered
        text_classes?: string // tailwind utility for styling text-block
        text_as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div', // html tag text-block is rendered as
        marker_path?: string | null, // specify path to the marker intended for use, strongly recommend use of .svg to prevent unpredictable behavior
        marker_padding?: string, //specify padding around marker
        marker_background?: string, //specify background color of marker block
        marker_border_radius?: string, //specify radius of marker block
        marker_border_color?: string, //specify border color of marker block
        marker_border_width?: string, //specify border width of marker block
        marker_width?: string, //specify width of marker
        marker_height?: string, //specify height of marker
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned for your use case.
        flex_direction?: 'flex-row' | 'flex-row-reverse' | 'flex-col' | 'flex-col-reverse',
        padding?: string, // specify padding around annotation block
        align?: 'items-start' | 'items-end' | 'items-end-safe' | 'items-center' | 'items-center-safe' | 'items-baseline' | 'items-baseline-last' | 'items-stretch', //specify how to align child blocks 
        gap?: string, // specify gap size
        width?: string // specify block width
    }>(),{
        text_value: 'Camel Toe',
        text_as: 'p',
        text_classes: '',
        marker_path: null,
        marker_padding: 'p-0',
        marker_background: 'bg-transparent',
        marker_border_radius: 'rounded-full',
        marker_border_color: 'border-transparent',
        marker_border_width: 'border-0',
        marker_width: 'w-6',
        marker_height: 'h-6',
        position: 'relative',
        flex_direction: 'flex-row',
        padding: 'p-0',
        align: 'items-baseline',
        gap: 'gap-2',
        width: 'w-fit'
    });

    const rootClasses = 'flex';

    const joinedrootClasses = twJoin(rootClasses, props.position, props.flex_direction, props.padding, props.align, props.gap, props.width)
</script>

<template>
    <div :class="joinedrootClasses">
        <MarkerAffix :path="props.marker_path" :marker_width="props.marker_width" :marker_height="props.marker_height" :padding="props.marker_padding" :border_radius="props.marker_border_radius" :border_color="props.marker_border_color" :border_width="props.marker_border_width" :background="props.marker_background" />
        <div>
            <HeadingText :label="props.text_value" :as="props.text_as" :classes="props.text_classes"/>
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";

</style>