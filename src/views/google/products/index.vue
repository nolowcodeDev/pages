<template>
  <div>
    <h1>This is an Product page</h1>
    <pre v-if="data">{{ data }}</pre>
  </div>
  <router-view />
</template>

<script setup>
import { onMounted, ref } from "vue";

const data = ref();

const fetchData = async () => {
  try {
    const res = await fetch(import.meta.env.VITE_API_URL + '/products');
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(`Error ${error}`);
  }
};

const init = async () => {
  const res = await fetchData();
  console.log("res: ", res);
  data.value = { ...res };
};

onMounted(() => {
  init();
});
</script>
