<script setup lang="ts"></script>

<template>
  <div class="alert">
    <h3>WARNING</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</template>

<style scoped>
.alert {
  position: fixed;
  top: 10%;
  right: 2px;
  z-index: 100;
  background-color: var(--bg-primary);
  box-shadow: var(--shadow-box);
  padding: 1rem;
  border: 1px solid var(--warning-color);
  border-radius: var(--border-radius);
}
.alert h3 {
  color: var(--warning-color);
  font-size: 0.8rem;
}
.alert p {
  line-height: 0.8rem;
  font-size: 0.6rem;
  font-style: italic;
}
@media screen and (max-width: 738px) {
  .alert {
    padding: 0.5rem;
  }
  .alert h3 {
    font-size: 0.6rem;
  }
  .alert p {
    line-height: 0.6rem;
    font-size: 0.5rem;
  }
}
</style>
