<template>
    <div class="page-wrapper relative flex flex-col gap-4 px-5 w-screen h-screen overflow-x-hidden overflow-y-auto items-center justify-center bg-black">
        <NavLinkBlock :links="[{label: 'home', url: '/', as: 'nuxt'},{label: 'about', url: '/about', as: 'nuxt'},{label: 'visit our page', url: 'https://www.instagram.com/katanaboy_sim/', as: 'a'}]" />
        <slot />
    </div>
</template>