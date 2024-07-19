import { capitalizeFirstLetter } from "@/utils";

import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const login = ref(false);
  const profile = ref({});

  const defaultData = {
    provider: "line",
    firstname: "siraphop",
    lastname: "nonpala",
    avatar:
      "https://lh3.googleusercontent.com/ogw/AF2bZyjswmdOUkMHd2tM37NyJnIQtSWZyjHJaVAigV5gFaPusw=s32-c-mo",
  };

  const updateFullName = () => {
    if (profile.value.firstname && profile.value.lastname) {
      profile.value.fullname = `${capitalizeFirstLetter(
        profile.value.firstname
      )} ${capitalizeFirstLetter(profile.value.lastname)}`;
    } else {
      profile.value.fullname = "";
    }
  };

  watch(profile, updateFullName, { deep: true });

  const handleAuth = (props) => {


    if (props.isLogin) {
      profile.value = { ...defaultData };
      login.value = true;
      updateFullName();
    } else {
      login.value = false;
      profile.value = {};
    }
  };

  return { login, profile, handleAuth };
});
