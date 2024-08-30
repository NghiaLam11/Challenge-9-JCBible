<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const onRoute = () => {
  router.push("/about");
  console.log(router);
};
</script>

<template>
  <div>
    THIS IS HOME <router-link to="/about">ABout</router-link>
    <button @click="onRoute">ABOUT</button>
  </div>
</template>

<style scoped></style>
