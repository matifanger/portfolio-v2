<script lang="ts" setup>
import colorDict from '@/composables/colorDict'
import sortByImportance from '@/composables/sortByImportance'
import { annotate } from 'rough-notation'

const props = defineProps({
  info: {
    type: Array,
    required: true,
  },
})

onMounted(() => {
  if (process.client) {
    const isInViewport = (el: any) => {
      const rect = el.getBoundingClientRect()
      return (
        rect.top >= 0
        && rect.left >= 0
        && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }

    const handleScroll = () => {
      const el: any = document.querySelector('#saas')!
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

const getImageStyles = (item: any) => {
  const zoom = item.zoom || 1
  const offsetX = item.offset?.x || 0
  const offsetY = item.offset?.y || 0
  
  let styles = 'object-fit: cover; width: 100%; height: 100%;'
  
  // Usar object-position para el offset
  if (offsetX !== 0 || offsetY !== 0) {
    const posX = 50 + (offsetX / 3) // Ajustar sensibilidad
    const posY = 50 + (offsetY / 3) // Ajustar sensibilidad
    styles += `object-position: ${posX}% ${posY}%;`
  }
  
  // Usar transform para el zoom
  if (zoom !== 1) {
    styles += `transform: scale(${zoom}); transform-origin: center center;`
  }
  
  return styles
}

const shouldDisableHover = (item: any) => {
  return item.zoom !== undefined || item.offset !== undefined
}

const getItemValue = (item: any, key: string) => {
  return (item as any)[key]
}
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
        <a v-if="getItemValue(item, 'visible')" :key="key" class="group" :href="getItemValue(item, 'url')" target="_blank">
          <div
            class="flex flex-col h-full overflow-hidden rounded shadow-md hover:shadow-lg border border-opacity-70 border-gray-800 group-hover:border-gray-700 transition cursor-pointer"
          >
            <div class="w-full h-56 sm:h-48 overflow-hidden relative">
              <img
                class="object-cover w-full h-full transition"
                :class="getItemValue(item, 'zoom') || getItemValue(item, 'offset') ? '' : 'group-hover:scale-105'"
                :src="getItemValue(item, 'image')"
                :alt="getItemValue(item, 'title')"
                :style="'clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 80%); ' + getImageStyles(item)"
              >
            </div>

            <div class="p-4 -mt-6 overflow-y-visiblerflow-hidden md:-mt-8 flex-1 flex flex-col">
              <div class="font-sans text-lg font-semibold text-slate-200 md:text-xl">
                {{ getItemValue(item, 'title') }}
              </div>

              <div class="md:mt-2">
                <p
                  class="font-sans text-base antialiased font-semibold leading-6 text-slate-400 md:text-lg"
                >
                  {{ getItemValue(item, 'description') }}
                </p>
              </div>

              <div class="flex gap-3 pt-1 md:pt-4 grow items-end">
                <div v-if="getItemValue(item, 'showmmr')" class="flex items-center text-gray-200 gap-1">
                  <div class="text-green-500 flex items-center">
                    <UnoIcon class="i-mdi:cash" />
                  </div>
                  <h1 class="text-sm">{{ getItemValue(item, 'mmr') }} MMR</h1>
                </div>

                <div v-if="getItemValue(item, 'device')" class="flex items-center text-gray-200 gap-1">
                  <div class="i-mdi:home" />
                  <h1 class="text-sm">{{ getItemValue(item, 'device') }}</h1>
                </div>
              </div>
            </div>

            <div
              v-if="getItemValue(item, 'tech') && getItemValue(item, 'tech').length > 0"
              class="flex p-4 align-middle border-t border-opacity-70 border-gray-800 group-hover:border-gray-700 transition"
            >
              <div class="flex gap-2 flex-wrap">
                <span
                  v-for="(tag, sk) in sortByImportance(getItemValue(item, 'tech'))"
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
