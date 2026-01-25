<script setup lang="ts">
    const page = ref<number>(1);
</script>

<template>
    <TextBlock label="About" tw_classes="font-medium text-[#666] text-2xt" />
    <AnnotatedText />
    <ExpandableCard src="/graphics/sergio-velandia-saa.webp"/>
    <PaginationStd :count="3" :page="page" @change="v => page = v"/>
</template>

<style scoped>
   @import "tailwindcss";
</style>