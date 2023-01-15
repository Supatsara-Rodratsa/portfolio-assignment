<script lang="ts" setup>
import { Education } from "~~/library/interfaces";

const prop = defineProps<{ lists: Education }>();
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
            src="~assets/img/emoji/education.svg"
          />
          <div class="flex flex-col gap-1">
            <div>{{ list.school }}</div>
            <div>{{ list.location }}</div>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <div class="flex flex-col font-bold">{{ list.program }}</div>
          <div class="flex flex-col text-[color:var(--gray-color)] font-light">
            {{ list.duration }}
          </div>
          <div class="flex flex-row font-light gap-2">
            <div>Grade: {{ list.grade || "-" }}</div>
            <div v-show="list.isFirstClassHonour">(First Class Honours)</div>
          </div>
        </div>
        <div class="flex flex-col w-[120%]">
          <ul
            class="list-disc"
            v-for="(subject, index) in list.module"
            v-bind:key="index"
          >
            <li class="mb-[15px]">
              {{ subject }}
            </li>
          </ul>
        </div>
        <div class="flex justify-center">
          <ExternalLink :link="list.externalLink" />
        </div>
      </div>
      <hr
        class="border border-dashed mt-[2rem]"
        v-show="index != data.length - 1"
      />
    </div>
  </div>
</template>
