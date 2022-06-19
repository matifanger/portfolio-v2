<script setup>
const route = useRoute()

useHead({
  title: `${route.meta.title ? `${route.meta.title} - ` : ''}Matias Fanger`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Matias Fanger Full Stack Engineer. See my portfolio/blog/projects/guides here.' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/portfolio.png' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
