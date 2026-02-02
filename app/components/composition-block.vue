<script setup lang="ts">
    import { twJoin, twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        heading_value?: string|null, // text value to be rendered as heading
        heading_as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h7', //html element that heading text can be rendered as
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        tw_direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        tw_header_classes?: string,
        tw_body_classes?: string,
        tw_width?: string, // specify width of block
        tw_gap?: string, // specify gap between heading and body content
        tw_heading_classes?: string, // specify utility classes to be applied to heading text
        tw_content_color?: string, // specify default color rich text is rendered as
        tw_content_font_weight?: string, // specify default font weight rich text is rendered as
        tw_content_font_size?: string, // specify default font size rich text is rendered as
        tw_content_font_family?: string, // specify default font family rich text is rendered as
        tw_content_padding?: string // specify padding around rich text
        tw_content_alignment?: 'text-left'|'text-center'|'text-right'|'text-justify'|'text-start'|'text-end', // text alignment direction
        heading_style_bindings?: {}
    }>(), {
        heading_value: 'Composition Block',
        heading_as: 'h3',
        tw_position: 'relative',
        tw_direction: 'flex-col',
        tw_header_classes:'',
        tw_body_classes: '',
        tw_width: 'w-11/12',
        tw_gap: 'gap-3',
        tw_heading_classes: '',
        tw_content_color: 'text-black',
        tw_content_font_weight: 'font-light',
        tw_content_font_size: 'text-base leading-5.5',
        tw_content_font_family: '',
        tw_content_padding: 'p-0',
        tw_content_alignment: 'text-left'
    })

    const rootClasses = 'flex';
    const headingWrapperClass = 'relative w-full';
    const bodyWrapperClass = 'relative w-full';
    const headingClasses = 'text-3xl leading-9 w-full font-medium';

    const joinedrootClasses = twJoin(rootClasses, props.tw_position, props.tw_direction, props.tw_width, props.tw_gap);
    const mergedheadingWrapperClass = twMerge(headingWrapperClass, props.tw_header_classes);
    const mergedbodyWrapperClass = twMerge(bodyWrapperClass, props.tw_body_classes);
    const mergedheadingClasses = twMerge(headingClasses, props.tw_heading_classes);
</script>

<template>
    <div :class="joinedrootClasses">
        <div :class="mergedheadingWrapperClass" v-if="props.heading_value">
            <TextBlock :tw_classes="mergedheadingClasses" :label="props.heading_value" :style_bindings="props.heading_style_bindings" />
        </div>
        <div :class="mergedbodyWrapperClass">
            <RichText :color="props.tw_content_color" :font_weight="props.tw_content_font_weight" :font_size="props.tw_content_font_size" :font_family="props.tw_content_font_family" :padding="props.tw_content_padding" :align="props.tw_content_alignment" >
                <slot />
            </RichText>
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>