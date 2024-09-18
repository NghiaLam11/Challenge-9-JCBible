<script setup lang="ts"></script>

<template>
  <section class="verse">
    <div class="container">
      <div class="heading">
        <i class="far fa-sun sun"></i>
        <h3>Mỗi ngày một câu Kinh Thánh</h3>
        <i class="far fa-bookmark save"></i>
      </div>
      <div class="content">
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          provident modi ipsum sapiente fugiat rerum explicabo, maiores,
          reprehenderit quaerat mollitia."
        </p>
        <h3>I Giăng 4:8</h3>
      </div>
      <div class="like"><i class="fas fa-cross"></i></div>
    </div>
  </section>
</template>

<style scoped>
.verse {
  padding: 2rem 1rem;
  background-image: url(/src/images/samuel-lopes-Ip5pvMPwlyo-unsplash.jpg);
  color: white;
}
.verse .heading {
  display: flex;
  align-items: center;
}
.verse .heading .sun {
  color: var(--warning-color);
  font-size: 1.5rem;
}
.verse .heading h3 {
  margin-left: 0.3rem;
}
.verse .heading .save {
  margin-left: auto;
}
.verse .content {
  margin-top: 2rem;
  padding: 3rem 1rem;
  text-align: center;
  font-style: italic;
}
.verse .content p {
  font-size: 1.2rem;
  line-height: 1.4rem;
  opacity: 0.9;
  color: white;
  width: 70%;
  margin: 0 auto;
}
.verse .content h3 {
  align-items: center;
  margin-left: 50%;
  padding: 1rem;
}
@media screen and (max-width: 538px) {
  .verse .content {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
  .verse .content p {
    width: 100%;
  }
}
</style>
