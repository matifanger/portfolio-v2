<template>
  <footer
    text="xl gray4"
    flex flex-col mx-auto items-center
    justify-center
    gap-3
    p-5
  >
    <span flex gap-1 items-center>Talk to me <div i-mdi:arrow-down /> </span>
    <div class="socials">
      <a href="https://wa.link/aq1xfn" rel="nofollow noopener noreferrer" target="_blank" i-mdi:whatsapp hover:bg-green-500 />
      <a href="https://www.linkedin.com/in/matifanger/" rel="nofollow noopener noreferrer" target="_blank" i-mdi:linkedin hover:bg-blue-400 />
      <a href="https://github.com/matifanger" rel="nofollow noopener noreferrer" target="_blank" i-mdi:github hover:bg-gray-600 />
      <a href="mailto:matifanger@outlook.com" rel="nofollow noopener noreferrer" target="_blank" i-mdi:email hover:bg-gray-600 />
      <a href="https://instagram.com/matifanger" rel="nofollow noopener noreferrer" target="_blank" i-mdi:instagram class="hover:bg-[#405DE6]" />
    </div>
  </footer>
</template>

<style scoped>
.socials {
  @apply flex gap-2;
}
.socials ::v-deep(a) {
  @apply text-3xl inline-block cursor-pointer transition duration-200;
}
</style>
