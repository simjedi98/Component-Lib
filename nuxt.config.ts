import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  css: ['~/assets/css/main.css'],

  build: {
    transpile: ['gsap']
  },

  modules: ['@nuxt/image', 'nuxt-svgo', '@vueuse/nuxt'],
})