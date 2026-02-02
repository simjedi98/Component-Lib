<script setup lang="ts">
    import { twJoin } from 'tailwind-merge';

    type Vector = {
        fill?: string,
        stroke?: string,
        strokeWidth?: number,
        opacity?: number
    }

    const props = withDefaults(defineProps<{
        value?: string, // text value to be rendered
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        tw_padding?: string, // padding around text
        tw_backgroundColor?: string, // button background color
        tw_border_radius?: string, // button roundness
        tw_border_width?: string, // button stroke thickness
        tw_border_style?: 'border-solid'|'border-dashed'|'border-dotted'|'border-double'|'border-hidden'|'border-none'|'divide-solid'|'divide-dashed'|'divide-dotted'|'divide-double'|'divide-hidden'|'divide-none', // button stroke style
        tw_border_color?: string, // button stroke color
        tw_width?: string, // block width
        tw_height?: string, // block height
        as?: 'button'|'div', // html element button is rendered as
        tw_text_classes?: string, // utility classes to be applied to the rendered text
        annotation_path?: string, // specify path to the marker intended for use, strongly recommend use of .svg to prevent unpredictable behavior
        tw_annotation_padding?: string, //specify padding around marker
        tw_annotation_background?: string, //specify background color of marker block
        tw_annotation_border_radius?: string, //specify radius of marker block
        tw_annotation_border_color?: string, //specify border color of marker block
        tw_annotation_border_width?: string, //specify border width of marker block
        annotation_width?: number, //specify width of marker
        annotation_height?: number, //specify height of marker
        annotation_viewBox?: string,
        annotation_fill?: string,
        annotation_path_props?: Vector[],
        annotation_reverse?: boolean //specify the order of annotation
    }>(),{
        value: 'button',
        tw_position: 'relative',
        tw_padding: 'px-4 py-2.5',
        tw_backgroundColor: 'bg-blue-500',
        tw_border_radius: 'rounded-[8px]',
        tw_border_width: 'border-0',
        tw_border_style: 'border-none',
        tw_border_color: 'border-transparent',
        tw_width: 'w-fit',
        tw_height: 'h-fit',
        as: 'button',
        tw_text_classes: 'text-white font-normal'
    });

    const rootClasses = 'flex items-center cursor-pointer'

    const joinedrootClasses = twJoin(props.tw_position, rootClasses, props.tw_padding, props.tw_backgroundColor, props.tw_border_radius, props.tw_border_width, props.tw_border_style, props.tw_border_color, props.tw_width, props.tw_height)

    const onhoveron = () => {

    }

    const onhoveroff = () => {

    }
</script>

<template>
    <component :is="props.as" :class="joinedrootClasses" @mouseenter="onhoveron" @mouseleave="onhoveroff" >
        <AnnotatedText align="items-center" :reverse="props.annotation_reverse" :text_classes="props.tw_text_classes" text_as="p" :text_value="props.value" :marker_path="props.annotation_path" :marker_padding="props.tw_annotation_padding" :marker_background="props.tw_annotation_background" :marker_border_radius="props.tw_annotation_border_radius" :marker_border_color="props.tw_annotation_border_color" :marker_border_width="props.tw_annotation_border_width" :marker_width="props.annotation_width" :marker_height="props.annotation_height" width="w-full" :marker_viewbox="props.annotation_viewBox" :marker_path_props="props.annotation_path_props" :marker_fill="props.annotation_fill"/>
    </component>
</template>

<style scoped>
   @import "tailwindcss";

</style>