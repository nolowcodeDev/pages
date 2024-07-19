<template>
  <button v-if="!login" @click="handleAuth({ isLogin: true, provider: 'line' })">
    Sign In
  </button>
  <button v-else @click="handleAuth({ isLogin: false, provider: 'line' })">
    Sign Out
  </button>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const auth = useAuthStore();
const { login, profile } = storeToRefs(auth);
const { handleAuth } = auth;
</script>
