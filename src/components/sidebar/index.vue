<template>
    <v-navigation-drawer v-if="!login" location="left" v-model="internalDrawerOpen" name="drawer" permanent>

        <AuthProfile />

        <v-divider></v-divider>

        <v-list dense nav>
            <v-list-item v-for="item in menuItems" :key="item.value" :prepend-icon="item.icon" :title="item.title"
                :value="item.value">
                {{ item.title }}
            </v-list-item>
        </v-list>

        <v-spacer></v-spacer>

        <child v-slot="{ print }">
            <v-btn v-if="login" prepend-icon="mdi-logout" @click="handleAuth({ isLogin: false, provider: 'line' })"
                rounded="0" variant="tonal" color="error" block>
                Sign out
            </v-btn>
            <v-btn v-else prepend-icon="mdi-login" @click="handleAuth({ isLogin: true, provider: 'line' })" rounded="0"
                variant="tonal" color="primary" block>
                Sign in
            </v-btn>
        </child>
    </v-navigation-drawer>
</template>

<script setup>
import Child from '@/components/Child.vue';
import AuthProfile from '../auth/AuthProfile.vue';
import { ref, watch } from 'vue';

import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const props = defineProps({
    drawerOpen: {
        type: Boolean,
        required: true
    },
    menuItems: {
        type: Array,
        required: true
    }
});

const auth = useAuthStore();
const { login } = storeToRefs(auth);
const { handleAuth } = auth;

const internalDrawerOpen = ref(false);

watch(() => props.drawerOpen, (newValue) => {
    internalDrawerOpen.value = newValue;
});
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>