<template>
    <v-app-bar color="primary" name="app-bar" scroll-behavior="hide">
        <v-btn icon @click="$emit('toggleDrawer')">
            <v-icon :icon="drawerOpen ? 'mdi-home' : 'mdi-dots-vertical'"></v-icon>
        </v-btn>
        <child v-slot="{ print }">
            <v-btn @click="print('app-bar')">Get Data (App Bar)</v-btn>
        </child>
        <template v-slot:append>
            <v-btn icon="mdi-magnify"></v-btn>
            <v-btn icon="mdi-account"></v-btn>
        </template>
    </v-app-bar>
</template>

<script setup>
import Child from '@/components/Child.vue';
import { defineProps } from 'vue';

const props = defineProps({
    drawerOpen: {
        type: Boolean,
        required: true
    }
});
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>