<script setup lang="ts">
const route = useRoute()
const projects: Projects = useProjectsStore()
const slug = route.params.slug

interface Projects {
  projects: { title: string
    description: string
    image: string
    url: {
      github: string
      live: string
    } }[]
}
</script>

<template>
  <div class="backgroundd" overflow-x-hidden>
    <main>
      <iframe
        brightness-30
        width="100%" height="100%" src="https://www.youtube.com/embed/nSn_CdNxJFw?autoplay=1&allowfullscreen=1&loop=1" title="YouTube video player"
        frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay; loop"
        allowfullscreen
      />
    </main>
    <section class="profile" z-100 relative>
      <div w-full h-full flex justify-center items-center mx-auto>
        <div z-100 flex justify-center space-y-4 items-center mx-auto p-4 rounded-xl container gap-16>
          <img h-40 rounded-full src="profile/profile.png" alt="Matias Fanger" transition duration-500 hover:shadow-gray-400 shadow-lg ring-2 ring-gray-800>

          <div text-center space-y-10 max-w-md>
            <h2 text-4xl>
              Lorem ipsum dolor sit amet.
            </h2>
            <p text-lg>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, unde?
            </p>
            <div space-y-5>
              <div space-y-2>
                <span flex justify-center gap-2 items-center text-xs text-gray-300>see in <div i-mdi:eye /> </span>
                <div flex justify-center gap-2>
                  <button bg-gray-700 hover:bg-gray-600 rounded-xl py-4 px-8 transition duration-200>
                    Github
                  </button>
                  <button bg-green-600 hover:bg-green-500 rounded-xl py-4 px-10 transition duration-200>
                    Live
                  </button>
                </div>
              </div>
              <NuxtLink to="/" flex mx-auto justify-center gap-2 items-center text-gray-300 hover:text-white transition duration-200>
                Go back <div i-mdi:keyboard-backspace />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.backgroundd {
    /* background: url("https://prium.github.io/slick/assets/images/15.jpg") 0% 0% / cover no-repeat; */

    width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    z-index: -1;
    overflow: hidden;
    will-change: transform,opacity,filter;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-repeat: no-repeat;
}
.wrapper {
  position: absolute; z-index: 0; min-width: 100%; min-height: 100%; left: 0px; top: 0px;
  overflow: hidden; opacity: 1; background-image: none; transition-property: opacity; transition-duration: 1000ms;
}
iframe {
  position: absolute; z-index: 0; width: 2780px; height: 1563.2px; top: 0px; left: 0px;
  overflow: hidden; opacity: 1; user-select: none; margin-top: -146.55px; margin-left: -646px; max-width: initial;
}
</style>
