<template>
  <div class="background" style="font-family: 'Open Sans', sans-serif" overflow-x-hidden>
    <main>
      <section class="profile">
        <div flex flex-col justify-center items-center w-full h-full space-y-4>
          <img h-36 rounded-full src="profile/profile.png" alt="Matias Fanger">
          <h1 text-4xl>
            Hello, Universe! I'm <span class="glow">Matias.</span>
          </h1>
          <h2 text-2xl>
            I am a Full Stack Web Developer based in Argentina
          </h2>
          <p text-xl>
            I love working with Nuxt, Vue, Vuetify, Tailwind, Python, Node, Firebase and much more!
          </p>
          <p text-xl>
            Send me a PM if you need some help.
          </p>
          <div class="socials">
            whsp linkd github email
          </div>
          <button>
            Resume <div i-fa-regular:address-book text-4xl inline-block />
          </button>
        </div>
      </section>
      <section>
        test
      </section>
    </main>
  </div>
</template>

<style>
.background {
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap");
  background-image: linear-gradient(transparent, black 20%), url("/universe.jpg");
  height: 200%;
  width: 100%;
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
