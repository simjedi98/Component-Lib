<script setup lang="ts">
    type Crumb = {
        label: string
        value: string
        child?: Crumb
    }

    const data: Crumb = {label: 'Projects', value: '/projects', child: {label: 'Modifia.net', value: '/projects/modifia.net'}};
</script>
<template>
    <div class="page-wrapper relative flex flex-col gap-4 px-5 w-screen h-screen overflow-x-hidden overflow-y-auto  bg-black">
        <div class="relative flex flex-col gap-4 w-full items-center justify-center">
            <ProgressBar :progress="75"/>
            <NavLinkBlock :links="[{label: 'home', url: '/', as: 'nuxt'},{label: 'about', url: '/about', as: 'nuxt'},{label: 'visit our page', url: 'https://www.instagram.com/katanaboy_sim/', as: 'a'}]" />
            <slot />
            <AnnotatedLink url="/" label="home" :annotation_width="18" :annotation_height="18" annotation_path="././app/assets/icons/close.svg" />
        </div>
    </div>
</template>