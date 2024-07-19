<template>
    <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" color="surface-variant" text="Open Dialog" variant="flat"></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Sign in" color="surface-variant">
                <v-card-text class="text-center">
                    <v-avatar :image="avatar" size="80"></v-avatar>
                    <v-btn class="mt-3" block="" color="success"
                        @click="handleProvider({ provider: 'line', state: 'urlLogin' })">Line
                        Login</v-btn>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Close" variant="flat" color="error" @click="isActive.value = false"></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog></template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const avatar = ref(import.meta.env.VITE_APP_AVATAR)

const auth = useAuthStore();
const { login, profile } = storeToRefs(auth);
const { handleAuth } = auth;

const handleProvider = ({provider, state}) => {
    if(provider === 'line' && state === 'urlLogin') {
        return useLiff()
    };
}

</script>

<style scoped>
/* Add scoped styles here if needed */
</style>