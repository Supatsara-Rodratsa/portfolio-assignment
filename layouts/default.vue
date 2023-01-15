<script setup>
import { NAV_ITEM } from "~/library/constants";
import { getSelectedItem } from "~~/library/utilities";

let selectedItem = ref("#E96B4B");
let currentPage = ref(getSelectedItem());

const route = useRoute();

watch(route, (newMovies) => {
  if (newMovies.fullPath.includes("about")) {
    getSelectedColor(NAV_ITEM.ABOUT);
  }

  if (newMovies.fullPath.includes("projects")) {
    getSelectedColor(NAV_ITEM.PROJECT);
  }
});

function getSelectedColor(e) {
  switch (e) {
    case NAV_ITEM.ABOUT:
      selectedItem.value = "#2141B5";
      break;
    case NAV_ITEM.PROJECT:
      selectedItem.value = "#571FB6";
      break;
    default:
      selectedItem.value = "#E96B4B";
      break;
  }
}

function getBackgroundColor(item) {
  return item;
}
</script>
<template>
  <div :style="`background: ${getBackgroundColor(selectedItem)}`">
    <Header
      :selected="currentPage"
      data-aos="fade-down"
      data-aos-duration="1500"
      @selectedNavItem="getSelectedColor($event)"
    ></Header>
    <slot />
  </div>
</template>
