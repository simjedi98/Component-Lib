<script setup lang="ts">
   import { twJoin, twMerge } from 'tailwind-merge';

   type Vector = {
      id?: string,
      d?: string,
      fill?: string,
      stroke?: string,
      strokeWidth?: number,
      opacity?: number
   };

   const props = withDefaults(defineProps<{
      as?: 'nuxt' | 'a', // html element link can be rendered as
      url?: string, // url value
      label?: string, // rendered link label
      default_color?: string, // default state color
      hover_color?: string, // hover state color
      active_color?: string, // active state color
      annotation_path?: string,
      annotation_fill?: string,
      annotation_width?: number,
      annotation_height?: number,
      annotation_viewBox?: string,
      annotation_path_props?: Vector[],
      tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
      tw_padding?: string, // specify padding around block
      tw_gap?: string,
      tw_text_classes?: string, // specify link font weight
   }>(), {
      as: 'nuxt',
      url: '/',
      default_color: '#808080',
      hover_color: '#333333',
      active_color: '#0051f2',
      tw_position: 'relative',
      tw_padding: 'p-0',
      tw_gap: 'gap-3',
      annotation_fill: 'none',
      tw_text_classes: ''
   });

   const route = useRoute();
   const isActive = computed(() => (route.path === props.url) );

   const accent = ref({accent: isActive.value? props.active_color : props.default_color});

   const paths = computed(() => {
      const array: Vector[] = [];

      if(props.annotation_path_props) {
         props.annotation_path_props.forEach(path => {
            array.push({id: path.id, d: path.d, fill: accent.value.accent , stroke: accent.value.accent, strokeWidth: path.strokeWidth, opacity: path.opacity})
         });

         return array;
      }

      array.push({fill: accent.value.accent , stroke: accent.value.accent});

      return array;
   });

   const rootClasses = computed(() => twJoin('flex cursor-pointer items-center', props.tw_position, props.tw_padding, props.tw_gap) );
   const textClasses = computed(() => twMerge('text-base font-normal',props.tw_text_classes));

   const onhoveron = () => {
      const tween = tweens.changeaccent_std(accent, props.hover_color, 0.5);
   }

   const onhoveroff = () => {
      const tween = tweens.changeaccent_std(accent, isActive.value? props.active_color : props.default_color, 0.5);
   }

   watch(isActive, async (newVal) => {
      newVal? tweens.changeaccent_std(accent, props.active_color, 0.5) : tweens.changeaccent_std(accent, props.default_color, 0.5);
   } );

</script>

<template>
   <NuxtLink v-if="props.as === 'nuxt'" :class="rootClasses" :to="props.url" @mouseenter="onhoveron" @mouseleave="onhoveroff" >
      <VectorRenderer :path="props.annotation_path" :width="props.annotation_width" :height="props.annotation_height" :view-box="props.annotation_viewBox" :fill="props.annotation_fill" :paths="paths" />
      <TextBlock v-if="props.label" :as="'span'" :label="props.label" :tw_classes="textClasses" :style_bindings="{color: accent.accent}" />
   </NuxtLink>
    <a v-if="props.as === 'a'" :class="rootClasses" :href="props.url" @mouseenter="onhoveron" @mouseleave="onhoveroff" target="_blank" rel="noopener" >
      <VectorRenderer :path="props.annotation_path" :width="props.annotation_width" :height="props.annotation_height" :view-box="props.annotation_viewBox" :fill="props.annotation_fill" :paths="paths" />
      <TextBlock v-if="props.label" :as="'span'" :label="props.label" :tw_classes="textClasses" :style_bindings="{color: accent.accent}" />
    </a>
</template>

<style scoped>
   @import "tailwindcss";
</style>