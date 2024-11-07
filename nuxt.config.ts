import presetIcons from '@unocss/preset-icons'
import { isProduction } from 'std-env'

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src',

  modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', '@unocss/nuxt', 'nuxt-vuefire'],
  css: ['@/assets/css/main.pcss', '@/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },

  vuefire: {
    auth: false,
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECTID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
  },

  unocss: {
    uno: false,
    preflight: false,
    icons: true,
    presets: [
      presetIcons({
        scale: 1.2,
        extraProperties: {
          display: 'inline-block',
        },
      }),
    ],
  },

  runtimeConfig: {
    public: {
      google_analytics_id: process.env.FIREBASE_MEASUREMENT_ID,
      production_mode: isProduction,
    },
  },

  compatibilityDate: '2024-11-06',
})
