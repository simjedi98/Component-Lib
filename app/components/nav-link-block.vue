<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';

    type Link = {
        label: string,
        url: string,
        as: 'nuxt'|'a'
    }
    
    const props = withDefaults(defineProps<{
        links: Link[],
        tw_flex_direction?: 'flex-row'|'flex-row-reverse'|'flex-col'|'flex-col-reverse',
        tw_padding?: string,
        tw_width?: string,
        default_link_color?: string,
        hover_link_color?: string,
        active_link_color?: string,
        tw_link_font_family?: string,
        tw_link_font_size?: string,
        tw_link_font_weight?: string
    }>(), {
        links: () => [],
        tw_flex_direction: 'flex-row',
        tw_padding: '',
        tw_width: '',
        tw_link_font_family: '',
        tw_link_font_size: 'text-base',
        tw_link_font_weight: 'font-normal'
    });

    const rootClasses = computed(() => twMerge('relative flex flex-wrap px-4 gap-6 items-center', props.tw_flex_direction, props.tw_padding, props.tw_width) );

</script>

<template>
    <div :class="rootClasses">
        <div v-for="link in props.links" >
            <LinkBlock :url="link.url" :label="link.label" :as="link.as" tw_padding="py-1 px-2" :default_color="props.default_link_color" :active_color="props.active_link_color" :hover_color="props.hover_link_color" :tw_font_family="props.tw_link_font_family" :tw_font_size="props.tw_link_font_size" :tw_font_weight="props.tw_link_font_weight"/>
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>