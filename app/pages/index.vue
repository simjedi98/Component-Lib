<script setup lang="ts">
import FilterToggle from '~/components/filter-toggle.vue';
import NavLinkBlock from '~/components/nav-link-block.vue';
import VectorRenderer from '~/components/vector-renderer.vue';

const body = 'Lorem ipsum dolor sit amet consectetur. Dui sed lacus vitae ultricies platea nulla. Scelerisque ipsum tempor adipiscing nulla tellus. Dignissim eget aliquet cursus vestibulum vestibulum pharetra tellus sit.';

const filters = reactive({
    featured: false,
    archived: true
});
</script>
<template>
    <MarkerAffix path="././app/assets/icons/close.svg" border_width="border-2" border_color="border-black" padding="p-4"/>
    <AnnotatedSummaryBlock direction="flex-row" annotation_block_alignment="items-baseline" header_classes="w-3/10" heading_classes="text-base text-blue-700 leading-5.5 font-medium" heading_value="Trusties:" />
    <br>
    <FilterToggle v-model="filters.featured" />
</template>