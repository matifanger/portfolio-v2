<script setup>
const links = useSocials()
</script>

<template>
  <section class="relative py-28 overflow-hidden">

    <!-- Top divider -->
    <div class="section-divider absolute top-0 left-0 right-0" />

    <!-- Grid background -->
    <div class="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

    <!-- Center orange glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5E1F] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />

    <div class="relative container max-w-3xl mx-auto text-center">

      <!-- Section label -->
      <div class="inline-flex items-center gap-2 border border-[rgba(255,94,31,0.25)] bg-[rgba(255,94,31,0.07)] rounded-full px-4 py-1.5 mb-8">
        <span class="w-1.5 h-1.5 rounded-full bg-[#FF5E1F] animate-glow-pulse" />
        <span class="text-xs font-mono text-[#FF5E1F] tracking-[0.18em] uppercase">Work with me</span>
      </div>

      <!-- Headline -->
      <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
        Let's build something<br>
        <span class="text-gradient-orange">great together</span>
      </h2>

      <!-- Body copy -->
      <p class="text-[#9A9A9A] text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
        I'm currently looking to join a new team of ambitious developers.
        If you think we'd be a good fit for one another, let's talk.
      </p>

      <!-- CTA row -->
      <div class="flex items-center justify-center gap-3 flex-wrap mb-12">
        <a
          :href="links.whatsapp"
          target="_blank"
          class="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF5E1F] text-white font-semibold rounded-lg hover:bg-[#FF7A45] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,94,31,0.35)]"
        >
          <div class="i-mdi:whatsapp text-lg" />
          WhatsApp
        </a>
        <a
          :href="links.linkedin"
          target="_blank"
          class="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-[#9A9A9A] font-semibold rounded-lg hover:text-white hover:border-white/25 hover:bg-white/[0.05] transition-all duration-200 hover:-translate-y-0.5"
        >
          <div class="i-mdi:linkedin text-lg" />
          LinkedIn
        </a>
        <a
          href="mailto:matifanger@outlook.com"
          class="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-[#9A9A9A] font-semibold rounded-lg hover:text-white hover:border-white/25 hover:bg-white/[0.05] transition-all duration-200 hover:-translate-y-0.5"
        >
          <div class="i-mdi:email-outline text-lg" />
          Email
        </a>
      </div>

      <!-- Subtle meta info row -->
      <div class="flex items-center justify-center gap-6 text-xs font-mono text-[#888888]">
        <span class="flex items-center gap-1.5">
          <span class="w-1 h-1 rounded-full bg-[#FF5E1F]/50" />
          Vue / Nuxt Specialist
        </span>
        <span class="flex items-center gap-1.5">
          <span class="w-1 h-1 rounded-full bg-[#FF5E1F]/50" />
          Remote-friendly
        </span>
        <span class="flex items-center gap-1.5">
          <span class="w-1 h-1 rounded-full bg-[#FF5E1F]/50" />
          Argentina UTC-3
        </span>
      </div>
    </div>
  </section>
</template>
