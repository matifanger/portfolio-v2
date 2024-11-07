<script lang="ts" setup>
import { collection } from 'firebase/firestore'
import { useCollection } from 'vuefire'
import { useSortedCollection } from '~/composables/useSortedCollection'
import type { ExtraProject, JobProject, SaasProject } from '~/types/portfolio'

const db = useFirestore()

const jobs = useCollection<JobProject>(collection(db, 'jobs'))
const saas = useCollection<SaasProject>(collection(db, 'saas'))
const extra = useCollection<ExtraProject>(collection(db, 'extra'))

const sortedJobs = useSortedCollection(jobs)
const sortedSaas = useSortedCollection(saas)
const sortedExtra = useSortedCollection(extra)

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
    <SectionProjects v-if="sortedJobs.some((item) => item.visible)" :info="sortedJobs" />
    <SectionSaas v-if="sortedSaas.some((item) => item.visible)" :info="sortedSaas" />
    <SectionExtra v-if="sortedExtra.some((item) => item.visible)" :info="sortedExtra" />
    <SectionFeatures />
  </div>
</template>
