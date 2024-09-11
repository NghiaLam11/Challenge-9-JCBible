<script setup lang="ts">
import { onMounted } from "vue";
import HeaderSection from "./components/HeaderSection.vue";

onMounted(() => {
  // POSITION FIXED NAVBAR ELEMENT ------------------------------------------------
  const navbarElement: any = document.querySelector(".navbar");
  const onScrollToFixedNavbar = () => {
    if (window.scrollY > navbarElement.offsetTop) {
      navbarElement.style.position = "fixed";
      navbarElement.style.top = "0";
      navbarElement.style.left = "0";
      navbarElement.style.right = "0";
    } else {
      navbarElement.style.position = "static";
    }
  };
  window.addEventListener("scroll", onScrollToFixedNavbar);
  // -------------------------------------------------------------------------------
});
</script>

<template>
  <div class="app">
    <HeaderSection></HeaderSection>
    <RouterView />
  </div>
</template>

<style scoped></style>
