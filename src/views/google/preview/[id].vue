<template>
  <iframe v-if="iframe" :src="iframe" class="responsive-iframe"></iframe>
  <div v-else>ไม่พบข้อมูล</div>
</template>

<script setup>
import { getScriptUrlById } from "@/utils";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const id = route.params.id;
const iframe = ref();

if (id) {
  iframe.value = getScriptUrlById(id);
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.responsive-iframe {
  width: 100%;
  min-height: 1080px;
  height: auto;
  border: none; /* optional: remove the iframe border */
}
</style>
