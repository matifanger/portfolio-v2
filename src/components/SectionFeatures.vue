<script lang="ts" setup>
import { annotate } from 'rough-notation'

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
            const el: HTMLElement = document.querySelector('#betterway')!
            if (isInViewport(el)) {
                // timeout
                setTimeout(() => {
                    const annotation = annotate(el, { type: 'underline', color: '#0891b2' })
                    annotation.show()
                }, 1000)
            }
        }

        window.addEventListener('scroll', handleScroll)
    }
})
</script>

<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="py-12 bg-[#050810]">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
            <div class="text-center">
                <h2 class="text-lg font-semibold text-cyan-600">Work with me</h2>
                <p
                    class="mt-3 text-3xl font-bold leading-[50px] lg:leading-5 tracking-tight text-stone-300 sm:text-4xl"
                >
                    A <span id="betterway">better way</span> to start your project 🤙
                </p>
                <div class="max-w-2xl mt-6 lg:mt-10 text-xl text-stone-300 lg:mx-auto">
                    Thanks for stopping by, I’m currently
                    <span class="text-white">looking to join</span> a new team of developers. If you think we
                    might be a good fit for one another, text me on
                    <a
                        href="https://wa.link/aq1xfn"
                        class="text-green-500 hover:text-green-300 underline underline-offset-4"
                        target="_blank"
                        >WhatsApp</a
                    > or 
                    <a
                        href="https://www.linkedin.com/in/matifanger/"
                        class="text-blue-500 hover:text-blue-300 underline underline-offset-4"
                        target="_blank"
                        >LinkedIn</a
                    >.
                </div>
            </div>
        </div>
    </div>
</template>
