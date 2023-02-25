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
            const el: HTMLElement = document.querySelector('#portfolio')!
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
                id="portfolio"
                class="tracking-wide uppercase text-black dark:text-[#f9d56e] font-semibold text-3xl sm:text-4xl w-fit"
            >
                Portfolio
            </h2>
            <p class="mt-6 lg:mt-10 mb-6 text-xl text-gray-500">
                If you want to see the projects I've worked for clients, you can check out these.
            </p>
        </div>

        <div class="grid gap-4 p-2 mx-auto md:grid-cols-2 lg:grid-cols-3">
            <PortfolioCard v-for="post in props.info" :info="post" />
        </div>
    </div>
</template>
