<script setup lang="ts">
    import { twJoin, twMerge } from 'tailwind-merge';


    const props = withDefaults(defineProps<{
        heading_value?: string, // text value to be rendered as heading
        heading_as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', //html element heading text can be rendered as
        summary_value?: string|null, // text value to be rendered as body content
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        width?: string, // specify width of block
        gap?: string, // specify gap between heading and body content
        header_width?: string,
        body_classes?: string,
        heading_classes?: string, // specify utility classes to be appled to heading text
        summary_classes?: string // specify utility classes to be appled to body text
        annotation_block_alignment?: 'items-start'|'items-end'|'items-end-safe'|'items-center'|'items-center-safe'|'items-baseline'|'items-baseline-last'|'items-stretch',
        annotation_block_flex_direction?: 'flex-row'|'flex-row-reverse'|'flex-col'|'flex-col-reverse',
        annotation_block_reverse?: boolean, // specify the order of annotation
        annotation_path?: string, // specify path to the marker intended for use, strongly recommend use of .svg to prevent unpredictable behavior
        annotation_padding?: string, //specify padding around marker
        annotation_background?: string, //specify background color of marker block
        annotation_border_radius?: string, //specify radius of marker block
        annotation_border_color?: string, //specify border color of marker block
        annotation_border_width?: string, //specify border width of marker block
        annotation_width?: number, //specify width of marker
        annotation_height?: number //specify height of marker
    }>(), {
        heading_value: 'Annotated Summary Block',
        heading_as: 'h3',
        summary_value: 'A component type that is coupled with a short summary',
        position: 'relative',
        direction: 'flex-col',
        width: 'w-full',
        gap: 'gap-3',
        header_width:'',
        body_classes: '',
        heading_classes: '',
        summary_classes: '',
        annotation_block_flex_direction: 'flex-row',
        annotation_block_alignment: 'items-center',
        annotation_block_reverse: false,
        annotation_padding: 'p-0',
        annotation_background: 'bg-transparent',
        annotation_border_radius: 'rounded-full',
        annotation_border_color: 'border-transparent',
        annotation_border_width: 'border-0',
        annotation_width: 24,
        annotation_height: 24,
    });

    const rootClasses = 'flex';
    const bodyWrapperClass = 'relative w-full';
    const headingClasses = 'text-3xl leading-9 w-full font-medium';
    const summaryClasses = 'text-base text-[#666] w-full';

    const joinedrootClasses = twJoin(props.position, rootClasses, props.direction, props.width, props.gap);
    const mergedbodyWrapperClass = twMerge(bodyWrapperClass, props.body_classes);
    const mergedheadingClasses = twMerge(headingClasses, props.heading_classes);
    const mergedsummaryClasses = twMerge(summaryClasses, props.summary_classes);

</script>

<template>
    <div :class="joinedrootClasses">
        <AnnotatedText :align="props.annotation_block_alignment" :flex_direction="props.annotation_block_flex_direction" :reverse="props.annotation_block_reverse" :text_classes="mergedheadingClasses" :text_as="props.heading_as" :text_value="props.heading_value" :marker_path="props.annotation_path" :marker_padding="props.annotation_padding" :marker_background="props.annotation_background" :marker_border_radius="props.annotation_border_radius" :marker_border_color="props.annotation_border_color" :marker_border_width="props.annotation_border_width" :marker_width="props.annotation_width" :marker_height="props.annotation_height" :width="props.header_width" />
        <div :class="mergedbodyWrapperClass" v-if="props.summary_value">
            <TextBlock :tw_classes="mergedsummaryClasses" :label="props.summary_value" />
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>