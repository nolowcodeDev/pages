import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const login = ref(false);
  const profile = ref({});

  const defaultData = {
    provider: "line",
    firstname: "siraphop",
    lastname: "nonpala",
  };

  const logout = () => {
    login.value = !login.value;
    if (!login.value) {
      profile.value = {};
    } else {
      profile.value = { ...defaultData };
    }
  };

  const handleAuth = (props) => {
    if (props.isLogin) {
      profile.value = { ...defaultData };
    } else {
      profile.value = {};
    }
    console.log("props:", props);
  };

  return { login, logout, profile, handleAuth };
});
