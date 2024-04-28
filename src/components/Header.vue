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
                    <Socials />
                </div>
            </nav>
        </div>
    </div>
</template>
