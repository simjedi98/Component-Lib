<script setup lang="ts">
    import { twJoin, twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        heading_value?: string|null, // text value to be rendered as heading
        heading_as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', //html element heading text can be rendered as
        summary_value?: string|null, // text value to be rendered as body content
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        width?: string, // specify width of block
        gap?: string, // specify gap between heading and body content
        heading_classes?: string, // specify utility classes to be appled to heading text
        summary_classes?: string // specify utility classes to be appled to body text
    }>(), {
        heading_value: 'Summary Block',
        heading_as: 'h3',
        summary_value: 'A component type that is coupled with a short summary',
        position: 'relative',
        width: 'w-full',
        gap: 'gap-3',
        heading_classes: '',
        summary_classes: ''
    });

    const rootClasses = 'relative flex flex-col';
    const headingClasses = 'text-3xl leading-9 w-full font-medium';
    const summaryClasses = 'text-base text-[#666] w-full';

    const joinedrootClasses = twJoin(props.position, rootClasses, props.width, props.gap);
    const mergedheadingClasses = twMerge(headingClasses, props.heading_classes);
    const mergedsummaryClasses = twMerge(summaryClasses, props.summary_classes);

</script>

<template>
    <div :class="joinedrootClasses">
        <div class="relative w-full" v-if="props.heading_value">
            <HeadingText :classes="mergedheadingClasses" :as="props.heading_as" :label="props.heading_value" />
        </div>
        <div class="relative w-full" v-if="props.summary_value">
            <HeadingText :classes="mergedsummaryClasses" :label="props.summary_value" />
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>