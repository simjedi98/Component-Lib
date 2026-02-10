<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';

    type Vector = {
        id?: string,
        d?: string,
        fill?: string,
        stroke?: string,
        strokeWidth?: number,
        opacity?: number
    }

    const el = useTemplateRef('box');
    const bx = useElementSize(el);
    const ele = useTemplateRef('items');
    const card = useElementSize(ele);
    const height = ref({dy: '14px'});
    const dim = ref({x: 0, y: 0});
    const pos = ref({dy: '0px'});
    const isOpen = defineModel<boolean>();

    const props = withDefaults(defineProps<{
        icon?: string,
        icon_pos?: 'trailing'|'leading',
        icon_width?: number,
        icon_height?: number,
        icon_viewBox?: string,
        icon_fill?: string,
        icon_props?: Vector[],
        toggle_action?: 'onhover'|'onclick',
        default_heading?: boolean,
        default_body?: boolean,
        heading_value?: string,
        body_value?: string,
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky'|'', //specify which utility class for controlling how block is positioned
        tw_width?: string,
        tw_border?: string,
        tw_background?: string,
        tw_header_classes?: string,
        tw_body_classes?: string,
        tw_heading_classes?: string,
        tw_content_classes?: string
    }>(), {
        icon_pos: 'trailing',
        icon_fill: 'none',
        icon_width: 24,
        icon_height: 24,
        toggle_action: 'onhover',
        default_heading: true,
        default_body: true,
        heading_value: 'Heading',
        body_value: 'Item Value',
        tw_position: 'relative',
        tw_width: '',
        tw_border: '',
        tw_background: '',
        tw_heading_classes: '',
        tw_body_classes: ''
    });

    const rootClasses = computed(() => twMerge('relative w-full', props.tw_position, props.tw_border, props.tw_width, props.tw_background, 'overflow-hidden p-0'))
    const headerClasses = computed(() => twMerge('relative flex gap-4 w-full',props.tw_header_classes, 'cursor-pointer'));
    const bodyClasses = computed(() => twMerge('relative flex flex-col gap-1.5 w-full',props.tw_body_classes));

    onMounted(() => {
        height.value.dy = `${bx.height.value}px`;
        pos.value.dy = `${bx.height.value}px`;
        dim.value.x = bx.height.value;
        dim.value.y = card.height.value;
    });

    const toggle = () => isOpen.value = !isOpen.value;

    const hoveron = () => isOpen.value = true;

    const hoveroff = () => isOpen.value = false;
    
    const expand = () => {
        tweens.deltay_elastic(height, `${dim.value.x + dim.value.y}px`, 0.65);
        tweens.deltay_std(pos, '0px', 0.5);
    }

    const shrink = () => {
        tweens.deltay_elastic(height, `${dim.value.x}px`, 0.65);
        tweens.deltay_std(pos, `${dim.value}px`, 0.5);
    }

    watch(isOpen, async (newVal) => {
        if(newVal) {
            expand();
        } else {
            shrink();
        }
    });

</script>

<template>
    <div :class="rootClasses" :style="{height: height.dy}">
        <div v-if="props.toggle_action === 'onhover'" :class="headerClasses" ref="box" @mouseenter="hoveron" @mouseleave="hoveroff" >
            <div v-if="props.icon_pos === 'leading' && default_heading" class="relative"><VectorRenderer :path="props.icon" :width="icon_width" :height="icon_height" :view-box="icon_viewBox" :fill="icon_fill" :paths="icon_props" /></div>
            <div v-if="default_heading" class="relative w-full">
                <TextBlock :label="props.heading_value" :tw_classes="props.tw_heading_classes" />
            </div>
            <div v-if="props.icon_pos === 'trailing' && default_heading" class="relative "><VectorRenderer :path="props.icon" :width="icon_width" :height="icon_height" :view-box="icon_viewBox" :fill="icon_fill" :paths="icon_props" /></div>
            <slot v-if="!default_heading" name="header" :open="isOpen" :hoveron="hoveron" :hoveroff="hoveroff" />
        </div>
        <div v-if="props.toggle_action === 'onclick'" :class="headerClasses" ref="box" @click="toggle" >
            <div v-if="props.icon_pos === 'leading' && default_heading" class="relative"><VectorRenderer :path="props.icon" :width="icon_width" :height="icon_height" :view-box="icon_viewBox" :fill="icon_fill" :paths="icon_props" /></div>
            <div v-if="default_heading" class="relative w-full">
                <TextBlock :label="props.heading_value" :tw_classes="props.tw_heading_classes" />
            </div>
            <div v-if="props.icon_pos === 'trailing' && default_heading" class="relative "><VectorRenderer :path="props.icon" :width="icon_width" :height="icon_height" :view-box="icon_viewBox" :fill="icon_fill" :paths="icon_props" /></div>
            <slot v-if="!default_heading" name="header" :open="isOpen" :toggle="toggle" />
        </div>
        <div :class="bodyClasses" ref="items" :style="{translate: `0px ${pos.dy}`}">
            <TextBlock v-if="default_body" :label="props.body_value" :tw_classes="props.tw_content_classes" />
            <slot v-if="!default_body" name="body" :open="isOpen" />
        </div>
    </div>
    
</template>

<style scoped>
   @import "tailwindcss";
</style>