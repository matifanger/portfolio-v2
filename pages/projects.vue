<script setup lang="ts">
definePageMeta({
  layout: 'default',
  title: 'Projects',
})
</script>

<template>
  <main flex justify-center items-center mx-auto container max-w-4xl>
    <div flex flex-col my-20 space-y-4 gap-y-4>
      <h1 text-center text-4xl>
        Projects
      </h1>
      <h2>
        The list of all projects that have been completed.
      </h2>
      <ul>
        <li flex flex-col gap-1>
          <NuxtLink to="/blog/project-my-website" aria-current="pages">
            Project 0: My website
          </NuxtLink>
          <NuxtLink to="/blog/private" aria-current="pages">
            Project 1: [Private]
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>
