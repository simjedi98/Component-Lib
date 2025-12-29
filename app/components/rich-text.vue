<script setup lang="ts">
    import { twJoin } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        as?: 'p' | 'div', // specify html element block is rendered as
        width?: string, // specify block width
        align?: 'text-left'|'text-center'|'text-right'|'text-justify'|'text-start'|'text-end', // text alignment direction
        color?: string, // specify text color
        font_weight?: string, //specify font weight
        font_size?: string, //specify font size
        font_family?: string, //specify font family
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned for your use case.
        padding?: string, //spacify padding around block
        left?: string, 
        right?: string,
        top?: string,
        bottom?: string,
    }>(), {
        as: 'p',
        width: 'w-full',
        align: 'text-left',
        color: 'text-black',
        font_weight: 'font-normal',
        font_size: 'text-base',
        font_family: '',
        position: 'relative',
        padding: 'p-0',
        left: '',
        right: '',
        top: '',
        bottom: '',
    });

    const rootjoinedClasses = twJoin(props.position, props.padding, props.left, props.right, props.top, props.bottom,props.width, props.align, props.color, props.font_weight, props.font_size, props.font_family)
</script>

<template>
    <component :is="props.as" :class="rootjoinedClasses" >
        <slot />
    </component>
</template>

<style scoped>
   @import "tailwindcss";
</style>