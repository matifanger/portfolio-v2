<script lang="ts" setup>
import colorDict from '@/composables/colorDict'
import sortByImportance from '@/composables/sortByImportance'

const props = defineProps({
  info: {
    type: Object as PropType<{
      title: string
      description: string
      url: string
      image: string
      tech: string[]
      size: string
      fullimage: string
      type: string
      github: string
    }>,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
})

const imageNotAvailable = ref(false)
const isEven = computed(() => props.index % 2 === 0)
const indexLabel = computed(() => String(props.index + 1).padStart(2, '0'))

const bgGradients = [
  'from-purple-900/60 to-blue-900/40',
  'from-orange-900/60 to-red-900/40',
  'from-green-900/60 to-teal-900/40',
  'from-indigo-900/60 to-purple-900/40',
  'from-rose-900/60 to-pink-900/40',
]
const randomBg = computed(() => {
  const hash = props.info.title.split('').reduce((acc, c) => c.charCodeAt(0) + acc, 0)
  return bgGradients[hash % bgGradients.length]
})

const sizeTooltip: Record<string, string> = {
  small: 'Small · up to 10 pages',
  medium: 'Medium complexity · client site',
  big: 'Large production app',
  huge: 'Enterprise-scale system',
}
const sizeLabel: Record<string, string> = {
  small: 'Small',
  medium: 'Medium',
  big: 'Big',
  huge: 'Huge',
}
const sizeColor: Record<string, string> = {
  small: 'text-green-400 border-green-400/25',
  medium: 'text-yellow-400 border-yellow-400/25',
  big: 'text-orange-400 border-orange-400/25',
  huge: 'text-red-400 border-red-400/25',
}
const sizeClass = computed(() => sizeColor[props.info.size] || 'text-white/40 border-white/10')

onMounted(() => {
  const img = new Image()
  img.src = props.info.image
  img.onerror = () => { imageNotAvailable.value = true }
})
</script>

<template>
  <article
    class="flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#1C1B1B] lg:min-h-[380px]"
    :class="isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'"
  >

    <!-- ── IMAGE SIDE (55%) ── -->
    <div class="relative h-64 lg:h-auto lg:w-[55%] flex-shrink-0 overflow-hidden bg-[#232222]">

      <!-- Fallback gradient placeholder -->
      <template v-if="imageNotAvailable">
        <div :class="['absolute inset-0 flex items-center justify-center bg-gradient-to-br p-10', randomBg]">
          <h3 class="text-2xl font-bold text-white text-center leading-tight">
            {{ info.title }}
          </h3>
        </div>
      </template>

      <!-- Actual image -->
      <img
        v-else
        class="absolute inset-0 w-full h-full object-cover object-top"
        :src="info.image"
        :alt="info.title"
        @error="imageNotAvailable = true"
      >

    </div>

    <!-- ── CONTENT SIDE (45%) ── -->
    <div class="flex flex-col flex-1 p-6 lg:p-9 lg:w-[45%]">

      <!-- Index + type label -->
      <div class="flex items-center gap-3 mb-4">
        <span class="font-mono text-xs text-[#FF5E1F]/60 tabular-nums">{{ indexLabel }}</span>
        <span v-if="info.type" class="font-mono text-[10px] text-[#888888] uppercase tracking-widest border border-white/[0.07] px-2 py-0.5 rounded-full">{{ info.type }}</span>
      </div>

      <!-- Title -->
      <h3 class="text-xl lg:text-2xl font-bold text-white leading-snug mb-3">
        {{ info.title }}
      </h3>

      <!-- Description -->
      <p class="text-[#C2C2C2] text-sm lg:text-base leading-relaxed flex-1 mb-6">
        {{ info.description }}
      </p>

      <!-- Project size -->
      <div v-if="info.size" class="flex items-center gap-2 mb-4">
        <span class="text-xs font-mono text-[#888888]">Project size</span>
        <span
          class="text-xs font-mono border px-2 py-0.5 rounded cursor-default"
          :class="sizeClass"
          :data-tooltip="sizeTooltip[info.size] || info.size"
        >{{ sizeLabel[info.size] || info.size }}</span>
      </div>

      <!-- Tech tags -->
      <div v-if="info.tech?.length" class="flex flex-wrap gap-1.5 mb-7">
        <span
          v-for="(item, key) in sortByImportance(info.tech)"
          :key="key"
          class="font-mono text-xs px-2 py-0.5 bg-white/[0.05] border border-white/[0.09] rounded-md uppercase tracking-wide"
          :class="colorDict[item.toLowerCase() as keyof typeof colorDict]"
        >{{ item }}</span>
      </div>

      <!-- Action buttons -->
      <div class="flex gap-2.5 flex-wrap mt-auto">
        <a
          v-if="info.url"
          :href="info.url"
          target="_blank"
          class="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FF5E1F] text-white text-sm font-semibold rounded-lg hover:bg-[#FF7A45] transition-colors"
          data-tooltip="Visit website"
        >
          Visit site
          <div class="i-mdi:open-in-new text-sm" />
        </a>
        <a
          v-if="info.github"
          :href="info.github"
          target="_blank"
          class="inline-flex items-center gap-1.5 px-4 py-2 border border-white/10 text-[#C2C2C2] text-sm font-semibold rounded-lg hover:border-white/20 hover:bg-white/[0.04] transition-colors"
          data-tooltip="View source code"
        >
          <div class="i-mdi:github text-base" />
          GitHub
        </a>
        <a
          v-if="info.fullimage"
          :href="info.fullimage"
          target="_blank"
          class="inline-flex items-center gap-1.5 px-4 py-2 border border-white/10 text-[#C2C2C2] text-sm font-semibold rounded-lg hover:border-white/20 hover:bg-white/[0.04] transition-colors"
          data-tooltip="Full screenshot preview"
        >
          <div class="i-mdi:image-outline text-base" />
          Preview
        </a>
      </div>
    </div>
  </article>
</template>

