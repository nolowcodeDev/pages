<template>
    <v-navigation-drawer location="left" v-model="internalDrawerOpen" name="drawer" permanent>
        <template v-slot:prepend>
            <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                subtitle="Logged in" title="Jane Smith"></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list dense nav>
            <v-list-item v-for="item in menuItems" :key="item.value" :prepend-icon="item.icon" :title="item.title"
                :value="item.value">
                {{ item.title }}
            </v-list-item>
        </v-list>

        <v-spacer></v-spacer>

        <child v-slot="{ print }">
            <v-btn prepend-icon="mdi-logout" @click="print('drawer')" rounded="0" variant="tonal" color="primary" block>
                Sign out
            </v-btn>
        </child>
    </v-navigation-drawer>
</template>

<script setup>
import Child from '@/components/Child.vue';
import { ref, watch } from 'vue';

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

const internalDrawerOpen = ref(false);

watch(() => props.drawerOpen, (newValue) => {
    internalDrawerOpen.value = newValue;
});
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>