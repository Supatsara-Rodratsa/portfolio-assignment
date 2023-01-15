<script setup>
definePageMeta({
  middleware: ["middleware"],
});
</script>
<template>
  <div class="flex flex-col bg-[color:var(--bg-color-3)]">
    <section class="px-[40px] relative overflow-scroll overflow-x-hidden">
      <div class="flex flex-col h-screen justify-center">
        <div class="flex flex-row items-center gap-0 relative -mx-[40px]">
          <div
            class="px-[20%] py-[17px] tablet:py-[10px] bg-[color:var(--primary-color)]"
          ></div>
          <h1
            class="flex large-text font-extrabold text-[color:var(--primary-color)] text-[250px] laptop:text-[180px] tablet:text-[130px] -translate-x-5 -translate-y-4"
          >
            PRO
          </h1>
          <div
            class="px-[35%] py-[17px] tablet:py-[10px] bg-[color:var(--primary-color)] -translate-x-10"
          ></div>
          <img
            class="flex w-[320px] h-[320px] tablet:w-[180px] tablet:h-[180px] absolute left-[10%] bottom-[20%]"
            src="~assets/img/emoji/emoji-6.png"
            alt="emoji-6"
          />
        </div>
        <div class="flex flex-row items-center gap-0 relative -mx-[40px]">
          <div
            class="px-[10%] py-[17px] tablet:py-[10px] bg-[color:var(--primary-color)]"
          ></div>
          <h1
            class="flex large-text font-extrabold text-[color:var(--primary-color)] text-[250px] laptop:text-[180px] tablet:text-[130px] -translate-x-12 -translate-y-4 tablet:-translate-x-10"
          >
            JECT
          </h1>
          <div
            class="px-[65%] py-[17px] tablet:py-[10px] bg-[color:var(--primary-color)] -translate-x-[100px] tablet:-translate-x-[80px]"
          ></div>
          <img
            class="flex w-[320px] h-[320px] tablet:w-[180px] tablet:h-[180px] absolute right-[10%] bottom-[20%]"
            src="~assets/img/emoji/emoji-6.png"
            alt="emoji-6"
          />
        </div>
      </div>
    </section>
    <section
      class="px-[40px] h-screen flex flex-row gap-5 justify-center items-center"
    >
      <div class="flex flex-col gap-8 justify-center items-center">
        <div class="text-[40px] font-bold tablet:text-[36px]">
          Endless Learning
        </div>
        <p class="text-center w-3/6 text-xl tablet:text-base">
          Over the year, I have had the opportunity of working on projects in
          different frameworks such as Vue, Angular, VanillaJS and etc.
          Moreover, I have had chance of designing the project. It was so fun
          and I feel like I have learned and improved many skills.
        </p>
        <Button
          class="mt-4"
          :text="`Let’s check
        out the projects!`"
          @click="navigateTo('/projects/project-review')"
        ></Button>
      </div>
    </section>
  </div>
</template>
