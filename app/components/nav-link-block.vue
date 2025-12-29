<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';
    type Link = {
        label: string,
        url: string,
        as: 'nuxt'|'a'
    }
    const props = withDefaults(defineProps<{
        links: Link[],
        flex_direction?: 'flex-row'|'flex-row-reverse'|'flex-col'|'flex-col-reverse',
        padding?: string,
        width?: string,
        link_color?: string,
        link_font_family?: string,
        link_font_size?: string,
        link_font_weight?: string
    }>(), {
        links: () => [],
        flex_direction: 'flex-row',
        padding: '',
        width: '',
        link_color: '#666666',
        link_font_family: '',
        link_font_size: 'text-base',
        link_font_weight: 'font-normal'
    });

    const rootClasses = 'relative flex flex-wrap px-4 gap-6 items-center';
    const mergedrootClasses = twMerge(rootClasses, props.flex_direction, props.padding, props.width)
</script>

<template>
    <div :class="mergedrootClasses">
        <div v-for="link in props.links" >
            <LinkBlock :url="link.url" :label="link.label" :as="link.as" padding="py-1 px-2" :default_color="props.link_color" :font_family="props.link_font_family" :font_size="props.link_font_size" :font_weight="props.link_font_weight"/>
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>