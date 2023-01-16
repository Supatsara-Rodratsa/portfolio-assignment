import { defineStore } from "pinia";
import { User } from "~~/library/interfaces";
import { UserList } from "~~/mocks/userAuthentication";
export const userStore = defineStore("user", () => {
  // state
  const name = ref("");
  const logged = ref(false);
  const errored = ref(false);
  const userMock: User[] = UserList;

  // getter
  const userName = computed(() => name.value);
  const isLogged = computed(() => logged.value);
  const isError = computed(() => errored.value);

  // action
  function onLogin(_username: string, _password: string) {
    for (const user of userMock) {
      if (user.name === _username && user.password === _password) {
        logged.value = true;
        errored.value = false;
        name.value = _username;
        break;
      } else {
        errored.value = true;
      }
    }
  }

  function onLogout() {
    logged.value = false;
    errored.value = false;
    name.value = "";
    navigateTo("/login");
  }

  return { userName, isLogged, isError, onLogin, onLogout };
});
