<script setup lang="ts">
    import { twJoin, twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        heading_value?: string|null, // text value to be rendered as heading
        heading_as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', //html element heading text can be rendered as
        summary_value?: string|null, // text value to be rendered as body content
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        tw_direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        tw_width?: string, // specify width of block
        tw_gap?: string, // specify gap between heading and body content
        tw_header_classes?: string,
        tw_body_classes?: string,
        tw_heading_classes?: string, // specify utility classes to be appled to heading text
        tw_summary_classes?: string, // specify utility classes to be appled to body text
        heading_style_bindings?: {},
        summary_style_bindings?: {}
    }>(), {
        heading_value: 'Summary Block',
        heading_as: 'h3',
        summary_value: 'A component type that is coupled with a short summary',
        tw_position: 'relative',
        tw_direction: 'flex-col',
        tw_width: 'w-full',
        tw_gap: 'gap-3',
        tw_header_classes:'',
        tw_body_classes: '',
        tw_heading_classes: '',
        tw_summary_classes: ''
    });

    const rootClasses = computed(() => twJoin(props.tw_position, 'flex', props.tw_direction, props.tw_width, props.tw_gap) );
    const headingClasses = computed(() => twMerge('text-3xl w-full leading-9 font-medium', props.tw_heading_classes));
    const headingWrapperClass = computed(() => twMerge('relative w-full', props.tw_header_classes));
    const bodyWrapperClass = computed(() => twMerge('relative w-full', props.tw_body_classes));
    const summaryClasses = computed(() => twMerge('text-base text-[#666666] w-full', props.tw_summary_classes));

</script>

<template>
    <div :class="rootClasses">
        <div :class="headingWrapperClass" v-if="props.heading_value">
            <TextBlock :tw_classes="headingClasses" :as="props.heading_as" :label="props.heading_value" :style_bindings="props.heading_style_bindings" />
        </div>
        <div :class="bodyWrapperClass" v-if="props.summary_value">
            <TextBlock :tw_classes="summaryClasses" :label="props.summary_value" :style_bindings="props.summary_style_bindings" />
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>