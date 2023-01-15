<script setup>
import { NAV_ITEM } from "~~/library/constants";
import { setSelectedItem, getSelectedItem } from "~~/library/utilities";

definePageMeta({
  middleware: ["middleware"],
});

function navigate(path, item) {
  navigateTo(path);
  setSelectedItem(item);
}
</script>
<template>
  <div>
    <section
      class="h-screen flex relative justify-center items-center bg-[color:var(--bg-color-1)]"
    >
      <div
        class="flex flex-row justify-center items-center gap-9 p-10 mt-10 absolute z-[1] mt-[88px]"
      >
        <div class="flex flex-col h-full w-[40%] justify-center mobile:w-[90%]">
          <h1
            class="stroke-bold text-[49px] laptop:text-[36px] mobile:text-[30px]"
          >
            Hi There! I'm Rose
          </h1>
          <div class="flex flex-col">
            <h1 class="mobile:text-[32px]">Supatsara</h1>
            <div class="flex flex-row items-center gap-0 relative">
              <div class="px-20 py-[3px] bg-[color:var(--white-color)]"></div>
              <h1 class="flex -translate-x-1 -translate-y-1 mobile:text-[32px]">
                Rodratsa
              </h1>
            </div>
          </div>
          <h1
            class="stroke-bold text-[49px] laptop:text-[36px] mobile:text-[30px]"
          >
            Frontend Developer
          </h1>
          <p class="text mobile:text-[14px]">
            I am an application consultant at IBM Thailand. Currently, I am
            pursuing a master's degree in Frontend Development program at
            Harbour.Space in Barcelona, Spain.
          </p>
          <br />
          <br />
          <Button
            :text="'Who Am I ?'"
            @click="navigate('/about', NAV_ITEM.ABOUT)"
          ></Button>
        </div>
        <div class="grid grid-cols-8 relative mobile:hidden">
          <div class="profile-shadow">
            <div class="shadow-container"></div>
          </div>
          <div class="profile-layout">
            <img
              class="profile-image h-[90%] laptop:h-[80%]"
              src="~assets/img/intro/profile.png"
              alt="profile on work section"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      class="h-screen flex bg-[color:var(--primary-color)] relative overflow-hidden"
    >
      <OverlayBackground :page="'INTRO'">
        <div class="flex relative h-full mobile:justify-center">
          <img
            class="flex -rotate-[20deg] w-80 h-80 absolute top-[58px] left-[150px] mobile:hidden"
            src="~assets/img/emoji/emoji-1.png"
            alt="emoji-1"
          />
          <div
            class="flex flex-col items-center absolute bottom-[30%] right-[20%] tablet:bottom-[20%] mobile:right-0"
          >
            <h1 class="text-[color:var(--black-color)] mobile:text-center">
              Recent Projects
            </h1>
            <Button
              class="mt-4"
              :text="'View All Projects'"
              @click="navigateTo('/projects')"
            ></Button>
          </div>
        </div>
      </OverlayBackground>
    </section>
  </div>
</template>
<style scoped>
.profile-shadow {
  grid-column: 2 / span 8;
  grid-row: 1;
  padding-top: 10%;
  margin-right: -5%;
}

.profile-image {
  border-radius: 100px;
}

.profile-shadow img {
  width: 100%;
  display: block;
}

.profile-layout {
  z-index: 1;
  grid-column: 1 / span 8;
  grid-row: 1;
  background-color: transparent;
}

.profile-shadow .shadow-container {
  width: 100%;
  display: block;
  background-color: var(--primary-color);
  height: 100%;
  border-radius: 100px;
  box-shadow: -10px 0px 30px rgba(0, 0, 0, 0);
}
</style>
