<script lang="ts" setup>
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

const db = useFirestore()

const jobs = useCollection(collection(db, 'jobs'))
const saas = useCollection(collection(db, 'saas'))
const extra = useCollection(collection(db, 'extra'))

const sortedJobs = computed(() => {
    return jobs.value.sort((a, b) => {
        return a.position - b.position
    })
})

useHead({
    title: 'Matias Fanger - Full Stack Developer',
    meta: [{ name: 'description', content: 'Matias Fanger - Full Stack Developer - Portfolio' }],
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
        <SectionSaas v-if="saas.length" :info="saas" />
        <SectionBlog v-if="sortedJobs.length" :info="sortedJobs" />
        <SectionExtra v-if="extra.length" :info="extra" />
        <SectionFeatures />
    </div>
</template>
