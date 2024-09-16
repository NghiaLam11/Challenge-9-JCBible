<script setup lang="ts">
import WelcomeToSection from "./SignupChilds/WelcomeToSection.vue";
import WelcomeBackSection from "./SigninChilds/WelcomeBackSection.vue";
import HeroSection from "./HomeChilds/HeroSection.vue";
</script>

<template>
  <section class="home">
    <WelcomeToSection></WelcomeToSection>
    <WelcomeBackSection></WelcomeBackSection>
    <HeroSection></HeroSection>
  </section>
</template>

<style scoped>
.home {
  min-height: 150vh;
}
</style>
