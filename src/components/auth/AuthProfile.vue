<template v-slot:prepend>
    <v-list-item lines="two" :prepend-avatar="profile.avatar ?? 'https://randomuser.me/api/portraits/women/81.jpg'"
        :subtitle="login ? 'Logged in' : 'Logged out'" :title="profile.fullname || 'Firstname Lastname'"></v-list-item>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const auth = useAuthStore();
const { login, profile } = storeToRefs(auth);
</script>