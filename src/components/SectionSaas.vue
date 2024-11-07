<script lang="ts" setup>
import colorDict from '@/composables/colorDict'
import sortByImportance from '@/composables/sortByImportance'
import { annotate } from 'rough-notation'

const props = defineProps({
  info: {
    type: Array as PropType<
      {
        title: string
        description: string
        url: string
        image: string
        mmr: string
        device: string
        tech: string[]
        visible: boolean
        showmmr: boolean
      }[]
    >,
    required: true,
  },
})

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
      const el: HTMLElement = document.querySelector('#saas')!
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
        id="saas"
        class="tracking-wide uppercase text-[#f9d56e] font-semibold text-3xl sm:text-4xl w-fit"
      >
        SaaS
      </h2>
      <p class="mt-6 mb-6 text-xl text-gray-500">
        SaaS I've built or i'm building.
      </p>
    </div>

    <div class="grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
      <template v-for="(item, key) in props.info">
        <a v-if="item.visible" :key="key" class="group" :href="item.url" target="_blank">
          <div
            class="flex flex-col h-full overflow-hidden rounded shadow-md hover:shadow-lg border border-opacity-70 border-gray-800 group-hover:border-gray-700 transition cursor-pointer"
          >
            <img
              class="object-cover w-full h-56 sm:h-48 group-hover:scale-105 transition"
              :src="item.image"
              :alt="item.title"
              style="clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 80%)"
            >

            <div class="p-4 -mt-6 overflow-y-visiblerflow-hidden md:-mt-8 flex-1 flex flex-col">
              <div class="font-sans text-lg font-semibold text-slate-200 md:text-xl">
                {{ item.title }}
              </div>

              <div class="md:mt-2">
                <p
                  class="font-sans text-base antialiased font-semibold leading-6 text-slate-400 md:text-lg"
                >
                  {{ item.description }}
                </p>
              </div>

              <div class="flex gap-3 pt-1 md:pt-4 grow items-end">
                <div v-if="item.showmmr" class="flex items-center text-gray-200 gap-1">
                  <div class="text-green-500 flex items-center">
                    <UnoIcon class="i-mdi:cash" />
                  </div>
                  <h1 class="text-sm">{{ item.mmr }} MMR</h1>
                </div>

                <div v-if="item.device" class="flex items-center text-gray-200 gap-1">
                  <div class="i-mdi:home" />
                  <h1 class="text-sm">{{ item.device }}</h1>
                </div>
              </div>
            </div>

            <div
              v-if="item.tech && item.tech.length > 0"
              class="flex p-4 align-middle border-t border-opacity-70 border-gray-800 group-hover:border-gray-700 transition"
            >
              <div class="flex gap-2 flex-wrap">
                <span
                  v-for="(tag, sk) in sortByImportance(item.tech)"
                  :key="sk"
                  class="font-sans text-xs p-1 bg-gray-700 bg-opacity-20 text-opacity-80 font-medium uppercase md:text-sm"
                  :class="colorDict[tag.toLowerCase() as keyof typeof colorDict]"
                >{{ tag }}
                </span>
              </div>
            </div>
          </div>
        </a>
      </template>
    </div>
  </div>
</template>
