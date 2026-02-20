<script setup lang="ts">
    const props = withDefaults(defineProps<{
        items: []
    }>(), {});

    const el = useTemplateRef('swiper');
    const size = computed(() => el.value?.offsetWidth);
    const duration = ref({start: 0, end: 0, duration: 0, speed: 0});
    const displacement = ref({dx: 0, dy: 0});

    const swipeprops = usePointerSwipe(el, {
        disableTextSelect: true, 
        onSwipeStart(e) {
            duration.value.start = 0;
            duration.value.end = 0;
            duration.value.duration = 0;
            duration.value.start = parseInt(performance.now().toFixed(0));
        },
        onSwipe(e) {
            displacement.value.dx = displacement.value.dy + (swipeprops.distanceX.value / size.value!) * 100
        },
        onSwipeEnd(e, direction) {
            duration.value.end = parseInt(performance.now().toFixed(0));
            duration.value.duration = duration.value.end - duration.value.start;
            duration.value.speed = parseFloat( (swipeprops.distanceX.value / duration.value.duration).toFixed(2) );

            if(((displacement.value.dx / 100) - Math.trunc((displacement.value.dx / 100))) > 0.35) {
                tweens.deltax_int(displacement,duration.value.speed > 3.2 ? Math.ceil(displacement.value.dx / 100) * 100 + 100 : Math.ceil(displacement.value.dx / 100) * 100, 0.5);
                displacement.value.dy += duration.value.speed > 3.2 ? 200 : 100;
            } else {
                tweens.deltax_int(displacement,duration.value.speed > 1.5 ? Math.ceil(displacement.value.dx / 100) * 100 : Math.floor(displacement.value.dx / 100) * 100, 0.5);
                displacement.value.dy += duration.value.speed > 1.5 ? 100 : 0;
            }
        },
    });
</script>

<template>
    <div class="relative w-full overflow-hidden bg-sky-400 rounded-[5px]" ref="swiper">
        <div class="relative flex flex-col gap-0 w-fit items-center ">
            <TextBlock :label="`distance: ${swipeprops.distanceX.value}`" tw_classes="text-white py-4 px-18" />
            <TextBlock :label="`direction: ${swipeprops.direction.value}`" tw_classes="text-white py-4 px-18" />
            <TextBlock :label="`container width: ${size}`" tw_classes="text-white py-4 px-18" />
            <TextBlock :label="`start: ${duration.start}ms`" tw_classes="text-white py-4 px-18" />
            <TextBlock :label="`end : ${duration.end}ms`" tw_classes="text-white py-4 px-18" />
            <TextBlock :label="`duration: ${duration.duration}ms`" tw_classes="text-white py-4 px-18" />
            <TextBlock :label="`speed: ${duration.speed}`" tw_classes="text-white py-4 px-18" />
            <TextBlock :label="`displacement: ${displacement.dx}%`" tw_classes="text-white py-4 px-18" />
            <TextBlock :label="`displacement prev: ${displacement.dy}%`" tw_classes="text-white py-4 px-18" />
        </div>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>