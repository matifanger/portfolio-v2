<template>
    <div class="relative w-full min-h-screen bg-[#10101A] font-Poppins">
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const messages = [
        {
            text: '%c👋 Welcome!',
            style: `
                font-size: 24px;
                font-weight: bold;
                color: #F9D56E;
                background: linear-gradient(to right, #10101A, #28283A);
                padding: 8px 16px;
                border-radius: 4px;
            `
        },
        {
            text: '%c🎨 Ping me on Twitter! https://x.com/matifanger',
        },
        {
            text: '%c⚡ Mail me @ matifanger@outlook.com',
        },
        {
            text: '%c Thanks for stopping by!',
        },
    ];
    
    messages.forEach(msg => console.log(msg.text, msg.style));
});
</script>

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
