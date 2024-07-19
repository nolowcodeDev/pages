<template>
    <div class="text-center">
        <v-overlay :model-value="loading" persistent class="align-center justify-center">
            <v-progress-circular :color="color" :size="size" indeterminate></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    loading: {
        type: Boolean,
        required: true
    },
    color: {
        type: String,
        default: 'primary'
    },
    size: {
        type: [String, Number],
        default: '64'
    }
});
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>