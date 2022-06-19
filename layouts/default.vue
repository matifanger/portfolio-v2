<script setup lang="ts">
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
const projects = useProjectsStore()
projects.loadProjects()
</script>

<template>
  <main>
    <LayoutHeader />
    <slot />
    <GoUp />
    <Footer />
  </main>
</template>
