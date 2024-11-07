<script lang="ts" setup>
import { annotate } from 'rough-notation'

const props = defineProps(['info'])

onMounted(() => {
  if (process.client) {
    const isInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect()
      return (
        rect.top >= 0
        && rect.left >= 0
        && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }

    const handleScroll = () => {
      const el: HTMLElement = document.querySelector('#portfolio')!
      if (isInViewport(el)) {
        // timeout
        setTimeout(() => {
          const annotation = annotate(el, { type: 'underline', color: '#f9d56e' })
          annotation.show()
        }, 1000)
      }
    }

    window.addEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <div class="py-12 mx-auto container">
    <div class="w-full mx-auto">
      <h2
        id="portfolio"
        class="tracking-wide uppercase text-[#f9d56e] font-semibold text-3xl sm:text-4xl w-fit"
      >
        Portfolio
      </h2>
      <p class="mt-6 mb-6 text-xl text-gray-500">
        Some of the best projects that I have made for clients.
      </p>
    </div>

    <div class="grid gap-4 mx-auto md:grid-cols-2 py-2 lg:grid-cols-3">
      <template v-for="post in props.info">
        <PortfolioCard v-if="post.visible" :key="post.title" :info="post" />
      </template>
    </div>
  </div>
</template>
