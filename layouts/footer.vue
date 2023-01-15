<script setup>
import { NAV_ITEM } from "~/library/constants";
import { getSelectedItem } from "~~/library/utilities";

function getSelectedColor(e) {
  switch (e) {
    case NAV_ITEM.ABOUT:
      return "#2141B5";

    case NAV_ITEM.PROJECT:
      return "#571FB6";
    default:
      return "#E96B4B";
  }
}
</script>
<template>
  <div :style="`background: ${getSelectedColor(getSelectedItem())}`">
    <Header
      :selected="NAV_ITEM.CONTACT"
      data-aos="fade-down"
      data-aos-duration="1500"
      @selectedNavItem="getSelectedColor($event)"
    ></Header>
    <slot />
    <Footer></Footer>
  </div>
</template>
