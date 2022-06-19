<script setup lang="ts">
const route = useRoute()
const { data, error } = await useAsyncData('blog', () => queryContent(`/blog/${route.params.slug}`).findOne())
</script>

<template>
  <main flex justify-center items-center mx-auto container max-w-4xl>
    <div flex flex-col my-20 space-y-4 gap-y-4 w-full>
      <h1 text-center text-4xl>
        {{ data.title }}
      </h1>
      <div text-sm>
        <p>created at: {{ data.gitCreatedAt }}</p>
        <p>last update: {{ data.gitUpdatedAt }}</p>
      </div>
      <client-only>
        <ContentRenderer class="post" :value="data">
          <slot />
        </ContentRenderer>
      </client-only>
    </div>
  </main>
</template>

<style scoped>
.post ::v-deep(h2) {
  @apply decoration-none;
    @apply text-2xl mt-5 underline mb-2 underline-offset-4 decoration-2;
  }
.post ::v-deep(h3) {
    @apply decoration-none;
    @apply text-xl mt-5 underline mb-2 underline-offset-4 decoration-2;

  }
  .post ::v-deep(h4) {
    @apply text-lg mt-5 mb-2;
  }

.post ::v-deep(a[aria-current]:not([aria-current="false"])) {

}
  .post ::v-deep(a:not([aria-current="page"]))  {
  @apply url;
}
</style>
