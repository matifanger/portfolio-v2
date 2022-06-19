import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
  css: ['@/assets/styles/main.css'],
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    ['nuxt-content-git', {
      createdAtName: 'gitCreatedAt',
      updatedAtName: 'gitUpdatedAt',
    }],
    '@nuxt/content',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
})
