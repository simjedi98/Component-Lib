<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        src?: string,
        as?: 'div' | 'span',
        tag?: 'nuxt' | 'img',
        color?: string,
        close_icon?: string,
        expand_icon?: string,
        tw_position?: 'static'|'fixed'|'absolute'|'relative'|'sticky',
        tw_padding?: string,
        width?: number,
        height?: number,
        tw_aspect?: string,
        tw_radius?: string,
        tw_fit?: 'object-contain'|'object-cover'|'object-fill'|'object-none'|'object-scale-down',
        tw_scale?: string
        tw_background?: string
    }>(), {
        as: 'div',
        tag: 'nuxt',
        color: '#000000',
        close_icon: '././app/assets/icons/close.svg',
        expand_icon: '././app/assets/icons/close.svg',
        tw_position: 'relative',
        tw_padding: '',
        width: 40,
        height: 60,
        tw_aspect: '',
        tw_radius: '',
        tw_fit: 'object-cover',
        tw_scale: '',
        tw_background: ''
    });

    const dim = ref({dx: `${props.width}vw`, dy: `${props.height}vh`});
    const pos = ref({dx: '0px', dy: '0px'});
    const alpha = ref({opacity: 0});
    const isActive = ref(false);
    const el = useTemplateRef('card');
    const box = useElementBounding(el);

    const rootClasses = computed(() => twMerge('relative block', props.tw_position, props.tw_padding, props.tw_background) );

    const expand = () => {
        pos.value.dx = `${box.left.value}px`;
        pos.value.dy = `${box.top.value}px`;
        isActive.value = true;
    };

    const shrink = () => {
        tweens.deltax_std(pos, `${box.left.value}px`, 0.5);
        tweens.deltay_std(pos, `${box.top.value}px`, 0.5);
        tweens.deltax_std(dim, `${props.width}vw`, 0.5);
        tweens.deltay_std(dim, `${props.height}vh`, 0.5);
        tweens.changealpha_std(alpha, 0, 0.5);
        setTimeout(() => isActive.value = false, 500)
    }

    watch(isActive, async (newVal) => {
        if(newVal) {
            tweens.deltax_std(pos, '0px', 0.5);
            tweens.deltay_std(pos, '0px', 0.5);
            tweens.deltax_std(dim, '100vw', 0.5);
            tweens.deltay_std(dim, '100vh', 0.5);
            tweens.changealpha_std(alpha, 1, 0.5);
        }
    });

</script>

<template>
    <div v-if="props.src" id="exp-card" :class="rootClasses" ref="card" :style="{width: `${props.width}vw`, height: `${props.height}vh`}">
        <ImageBlock :as="props.as" :path="props.src" :tag="props.tag" :tw_radius="props.tw_radius" :tw_fit="props.tw_fit" :tw_aspect="props.tw_aspect" :tw_scale="props.tw_scale" />
        <div class="absolute bottom-6 right-6 cursor-pointer" @click="expand" :style="{opacity: (1 - alpha.opacity)}" >
            <VectorRenderer :path="expand_icon" :width="20" :height="20" :paths="[{fill: props.color, stroke: props.color}]" />
        </div>
    </div>
    <div v-if="isActive && props.src" id="clone" class="fixed block z-50" :style="{top: pos.dy, left: pos.dx, width: dim.dx, height: dim.dy}">
        <ImageBlock :as="props.as" :path="props.src" :tag="props.tag" :tw_radius="props.tw_radius" :tw_fit="props.tw_fit" :tw_aspect="props.tw_aspect" :tw_scale="props.tw_scale" />
        <div class="absolute top-6 left-6 cursor-pointer" @click="shrink" :style="{opacity: alpha.opacity}" >
            <VectorRenderer :path="close_icon" :width="20" :height="20" :paths="[{fill: props.color, stroke: props.color}]" />
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>