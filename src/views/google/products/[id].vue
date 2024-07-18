<template>
  <h1>Products</h1>
  <h2>{{ id }}</h2>
  <AuthSignIn />
  <pre>{{ profile }}</pre>
</template>

<script setup>
import AuthSignIn from "@/components/auth/AuthButton.vue";

import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const route = useRoute();
const auth = useAuthStore();
const id = route.params.id;

const { login, profile } = storeToRefs(auth);

if (id) {
  console.log("id: ", id);
}
</script>

<style></style>
