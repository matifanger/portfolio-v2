#

<h1 align="center">Nuxt 3 template - Firebase Version</h1>
<p align=center>A Firebase template for Nuxt 3. A few examples inside 🙌</p>

## Preview

![image](https://i.imgur.com/Qux8Gzd.png)

## More templates

<p align=center>[Basic Version](https://github.com/matifanger/nuxt3-template-basic)</p>

## What's included

-   [x] [Tailwind CSS](https://tailwindcss.com/)
-   [x] [HeadlessUI](https://headlessui.dev/)
-   [x] [Pinia](https://pinia.esm.dev/)
-   [x] [VueUse](https://vueuse.org/)
-   [x] [Unlighthouse](https://unlighthouse.dev/)
-   [x] [Nuxt Image](https://v1.image.nuxtjs.org/get-started/)
-   [x] [Color Mode](https://color-mode.nuxtjs.org/)
-   [x] [Uno CSS Icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/)
-   [x] [VueFire](https://vuefire.vuejs.org/)
-   [x] Prettier (configured)
-   [x] ESLint (configured)
-   [x] Vite
-   [x] TypeScript

[Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)

## Highly recommended documentations

[VueFire](https://vuefire.vuejs.org/)
[Firestore docs](https://firebase.google.com/docs/firestore?hl=es-419)
[Auth docs](https://firebase.google.com/docs/auth?hl=es-419)

## How to setup Firebase

Open `nuxt.config.ts` file and add your Firebase config.

```js
vuefire: {
      // Add your config here ↓
      config: {
        apiKey: "...",
        authDomain: "...",
        projectId: "...",
        storageBucket: "...",
        messagingSenderId: "...",
        appId: "...",
        measurementId: "...",
        }
      // ...
    },
```

## How to install more icon packages

Available collections [here](https://icones.js.org/)

```bash
yarn add --dev @iconify-json/[the-collection-you-want]

// example
yarn add --dev @iconify-json/mdi

// or install ALL of them
yarn add --dev @iconify/json
```

## Setup

Make sure to install the dependencies:

You can use any package manager you want (yarn, npm, pnpm, etc.)

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
