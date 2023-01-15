<script lang="ts" setup>
import { NAV_ITEM } from "~/library/constants";
import { getSelectedItem, setSelectedItem } from "~/library/utilities";
import { PageCategories } from "~~/library/types";
const prop = defineProps<{ selected: String }>();
let selectedItem = ref(prop.selected);

const route = useRoute();

watch(route, (newMovies) => {
  if (newMovies.fullPath.includes("about")) {
    selectedItem.value = NAV_ITEM.ABOUT;
  }

  if (newMovies.fullPath.includes("projects")) {
    selectedItem.value = NAV_ITEM.PROJECT;
  }
});

const emit = defineEmits(["selectedNavItem"]);
function onClickItem(item: string) {
  setSelectedItem(item);
  selectedItem.value = getSelectedItem();
  emit("selectedNavItem", selectedItem.value);
}
</script>
<template>
  <div
    class="flex flex-row justify-between items-center absolute z-[99] w-screen p-2 h-20"
  >
    <a href="" class="px-2.5">
      <div
        class="flex rounded-full justify-center items-center font-bold italic w-14 h-14 text-3xl border border-[color:var(--primary-color)]"
      >
        R
      </div>
    </a>

    <div class="flex flex-row gap-6 uppercase font-medium">
      <div
        class="flex flex-col items-center gap-1 item h-[20px]"
        v-on:click="onClickItem(NAV_ITEM.INTRO)"
      >
        <NuxtLink class="px-2.5" to="/"> Intro </NuxtLink>
        <img
          :class="{ hidden: selectedItem != NAV_ITEM.INTRO }"
          src="~assets/img/emoji/vector.svg"
        />
      </div>

      <div
        class="flex flex-col items-center gap-1 item h-[20px]"
        v-on:click="onClickItem(NAV_ITEM.ABOUT)"
      >
        <NuxtLink class="px-2.5" to="/about"> About </NuxtLink>
        <img
          :class="{ hidden: selectedItem != NAV_ITEM.ABOUT }"
          src="~assets/img/emoji/vector.svg"
        />
      </div>

      <div
        class="flex flex-col items-center gap-1 item h-[20px]"
        v-on:click="onClickItem(NAV_ITEM.PROJECT)"
      >
        <NuxtLink class="px-2.5" to="/projects"> Project </NuxtLink>
        <img
          :class="{ hidden: selectedItem != NAV_ITEM.PROJECT }"
          src="~assets/img/emoji/vector.svg"
        />
      </div>
    </div>
    <div class="uppercase" v-on:click="onClickItem(NAV_ITEM.CONTACT)">
      <NuxtLink class="px-2.5" to="/contact"> Contact </NuxtLink>
    </div>
  </div>
</template>
<style scoped>
.item:hover img {
  display: block;
}
</style>
