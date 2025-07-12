export default function (items: string[]) {
  // Vue 2, Vue 3, Nuxt 2, Nuxt 3, React, React Native, Pinia, TypeScript, Tailwind CSS, Nest.js, PostgreSQL, Python, Vuex, Firebase, Vuetify, GPT-4, Stable Difussion, OpenAI
  // sort by importance
  const sortByImportance = [
    'vue 2',
    'vue 3',
    'nuxt 2',
    'nuxt 3',
    'nuxthub',
    'nuxt ui',
    'react',
    'react native',
    'vuex',
    'pinia',
    'typescript',
    'tailwind css',
    'nest.js',
    'postgresql',
    'python',
    'firebase',
    'vuetify',
    'drizzle',
    'eslint',
    'gpt-4',
    'stable difussion',
    'openai',
    'anthropic',
    'cloudflare',
    'polar',
    'desktop',
    'electron',
    'shadcn',
  ]

  const sortedItems = items.sort((a, b) => {
    const aIndex = sortByImportance.indexOf(a.toLowerCase())
    const bIndex = sortByImportance.indexOf(b.toLowerCase())

    if (aIndex < bIndex)
      return -1
    if (aIndex > bIndex)
      return 1
    return 0
  })

  return sortedItems
}
