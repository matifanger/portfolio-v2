import presetIcons from '@unocss/preset-icons'
import { isProduction } from 'std-env'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    ssr: true,

    modules: [
        // Module descriptions -> README.md
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        // '@nuxt/image-edge',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
        '@unocss/nuxt',
        // '@unlighthouse/nuxt',
        'nuxt-headlessui',
        'nuxt-vuefire',
    ],

    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
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

    // How to install more icons packages -> README.md
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

    css: ['@/assets/css/main.pcss', '@/assets/css/tailwind.css'],

    vueuse: {
        ssrHandlers: true,
    },

    sourcemap: {
        server: true,
        client: true,
    },

    colorMode: {
        classSuffix: '',
        preference: 'dark',
        fallback: 'dark',
        storageKey: 'basic-color-mode',
    },

    vite: {
        build: {
            sourcemap: true,
        },
        clearScreen: true,
        logLevel: 'info',
    },
})
