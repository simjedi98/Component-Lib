<script setup lang="ts">

    type Node = {
        label: string,
        value: string,
        children?: Node[]
    }
 
    const body = 'Lorem ipsum dolor sit amet consectetur. Dui sed lacus vitae ultricies platea nulla. Scelerisque ipsum tempor adipiscing nulla tellus. Dignissim eget aliquet cursus vestibulum vestibulum pharetra tellus sit.';

    const filters = reactive({
        featured: false,
        archived: true
    });

    const tree: Node[] = [
        {label: 'Home', value: 'home'},
        {label: 'Tasks', value: 'tasks', children: [{label: 'Ongoing', value: 'ongoing'}, {label: 'Complete', value: 'complete'}]},
        {label: 'Teams', value: 'teams', children: [{label: 'Design', value: 'design'}, {label: 'Engineering', value: 'engineering'}]}
    ];

    const activenode = ref<string>('');

    const color = ref({accent: '#0051f2'});

    watch(filters, async (newVal) => {
        if(newVal.featured) {
            tweens.changeaccent_std(color, '#FA002A', 1);
        } else {
            tweens.changeaccent_std(color, '#0051f2', 1);
        }
    });

</script>
<template>
    <MarkerAffix path="././app/assets/icons/close.svg" border_width="border-2" border_color="border-black" padding="p-4"/>
    <AnnotatedSummaryBlock direction="flex-row" annotation_block_alignment="items-baseline" header_classes="w-3/10" heading_classes="text-base text-blue-700 leading-5.5 font-medium" heading_value="Trusties:" />
    <br>
    <FilterToggle v-model="filters.featured" />
    <NavigationTree :tree="tree" tree_color="bg-[#9EA6BA]" tree_bottom="bottom-3" :active="activenode" @select="v => activenode = v" >
        <template #default="{label, node}">
            <div class="relative flex w-full px-2.5 items-center">
                <div class="absolute left-[-15px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="1" view-box="0 0 16 1" fill="none">
                        <path stroke="#9EA6BA" stroke-width="0.15" fill="#9EA6BA" d="M 0 0 h 16 v 1 h -16 z" />
                    </svg>
                </div>
                <p :class="(node.value == activenode)? 'text-[#1B1D22]': 'text-[#9EA6BA]'">{{ label }}</p>
            </div>
        </template>
    </NavigationTree>
    <br>
    <CustomWrapper :as_button="true" tw_padding="py-1 px-5">
        <AnnotatedButton :annotation_reverse="true" annotation_path="././app/assets/icons/close.svg" :annotation_width="24" :annotation_height="24" :annotation_path_props="[{fill: '#fff', stroke: '#fff'}]" background-color="bg-[#0000]" padding="p-0" border_radius="rounded-0" />
    </CustomWrapper>
    <TagBlock :style_bindings="{backgroundColor: color.accent}" text_classes="text-white" />
</template>