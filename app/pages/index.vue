<script setup lang="ts">
import NavLinkBlock from '~/components/nav-link-block.vue';
import VectorRenderer from '~/components/vector-renderer.vue';

const body = 'Lorem ipsum dolor sit amet consectetur. Dui sed lacus vitae ultricies platea nulla. Scelerisque ipsum tempor adipiscing nulla tellus. Dignissim eget aliquet cursus vestibulum vestibulum pharetra tellus sit.'; 
</script>
<template>
    <VectorRenderer path="././app/assets/icons/close.svg" :width="24" :height="24" :paths="[{fill: '#00f667', stroke: '#00f667'}]"/>
    <AnnotatedSummaryBlock direction="flex-row" annotation_block_alignment="items-baseline" header_classes="w-3/10" heading_classes="text-base text-blue-700 leading-5.5 font-medium" heading_value="Trusties:" />
</template>