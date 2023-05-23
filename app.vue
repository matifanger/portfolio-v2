<script lang="ts" setup>
useHead({
    title: 'Matias Fanger - SSR Vue Developer',
    // titleTemplate: (title) => `${title} | MySite`,
    meta: [{ name: 'description', content: 'Matias Fanger - SSR Vue Developer Portfolio' }],
    // icon
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/logo.png',
        },
    ],
})

definePageMeta({
    colorMode: 'dark',
})
</script>

<template>
    <Html lang="en">
        <Body>
            <SeoKit />
            <NuxtLayout>
                <NuxtLoadingIndicator />
                <NuxtPage />
            </NuxtLayout>
        </Body>
    </Html>
</template>

<style lang="postcss">
body {
    @apply bg-white text-gray-800 antialiased transition-colors duration-300;
}
</style>
