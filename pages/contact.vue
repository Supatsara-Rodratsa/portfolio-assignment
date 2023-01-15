<script lang="ts" setup>
import { Contact } from "~~/library/interfaces";

definePageMeta({
  middleware: ["middleware"],
  pageTransition: { name: "layout", mode: "out-in" },
  layout: "footer",
});

let writerName = ref("");
let email = ref("");
let message = ref("");

async function onSaveData() {
  let contactInfo: Contact;
  if (writerName.value != "" && email.value != "" && message.value != "") {
    contactInfo = {
      name: writerName.value,
      email: email.value,
      message: message.value,
    };
    console.log(contactInfo);
  }
}
</script>
<template>
  <section class="p-[40px] h-screen flex items-center justify-center">
    <div
      class="flex flex-row flex-wrap justify-center items-start gap-12 bg-[color:var(--light-yellow)] p-[40px]"
    >
      <div class="flex flex-col gap-5 justify-start items-start">
        <div class="flex flex-row gap-5">
          <img src="~assets/img/emoji/location.svg" alt="location" />
          <p>Barcelona, Spain</p>
        </div>
        <div class="flex flex-row gap-5">
          <img src="~assets/img/emoji/phone.svg" alt="phone" />
          <p>+34 670 014 714</p>
        </div>
        <div class="flex flex-row gap-5">
          <img src="~assets/img/emoji/email.svg" alt="email" />
          <p>Supatsara.Rodratsa@gmail.com</p>
        </div>
        <div class="flex flex-row gap-5">
          <img src="~assets/img/emoji/linkedin.svg" alt="linkedin" />
          <p>Linkedin.com/in/Supatsara-Rodratsa</p>
        </div>
        <div class="flex flex-row gap-5">
          <img src="~assets/img/emoji/github.svg" alt="github" />
          <p>Github.com/Supatsara-Rodratsa</p>
        </div>
      </div>
      <div class="flex flex-col gap-5 justify-start items-start">
        <p>Don't hesitate to contact me if you have any question</p>
        <div class="flex flex-col gap-2">
          <label class="font-bold">Name</label>
          <input v-model="writerName" type="text" placeholder="Name" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-bold">Email</label>
          <input v-model="email" type="email" placeholder="Email" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="font-bold">Message</label>
          <textarea v-model="message" placeholder="Message"></textarea>
        </div>
        <Button class="mt-4" :text="'Submit'" @click="onSaveData()"></Button>
      </div>
    </div>
  </section>
</template>
<style scoped>
input,
textarea {
  background: white;
  border-radius: 6px;
  filter: drop-shadow(0px 3px 13px rgba(0, 0, 0, 0.07));
  border: transparent;
  height: 30px;
  padding: 0px 10px;
  width: 250px;
  color: var(--black-color);
}

textarea {
  height: 90px !important;
  padding: 10px !important;
}

p,
label {
  color: var(--black-color);
}
</style>
