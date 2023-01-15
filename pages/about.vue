<script lang="ts" setup>
import { ABOUT_ITEM } from "~~/library/constants";
import { TopicPath } from "~~/library/interfaces";

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

function getSelectedTopic(path: string) {
  navigateTo(`/about/${path}`);
}
</script>
<template>
  <div class="px-[40px] relative overflow-scroll bg-[color:var(--bg-color-2)]">
    <SEOHead :type="'ABOUT'"></SEOHead>
    <div
      class="flex justify-end fixed z-10 items-center right-[40px] top-[36%]"
    >
      <SubHeader
        :lists="topics"
        @selectedTopic="getSelectedTopic($event)"
      ></SubHeader>
    </div>
    <section class="h-screen flex relative justify-center items-center">
      <div class="flex flex-col justify-between gap-1 absolute z-[1] h-full">
        <div
          class="flex flex-row h-full justify-between items-center w-full gap-20 mt-[88px]"
        >
          <div
            class="flex large-text font-extrabold text-[color:var(--secondary-color)] text-[250px] laptop:text-[180px] tablet:text-[130px]"
          >
            W H O
          </div>
          <img
            class="flex w-[320px] h-[320px] tablet:w-[180px] tablet:h-[180px]"
            src="~assets/img/emoji/emoji-2.png"
            alt="emoji-2"
          />
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
</style>
