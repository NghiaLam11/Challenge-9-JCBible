<script setup lang="ts"></script>

<template>
  <section class="header">
    <div class="proverb">
      <p class="container">
        Sống Phúc âm, phụng sự Thiên Chúa, phục vụ Tổ quốc và dân tộc.
      </p>
    </div>
    <div class="navbar">
      <nav class="container">
        <div class="logo">
          <img src="../images/webicon.png" alt="" />
          <span>JCBIBLE</span>
        </div>
        <ul class="nav-list">
          <li><RouterLink to="">HOME</RouterLink></li>
          <li><RouterLink to="">BIBLE</RouterLink></li>
          <li><RouterLink to="">MINDMAPS</RouterLink></li>
          <li><RouterLink to="">NOTES</RouterLink></li>
          <li><RouterLink to="">LESSONS</RouterLink></li>
        </ul>
        <div class="nav-more">
          <i class="fas fa-bars"></i>
        </div>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.proverb {
  background-color: var(--warning-color);
}
.proverb p {
  text-align: center;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  font-style: italic;
  line-height: 2.1rem;
}
.navbar {
  background-color: var(--bg-secondary);
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
nav .logo {
  display: flex;
  align-items: center;
}
nav .logo img {
  width: 50px;
}
nav .logo span {
  font-family: monospace;
  font-size: 1.4rem;
  transform: translateX(-7px);
}
nav ul {
  display: flex;
  list-style: none;
}
nav ul li a {
  color: var(--text-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: all 0.1s linear;
  font-size: 0.9rem;
}
nav ul li a:hover {
  color: var(--link-color);
}
nav .nav-more i {
  cursor: pointer;
  font-size: 1.5rem;
  opacity: 0.7;
  transition: all 0.1s linear;
}
nav .nav-more i:hover {
  opacity: 1;
  scale: 1.1;
}
@media screen and (max-width: 638px) {
  nav ul {
    display: none;
  }
}
</style>
