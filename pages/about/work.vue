<script setup>
const { data } = await useFetch("/api/about/work");

const workDetails = JSON.parse(JSON.stringify(data.value));
</script>
<template>
  <section class="h-[120%] flex relative overflow-hidden -mx-[40px]">
    <OverlayBackground :page="'ABOUT'">
      <div class="relative mx-[40px]">
        <div class="flex flex-row items-center">
          <img
            class="flex mt-[20px] w-[200px] h-[200px]"
            src="~assets/img/emoji/emoji-4.png"
            alt="work icon"
          />
          <div class="text-[40px] font-bold tablet:text-[36px]">
            Work Experience
          </div>
        </div>
        <br /><br /><br />
        <div class="flex z-10 w-full justify-center items-center">
          <WorkTable :lists="workDetails"></WorkTable>
        </div>
      </div>
    </OverlayBackground>
  </section>
</template>
<style scoped></style>
