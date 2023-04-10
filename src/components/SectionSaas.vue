<script lang="ts" setup>
import { annotate } from 'rough-notation'

const props = defineProps(['info'])

onMounted(() => {
    if (process.client) {
        const isInViewport = (el: HTMLElement) => {
            const rect = el.getBoundingClientRect()
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            )
        }

        const handleScroll = () => {
            const el: HTMLElement = document.querySelector('#saas')!
            if (isInViewport(el)) {
                // timeout
                setTimeout(() => {
                    const annotation = annotate(el, { type: 'underline', color: '#f9d56e' })
                    annotation.show()
                }, 1000)
            }
        }

        window.addEventListener('scroll', handleScroll)
    }
})
</script>

<template>
    <div class="py-12 mx-auto container">
        <div class="w-full px-4 mx-auto">
            <h2
                id="saas"
                class="tracking-wide uppercase text-black dark:text-[#f9d56e] font-semibold text-3xl sm:text-4xl w-fit"
            >
                SaaS
            </h2>
            <p class="mt-6 lg:mt-10 mb-6 text-xl text-gray-500">
                SaaS products I've built or i'm building for myself.
            </p>
        </div>

        <div class="grid mx-auto md:grid-cols-2 lg:grid-cols-3">
            <a
                v-for="(item, key) in props.info"
                :key="key"
                class="group p-2"
                :href="item.url"
                target="_blank"
            >
                <div
                    class="flex flex-col overflow-hidden rounded shadow-md hover:shadow-lg border border-opacity-70 border-gray-800 group-hover:border-gray-700 transition cursor-pointer"
                >
                    <!--  Card -->
                    <img
                        class="object-cover w-full h-56 sm:h-48 group-hover:scale-105 transition"
                        :src="item.image"
                        :alt="item.title"
                        style="clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 80%)"
                    />

                    <div class="p-4 -mt-6 overflow-y-visiblerflow-hidden md:-mt-8">
                        <div class="font-sans text-lg font-semibold text-slate-200 md:text-xl">
                            {{ item.title }}
                        </div>

                        <div class="md:mt-2">
                            <p
                                class="font-sans text-base antialiased font-semibold leading-6 text-slate-400 md:text-lg"
                            >
                                {{ item.description }}
                            </p>
                        </div>

                        <div class="flex flex-col gap-3 pt-1 md:pt-4">
                            <div
                                v-if="item.showmmr"
                                class="flex items-center text-gray-700 dark:text-gray-200"
                            >
                                <!-- <IconMoney class="h-6 w-6 text-green-500" /> -->

                                <h1 class="text-sm">{{ item.mmr }} MMR</h1>
                            </div>

                            <div
                                v-if="item.device"
                                class="flex items-center text-gray-700 dark:text-gray-200"
                            >
                                <!-- <IconBoxes class="h-6 w-6" /> -->

                                <h1 class="text-sm">{{ item.device }}</h1>
                            </div>
                        </div>
                    </div>

                    <div
                        v-if="item.tech && item.tech.length > 0"
                        class="flex p-4 align-middle border-t border-opacity-70 border-gray-800 group-hover:border-gray-700 transition"
                    >
                        <div class="flex gap-2 flex-wrap">
                            <span
                                v-for="(tag, sk) in item.tech"
                                :key="sk"
                                class="font-sans text-xs font-mediumborder p-1 bg-gray-700 bg-opacity-20 text-gray-50 text-opacity-60 font-medium uppercase md:text-sm"
                                >{{ tag }}
                            </span>
                        </div>
                    </div>
                </div>
                <!-- end card -->
            </a>
        </div>
    </div>
</template>
