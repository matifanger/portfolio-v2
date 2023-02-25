<script lang="ts" setup>
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

const db = useFirestore()

const jobs = useCollection(collection(db, 'jobs'))
// const saas = useCollection(collection(db, 'saas'))

const sortedJobs = computed(() => {
    return jobs.value.sort((a, b) => {
        return a.position - b.position
    })
})

useHead({
    title: 'Matias Fanger - SSR Vue Developer',
    // titleTemplate: (title) => `${title} | MySite`,
    meta: [{ name: 'description', content: 'Matias Fanger - SSR Vue Developer Portfolio' }],
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/logo.png',
        },
    ],
})
</script>

<template>
    <div>
        <SectionHero />
        <!-- <SectionSaas v-if="saas.length" :info="saas" /> -->
        <SectionBlog v-if="sortedJobs.length" :info="sortedJobs" />
        <SectionFeatures />
    </div>
</template>

<style lang="postcss" scoped></style>
