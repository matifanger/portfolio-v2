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
  <div class="min-h-screen flex flex-col items-center justify-center text-center container pt-20 pb-12">
    <span class="font-mono text-xs text-[#FF5E1F] tracking-[0.2em] uppercase mb-4">404 · not found</span>
    <h2 class="text-3xl lg:text-5xl font-bold text-white mb-3">
      There's no robots.txt here
    </h2>
    <p class="text-[#9A9A9A] text-base lg:text-lg mb-10">
      But here's a programming meme for you
    </p>
    <div v-if="data" class="flex flex-col gap-4 items-center max-w-2xl w-full">
      <p class="text-sm font-mono text-[#555555]">
        <span class="text-[#9A9A9A]">context:</span> {{ data.title }}
      </p>
      <img :src="data.url" alt="meme" class="rounded-xl border border-white/[0.07] max-w-full lg:max-w-[750px]">
      <p class="text-xs font-mono text-[#555555] mt-2">
        Don't like it? Press <kbd class="px-1.5 py-0.5 bg-white/[0.06] border border-white/10 rounded text-[#9A9A9A]">F5</kbd>
        or <kbd class="px-1.5 py-0.5 bg-white/[0.06] border border-white/10 rounded text-[#9A9A9A]">ALT+F4</kbd>
      </p>
    </div>
  </div>
</template>
