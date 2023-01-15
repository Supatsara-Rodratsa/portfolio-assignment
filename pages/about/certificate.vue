<script setup>
const { data } = await useFetch("/api/about/certificate");
const certificates = JSON.parse(JSON.stringify(data.value));
</script>
<template>
  <div class="p-[40px] h-screen flex flex-row justify-center items-center">
    <img
      src="~assets/img/emoji/emoji-5.png"
      class="w-[320px] h-[320px] absolute bottom-0"
      alt="certificate icon"
    />
    <div class="flex flex-col gap-12 justify-center items-center z-10">
      <div class="text-[40px] font-bold tablet:text-[36px]">Certificate</div>
      <CertificateTable :lists="certificates" />
    </div>
  </div>
</template>
