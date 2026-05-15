<script lang="ts" setup>
const links = useSocials()

const yearsOfExp = computed(() => {
  const start = new Date(2021, 1, 1) // February 2021
  const now = new Date()
  return `${Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25))}+`
})

const techs = [
  'Vue 3',
  'Nuxt 3',
  'TypeScript',
  'Tailwind CSS',
  'Firebase',
  'PostgreSQL',
  'Nest.js',
  'React',
  'Node.js',
  'Pinia',
  'Cloudflare',
  'OpenAI',
  'Python',
  'Electron',
  'NuxtHub',
  'Drizzle ORM',
  'Shadcn/ui',
  'Vite',
  'Docker',
  'Supabase',
]
</script>

<template>
  <section class="relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-[#151414]">
    <!-- Dot grid background -->
    <div class="absolute inset-0 dot-grid opacity-100 pointer-events-none" />

    <!-- Orange glow — top right -->
    <div class="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#FF5E1F] opacity-[0.05] blur-[120px] pointer-events-none" />
    <!-- Orange glow — bottom left -->
    <div class="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#FF5E1F] opacity-[0.04] blur-[100px] pointer-events-none" />

    <!-- Two-column layout -->
    <div class="relative z-10 container pt-20 pb-8">
      <div class="max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-8">
        <!-- LEFT: text content -->
        <div class="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-1">
          <!-- Status badge -->
          <!-- <div class="inline-flex items-center gap-2 border border-[rgba(255,94,31,0.25)] bg-[rgba(255,94,31,0.07)] rounded-full px-4 py-1.5 mb-8">
            <span class="w-1.5 h-1.5 rounded-full bg-[#FF5E1F] animate-glow-pulse" />
            <span class="text-xs font-mono text-[#FF5E1F] tracking-[0.18em] uppercase">Available for work</span>
          </div> -->

          <!-- Name -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-5">
            Matias<br>
            <span class="text-gradient-orange">Fanger</span>
          </h1>

          <!-- Role -->
          <p class="text-base text-[#9A9A9A] mb-3 font-mono tracking-wide">
            <span class="text-[#FF5E1F]">// </span>full-stack developer
          </p>
          <p class="text-[#9A9A9A] text-base max-w-md mb-10 leading-relaxed">
            Building products that are <span class="text-white font-medium">fast, scalable,</span> and
            <span class="text-white font-medium">actually shipped</span>.
          </p>

          <!-- CTAs -->
          <div class="flex items-center justify-center lg:justify-start gap-3 flex-wrap mb-10">
            <a href="#portfolio-section" class="hero-btn-primary">
              View Projects
              <div class="i-mdi:arrow-down text-base" />
            </a>
            <a :href="links.whatsapp" target="_blank" class="hero-btn-secondary">
              <div class="i-mdi:whatsapp text-lg" />
              Contact me
            </a>
          </div>

          <!-- Stats row -->
          <div class="flex items-center gap-8 flex-wrap justify-center lg:justify-start">
            <div class="flex flex-col items-center lg:items-start">
              <span class="text-2xl font-bold text-white">{{ yearsOfExp }}</span>
              <span class="text-xs font-mono text-[#555555] uppercase tracking-widest mt-0.5">Years exp.</span>
            </div>
            <div class="w-px h-8 bg-white/[0.08]" />
            <div class="flex flex-col items-center lg:items-start">
              <span class="text-2xl font-bold text-white">30+</span>
              <span class="text-xs font-mono text-[#555555] uppercase tracking-widest mt-0.5">Projects</span>
            </div>
            <div class="w-px h-8 bg-white/[0.08]" />
            <div class="flex flex-col items-center lg:items-start">
              <span class="text-2xl font-bold text-white">5+</span>
              <span class="text-xs font-mono text-[#555555] uppercase tracking-widest mt-0.5">SaaS built</span>
            </div>
          </div>
        </div>

        <!-- RIGHT: profile photo -->
        <div class="relative flex-shrink-0 flex justify-center">
          <!-- Ambient glow behind photo -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#FF5E1F] opacity-[0.08] blur-[60px]" />

          <div class="relative">
            <!-- Photo -->
            <div class="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-2 ring-[#FF5E1F]/20 ring-offset-4 ring-offset-[#151414]">
              <img
                src="/main.png"
                alt="Matias Fanger"
                class="w-full h-full object-cover"
                style="object-position: center 15%;"
              >
            </div>

            <!-- Code icon badge -->
            <div
              class="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-[#FF5E1F] border-4 border-[#151414] flex items-center justify-center shadow-[0_0_16px_rgba(255,94,31,0.5)]"
              data-tooltip="Full Stack Developer"
            >
              <div class="i-mdi:code-braces text-white text-base" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator — desktop only -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce-soft">
      <div class="w-px h-10 bg-gradient-to-b from-transparent via-[rgba(255,94,31,0.5)] to-transparent" />
      <span class="text-[10px] font-mono text-[#555555] tracking-[0.2em] uppercase">scroll</span>
    </div>

    <!-- Bottom separator -->
    <div class="absolute bottom-0 left-0 right-0 section-divider" />
  </section>

  <!-- Tech ticker strip -->
  <div class="relative overflow-hidden border-y border-white/[0.05] bg-[#1C1B1B]/60 py-3.5">
    <div class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#151414] to-transparent z-10 pointer-events-none" />
    <div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#151414] to-transparent z-10 pointer-events-none" />

    <div class="flex animate-scroll-x whitespace-nowrap will-change-transform">
      <span
        v-for="(tech, idx) in [...techs, ...techs]"
        :key="`ticker-${idx}`"
        class="inline-flex items-center gap-2.5 text-xs font-mono text-[#555555] hover:text-[#9A9A9A] transition-colors select-none pr-10"
      >
        <span class="w-1 h-1 rounded-full bg-[#FF5E1F]/60 shrink-0" />
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.hero-btn-primary {
  @apply inline-flex items-center gap-2 px-6 py-3 bg-[#FF5E1F] text-white font-semibold text-sm rounded-lg
         hover:bg-[#FF7A45] transition-all duration-200 hover:-translate-y-0.5
         hover:shadow-[0_8px_30px_rgba(255,94,31,0.35)];
}
.hero-btn-secondary {
  @apply inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-[#9A9A9A]
         font-semibold text-sm rounded-lg hover:text-white hover:border-white/25
         hover:bg-white/[0.05] transition-all duration-200 hover:-translate-y-0.5;
}
</style>
