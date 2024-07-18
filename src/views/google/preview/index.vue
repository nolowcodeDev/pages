<template>
  <div>
    <h1>This is a Preview Script page</h1>
    <div>
      <input type="text" v-model="id" placeholder="วาง Google Apps Script ID" />
      <button @click="toPreview()">เปิด</button>
    </div>
    <pre v-if="data">{{ data }}</pre>
  </div>
  <router-view />
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const id = ref();
const data = ref();
const router = useRouter();

const toPreview = () => {
  console.log(id.value);
  if (id.value) {
    router.push({ path: `/google/preview/${id.value}` })

    // router.push({
    //   name: "google-preview-show",
    //   params: { id: id.value },
    // });
  }
};

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
</script>
