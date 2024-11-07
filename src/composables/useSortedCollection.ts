import type { Ref } from 'vue'

export function useSortedCollection<T extends { position: number }>(collection: Ref<T[]>) {
  const sorted = ref<T[]>([])

  watch(collection, (items) => {
    sorted.value = [...items].sort((a, b) => {
      const posA = typeof a.position === 'number' ? a.position : Infinity
      const posB = typeof b.position === 'number' ? b.position : Infinity
      return posA - posB
    })
  }, { immediate: true })

  return sorted
}
