import { storeToRefs } from "pinia";
import { userStore } from "~~/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  // const { isLogged } = storeToRefs(userStore());

  // if (!isLogged.value) navigateTo("/login", { redirectCode: 301 });
  // else
  if (to.path !== "/") navigateTo("/", { redirectCode: 301 });
});
