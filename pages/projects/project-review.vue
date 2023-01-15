<script setup>
definePageMeta({
  middleware: ["middleware"],
});
</script>
<template>
  <section
    class="relative h-screen flex flex-col justify-center items-center gap-12 bg-[color:var(--bg-color-3)]"
  >
    <SEOHead :type="'PROJECT'"></SEOHead>
    <div
      class="absolute top-[50px] flex flex-row flex-wrap gap-12 justify-center items-center mt-[88px] bg-[color:var(--bg-color-3)] pb-[60px] px-[20px]"
    >
      <ProjectCard
        class="z-10"
        :text="'ARFÉ Project'"
        :link="'https://arfe.vercel.app/'"
      >
        <img
          class="flex w-[450px] tablet:w-[300px]"
          src="~assets/img/project/arfe.png"
          alt="Arfe project"
        />
      </ProjectCard>
      <ProjectCard
        class="z-10"
        :text="'Cafe Para Todos Project'"
        :link="'https://cafe-para-todos.vercel.app/'"
      >
        <img
          class="flex w-[450px] tablet:w-[300px]"
          src="~assets/img/project/cafe-para-todos.png"
          alt="Cafe Para Todos project"
        />
      </ProjectCard>
      <ProjectCard
        class="z-10"
        :text="'Movie Search Project'"
        :link="'https://stackblitz.com/edit/movie-queries-aknyrq'"
      >
        <img
          class="flex w-[450px] tablet:w-[300px]"
          src="~assets/img/project/movie-search.png"
          alt="Movie Search project"
        />
      </ProjectCard>
      <ProjectCard
        class="z-10"
        :text="'Spotify Project'"
        :link="'https://github.com/Supatsara-Rodratsa/spotify-final-project'"
      >
        <img
          class="flex w-[450px] tablet:w-[300px]"
          src="~assets/img/project/spotify-search.png"
          alt="Spotify project"
        />
      </ProjectCard>
      <ProjectCard
        class="z-10"
        :text="'Portfolio'"
        :link="'https://codesandbox.io/s/elegant-smoke-niz0nm'"
      >
        <img
          class="flex w-[450px] tablet:w-[300px]"
          src="~assets/img/project/portfolio.png"
          alt="Portfolio project"
        />
      </ProjectCard>

      <div class="fixed bottom-0 left-14">
        <img
          src="~assets/img/emoji/emoji-1.png"
          alt="emoji-1"
          class="w-[250px] h-[250px] tablet:w-[200px] tablet:h-[200px]"
        />
      </div>
    </div>
  </section>
</template>
<style scoped>
img {
  object-fit: contain;
  border-radius: 8px;
}

.overlay {
  transition: 0.5s ease;
}

.container:hover .overlay {
  opacity: 0.9;
  border-radius: 8px;
}
</style>
