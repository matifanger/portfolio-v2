import type { Ref } from 'vue'

interface ProjectItem {
  title: string
  description: string
  url: string
  image: string
  tech: string[]
  visible: boolean
  position: number
  [key: string]: any
}

export function useSortedCollection(collection: Ref<ProjectItem[]>) {
  const sorted = ref<ProjectItem[]>([])

  watch(collection, (items) => {
    sorted.value = [...items].sort((a, b) => {
      const posA = typeof a.position === 'number' ? a.position : Infinity
      const posB = typeof b.position === 'number' ? b.position : Infinity
      return posA - posB
    })
  }, { immediate: true })

  return sorted
}
