<script setup lang="ts">
    import { twJoin } from 'tailwind-merge';


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
        style_bindings?: {}
    }>(),{
        value: 'button',
        tw_position: 'relative',
        tw_padding: 'px-4 py-1.5',
        tw_backgroundColor: 'bg-blue-500',
        tw_border_radius: 'rounded-[8px]',
        tw_border_width: 'border-0',
        tw_border_style: 'border-none',
        tw_border_color: 'boder-transparent',
        tw_width: 'w-fit',
        tw_height: 'h-fit',
        as: 'button',
        tw_text_classes: 'text-white font-normal'
    });

    const rootClasses = 'flex items-center justify-center cursor-pointer'

    const joinedrootClasses = twJoin(props.tw_position, rootClasses, props.tw_padding, props.tw_backgroundColor, props.tw_border_radius, props.tw_border_width, props.tw_border_style, props.tw_border_color, props.tw_width, props.tw_height)

</script>

<template>
    <component :is="props.as" :class="joinedrootClasses" :style="props.style_bindings" >
        <TextBlock :tw_classes="props.tw_text_classes" :label="props.value" />
    </component>
</template>

<style scoped>
   @import "tailwindcss";

</style>