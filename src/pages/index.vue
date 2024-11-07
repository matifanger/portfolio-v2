<script lang="ts" setup>
import { collection } from 'firebase/firestore'
import { useCollection } from 'vuefire'
import { useSortedCollection } from '~/composables/useSortedCollection'

const db = useFirestore()

interface BaseProjectItem {
  title: string
  description: string
  url: string
  image: string
  visible: boolean
  tech: string[]
  position: number
}

interface JobProject extends BaseProjectItem {}

interface SaasProject extends BaseProjectItem {
  mmr: string
  device: string
  showmmr: boolean
}

interface ExtraProject extends BaseProjectItem {
  size: string
  fullimage: string
  type: string
  github: string
}

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
