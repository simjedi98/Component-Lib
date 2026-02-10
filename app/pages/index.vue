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

    const accordions = reactive({
        1: false,
        2: false,
        3: false
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

    watch(() => accordions[1], async (newVal) => {
        if(newVal) {
            accordions[2] = false;
            accordions[3] = false;
        }
    });
    watch(() => accordions[2], async (newVal) => {
        if(newVal) {
            accordions[1] = false;
            accordions[3] = false;
        }
    });
    watch(() => accordions[3], async (newVal) => {
        if(newVal) {
            accordions[1] = false;
            accordions[2] = false;
        }
    });

</script>
<template>
    <MarkerAffix path="icons/close.svg" border_width="border-2" border_color="border-black" padding="p-4"/>
    <AnnotatedSummaryBlock direction="flex-row" annotation_block_alignment="items-baseline" header_classes="w-3/10" heading_classes="text-base text-blue-700 leading-5.5 font-medium" heading_value="Trusties:" />
    <br>
    <AccordionItem v-model="accordions[1]" :toggle_action="'onclick'" tw_width="w-1/3" tw_border="border border-[#3374F5] rounded-[5px]" heading_value="Interactive Learning" body_value="Understanding user needs, behaviors, and motivation through methods like interviews, survays and usability testing" icon="icons/arrow-down_nucleo.svg" :icon_props="[{fill: '#FFFFFF', stroke: '#FFFFFF'}]" tw_header_classes="py-1.5 px-4" tw_body_classes="py-1.5 px-6" tw_heading_classes="font-medium text-white text-base md:text-base lg:text-base leading-5.5" tw_content_classes="text-gray-500 text-xs md:text-xs lg:text-xs leading-4.5" />
    <AccordionItem v-model="accordions[2]" :toggle_action="'onclick'" tw_width="w-1/3" tw_border="border border-[#3374F5] rounded-[5px]" heading_value="Interactive Learning" body_value="Understanding user needs, behaviors, and motivation through methods like interviews, survays and usability testing" icon="icons/arrow-down_nucleo.svg" :icon_props="[{fill: '#FFFFFF', stroke: '#FFFFFF'}]" tw_header_classes="py-1.5 px-4" tw_body_classes="py-1.5 px-6" tw_heading_classes="font-medium text-white text-base md:text-base lg:text-base leading-5.5" tw_content_classes="text-gray-500 text-xs md:text-xs lg:text-xs leading-4.5" />
    <AccordionItem v-model="accordions[3]" :toggle_action="'onclick'" :default_body="false" :default_heading="false" tw_width="w-1/3" tw_border="border border-[#3374F5] rounded-[5px]" tw_header_classes="py-1.5 px-4" tw_body_classes="flex flex-col gap-2 py-1.5 px-6" >
        <template #header="{open, toggle}">
            <div class="relative p-1.5 rounded-[5px] bg-sky-950"><VectorRenderer path="icons/code-terminal_nucleo.svg" :paths="[{fill: '#3374F5', stroke: '#3374F5'}]" :width="18" :height="18" fill="none" /></div>
            <div class="relative w-full"><TextBlock label="Interactive learning" tw_classes="font-medium text-white text-base md:text-base lg:text-base leading-5.5" /></div>
            <div class="relative"><VectorRenderer path="icons/arrow-down_nucleo.svg" :paths="[{fill: '#FFFFFF', stroke: '#FFFFFF'}]" :width="24" :height="24" fill="none" /></div>
        </template>
        <template #body="{open}">
            <TextBlock tw_classes="text-gray-500 text-xs md:text-xs lg:text-xs leading-4.5" label="Item 1" />
            <TextBlock tw_classes="text-gray-500 text-xs md:text-xs lg:text-xs leading-4.5" label="Item 2" />
            <TextBlock tw_classes="text-gray-500 text-xs md:text-xs lg:text-xs leading-4.5" label="Item 3" />
        </template>
    </AccordionItem>
    <FilterToggle v-model="filters.featured" />
    <NavigationTree :tree="tree" tw_tree_color="bg-[#9EA6BA]" tw_tree_bottom="bottom-3" :active="activenode" @select="v => activenode = v" >
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
            <AnnotatedButton :annotation_reverse="true" annotation_path="icons/close.svg" :annotation_width="24" :annotation_height="24" :annotation_path_props="[{fill: '#fff', stroke: '#fff'}]" tw_backgroundColor="bg-[#0000]" tw_padding="p-0" tw_border_radius="rounded-0" />
    </CustomWrapper>
    <TagBlock :style_bindings="{backgroundColor: color.accent}" tw_text_classes="text-white" />
    
</template>