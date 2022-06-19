<script setup lang="ts">
const { data, error } = await useAsyncData('blog', () => queryContent('/blog').find())
definePageMeta({
  layout: 'default',
  title: 'Blog',
})
</script>

<template>
  <main flex justify-center items-center mx-auto container max-w-4xl>
    <div flex flex-col my-20 space-y-4 gap-y-4>
      <h1 text-center text-4xl>
        Blog
      </h1>
      <h2>
        Posts about projects and various other things.
      </h2>
      <ul>
        <li v-for="(post, index) in data" :key="index" flex gap-1>
          {{ post.gitCreatedAt }} -
          <NuxtLink :to="post._path" aria-current="pages">
            {{ post.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>
