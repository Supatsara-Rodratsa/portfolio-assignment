<script lang="ts" setup>
import { Certificate } from "~~/library/interfaces";

const prop = defineProps<{ lists: Certificate }>();
const data = JSON.parse(JSON.stringify(prop.lists));
</script>
<template>
  <div class="flex flex-col gap-5">
    <ul class="list-disc" v-for="(list, index) in data" v-bind:key="index">
      <li class="flex flex-row justify-between gap-12">
        &#8226;&nbsp;&nbsp;{{ list.name }} <span>{{ list.year }}</span>
      </li>
    </ul>
  </div>
</template>
