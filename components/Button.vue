<script setup>
defineProps({ text: String });
</script>
<template>
  <div
    class="flex flex-row gap-0 cursor-pointer bg-[color:var(--primary-color)] w-fit border-2 border-[color:var(--white-color)]"
  >
    <div class="py-2 px-8">
      <p
        class="text-[color:var(--black-color)] font-bold uppercase button-text"
      >
        {{ text }}
      </p>
    </div>
    <div
      class="border-l-2 border-[color:var(--white-color)] py-2 px-2 flex items-center"
    >
      <img src="~assets/img/emoji/arrow.svg" />
    </div>
  </div>
</template>
