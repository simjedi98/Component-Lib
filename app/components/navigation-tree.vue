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
        tree_top?: string,
        tree_bottom?: string,
        tree_color?: string,
        tree_width?: string,
        position?: 'relative'|'absolute'|'fixed'|'static'|'sticky'|'', //specify which utility class for controlling how block is positioned
        display?: string
        padding?: string, // padding around text
        gap?: string
    }>(),{
        position: '',
        display: '',
        padding: '',
        gap: '',
        tree_top: '',
        tree_bottom: '',
        tree_color: '',
        tree_width: ''
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

    const mergedrootClasses = twMerge(rootClasses, props.position, props.display, props.padding, props.gap);
    const mergedtreeClasses = twMerge(treeClasses, props.tree_top, props.tree_bottom, props.tree_color, props.tree_width);
</script>

<template>
    <div :class="mergedrootClasses">
        <div :class="mergedtreeClasses"></div>
        <div class="px-4 cursor-pointer" v-for="(node, i) in props.tree" :key="node.value" @click.stop="emit('select', node.value)" >
            <slot :label="node.label" :node="node" />
            <NavigationTree v-if="node.children && (node.value === active || isActiveInSubtree(node, active))" :tree="node.children!" :active="active" :alternate_color="alternate_color" :ovelays="ovelays" :position="position" :tree_top="tree_top" :tree_bottom="tree_bottom" :tree_color="tree_color" :tree_width="tree_width" :display="display" :padding="padding" :gap="gap" @select="emit('select', $event)" >
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