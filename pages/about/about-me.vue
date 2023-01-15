<template>
  <section
    id="about"
    class="h-screen flex flex-row gap-5 justify-center items-center"
  >
    <div class="flex flex-col gap-8 w-3/6">
      <div class="text-[40px] font-bold tablet:text-[36px]">About Me</div>
      <p class="text-xl tablet:text-base">
        Supatsara is <span class="font-bold">Frontend Developer</span> and
        <span class="font-bold">Experience Consultant</span> who is passionate
        about new technologies. She is proficient in Database, Python, Java and
        Web development including HTML, CSS and typescript. She has strong
        technical skills, as well as excellent problem-solving skills, enabling
        her to effectively handle and overcome obstacles.
      </p>
      <Button :text="'Contact Me'" @click="navigateTo('/contact')"></Button>
    </div>
    <img
      class="rounded-[100px] h-[60%] laptop:h-[30%] tablet:h-[20%] mobile:hidden"
      src="~assets/img/about/about-profile.png"
      alt="profile on work section"
    />
  </section>
</template>

<style scoped>
.top-layer::before {
  background-color: var(--light-yellow);
  transform: rotate(-20deg);
  content: "";
  position: absolute;
  top: 200px;
  left: 0;
  width: 2000px;
  height: 2000px;
  box-shadow: -10px 0px 30px rgba(0, 0, 0, 0);
}
</style>
