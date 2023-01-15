<script lang="ts" setup>
import { PageCategories } from "~/library/types";
import { NAV_ITEM } from "~~/library/constants";
const prop = defineProps<{ page: PageCategories }>();

function getBackgroundColor() {
  switch (prop.page) {
    case NAV_ITEM.INTRO:
      return "#F9DA64";
    case NAV_ITEM.ABOUT:
      return "#2D4EBF";
    default:
      return;
  }
}

function getDegree() {
  switch (prop.page) {
    case NAV_ITEM.INTRO:
      return "rotate(-20deg)";
    case NAV_ITEM.ABOUT:
      return "rotate(-10deg)";
    default:
      return;
  }
}

function getTop() {
  switch (prop.page) {
    case NAV_ITEM.INTRO:
      return "-100px";
    case NAV_ITEM.ABOUT:
      return "-50px";
    default:
      return;
  }
}
</script>
<template>
  <div :class="`top-layer w-full`">
    <slot />
  </div>
</template>
<style scoped>
.top-layer::before {
  z-index: 0;
  background-color: v-bind(getBackgroundColor());
  transform: v-bind(getDegree());
  content: "";
  position: absolute;
  top: v-bind(getTop());
  left: 0;
  width: 4000px;
  height: 4000px;
  box-shadow: -10px 0px 30px rgba(0, 0, 0, 0);
}
</style>
