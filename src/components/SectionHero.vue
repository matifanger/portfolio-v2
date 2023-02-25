<script lang="ts" setup></script>

<template>
    <div
        class="relative overflow-hidden container flex items-center justify-center py-6 md:py-44 md:pt-44 bg h-screen"
    >
        <div class="mx-auto max-w-4xl text-center">
            <div class="flex flex-col">
                <main class="text-white text-3xl md:text-6xl font-bold leading-[45px] md:leading-[70px]">
                    Hey! I'm
                </main>
                <span
                    class="text-4xl md:text-7xl leading-[50px] md:leading-[100px] font-semibold bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text"
                >
                    Matias Fanger
                </span>
                <main class="text-white text-3xl md:text-6xl font-bold leading-[45px] md:leading-[70px]">
                    <span
                        class="bg-gradient-to-r bg-clip-text text-transparent from-[#f9d56e] via-yellow-200 to-[#f9d56e] animate-text"
                        >A SSR Vue Dev</span
                    >
                    that builds things and share the process.
                </main>
            </div>
        </div>
        <div class="absolute bottom-16 text-white text-5xl motion-safe:animate-bounce">
            <div class="i-mdi:arrow-down-bold" />
        </div>
    </div>
</template>

<style lang="postcss">
.bg {
    background-color: #10101a;
    background-image: radial-gradient(transparent, #10101a 65%),
        url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238a42ff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.heading-gradient {
    /* heading gradient with moving colors */
    background: linear-gradient(90deg, #f9d56e 0%, #f9d56e 25%, #f9d56e 50%, #f9d56e 75%, #f9d56e 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: gradient 15s ease infinite;
    animation: gradient 15s ease infinite;
}
</style>
