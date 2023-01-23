<script lang="ts" setup>
import { NAV_ITEM } from "~~/library/constants";
import { PageCategories } from "~~/library/types";

const prop = defineProps<{ type: PageCategories }>();

function renderTitle() {
  switch (prop.type) {
    case NAV_ITEM.ABOUT:
      return "About ROSE :)";
    case NAV_ITEM.PROJECT:
      return "Supatsara Project";
  }
}

const title = ref(renderTitle());
</script>
<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title"></Meta>
  </Head>
</template>
