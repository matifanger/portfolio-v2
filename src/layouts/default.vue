<template>
    <div class="relative w-full min-h-screen bg-[#10101A] font-Poppins">
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<style lang="postcss">
/* ===== Scrollbar CSS ===== */
/* Firefox */

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 16px;
}

*::-webkit-scrollbar-track {
    background: #10101a;
}

*::-webkit-scrollbar-thumb {
    background-color: #28283a;
    border-radius: 10px;
    border: 4px solid #10101a;
}
/* On hover */
*::-webkit-scrollbar-thumb:hover {
    background-color: #f9d56e;
}
</style>
