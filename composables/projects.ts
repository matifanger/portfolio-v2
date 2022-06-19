import { acceptHMRUpdate, defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref()

  async function loadProjects() {
    const { data } = await useAsyncData<string>('/api/hello',
      () => $fetch('https://gist.githubusercontent.com/matifanger/8a52c77e10049fac38dbc8807b53b079/raw/7840e1640bfe04760ee5d09af460c8f9b84ef312/myprojects.json'))
    projects.value = JSON.parse(data.value)
  }

  return {
    loadProjects,
    projects,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProjectsStore, import.meta.hot))
