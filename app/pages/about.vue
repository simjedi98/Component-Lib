<script setup lang="ts">
    const page = ref<number>(1);
    const validators = reactive({
        email: true,
    });

    const values = reactive({email: ''});

    const color = ref({accent: '#0000'});

    watch(validators, async (newVal) => {
        color.value.accent = newVal.email? '#0000' : '#FA002A' ;
    })

</script>

<template>
    <TextBlock label="About" tw_classes="font-medium text-[#666] text-2xt" />
    <EmailInput :required="false" tw_background="bg-white" tw_label_classes="text-white" tw_error_classes="text-xs md:text-xs lg:text-xs text-red-500 leading-4.5" tw_width="w-1/2" v-model:validator="validators.email" v-model:email="values.email" :field_styl_bindings="{border: `solid 1px ${color.accent}`}"/>
    <AnnotatedText />
    <TextBlock :label="values.email" tw_classes="font-medium text-[#666] text-2xt" />
    <ExpandableCard src="/graphics/sergio-velandia-saa.webp"/>
    <PaginationStd :count="3" :page="page" @change="v => page = v"/>
</template>

<style scoped>
   @import "tailwindcss";
</style>