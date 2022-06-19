<script setup lang="ts">
const { data, error } = await useAsyncData('guides', () => queryContent('/guides').find())
definePageMeta({
  layout: 'default',
  title: 'Guides',
})
</script>

<template>
  <main flex justify-center items-center mx-auto container max-w-4xl>
    <div flex flex-col my-20 space-y-4 gap-y-4>
      <h1 text-center text-4xl>
        Guides
      </h1>
      <h2>
        Guides about a variety of topics.
      </h2>
      <ul>
        <li v-for="post in data" :key="post._id" flex gap-1>
          {{ post.gitCreatedAt }} -
          <NuxtLink :to="post._path">
            {{ post.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>
