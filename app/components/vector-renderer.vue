<script setup lang="ts">
    type Vector = {
        id?: string,
        d?: string,
        fill?: string,
        stroke?: string,
        strokeWidth?: number,
        opacity?: number
    }

    type ParsedSVG = {
        fill: string
        width: number
        height: number
        viewBox: string
        paths: Vector[]
    }

    const props = defineProps<{
        path?: string, // path to svg file
        fill?: string, // fill color of svg element
        width?: number, // width of svg element
        height?: number, // height of svg element
        viewBox?: string, // view-box of svg element
        paths?: Vector[] // properties of the vector's path element
    }>();
    
    const {data} : any = await useFetch<ParsedSVG | null>('/api/getvectordata', {query: {path: props.path}, immediate: !!props.path});
    
</script>

<template>
    <svg :width="props.width??data.width" :height="props.height??data.height" xmlns="http://www.w3.org/2000/svg" :fill="props.fill??data.fill" :viewBox="props.viewBox??data.viewBox" >
        <g id="layer-1">
            <path v-for="(path, i) in data?.paths??props.paths" :key="i" :id="props.paths?.[i as number]?.id??path.id??`path-${i}`" :d="props.paths?.[i as number]?.d??path.d" :fill="props.paths?.[i as number]?.fill??path.fill" :stroke="props.paths?.[i as number]?.stroke??path.stroke" :stroke-width="props.paths?.[i as number]?.strokeWidth??path.strokeWidth" :opacity="props.paths?.[i as number]?.opacity??path.opacity" />
        </g>
    </svg>
</template>

<style scoped>
   @import "tailwindcss";
</style>