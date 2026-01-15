<script setup lang="ts">
    type Vector = {
        fill?: string,
        stroke?: string,
        strokeWidth?: number,
        opacity?: number
    }

    const props = defineProps<{
        path: string,
        fill?: string,
        width?: number,
        height?: number,
        viewBox?: string,
        paths?: Vector[]
    }>();
    
    const {data} : any = await useFetch('/api/getvectordata', {query: {path: props.path}});
    
</script>

<template>
    <svg :width="props.width??data.width" :height="props.height??data.height" xmlns="http://www.w3.org/2000/svg" :fill="props.fill??data.fill" :viewBox="props.viewBox??data.viewBox" >
        <g id="layer-1">
            <path v-for="(path, i) in data.paths" :key="i" :d="path.d" :fill="props.paths?.[i as number]?.fill??path.fill" :stroke="props.paths?.[i as number]?.stroke??path.stroke" :stroke-width="props.paths?.[i as number]?.strokeWidth??path.strokeWidth" :opacity="props.paths?.[i as number]?.opacity??path.opacity" />
        </g>
    </svg>
</template>

<style scoped>
   @import "tailwindcss";
</style>