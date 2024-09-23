<script setup lang="ts">
import WelcomeToSection from "./SignupChilds/WelcomeToSection.vue";
import WelcomeBackSection from "./SigninChilds/WelcomeBackSection.vue";
import HeroSection from "./HomeChilds/HeroSection.vue";
import OutstandingSection from "./HomeChilds/OutstandingSection.vue";
import VerseSection from "./HomeChilds/VerseSection.vue";
import StoriesSection from "./HomeChilds/StoriesSection.vue";
import LessonsSection from "./HomeChilds/LessonsSection.vue";
</script>

<template>
  <section class="home">
    <WelcomeToSection></WelcomeToSection>
    <WelcomeBackSection></WelcomeBackSection>
    <HeroSection></HeroSection>
    <OutstandingSection></OutstandingSection>
    <VerseSection></VerseSection>
    <StoriesSection></StoriesSection>
    <LessonsSection></LessonsSection>
  </section>
</template>

<style scoped>
.home {
  min-height: 150vh;
}
</style>
