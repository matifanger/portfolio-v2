<template>
    <div
        class="fixed w-full z-[1000] border-b border-gray-600 border-opacity-30 bg-[#10101A] py-3 back backdrop-blur-md backdrop-brightness-50"
    >
        <div class="container">
            <nav
                class="flex flex-col gap-y-3 items-center justify-between mx-auto md:flex-row"
                aria-label="Global"
            >
                <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <NuxtLink
                        to="/"
                        class="flex items-center justify-between w-full md:w-auto space-x-2 group"
                    >
                        <img
                            alt="Workflow"
                            class="w-auto h-8 sm:h-10 rounded-full group outline-4 outline-gray-400 border-gray-400 border-opacity-70"
                            src="/logo.png"
                        />

                        <p class="text-gray-200 font-medium text-2xl">Matias Fanger</p>
                    </NuxtLink>
                </div>
                <div class="flex flex-wrap items-center space-x-2">
                    <!-- <a
                        href="https://twitter.com/matifanger"
                        class="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition"
                        target="_blank"
                    >
                        <div class="i-mdi:twitter text-2xl" />
                    </a> -->
                    <a
                        href="https://github.com/matifanger"
                        class="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition"
                        target="_blank"
                    >
                        <div class="i-mdi:github text-2xl" />
                    </a>
                    <a
                        href="https://wa.link/aq1xfn"
                        class="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition"
                        target="_blank"
                    >
                        <div class="i-mdi:whatsapp text-2xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/matias-fanger-b8b916197/"
                        class="flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition"
                        target="_blank"
                    >
                        <div class="i-mdi:linkedin text-2xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/matias-fanger-b8b916197/"
                        target="_blank"
                        class="rounded p-1.5 px-3 action-rainbow action-upgrade"
                    >
                        I'm open to work!
                    </a>
                </div>
            </nav>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.action-rainbow {
    @apply relative;
    &:hover {
        &:before {
            content: var(--tw-content);
            position: absolute;
            left: -0.125rem;
            right: -0.125rem;
            top: 0.25rem;
            bottom: -0.125rem;
            z-index: -10;
            background-clip: padding-box;
            opacity: 0.6;
            --tw-blur: blur(12px);
            filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
                var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 0.15s;
            background-image: linear-gradient(120deg, #ec6192, #ec4c34, #ffbd2b, #ebde56, #57c754, #53a1eb);
        }
    }
}
.action-upgrade {
    background: linear-gradient(
        60deg,
        #f79533,
        #f37055,
        #ef4e7b,
        #a166ab,
        #5073b8,
        #1098ad,
        #07b39b,
        #6fba82
    );
    -webkit-animation: animatedgradient 6s ease infinite alternate;
    animation: animatedgradient 6s ease infinite alternate;
    background-size: 300% 300%;
    border: 1px solid rgba(0, 0, 0, 0);
    color: #fff;
}

@keyframes animatedgradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
