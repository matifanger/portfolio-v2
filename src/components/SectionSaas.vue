<script lang="ts" setup>
import colorDict from '@/composables/colorDict'
import sortByImportance from '@/composables/sortByImportance'

const props = defineProps({
  info: {
    type: Array,
    required: true,
  },
})

const get = (item: any, key: string) => (item as any)[key]

const visibleItems = computed(() => (props.info as any[]).filter(item => get(item, 'visible')))

const isEven = (idx: number) => idx % 2 === 0
const indexLabel = (idx: number) => String(idx + 1).padStart(2, '0')


</script>

<template>
  <section id="saas-section" class="relative py-24">

    <div class="section-divider absolute top-0 left-0 right-0" />

    <!-- Subtle grid bg -->
    <div class="absolute inset-0 grid-lines opacity-50 pointer-events-none" />

    <div class="container relative z-10">

      <!-- Section header -->
      <div class="mb-14">
        <div class="flex items-center gap-3 mb-5">
          <span class="font-mono text-xs text-[#FF5E1F] tracking-[0.22em] uppercase">02 · SaaS</span>
          <div class="h-px flex-1 max-w-[180px] bg-gradient-to-r from-[rgba(255,94,31,0.4)] to-transparent" />
        </div>
        <h2 id="saas" class="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
          Products Built
        </h2>
        <p class="text-[#9A9A9A] text-base md:text-lg max-w-xl">
          SaaS products I've built or am currently building and shipping.
        </p>
      </div>

      <!-- SaaS rows with dots separator -->
      <div class="flex flex-col">
        <template v-for="(item, idx) in visibleItems" :key="get(item, 'title')">

          <!-- SaaS card row -->
          <article
            class="flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#1C1B1B] lg:min-h-[380px]"
            :class="isEven(idx) ? 'lg:flex-row' : 'lg:flex-row-reverse'"
          >
            <!-- Image side -->
            <div class="relative h-64 lg:h-auto lg:w-[55%] flex-shrink-0 overflow-hidden bg-[#232222]">
              <img
                class="absolute inset-0 w-full h-full object-cover object-top"
                :src="get(item, 'image')"
                :alt="get(item, 'title')"
              >


              <!-- MRR badge -->
              <div
                v-if="get(item, 'showmmr')"
                class="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-black/65 backdrop-blur-sm border border-green-400/20 rounded-full px-3 py-1"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-glow-pulse" />
                <span class="text-xs font-mono text-green-300 font-semibold">{{ get(item, 'mmr') }} MRR</span>
              </div>
            </div>

            <!-- Content side -->
            <div class="flex flex-col flex-1 p-6 lg:p-9 lg:w-[45%]">

              <!-- Index + SaaS label -->
              <div class="flex items-center gap-3 mb-4">
                <span class="font-mono text-xs text-[#FF5E1F]/60 tabular-nums">{{ indexLabel(idx) }}</span>
                <span class="inline-flex items-center leading-none text-[10px] font-mono text-white font-semibold uppercase tracking-wide bg-[rgba(255,94,31,0.88)] px-2.5 py-1 rounded-full">SaaS</span>
              </div>

              <!-- Title -->
              <h3 class="text-xl lg:text-2xl font-bold text-white leading-snug mb-3">
                {{ get(item, 'title') }}
              </h3>

              <!-- Description -->
              <p class="text-[#C2C2C2] text-sm lg:text-base leading-relaxed flex-1 mb-5">
                {{ get(item, 'description') }}
              </p>

              <!-- Device info -->
              <div v-if="get(item, 'device')" class="flex items-center gap-2 mb-4 text-[#888888]">
                <div class="i-mdi:monitor text-sm" />
                <span class="text-xs font-mono">{{ get(item, 'device') }}</span>
              </div>

              <!-- Tech tags -->
              <div v-if="get(item, 'tech')?.length" class="flex flex-wrap gap-1.5 mb-7">
                <span
                  v-for="(tag, sk) in sortByImportance(get(item, 'tech'))"
                  :key="sk"
                  class="font-mono text-xs px-2 py-0.5 bg-white/[0.05] border border-white/[0.09] rounded-md uppercase tracking-wide"
                  :class="colorDict[tag.toLowerCase() as keyof typeof colorDict]"
                >{{ tag }}</span>
              </div>

              <!-- Action buttons -->
              <div class="flex gap-2.5 flex-wrap mt-auto">
                <a
                  v-if="get(item, 'url')"
                  :href="get(item, 'url')"
                  target="_blank"
                  class="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FF5E1F] text-white text-sm font-semibold rounded-lg hover:bg-[#FF7A45] transition-colors"
                  data-tooltip="Visit product"
                >
                  Visit site
                  <div class="i-mdi:open-in-new text-sm" />
                </a>
              </div>
            </div>
          </article>

          <!-- Dots separator -->
          <div v-if="idx < visibleItems.length - 1" class="flex items-center justify-center gap-1.5 py-8">
            <div
              v-for="n in 48"
              :key="n"
              class="w-[3px] h-[3px] rounded-full"
              :class="n % 8 === 0 ? 'bg-[rgba(255,94,31,0.28)]' : 'bg-white/[0.07]'"
            />
          </div>

        </template>
      </div>
    </div>
  </section>
</template>

