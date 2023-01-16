<script lang="ts" setup>
definePageMeta({
  //   middleware: ["middleware"],
  pageTransition: { name: "layout", mode: "out-in" },
  layout: "footer",
});
</script>
<template>
  <section class="p-[40px] h-screen flex items-center justify-center">
    <div class="flex flex-col gap-3">
      Login
      <UserLogin></UserLogin>
    </div>
  </section>
</template>
