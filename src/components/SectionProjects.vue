<script lang="ts" setup>
const props = defineProps({
  info: {
    type: Array as PropType<any[]>,
    required: true,
  },
})

const visibleItems = computed(() => props.info.filter(item => item.visible))
</script>

<template>
  <section id="portfolio-section" class="relative py-24">

    <div class="section-divider absolute top-0 left-0 right-0" />

    <div class="container">

      <!-- Section header -->
      <div class="mb-14">
        <div class="flex items-center gap-3 mb-5">
          <span class="font-mono text-xs text-[#FF5E1F] tracking-[0.22em] uppercase">01 · Portfolio</span>
          <div class="h-px flex-1 max-w-[180px] bg-gradient-to-r from-[rgba(255,94,31,0.4)] to-transparent" />
        </div>
        <h2 id="portfolio" class="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
          Projects
        </h2>
        <p class="text-[#9A9A9A] text-base md:text-lg max-w-xl">
          Selected projects I've worked on.
        </p>
      </div>

      <!-- Project rows with dots separator -->
      <div class="flex flex-col">
        <template v-for="(post, idx) in visibleItems" :key="post.title">
          <PortfolioCard :info="post" :index="idx" />

          <!-- Dots separator between cards (not after last) -->
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
