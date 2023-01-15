<script setup>
defineProps({ link: String });
</script>
<template>
  <a :href="link" class="cursor-pointer hover:drop-shadow-xl">
    <div
      class="flex justify-center items-center rounded-full w-[55px] h-[55px] border border-[color:var(--white-color)] bg-[color:var(--primary-color)]"
    >
      <img src="~assets/img/emoji/polygon.svg" class="w-[20px] h-[20px]" />
    </div>
  </a>
</template>
