<script setup lang="ts">
    import icon from '~/assets/icons/close.svg';

    const close = icon;
    console.log(close);
</script>

<template>
    <HeadingText label="About" classes="font-medium text-[#666] text-2xt" />
    <AnnotatedText />
</template>

<style scoped>
   @import "tailwindcss";
</style>