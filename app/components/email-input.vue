<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';
    import * as v from 'valibot';

    const model = defineModel<boolean>('validator');
    const mail = defineModel<string>('email');

    const props = withDefaults(defineProps<{
        has_label?: boolean,
        required?: boolean,
        label_value?: string,
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned for your use case.
        tw_direction?: 'flex-row' | 'flex-row-reverse' | 'flex-col' | 'flex-col-reverse', 
        tw_padding?: string, // specify padding for your use case
        tw_gap?: string,
        tw_alignment?: string,
        tw_background?: string, // specify background color of block
        tw_border_radius?: string, // specify radius of block
        tw_border_color?: string, // specify border color of block
        tw_border_width?: string, // specify border width of block
        tw_width?: string,
        placeholder?: string,
        tw_font?: string,
        tw_label_classes?: string,
        tw_error_classes?: string,
        field_styl_bindings?: {},
    }>(), {
        has_label: true,
        required: true,
        label_value: 'Email',
        tw_position: 'relative',
        tw_padding: '',
        tw_direction: 'flex-col',
        tw_gap: '',
        tw_alignment: '',
        tw_background: '',
        tw_border_radius: '',
        tw_border_color: '',
        tw_border_width: '',
        tw_width: '',
        placeholder: '',
        tw_font: '',
        tw_label_classes: '',
        tw_error_classes: ''
    });

    const schema = props.required? v.pipe(v.string(), v.nonEmpty('required field'), v.email('not a valid email')) : v.pipe(v.string(), v.email('not a valid email'));

    type Email = v.InferOutput<typeof schema>;

    const email = ref<Email>('');
    const error = ref('');

    const rootClasses = computed(() => twMerge('relative flex gap-2 w-full', props.tw_position, props.tw_direction, props.tw_padding, props.tw_alignment, props.tw_gap, props.tw_width) );
    const fieldClasses = computed(() => twMerge('relative appearance-none outline-none w-full', props.tw_background, props.tw_border_radius, props.tw_border_color, props.tw_border_width, props.tw_font) );

    const validate = () => {
        const result = v.safeParse(schema, email.value);
        model.value = result.success;
        error.value = result.issues? result.issues[0].message : '';
        mail.value = result.success? result.output : '';
        
    }
</script>

<template>
    <div :class="rootClasses" >
        <TextBlock v-if="props.has_label" :tw_classes="props.tw_label_classes" :label="props.label_value" />
        <input id="email-form" :class="fieldClasses" v-model="email" :placeholder="props.placeholder" @blur="validate" :style="field_styl_bindings" />
        <TextBlock v-if="!model" :tw_classes="props.tw_error_classes" :label="error" />
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>