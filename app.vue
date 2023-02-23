<script lang="ts" setup>
const router = useRouter()
const route = useRoute()
const user = useCurrentUser()

onMounted(() => {
    watch(user, (user, prevUser) => {
        if (prevUser && !user) {
            // user logged out
            router.push('/login')
        } else if (user && typeof route.query.redirect === 'string') {
            // user logged in
            router.push(route.query.redirect)
        }
    })
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
