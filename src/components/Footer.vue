<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative pt-12 pb-8 overflow-hidden">

    <!-- Top gradient line -->
    <div class="section-divider absolute top-0 left-0 right-0" />

    <!-- Subtle grid -->
    <div class="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

    <div class="relative container">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">

        <!-- Brand -->
        <div class="flex flex-col items-center md:items-start gap-1">
          <span class="text-white font-semibold text-[15px]">Matias Fanger</span>
          <span class="text-xs font-mono text-[#888888] tracking-wide">// full-stack developer</span>
        </div>

        <!-- Socials -->
        <Socials />

        <!-- Right meta -->
        <div class="text-xs font-mono text-[#888888] text-center md:text-right leading-relaxed">
          <p>© {{ year }} Matias Fanger</p>
          <p class="mt-0.5 text-[#666666]">Built with Nuxt 3 · Vue 3</p>
        </div>
      </div>

      <!-- Bottom thin separator -->
      <div class="h-px bg-white/[0.04]" />
      <p class="text-center text-xs font-mono text-[#666666] mt-4 tracking-widest uppercase">
        matifanger.dev
      </p>
    </div>
  </footer>
</template>
