<template>
    <div
        class="relative w-full bg-white border border-transparent rounded shadow-md dark:bg-gray-800 overflow-hidden"
    >
        <img class="object-cover object-top w-full h-56" :src="info.image" alt="avatar" />

        <div class="flex flex-col gap-2 px-6 py-3 bg-gray-900">
            <h1
                class="flex justify-between items-center text-lg font-semibold text-slate-200 w-full uppercase"
            >
                {{ info.title }}
                <div class="flex gap-1">
                    <a
                        v-if="info.fullimage"
                        class="w-fit flex items-center hover:text-yellow-400 transition"
                        :href="info.fullimage"
                        target="_blank"
                    >
                        <div class="i-mdi:fullscreen" />
                    </a>
                    <a
                        v-if="info.url"
                        class="w-fit flex items-center hover:text-yellow-400 transition"
                        :href="info.url"
                        target="_blank"
                    >
                        <!-- <IconLinkExternal class="h-5 w-5 hover:text-gray-400 transition" /> -->
                        <div class="i-mdi:link" />
                    </a>
                </div>
            </h1>
            <div class="text-stone-300 text-sm">
                Project size:
                <span class="uppercase font-bold" :class="projectSize">
                    {{ info.size }}
                </span>
            </div>
        </div>
        <div class="px-6 flex flex-wrap gap-2 items-center mt-4 text-gray-700 dark:text-gray-200">
            <span
                v-for="(item, key) in info.tech"
                :key="key"
                class="bg-gray-600 text-gray-300 text-sm px-1 whitespace-nowrap"
            >
                {{ item }}
            </span>
        </div>
        <div class="px-6 pb-4 bg-[#1F2937]">
            <p class="text-stone-500 dark:text-stone-300 lg:mx-auto mt-4">
                {{ info.description }}
            </p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['info'])

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
