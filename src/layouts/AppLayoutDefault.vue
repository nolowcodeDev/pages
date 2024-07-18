<template>
  <v-layout ref="app" class="rounded rounded-md">
    <!-- Navbar -->
    <Navbar :drawerOpen="drawerOpen" @toggleDrawer="toggleDrawer" />
    <!-- Sidebar -->
    <Sidebar :drawerOpen="drawerOpen" :menuItems="menuItems" />
    <!-- Main Content -->
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <v-container fluid>
        <v-row>
          <v-col>
            <h1>Main Content</h1>
            <slot />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- Footer -->
    <Footer />
  </v-layout>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';

const drawerOpen = ref(false);
const menuItems = ref([
  { icon: 'mdi-home-city', title: 'Home', value: 'home', path: '/' },
  { icon: 'mdi-account', title: 'My Account', value: 'account', path: '/' },
  { icon: 'mdi-account-group-outline', title: 'Users', value: 'users', path: '/' }
]);

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value;
}


</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
