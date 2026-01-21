<script setup lang="ts">
    import { twJoin } from 'tailwind-merge';

    type Vector = {
        id?: string
        d?: string
        fill?: string
        stroke?: string
        strokeWidth?: number
        opacity?: number
    }

    const props = withDefaults(defineProps<{
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        width?: string, // specify width of block
        gap?: string, // specify gap between heading and body content
        heading_label?: string, // text value to be rendered as heading
        annotation_marker?: string, // specify path to the marker intended for use, strongly recommend use of .svg to prevent unpredictable behavior
        annotation_padding?: string, // specify padding around annotation
        annotation_gap?: string, // specify gap size between annotation marker and text
        annotation_radius?: string,
        annotation_width?: number, // specify width of annotation
        annotation_height?: number, // specify height of annotation
        annotation_viewBox?: string,
        annotation_fill?: string,
        annotation_pathProps?: Vector[],
        annotation_bgcolor?: string, // specify the background color of annotation
        annotation_border_width?: string, // specify the border width of annotation
        annotation_border_color?: string, // specify the border color of annotation
        item_value: string[], // array of list items text values
        heading_font_family?: string, // specify default font family heading text is rendered as
        heading_font_size?: string, // specify default font size heading text is rendered as
        heading_font_weight?: string, // specify default font weight heading text is rendered as
        heading_color?: string, // specify default color heading text is rendered as
        heading_padding?: string, // spacify padding around heading text
        item_font_family?: string, // specify font family list item text is rendered as
        item_font_size?: string, // specify font size list item text is rendered as
        item_font_weight?: string, // specify font weight list item text is rendered as
        item_color?: string, // specify color list item text is rendered as
        annotation_style_bindings?: {},
        heading_style_bindings?: {},
        body_style_bindings?: {}
    }>(), {
        position: 'relative',
        width: 'w-full',
        gap: 'gap-3',
        heading_label: 'Plain List Block',
        annotation_padding: 'py-1 px-4',
        annotation_gap: 'gap-0',
        annotation_width: 24,
        annotation_height: 24,
        annotation_bgcolor: 'bg-transparent',
        annotation_border_width: 'border-0',
        annotation_border_color: 'border-transparent',
        heading_font_family: '',
        heading_font_size: 'text-3xl leading-9',
        heading_font_weight: 'font-medium',
        heading_color: 'text-black',
        heading_padding: 'py-4 px-2',
        item_font_family: '',
        item_font_size: 'text-base leading-5.5',
        item_font_weight: 'font-normal',
        item_color: 'text-[#666]'
    })

    const rootClasses = 'flex flex-col'
    const joinedrootClasses = twJoin(props.position, rootClasses, props.gap, props.width)
    const headingClasses = twJoin(props.heading_padding, props.heading_font_family, props.heading_font_size, props.heading_font_weight, props.heading_color);
    const item_classes = twJoin(props.item_font_family, props.item_font_size, props.item_font_weight, props.item_color);
</script>

<template>
    <div :class="joinedrootClasses">
        <div class="relative w-full" v-if="props.heading_label">
            <TextBlock as="h3" :tw_classes="headingClasses" :label="props.heading_label" :style_bindings="props.heading_style_bindings" />
        </div>
        <div class="relative w-full">
            <AnnotatedText v-for="value in props.item_value" :marker_path="props.annotation_marker" :tw_marker_padding="props.annotation_padding" :tw_gap="props.annotation_gap" :tw_marker_background="props.annotation_bgcolor" :marker_width="props.annotation_width" :marker_height="props.annotation_height" :tw_marker_border_radius="props.annotation_radius" :tw_marker_border_width="props.annotation_border_width" :tw_marker_border_color="props.annotation_border_color" :marker_fill="props.annotation_fill" :marker_viewbox="props.annotation_viewBox" :marker_path_props="props.annotation_pathProps" :tw_text_classes="item_classes" :text_value="value" :marker_style_bindings="props.annotation_style_bindings" :text_style_bindings="props.body_style_bindings" />
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>