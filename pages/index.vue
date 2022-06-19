<script setup lang="ts">
import { ref } from 'vue'
const hover = ref(false)

interface Projects {
  projects: { title: string
    description: string
    image: string
    url: {
      github: string
      live: string
    } }[]
}

const { data, pending, refresh, error } = await useAsyncData<string>('home',
  () => $fetch('https://gist.githubusercontent.com/matifanger/8a52c77e10049fac38dbc8807b53b079/raw/7840e1640bfe04760ee5d09af460c8f9b84ef312/myprojects.json'))

const info: Projects = JSON.parse(data.value)

definePageMeta({
  layout: 'home',
  title: 'Home',
})
</script>

<template>
  <div class="background" relative overflow-x-hidden>
    <main>
      <!-- {{ info.projects[0].title }} -->
      <section class="profile">
        <!--  animate-back-in-down animate-count-1 animate-duration-2s -->
        <div w-full h-full flex justify-center items-center mx-auto>
          <div class="card" flex flex-col justify-center space-y-4 items-center mx-auto p-4 rounded-xl>
            <img h-40 rounded-full src="profile/profile.png" alt="Matias Fanger" transition duration-500 hover:shadow-gray-400 shadow-lg ring-2 ring-gray-800>
            <h1 text-4xl tracking-widest flex gap-4>
              Hello, Universe! <div i-twemoji:waving-hand animate-tada animate-count-1 animate-duration-2s hover:animate-count-infinite /> I'm <span style="text-underline-offset: 0.45rem" class="glow">Matias</span>
            </h1>
            <h2 text-2xl>
              I'm a Full Stack Engineer based in <span text-blue-300>Arg</span>e<span text-yellow-200>n</span>t<span text-blue-300>ina</span>
            </h2>
            <p text-xl>
              I love working with Nuxt, Vue, Vuetify, Tailwind, Python, Node, Firebase and much more!
            </p>
            <p text-xl>
              Send me a PM if you need some help.
            </p>
            <div />
            <div class="socials" flex gap-2>
              <div i-mdi:whatsapp text-4xl inline-block hover:bg-green-500 cursor-pointer transition duration-200 />
              <div i-mdi:linkedin text-4xl inline-block hover:bg-blue-400 cursor-pointer transition duration-200 />
              <div i-mdi:github text-4xl inline-block hover:bg-gray-400 cursor-pointer transition duration-200 />
              <div i-mdi:email text-4xl inline-block hover:bg-gray-400 cursor-pointer transition duration-200 />
            </div>
            <div flex gap-4>
              <a href="https://drive.google.com/file/d/1WmrjHfjrHsh4f5yvJ_CR6JlFL-CmRG4I/view" rel="nofollow noopener noreferrer" target="_blank" ring-2 hover:ring-3 ring-green-500 rounded-lg px-6 py-2 text-center flex gap-2 items-center font-bold transition>
                Resume <div i-mdi:card-account-details inline-block />
              </a>
              <button hover:bg-green-500 bg-green-600 rounded-lg px-6 py-2 text-center flex gap-2 items-center font-bold transition>
                Contact now <div i-mdi:contacts inline-block />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');
/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #b3b3b3 #000000;
    font-family: 'Poppins', sans-serif;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: #000000;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #b3b3b3;
    border-radius: 10px;
    border: 5px none #000000;
  }
.background {
  background-image: linear-gradient(transparent, black 100%), url("/universe.jpg");
  background-attachment: fixed;
  height: 200%;
  width: 100%;
}

.card {
    backdrop-filter: blur(5px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.5);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
}

.profile {
  width: 100vw;
  height: 100vh;
}

.glow {
  background-image: url("/gifs/sparkles.gif");
  background-position: 50% 50%;
  background-repeat: repeat;
  color: rgb(255, 255, 255);
}
</style>
