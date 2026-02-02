<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';

    type Node = {
        label: string,
        value: string,
        children?: Node[]
    };

    type SlotProps = {
        label: string
        node: Node
    };

    type Overlay = {
        a: string
        b: string
    };

    const props = withDefaults(defineProps<{
        tree: Node[],
        active: string,
        alternate_color?: boolean,
        ovelays?: Overlay,
        tw_tree_top?: string,
        tw_tree_bottom?: string,
        tw_tree_color?: string,
        tw_tree_width?: string,
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky'|'', //specify which utility class for controlling how block is positioned
        tw_display?: string
        tw_padding?: string, // padding around text
        tw_gap?: string
    }>(),{
        tw_position: '',
        tw_display: '',
        tw_padding: '',
        tw_gap: '',
        tw_tree_top: '',
        tw_tree_bottom: '',
        tw_tree_color: '',
        tw_tree_width: ''
    });

    const emit = defineEmits<{
        (e: 'select', value: string): void
    }>();

    defineSlots<{
        default(props: SlotProps): any
    }>();

    const isActiveInSubtree = (node: Node, active: string): boolean => {
        if (!node.children) return false

        return node.children.some(child =>
            child.value === active || isActiveInSubtree(child, active)
        )
    }


    const rootClasses = 'relative flex flex-col gap-1 w-full';
    const treeClasses = 'absolute left-0 top-0 bottom-0 w-0.25 bg-[#00000000]';

    const mergedrootClasses = twMerge(rootClasses, props.tw_position, props.tw_display, props.tw_padding, props.tw_gap);
    const mergedtreeClasses = twMerge(treeClasses, props.tw_tree_top, props.tw_tree_bottom, props.tw_tree_color, props.tw_tree_width);
</script>

<template>
    <div :class="mergedrootClasses">
        <div :class="mergedtreeClasses"></div>
        <div class="px-4 cursor-pointer" v-for="(node, i) in props.tree" :key="node.value" >
            <div @click.stop="emit('select', node.value)" >
                <slot :label="node.label" :node="node" />
            </div>
            <NavigationTree v-if="node.children && (node.value === active || isActiveInSubtree(node, active))" :tree="node.children!" :active="active" :alternate_color="alternate_color" :ovelays="ovelays" :tw_position="props.tw_position" :tw_tree_top="props.tw_tree_top" :tw_tree_bottom="props.tw_tree_bottom" :tw_tree_color="props.tw_tree_color" :tw_tree_width="props.tw_tree_width" :display="props.tw_display" :tw_padding="props.tw_padding" :tw_gap="props.tw_gap" @select="emit('select', $event)" >
                <template #default="slotProps">
                    <slot v-bind="slotProps" />
                </template>
            </NavigationTree>
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>