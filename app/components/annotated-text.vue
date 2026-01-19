<script setup lang="ts">
    import { twJoin } from 'tailwind-merge';

    type Vector = {
        fill?: string,
        stroke?: string,
        strokeWidth?: number,
        opacity?: number
    }

    const props = withDefaults(defineProps<{
        text_value?: string, // text value to be rendered
        tw_text_classes?: string // tailwind utility for styling text-block
        text_as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div', // html tag text-block is rendered as
        marker_path?: string // specify path to the marker intended for use, strongly recommend use of .svg to prevent unpredictable behavior
        tw_marker_padding?: string, //specify padding around marker
        tw_marker_background?: string, //specify background color of marker block
        tw_marker_border_radius?: string, //specify radius of marker block
        tw_marker_border_color?: string, //specify border color of marker block
        tw_marker_border_width?: string, //specify border width of marker block
        marker_width?: number, //specify width of marker
        marker_height?: number, //specify height of marker
        marker_viewbox?: string,
        marker_path_props?: Vector[],
        marker_fill?: string,
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned for your use case.
        tw_flex_direction?: 'flex-row' | 'flex-row-reverse' | 'flex-col' | 'flex-col-reverse',
        tw_padding?: string, // specify padding around annotation block
        tw_align?: 'items-start' | 'items-end' | 'items-end-safe' | 'items-center' | 'items-center-safe' | 'items-baseline' | 'items-baseline-last' | 'items-stretch', //specify how to align child blocks 
        tw_gap?: string, // specify gap size
        tw_width?: string, // specify block width
        reverse?: boolean // specify to reverse the order of annotation
        text_style_bindings?: {},
        marker_style_bindings?: {}
    }>(),{
        text_value: 'Camel Toe',
        text_as: 'p',
        tw_text_classes: '',
        tw_marker_padding: 'p-0',
        tw_marker_background: 'bg-transparent',
        tw_marker_border_radius: 'rounded-full',
        tw_marker_border_color: 'border-transparent',
        tw_marker_border_width: 'border-0',
        marker_width: 42,
        marker_height: 42,
        tw_position: 'relative',
        tw_flex_direction: 'flex-row',
        tw_padding: 'p-0',
        tw_align: 'items-baseline',
        tw_gap: 'gap-2',
        tw_width: 'w-fit',
        reverse: false
    });

    const rootClasses = computed(() => twJoin('flex', props.tw_position, props.tw_flex_direction, props.tw_padding, props.tw_align, props.tw_gap, props.tw_width) );
</script>

<template>
    <div :class="rootClasses">
        <MarkerAffix v-if="!props.reverse" :path="props.marker_path" :marker_width="props.marker_width" :marker_height="props.marker_height" :tw_padding="props.tw_marker_padding" :tw_border_radius="props.tw_marker_border_radius" :tw_border_color="props.tw_marker_border_color" :tw_border_width="props.tw_marker_border_width" :tw_background="props.tw_marker_background" :view-box="props.marker_viewbox" :path_props="props.marker_path_props" :fill="props.marker_fill" :style_bindings="props.marker_style_bindings" />
        <div>
            <TextBlock :label="props.text_value" :as="props.text_as" :tw_classes="props.tw_text_classes" :style_bindings="props.text_style_bindings"/>
        </div>
        <MarkerAffix v-if="props.reverse" :path="props.marker_path" :marker_width="props.marker_width" :marker_height="props.marker_height" :tw_padding="props.tw_marker_padding" :tw_border_radius="props.tw_marker_border_radius" :tw_border_color="props.tw_marker_border_color" :tw_border_width="props.tw_marker_border_width" :tw_background="props.tw_marker_background" :view-box="props.marker_viewbox" :path_props="props.marker_path_props" :fill="props.marker_fill" :style_bindings="props.marker_style_bindings" />
    </div>
</template>

<style scoped>
   @import "tailwindcss";

</style>