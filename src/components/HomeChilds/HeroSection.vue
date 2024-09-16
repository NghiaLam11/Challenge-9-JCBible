<script setup lang="ts"></script>

<template>
  <section class="hero container">
    <div class="left">
      <h3>JCBIBLE</h3>
      <p>
        <b>I Ti-mô-thê 4:13</b>:
        <i>"Hãy chăm chỉ đọc sách, khuyên bảo, dạy dỗ, cho đến chừng ta đến"</i>
      </p>
    </div>
    <div class="right"><img src="/src/images/church.png" alt="" /></div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  height: 70vh;
  position: relative;
}
.hero::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 1px;
  height: 60vh;
  background-color: var(--text-color);
  left: 50%;
  top: calc(50% - (60vh / 2));
  animation: spin 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-355deg);
  }
  100% {
    transform: rotate(-385deg);
  }
}
.hero .left {
  margin-left: auto;
  flex-direction: column;
  align-items: start !important;
  justify-content: end !important;
}
.hero .left h3 {
  font-family: var(--font-mono);
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  margin-left: 2rem;
}
.hero .left p {
  width: 80%;
  line-height: 1.3rem;
  margin-left: 2rem;
}
.hero .left,
.right {
  height: 100%;
  width: 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
}
.hero .right img {
  width: 25%;
  margin-left: auto;
  margin-right: 4rem;
}
@media screen and (max-width: 768px) {
  .hero::after {
    height: 50vh;
    top: calc(50% - (50vh / 2));
  }
  .hero .right img {
    width: 40%;
    transform: translateY(-30px);
  }
}
@media screen and (max-width: 538px) {
  .hero::after {
    height: 40vh;
    top: calc(50% - (40vh / 2));
  }
  .hero .right img {
    width: 45%;
    transform: translateY(-40px);
    margin-right: 2.5rem;
  }
  .hero .left h3 {
    font-size: 2rem;
  }
  .hero .left h3,p {
    margin-left: 1rem !important;
    width: 95% !important;
  }
  .hero .left,.right {
    padding: 0;
  }
}
</style>
