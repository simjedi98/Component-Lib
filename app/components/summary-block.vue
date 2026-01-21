<script setup lang="ts">
    import { twJoin, twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        heading_value?: string|null, // text value to be rendered as heading
        heading_as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', //html element heading text can be rendered as
        summary_value?: string|null, // text value to be rendered as body content
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        width?: string, // specify width of block
        gap?: string, // specify gap between heading and body content
        header_classes?: string,
        body_classes?: string,
        heading_classes?: string, // specify utility classes to be appled to heading text
        summary_classes?: string // specify utility classes to be appled to body text
        heading_style_bindings?: {},
        summary_style_bindings?: {}
    }>(), {
        heading_value: 'Summary Block',
        heading_as: 'h3',
        summary_value: 'A component type that is coupled with a short summary',
        position: 'relative',
        direction: 'flex-col',
        width: 'w-full',
        gap: 'gap-3',
        header_classes:'',
        body_classes: '',
        heading_classes: '',
        summary_classes: ''
    });

    const rootClasses = 'flex';
    const headingWrapperClass = 'relative w-full';
    const bodyWrapperClass = 'relative w-full';
    const headingClasses = 'text-3xl w-full leading-9 font-medium';
    const summaryClasses = 'text-base text-[#666] w-full';

    const joinedrootClasses = twJoin(props.position, rootClasses, props.direction, props.width, props.gap);
    const mergedheadingClasses = twMerge(headingClasses, props.heading_classes);
    const mergedheadingWrapperClass = twMerge(headingWrapperClass, props.header_classes);
    const mergedbodyWrapperClass = twMerge(bodyWrapperClass, props.body_classes);
    console.log(mergedheadingClasses);
    const mergedsummaryClasses = twMerge(summaryClasses, props.summary_classes);

</script>

<template>
    <div :class="joinedrootClasses">
        <div :class="mergedheadingWrapperClass" v-if="props.heading_value">
            <TextBlock :tw_classes="mergedheadingClasses" :as="props.heading_as" :label="props.heading_value" :style_bindings="props.heading_style_bindings" />
        </div>
        <div :class="mergedbodyWrapperClass" v-if="props.summary_value">
            <TextBlock :tw_classes="mergedsummaryClasses" :label="props.summary_value" :style_bindings="props.summary_style_bindings" />
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>