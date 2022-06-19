<script setup lang="ts">
const { x, y } = useWindowScroll()
const scrolled = computed(() => {
  return y.value > 10
})
</script>

<template>
  <header fixed flex justify-center gap-2 w-full class="z-[1000]" :class="scrolled ? 'header-blur transition duration-200' : ''">
    <div p-4>
      <!-- <div class="logo">
        <a href="/" class="logo-link">
          <img src="logo.png" alt="Matias Fanger">
        </a>
      </div> -->
      <div space-x-4>
        <NuxtLink to="/" mainurl>
          Home
        </NuxtLink>
        <NuxtLink to="/portfolio" mainurl>
          Portfolio
        </NuxtLink>
        <NuxtLink to="/projects" mainurl>
          Projects
        </NuxtLink>
        <NuxtLink to="/blog" mainurl>
          Blog
        </NuxtLink>
        <NuxtLink to="/guides" mainurl>
          Guides
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style>
.header-blur {
    backdrop-filter: blur(5px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.5);
}
</style>
