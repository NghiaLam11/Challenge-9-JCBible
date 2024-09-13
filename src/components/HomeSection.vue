<script setup lang="ts">
import WelcomeToSection from "./SignupChilds/WelcomeToSection.vue";
import WelcomeBackSection from "./SigninChilds/WelcomeBackSection.vue";
</script>

<template>
  <section class="home">
    <WelcomeToSection></WelcomeToSection>
    <WelcomeBackSection></WelcomeBackSection>
  </section>
</template>

<style scoped>
.home {
  min-height: 150vh;
}
</style>
