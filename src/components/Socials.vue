<script setup>
const links = useSocials()
</script>

<template>
  <div class="flex items-center gap-2.5 flex-wrap justify-center">
    <a
      :href="links.github"
      target="_blank"
      data-tooltip="GitHub profile"
      class="w-9 h-9 flex items-center justify-center text-[#9A9A9A] hover:text-white border border-white/[0.07] hover:border-[rgba(255,94,31,0.3)] rounded-lg transition-all hover:bg-[rgba(255,94,31,0.06)]"
    >
      <div class="i-mdi:github text-lg" />
    </a>
    <a
      :href="links.linkedin"
      target="_blank"
      data-tooltip="Connect on LinkedIn"
      class="w-9 h-9 flex items-center justify-center text-[#9A9A9A] hover:text-white border border-white/[0.07] hover:border-[rgba(255,94,31,0.3)] rounded-lg transition-all hover:bg-[rgba(255,94,31,0.06)]"
    >
      <div class="i-mdi:linkedin text-lg" />
    </a>
    <a
      :href="links.whatsapp"
      target="_blank"
      data-tooltip="Chat on WhatsApp"
      class="w-9 h-9 flex items-center justify-center text-[#9A9A9A] hover:text-white border border-white/[0.07] hover:border-[rgba(255,94,31,0.3)] rounded-lg transition-all hover:bg-[rgba(255,94,31,0.06)]"
    >
      <div class="i-mdi:whatsapp text-lg" />
    </a>
    <a
      :href="links.twitter"
      target="_blank"
      data-tooltip="Follow on X / Twitter"
      class="w-9 h-9 flex items-center justify-center text-[#9A9A9A] hover:text-white border border-white/[0.07] hover:border-[rgba(255,94,31,0.3)] rounded-lg transition-all hover:bg-[rgba(255,94,31,0.06)]"
    >
      <div class="i-mdi:twitter text-lg" />
    </a>
    <a
      :href="links.resume"
      target="_blank"
      data-tooltip="Download / view CV"
      class="px-4 py-2 bg-[#FF5E1F] text-white text-sm font-semibold rounded-lg hover:bg-[#FF7A45] transition-all hover:shadow-[0_4px_20px_rgba(255,94,31,0.35)]"
    >
      Resume
    </a>
  </div>
</template>
