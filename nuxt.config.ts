import presetIcons from '@unocss/preset-icons'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    ssr: true,

    modules: [
        // Module descriptions -> README.md
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
        '@unocss/nuxt',
        '@unlighthouse/nuxt',
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
      config: JSON.parse(process.env.FIREBASE_CONFIG!)
      // admin: {
      //   serviceAccount: 'path/to/credentials.json',
      // }
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
      fallback: 'light',
      storageKey: 'color-mode',
    },

    vite: {
        build: {
          sourcemap: true
        },
        clearScreen: true,
        logLevel: 'info'
    }
})
