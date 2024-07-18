<template>
    <v-footer app color="grey lighten-2" name="footer">
        <child v-slot="{ print }">
            <v-btn class="mx-auto" variant="text" @click="print('footer')">
                Get Data (Footer)
            </v-btn>
        </child>
    </v-footer>
</template>

<script setup>
import Child from '@/components/Child.vue';
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
