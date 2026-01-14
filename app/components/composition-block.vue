<script setup lang="ts">
    import { twJoin, twMerge } from 'tailwind-merge';
    const props = withDefaults(defineProps<{
        heading_value?: string|null, // text value to be rendered as heading
        heading_as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h7', //html element that heading text can be rendered as
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        header_classes?: string,
        body_classes?: string,
        width?: string, // specify width of block
        gap?: string, // specify gap between heading and body content
        heading_classes?: string, // specify utility classes to be applied to heading text
        content_color?: string, // specify default color rich text is rendered as
        content_font_weight?: string, // specify default font weight rich text is rendered as
        content_font_size?: string, // specify default font size rich text is rendered as
        content_font_family?: string, // specify default font family rich text is rendered as
        content_padding?: string // specify padding around rich text
        content_alignment?: 'text-left'|'text-center'|'text-right'|'text-justify'|'text-start'|'text-end', // text alignment direction
    }>(), {
        heading_value: 'Composition Block',
        heading_as: 'h3',
        position: 'relative',
        direction: 'flex-col',
        header_classes:'',
        body_classes: '',
        width: 'w-11/12',
        gap: 'gap-3',
        heading_classes: '',
        content_color: 'text-black',
        content_font_weight: 'font-light',
        content_font_size: 'text-base leading-5.5',
        content_font_family: '',
        content_padding: 'p-0',
        content_alignment: 'text-left'
    })

    const rootClasses = 'flex';
    const headingWrapperClass = 'relative w-full';
    const bodyWrapperClass = 'relative w-full';
    const headingClasses = 'text-3xl leading-9 w-full font-medium';

    const joinedrootClasses = twJoin(rootClasses, props.position, props.direction, props.width, props.gap);
    const mergedheadingWrapperClass = twMerge(headingWrapperClass, props.header_classes);
    const mergedbodyWrapperClass = twMerge(bodyWrapperClass, props.body_classes);
    const mergedheadingClasses = twMerge(headingClasses, props.heading_classes);
</script>

<template>
    <div :class="joinedrootClasses">
        <div :class="mergedheadingWrapperClass" v-if="props.heading_value">
            <HeadingText :classes="mergedheadingClasses" :label="props.heading_value" />
        </div>
        <div :class="mergedbodyWrapperClass">
            <RichText :color="props.content_color" :font_weight="props.content_font_weight" :font_size="props.content_font_size" :font_family="props.content_font_family" :padding="props.content_padding" :align="props.content_alignment" >
                <slot />
            </RichText>
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>