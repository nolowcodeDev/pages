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
            <AuthModal />
            <Overlay :loading="loading" />
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
import Navbar from '@/components/navbar/index.vue';
import Sidebar from '@/components/sidebar/index.vue';
import Footer from '@/components/footer/index.vue';
import AuthModal from '@/components/auth/AuthModal.vue';
import Overlay from '@/components/loading/Overlay.vue'
import { ref } from 'vue';

const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 3000);

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
