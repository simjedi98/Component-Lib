<script setup lang="ts">
    import { twJoin } from 'tailwind-merge'

    type Crumb = {
        label: string
        value: string
        icon?: string
        child?: Crumb
    }

    const props = withDefaults(defineProps<{
        crumb: Crumb,
        cursor: string,
        seperator?: string,
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned for your use case.
        tw_gap?: string,
        color?: string,
        tw_text_classes?: string
    }>(), {
        seperator: 'icons/arrow.svg',
        tw_position: 'relative',
        tw_gap: 'gap-4'
    });

    const rootClasses = computed(() => twJoin(props.tw_position, 'flex items-center', props.tw_gap) );

    const emit = defineEmits<{
        (e: 'select', value: string) : void
    }>();
</script>

<template>
    <div :class="rootClasses" >
        <div>
            <VectorRenderer :path="props.seperator" :width="18" :height="18" :paths="[{fill: props.color, stroke: props.color}]" />
        </div>
        <div class="relative flex items-center gap-2.5" @click.stop="emit('select', crumb.value)">
            <VectorRenderer v-if="props.crumb.icon" :path="props.crumb.icon" :width="18" :height="18" :paths="[{fill: props.color, stroke: props.color}]" />
            <TextBlock :as="'span'" :tw_classes="props.tw_text_classes" :label="props.crumb?.label"/>
        </div>
        <Breadcrumb v-if="props.crumb.child" :crumb="props.crumb?.child" :cursor="props.cursor" />
    </div> 
</template>

<style scoped>
   @import "tailwindcss";
</style>