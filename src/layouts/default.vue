<script setup>
onMounted(() => {
  const msgs = [
    ['%c👋 Hey, snooper!', 'font-size:18px;font-weight:bold;color:#FF5E1F;background:#1C1B1B;padding:6px 12px;border-radius:4px;'],
    ['%c📌 Twitter → https://x.com/matifanger', 'color:#9A9A9A;'],
    ['%c✉️  Mail   → matifanger@outlook.com', 'color:#9A9A9A;'],
    ['%c   Thanks for visiting!', 'color:#555555;'],
  ]
  msgs.forEach(([text, style]) => style ? console.log(text, style) : console.log(text))
})
</script>

<template>
  <div class="relative w-full min-h-screen bg-[#151414] font-Satoshi">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style lang="postcss">
*::-webkit-scrollbar {
  width: 8px;
}
*::-webkit-scrollbar-track {
  background: #151414;
}
*::-webkit-scrollbar-thumb {
  background-color: #2A2929;
  border-radius: 10px;
  border: 2px solid #151414;
}
*::-webkit-scrollbar-thumb:hover {
  background-color: #3D3C3C;
}
</style>
