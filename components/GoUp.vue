<script setup lang="ts">
const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
const { x, y } = useWindowScroll()
const showGoUp = computed(() => {
  return y.value > 500
})
</script>

<template>
  <Transition name="animate-tada animate-count-1">
    <div
      v-if="showGoUp"
      text="xl gray4"
      cursor-pointer
      mt-40
      fixed
      bottom-20
      right-20
      flex
      justify-center
      gap-3
      hover:text-white
      transition
      duration-400 h-14
      w-14 bg-gray-400
      hover:bg-white
      class="z-[50000]"
      i-mdi:arrow-up-circle
      @click="scrollUp"
    />
  </Transition>
</template>
