<script setup lang="ts">
    import { twJoin } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        as_button?: boolean,
        tw_position?: 'static'|'fixed'|'absolute'|'relative'|'sticky',
        tw_padding?: string,
        tw_width?: string,
        tw_background?: string
        color?: string
    }>(), {
        as_button: false,
        tw_position: 'relative',
        tw_padding: 'px-8 py-0.5',
        tw_width: '',
        tw_background: 'backdrop-blur-lg bg-[#50566526]',
        color: '#FFFFFF'
    });

    const cursor = computed(() => props.as_button? 'cursor-pointer' : '' );

    const el = useTemplateRef('wrapper');
    const size = useElementSize(el);

    const dim = ref({x: 8, y: 8});

    const rootClasses = computed(() => twJoin(props.tw_position) );
    const wrapperClasses = computed(() => twJoin('relative', props.tw_padding, props.tw_width, props.tw_background, cursor.value) );

    const hoveron = () => {
        if(!props.as_button) return;
        
        tweens.morphvector_std('#path-vec-1', `M 0 0 H ${dim.value.x -8} V 1 H 1 V 8 H 0 z`, 0.5);
        tweens.morphvector_std('#path-vec-2', `M 0 0 H 8 V -1 H 1 V ${8 - dim.value.y} H 0 z`, 0.5);
        tweens.morphvector_std('#path-vec-3', `M 0 0 H 8 V ${dim.value.x -8} H 7 V 1 H 0 z`, 0.5);
        tweens.morphvector_std('#path-vec-4', `M 0 -8 H -1 V -1 H ${8 - dim.value.x} V 0 H 0 z`, 0.5);
    }

    const hoveroff = () => {
        if(!props.as_button) return;

        tweens.morphvector_std('#path-vec-1', 'M 0 0 H 8 V 1 H 1 V 8 H 0 z', 0.5);
        tweens.morphvector_std('#path-vec-2', 'M 0 0 H 8 V -1 H 1 V -8 H 0 z', 0.5);
        tweens.morphvector_std('#path-vec-3', 'M 0 0 H 8 V 8 H 7 V 1 H 0 z', 0.5);
        tweens.morphvector_std('#path-vec-4', 'M 0 -8 H -1 V -1 H -8 V 0 H 0 z', 0.5);
    }

    watch(size.width, async (newVal) => {
        dim.value.x = newVal === 0 ? 8 : Math.ceil(newVal);
    });

    watch(size.height, async (newVal) => {
        dim.value.y = newVal === 0 ? 8 : Math.ceil(newVal);
    });

</script>

<template>
    <div :class="rootClasses" @mouseenter="hoveron" @mouseleave="hoveroff" ref="wrapper">
        <div :class="wrapperClasses" >
            <slot />
        </div>
        <div class="absolute top-0 left-0">
            <VectorRenderer :width="dim.x - 8" :height="8" :view-box="`0 0 ${dim.x - 8} 8`" fill="none" :paths="[{id: 'path-vec-1', d: 'M 0 0 H 8 V 1 H 1 V 8 H 0 z', fill: props.color, stroke: props.color, strokeWidth: 0.25, opacity: 1}]" />
        </div>
        <div class="absolute bottom-0 left-0">
            <VectorRenderer :width="8" :height="dim.y - 8" :view-box="`0 ${8 - dim.y} 8 ${dim.y - 8}`" fill="none" :paths="[{id: 'path-vec-2', d: 'M 0 0 H 8 V -1 H 1 V -8 H 0 z', fill: props.color, stroke: props.color, strokeWidth: 0.25, opacity: 1}]" />
        </div>
        <div class="absolute top-0 right-0">
            <VectorRenderer :width="8" :height="dim.y - 8" :view-box="`0 0 8 ${dim.y - 8}`" fill="none" :paths="[{id: 'path-vec-3', d: 'M 0 0 H 8 V 8 H 7 V 1 H 0 z', fill: props.color, stroke: props.color, strokeWidth: 0.25, opacity: 1}]" />
        </div>
        <div class="absolute bottom-0 right-0">
            <VectorRenderer :width="dim.x - 8" :height="8" :view-box="`${8 - dim.x} -8 ${dim.x - 8} 8`" fill="none" :paths="[{id: 'path-vec-4', d: 'M 0 -8 H -1 V -1 H -8 V 0 H 0 z', fill: props.color, stroke: props.color, strokeWidth: 0.25, opacity: 1}]" />
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>