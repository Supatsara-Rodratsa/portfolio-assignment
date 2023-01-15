<script lang="ts" setup>
import { WorkExperience } from "~~/library/interfaces";

const prop = defineProps<{ lists: WorkExperience }>();
const data = JSON.parse(JSON.stringify(prop.lists));
</script>
<template>
  <div class="flex flex-col gap-8 mb-[40px]">
    <div v-for="(list, index) in data" v-bind:key="index">
      <div
        class="grid grid-cols-4 gap-x-4 gap-y-8 grid-flow-row-dense mobile:grid-cols-1"
      >
        <div class="flex flex-row gap-5">
          <img
            class="w-[40px] h-[40px]"
            src="~assets/img/emoji/work.svg"
            :class="{ invisible: list.hideName }"
          />
          <div class="flex flex-col gap-1">
            <div :class="{ invisible: list.hideName }">{{ list.company }}</div>
            <div :class="{ invisible: list.hideName }">{{ list.location }}</div>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <div class="flex flex-col font-bold">{{ list.position.role }}</div>
          <div class="flex flex-col text-[color:var(--gray-color)] font-light">
            {{ list.position.duration }}
          </div>
        </div>
        <div class="flex flex-col w-[120%]">
          <ul
            class="list-disc"
            v-for="(desc, index) in list.position.description"
            v-bind:key="index"
          >
            <li class="mb-[15px]">
              {{ desc }}
            </li>
          </ul>
        </div>
        <div class="flex justify-center" v-show="!list.hideName">
          <ExternalLink :link="list.externalLink" />
        </div>
      </div>
      <hr
        class="border border-dashed mt-[2rem]"
        v-show="!list.hideDash && index != data.length"
      />
    </div>
  </div>
</template>
