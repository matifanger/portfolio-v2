<script lang="ts" setup>
// Call https://meme-api.com/gimme/programminghumor

interface Meme {
  title: string
  url: string
}

const { data } = useFetch<Meme>('https://meme-api.com/gimme/programminghumor', {
  headers: {
    'Content-Type': 'application/json',
  },
})
</script>

<template>
  <div class="pt-36 lg:pt-24 pb-10 mx-auto text-white flex flex-col items-center justify-center text-center container">
    <h2 class="text-2xl lg:text-4xl font-bold">
      There's no robots.txt here
    </h2>
    <p class="mt-2 pb-8 text-lg lg:text-2xl font-bold">
      But here's a programming meme for you
    </p>
    <div v-if="data" class="flex flex-col gap-3 items-center">
      <h3><b>Context:</b> {{ data.title }}</h3>
      <img :src="data.url" alt="meme" class="lg:max-w-[850px]">
      <p class="mt-3">
        Don't like it? Press F5  or  ALT + F4
      </p>
    </div>
  </div>
</template>
