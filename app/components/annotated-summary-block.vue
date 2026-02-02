<script setup lang="ts">
    import { twJoin, twMerge } from 'tailwind-merge';

    type Vector = {
        id?: string,
        d?: string,
        fill?: string,
        stroke?: string,
        strokeWidth?: number,
        opacity?: number
    }


    const props = withDefaults(defineProps<{
        heading_value?: string, // text value to be rendered as heading
        heading_as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', //html element heading text can be rendered as
        summary_value?: string|null, // text value to be rendered as body content
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        tw_direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        tw_width?: string, // specify width of block
        tw_gap?: string, // specify gap between heading and body content
        tw_header_width?: string,
        tw_body_classes?: string,
        tw_heading_classes?: string, // specify utility classes to be appled to heading text
        tw_summary_classes?: string // specify utility classes to be appled to body text
        tw_annotation_block_alignment?: 'items-start'|'items-end'|'items-end-safe'|'items-center'|'items-center-safe'|'items-baseline'|'items-baseline-last'|'items-stretch',
        tw_annotation_block_flex_direction?: 'flex-row'|'flex-row-reverse'|'flex-col'|'flex-col-reverse',
        annotation_block_reverse?: boolean, // specify the order of annotation
        annotation_path?: string, // specify path to the marker intended for use, strongly recommend use of .svg to prevent unpredictable behavior
        annotation_path_props?: Vector[], //specify padding around marker
        tw_annotation_padding?: string, //specify padding around marker
        tw_annotation_background?: string, //specify background color of marker block
        tw_annotation_border_radius?: string, //specify radius of marker block
        tw_annotation_border_color?: string, //specify border color of marker block
        tw_annotation_border_width?: string, //specify border width of marker block
        annotation_width?: number, //specify width of marker
        annotation_height?: number //specify height of marker
    }>(), {
        heading_value: 'Annotated Summary Block',
        heading_as: 'h3',
        summary_value: 'A component type that is coupled with a short summary',
        tw_position: 'relative',
        tw_direction: 'flex-col',
        tw_width: 'w-full',
        tw_gap: 'gap-3',
        tw_header_width:'',
        tw_body_classes: '',
        tw_heading_classes: '',
        tw_summary_classes: '',
        tw_annotation_block_flex_direction: 'flex-row',
        tw_annotation_block_alignment: 'items-center',
        annotation_block_reverse: false,
        tw_annotation_padding: 'p-0',
        tw_annotation_background: 'bg-transparent',
        tw_annotation_border_radius: 'rounded-full',
        tw_annotation_border_color: 'border-transparent',
        tw_annotation_border_width: 'border-0',
        annotation_width: 24,
        annotation_height: 24,
    });

    const rootClasses = computed(() => twJoin(props.tw_position, 'flex', props.tw_direction, props.tw_width, props.tw_gap) );
    const bodyWrapperClass = computed(() => twMerge('relative w-full', props.tw_body_classes) );
    const headingClasses = computed(() => twMerge('text-3xl leading-9 w-full font-medium', props.tw_heading_classes) );
    const summaryClasses = computed(() => twMerge('text-base text-[#666] w-full', props.tw_summary_classes) );

</script>

<template>
    <div :class="rootClasses">
        <AnnotatedText :align="props.tw_annotation_block_alignment" :flex_direction="props.tw_annotation_block_flex_direction" :reverse="props.annotation_block_reverse" :text_classes="headingClasses" :text_as="props.heading_as" :text_value="props.heading_value" :marker_path="props.annotation_path" :marker_path_props="props.annotation_path_props" :marker_padding="props.tw_annotation_padding" :marker_background="props.tw_annotation_background" :marker_border_radius="props.tw_annotation_border_radius" :marker_border_color="props.tw_annotation_border_color" :marker_border_width="props.tw_annotation_border_width" :marker_width="props.annotation_width" :marker_height="props.annotation_height" :width="props.tw_header_width" />
        <div :class="bodyWrapperClass" v-if="props.summary_value">
            <TextBlock :tw_classes="summaryClasses" :label="props.summary_value" />
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>