<script setup>
defineProps({ text: String, link: String });
</script>
<template>
  <a
    :href="link"
    class="container relative w-[450px] tablet:w-[300px] hover:drop-shadow-2xl"
  >
    <slot />
    <div
      class="overlay absolute top-0 bottom-0 left-0 right-0 opacity-0 w-full h-full bg-[color:var(--primary-color)]"
    >
      <div
        class="flex font-bold justify-center items-center h-full text-[color:var(--black-color)]"
      >
        {{ text }}
      </div>
    </div>
  </a>
</template>
<style scoped>
.overlay {
  transition: 0.5s ease;
}

.container:hover .overlay {
  opacity: 0.9;
  border-radius: 8px;
}
</style>
