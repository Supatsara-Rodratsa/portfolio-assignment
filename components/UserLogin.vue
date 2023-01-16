<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { userStore } from "~~/stores/user";

let username = ref("Rose");
let password = ref("P@ssw0rd");

const useUserStore = userStore();
const { userName, isLogged, isError } = storeToRefs(useUserStore);
const { onLogin } = useUserStore;

function login() {
  onLogin(username.value, password.value);
  username.value = "";
  password.value = "";
}
</script>
<template>
  <div
    class="flex justify-center items-center bg-[color:var(--light-yellow)] w-[400px] h-[400px] text-[color:var(--black-color)]"
  >
    <div
      v-if="!isLogged"
      class="flex flex-col flex-wrap justify-center items-start gap-1"
    >
      <div class="flex flex-col gap-2">
        <label class="font-bold">Name</label>
        <div>
          <input
            :class="{ 'border border-red-700': isError }"
            v-model="username"
            type="text"
            placeholder="Name"
          />
          <span
            :class="
              isError
                ? 'text-red-700 visible text-[12px] block h-[15px]'
                : 'invisible block h-[15px]'
            "
            >Invalid Username</span
          >
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label class="font-bold">Password</label>
        <div>
          <input
            :class="{ 'border border-red-700': isError }"
            v-model="password"
            type="password"
            placeholder="Password"
          />
          <span
            :class="
              isError
                ? 'text-red-700 visible text-[12px] block h-[15px]'
                : 'invisible block h-[15px]'
            "
            >Invalid Password</span
          >
        </div>
      </div>
      <Button class="mt-4" :text="'Login'" @click="login()"></Button>
    </div>
    <div v-else>
      <div class="flex flex-col items-center gap-5">
        <p class="text-[color:var(--black-color)] text-xl font-bold">
          Login Successful
        </p>
        <p class="text-[color:var(--black-color)] text-base">
          Hi! {{ userName }}
        </p>
      </div>
    </div>
  </div>
</template>
