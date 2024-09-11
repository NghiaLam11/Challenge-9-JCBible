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
          <ul class="hidden-nav">
            <li>
              <RouterLink to=""
                ><img
                  src="../images/710080731381b1dfe890 (1).jpg"
                  alt="avatar"
                /><span>Lam Nghia <br />&#127793;</span></RouterLink
              >
            </li>
            <li><RouterLink to="">Profile</RouterLink></li>
            <li class="item-mobile"><RouterLink to="">Home</RouterLink></li>
            <li class="item-mobile"><RouterLink to="">Bible</RouterLink></li>
            <li class="item-mobile"><RouterLink to="">Mindmaps</RouterLink></li>
            <li class="item-mobile"><RouterLink to="">Notes</RouterLink></li>
            <li class="item-mobile"><RouterLink to="">Lessons</RouterLink></li>
            <li><RouterLink to="">Settings</RouterLink></li>
            <li><RouterLink to="">Sign out</RouterLink></li>
          </ul>
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
  font-weight: 500;
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
nav .nav-more {
  position: relative;
}

nav .nav-more ul {
  position: absolute;
  right: 0;
  padding: 0;
  background-color: var(--bg-primary);
  padding: 1rem;
  border-radius: var(--border-radius);
  box-shadow: 1px 0 10px 1px var(--blur-color);
  display: flex;
  flex-direction: column;
  width: 30vw;
  transition: all 0.2s ease-in-out;
  transform: scaleX(0) scaleY(0);
  transform-origin: top right;
}
nav .nav-more ul::after {
  position: absolute;
  top: -20px;
  right: 20px;
  content: "";
  width: 100px;
  height: 20px;
  background-color: transparent;
}
nav .nav-more ul li {
  padding: 0.09rem;
}
nav .nav-more ul .item-mobile {
  display: none;
}
nav .nav-more ul li:first-child a {
  display: flex;
}
nav .nav-more ul li:first-child a img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
}
nav .nav-more ul li:first-child a span {
  font-size: 1rem;
  font-weight: 700;
  margin-left: 0.4rem;
}
nav .nav-more ul li:last-child a:hover {
  color: var(--error-color);
}
nav .nav-more:hover .hidden-nav {
  transform: scaleX(1) scaleY(1);
}
@media screen and (max-width: 638px) {
  nav ul {
    display: none;
  }
  nav .nav-more ul {
    width: 50vw;
  }
  nav .nav-more ul .item-mobile {
    display: block;
  }
}
</style>
