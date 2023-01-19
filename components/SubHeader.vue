<script lang="ts" setup>
import { TopicPath } from "~~/library/interfaces";

defineProps<{ lists: Array<TopicPath> }>();
const emit = defineEmits(["selectedTopic"]);

function onClickTopic(path: string) {
  emit("selectedTopic", path);
}
</script>
<template>
  <div class="flex flex-col gap-2 list">
    <div v-for="(list, index) in lists" v-bind:key="index">
      <div
        class="flex flex-row gap-2 items-center cursor-pointer"
        @click="onClickTopic(list.path)"
      >
        <div
          class="flex rounded-full justify-center items-center bg-[color:var(--dark-blue)] w-[40px] h-[40px]"
        >
          {{ `0${index + 1}` }}
        </div>
        <div class="invisible hidden opacity-0 show">{{ list.name }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.list:hover .show {
  display: block;
  visibility: visible;
  opacity: 1;
  transition: all 2s;
}
</style>
