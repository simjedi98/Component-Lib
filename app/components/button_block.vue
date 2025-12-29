<script setup lang="ts">
    import { twJoin } from 'tailwind-merge';

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
    }>(),{
        value: 'button',
        position: 'relative',
        padding: 'px-4 py-1.5',
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

    const rootClasses = 'flex items-center justify-center cursor-pointer'

    const joinedrootClasses = twJoin(props.position, rootClasses, props.padding, props.backgroundColor, props.border_radius, props.border_width, props.border_style, props.border_color, props.width, props.height)

    const onhoveron = () => {

    }

    const onhoveroff = () => {

    }
</script>

<template>
    <component :is="props.as" :class="joinedrootClasses" @mouseenter="onhoveron" @mouseleave="onhoveroff" >
        <HeadingText :classes="props.text_classes" :label="props.value" />
    </component>
</template>

<style scoped>
   @import "tailwindcss";

</style>