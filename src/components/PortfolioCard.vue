<script lang="ts" setup>
const props = defineProps({
    info: {
        type: Object as PropType<{
            title: string
            description: string
            url: string
            image: string
            tech: string[]
            size: string
            fullimage: string
            type: string
            github: string
        }>,
        required: true,
    },
})

const projectSize = computed(() => {
    if (props.info.size === 'small') {
        return 'text-green-500'
    } else if (props.info.size === 'medium') {
        return 'text-yellow-500'
    } else if (props.info.size === 'big') {
        return 'text-orange-500'
    } else if (props.info.size === 'huge') {
        return 'text-red-500'
    }
})
</script>

<template>
    <div class="relative w-full border border-transparent rounded shadow-md bg-gray-800 overflow-hidden">
        <NuxtLink :to="info.url" class="overflow-hidden" target="_blank">
            <div class="w-full h-56 overflow-hidden">
                <img
                    :class="info.url ? 'hover:scale-105 transition' : ''"
                    class="object-cover object-top w-full h-56 overflow-hidden"
                    :src="info.image"
                    alt="avatar"
                />
            </div>
        </NuxtLink>

        <div class="flex flex-col gap-2 px-6 py-3 bg-gray-900">
            <div class="flex justify-between items-center text-lg font-semibold text-slate-200 w-full">
                <NuxtLink :to="info.url" :class="info.url ? 'hover:underline underline-offset-4' : ''" target="_blank">
                    <h2 class="uppercase">
                        {{ info.title }}
                    </h2>
                </NuxtLink>

                <div class="flex gap-1">
                    <a
                        v-if="info.fullimage"
                        class="w-fit flex items-center hover:text-[#8F5BF4] transition"
                        :href="info.fullimage"
                        target="_blank"
                    >
                        <div class="i-mdi:image" />
                    </a>
                    <a
                        v-if="info.github"
                        class="w-fit flex items-center hover:text-[#8F5BF4] transition"
                        :href="info.github"
                        target="_blank"
                    >
                        <div class="i-mdi:github" />
                    </a>
                    <a
                        v-if="info.url"
                        class="w-fit flex items-center hover:text-[#8F5BF4] transition gap-1"
                        :href="info.url"
                        target="_blank"
                    >
                        <div class="i-mdi:open-in-new" />
                        Live
                    </a>
                </div>
            </div>
            <div class="text-stone-300 text-sm">
                Project size:
                <span class="uppercase font-bold" :class="projectSize">
                    {{ info.size }}
                </span>
            </div>
            <!-- <div class="text-stone-300 text-sm">
                Type:
                <span class="uppercase font-semibold">
                    {{ info.type }}
                </span>
            </div> -->
        </div>
        <div class="px-6 flex flex-wrap gap-2 items-center mt-4 text-gray-200">
            <span
                v-for="(item, key) in sortByImportance(info.tech)"
                :key="key"
                class="bg-gray-700 bg-opacity-70 rounded text-sm px-1 whitespace-nowrap"
                :class="colorDict[item.toLowerCase() as keyof typeof colorDict]"
            >
                {{ item }}
            </span>
        </div>
        <div class="px-6 pb-4 bg-[#1F2937]">
            <p class="text-stone-300 lg:mx-auto mt-4">
                {{ info.description }}
            </p>
        </div>
    </div>
</template>
