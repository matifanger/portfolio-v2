<script setup>
import { nextTick, onBeforeUnmount } from 'vue'

const scrolled = ref(false)
const links = useSocials()
const sectionAvailability = ref({
  portfolio: false,
  saas: false,
  extra: false,
})

const navItems = [
  { id: 'portfolio', href: '#portfolio-section', label: 'Portfolio' },
  { id: 'saas', href: '#saas-section', label: 'SaaS' },
  { id: 'extra', href: '#extra-section', label: 'Extra' },
]

const visibleNavItems = computed(() =>
  navItems.filter(item => sectionAvailability.value[item.id]),
)

function updateSectionAvailability() {
  sectionAvailability.value = {
    portfolio: Boolean(document.getElementById('portfolio-section')),
    saas: Boolean(document.getElementById('saas-section')),
    extra: Boolean(document.getElementById('extra-section')),
  }
}

let scrollHandler = () => {}
let observer = null

onMounted(() => {
  scrollHandler = () => { scrolled.value = window.scrollY > 20 }
  window.addEventListener('scroll', scrollHandler)
  scrollHandler()

  updateSectionAvailability()
  nextTick(updateSectionAvailability)

  observer = new MutationObserver(updateSectionAvailability)
  observer.observe(document.body, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollHandler)
  observer?.disconnect()
})
</script>

<template>
  <header
    class="fixed w-full z-[1000] transition-all duration-300"
    :class="scrolled
      ? 'bg-[#151414]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,94,31,0.08)]'
      : 'bg-transparent border-b border-transparent'"
  >
    <div class="container">
      <nav class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5 group">
          <div class="relative">
            <img
              alt="Matias Fanger"
              class="w-8 h-8 rounded-full border border-white/10"
              src="/logo.png"
            >
            <span class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#FF5E1F] border-2 border-[#151414] animate-glow-pulse" />
          </div>
          <span class="text-white font-semibold text-[15px] tracking-tight">Matias Fanger</span>
        </NuxtLink>

        <!-- Desktop nav links -->
        <div v-if="visibleNavItems.length" class="hidden md:flex items-center gap-1">
          <a
            v-for="item in visibleNavItems"
            :key="item.id"
            :href="item.href"
            class="px-3 py-1.5 text-sm text-[#9A9A9A] hover:text-white hover:bg-white/[0.05] rounded-lg transition-all"
          >{{ item.label }}</a>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2">
          <a
            :href="links.github"
            target="_blank"
            data-tooltip="GitHub profile"
            data-tooltip-pos="bottom"
            class="w-9 h-9 hidden sm:flex items-center justify-center text-[#9A9A9A] hover:text-white border border-white/[0.07] hover:border-white/20 rounded-lg transition-all"
          >
            <div class="i-mdi:github text-lg" />
          </a>
          <a
            :href="links.linkedin"
            target="_blank"
            data-tooltip="Connect on LinkedIn"
            data-tooltip-pos="bottom"
            class="w-9 h-9 hidden sm:flex items-center justify-center text-[#9A9A9A] hover:text-white border border-white/[0.07] hover:border-white/20 rounded-lg transition-all"
          >
            <div class="i-mdi:linkedin text-lg" />
          </a>
          <a
            :href="links.resume"
            target="_blank"
            data-tooltip="Download / view CV"
            data-tooltip-pos="bottom"
            class="px-4 py-2 bg-[#FF5E1F] text-white text-sm font-semibold rounded-lg hover:bg-[#FF7A45] transition-all hover:shadow-[0_4px_20px_rgba(255,94,31,0.35)]"
          >
            Resume
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>
