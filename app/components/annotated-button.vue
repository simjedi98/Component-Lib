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
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        padding?: string, // padding around text
        backgroundColor?: string, // button background color
        border_radius?: string, // button roundness
        border_width?: string, // button stroke thickness
        border_style?: 'border-solid'|'border-dashed'|'border-dotted'|'border-double'|'border-hidden'|'border-none'|'divide-solid'|'divide-dashed'|'divide-dotted'|'divide-double'|'divide-hidden'|'divide-none', // button stroke style
        border_color?: string, // button stroke color
        width?: string, // block width
        height?: string, // block height
        as?: 'button'|'div', // html element button is rendered as
        text_classes?: string, // utility classes to be applied to the rendered text
        annotation_path?: string, // specify path to the marker intended for use, strongly recommend use of .svg to prevent unpredictable behavior
        annotation_padding?: string, //specify padding around marker
        annotation_background?: string, //specify background color of marker block
        annotation_border_radius?: string, //specify radius of marker block
        annotation_border_color?: string, //specify border color of marker block
        annotation_border_width?: string, //specify border width of marker block
        annotation_width?: number, //specify width of marker
        annotation_height?: number, //specify height of marker
        annotation_viewBox?: string,
        annotation_fill?: string,
        annotation_path_props?: Vector[],
        annotation_reverse?: boolean //specify the order of annotation
    }>(),{
        value: 'button',
        position: 'relative',
        padding: 'px-4 py-2.5',
        backgroundColor: 'bg-blue-500',
        border_radius: 'rounded-[8px]',
        border_width: 'border-0',
        border_style: 'border-none',
        border_color: 'boder-transparent',
        width: 'w-fit',
        height: 'h-fit',
        as: 'button',
        text_classes: 'text-white font-normal'
    });

    const rootClasses = 'flex items-center cursor-pointer'

    const joinedrootClasses = twJoin(props.position, rootClasses, props.padding, props.backgroundColor, props.border_radius, props.border_width, props.border_style, props.border_color, props.width, props.height)

    const onhoveron = () => {

    }

    const onhoveroff = () => {

    }
</script>

<template>
    <component :is="props.as" :class="joinedrootClasses" @mouseenter="onhoveron" @mouseleave="onhoveroff" >
        <AnnotatedText align="items-center" :reverse="props.annotation_reverse" :text_classes="props.text_classes" text_as="p" :text_value="props.value" :marker_path="props.annotation_path" :marker_padding="props.annotation_padding" :marker_background="props.annotation_background" :marker_border_radius="props.annotation_border_radius" :marker_border_color="props.annotation_border_color" :marker_border_width="props.annotation_border_width" :marker_width="props.annotation_width" :marker_height="props.annotation_height" width="w-full" :marker_viewbox="props.annotation_viewBox" :marker_path_props="props.annotation_path_props" :marker_fill="props.annotation_fill"/>
    </component>
</template>

<style scoped>
   @import "tailwindcss";

</style>