<script lang="ts" setup>
import { TopicPath } from "~~/library/interfaces";
import { reactive, ref } from "vue";
import { json } from "stream/consumers";

definePageMeta({
  middleware: ["middleware"],
  pageTransition: { name: "cool", mode: "out-in" },
});
const topics: TopicPath[] = [
  { name: "About Me", path: "about-me" },
  { name: "Work Experience", path: "work" },
  { name: "Education", path: "education" },
  { name: "Technical Skill", path: "skill" },
  { name: "Software", path: "software" },
  { name: "Certificate", path: "certificate" },
];

const container = ref(null);
const parallax = reactive(ParallaxTracker(container));
const total = 2;
const num = total;

watch(parallax, (newParallax) => {
  console.log(JSON.stringify(parallax));
  ParallaxMovement("#emoji", newParallax.tilt, newParallax.roll, 20, true);

  for (let i = 2; i <= total; i++) {
    ParallaxMovement(
      `#who${i}`,
      newParallax.tilt * i,
      newParallax.roll * i,
      20
    );
  }
});

function getSelectedTopic(path: string) {
  navigateTo(`/about/${path}`);
}
</script>
<template>
  <div class="px-[40px] relative overflow-scroll bg-[color:var(--bg-color-2)]">
    <SEOHead :type="'ABOUT'"></SEOHead>
    <div class="h-screen flex justify-end fixed z-10 items-center right-[40px]">
      <SubHeader
        class="hover:-mr-[40px]"
        :lists="topics"
        @selectedTopic="getSelectedTopic($event)"
      ></SubHeader>
    </div>
    <section
      class="h-screen flex relative justify-center items-center"
      ref="container"
    >
      <div class="flex flex-col justify-between gap-1 absolute z-[1] h-full">
        <div
          class="flex flex-row h-full justify-between items-center w-full gap-20 mt-[88px]"
        >
          <div class="relative flex flex-col items-center justify-center">
            <div
              v-for="index in total"
              :key="index"
              :id="`who${index}`"
              class="relative flex large-text font-extrabold text-[color:var(--secondary-color)] text-[250px] laptop:text-[180px] tablet:text-[130px]"
              :style="
                index == 1
                  ? `position: relative; z-index:${total + 1}`
                  : `position: absolute; color:${
                      index % 2 == 0 ? '#0C2169' : '#0C2169'
                    }; z-index:${num--}`
              "
            >
              W H O
            </div>
          </div>

          <div class="transition-all delay-[0.3s] ease-in">
            <div
              class="transition-all delay-[0.2s] ease-out"
              :style="'perspective: 23rem'"
            >
              <img
                id="emoji"
                class="flex w-[320px] h-[320px] tablet:w-[180px] tablet:h-[180px]"
                src="~assets/img/emoji/emoji-2.png"
                alt="emoji-2"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between items-end w-full">
          <img
            class="flex w-[320px] h-[320px] tablet:w-[180px] tablet:h-[180px]"
            src="~assets/img/emoji/emoji-1.png"
            alt="emoji-1"
          />
          <div class="flex flex-col mb-[40px]">
            <h1>Supatsara</h1>
            <div class="flex flex-row items-center gap-0 relative">
              <div class="px-20 py-[3px] bg-[color:var(--white-color)]"></div>
              <h1 class="flex -translate-x-1 -translate-y-1">Rodratsa</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <NuxtPage />
  </div>
</template>
<style scoped>
.top-layer::before {
  background-color: var(--light-blue);
  transform: rotate(-10deg);
  content: "";
  position: absolute;
  top: 100px;
  left: 0;
  width: 2000px;
  height: 2000px;
  box-shadow: -10px 0px 30px rgba(0, 0, 0, 0);
}

.list:hover {
  background: linear-gradient(270.97deg, #1b2e76, rgba(15, 37, 116, 0) 90%);
  padding-right: 40px;
  margin-right: -40px;
  height: 100vh;
  justify-content: center;
}
</style>
