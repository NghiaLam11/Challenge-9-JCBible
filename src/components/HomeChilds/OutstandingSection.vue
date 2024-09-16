<script setup lang="ts"></script>

<template>
  <section class="outstanding">
    <div class="container">
      <div class="list">
        <div class="item" v-for="n in 3" :key="n">
          <div class="img">
            <img src="/src/images/highlighter.png" alt="" />
          </div>

          <div class="desc">
            <h3>EASY TO USE</h3>
            <p class="multiline-ellipsis-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              aut esse reprehenderit, voluptate numquam maxime dolore tempora
              possimus
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.outstanding {
  padding: 3rem 0;
}
.outstanding .list {
  display: flex;
}
.outstanding .list .item {
  display: flex;
  width: calc(100% / 3);
  padding: 1rem;
  align-items: center;
}
.outstanding .list .item .img {
  width: 30%;
  padding: 0.5rem;
}
.outstanding .list .item .desc {
  width: 70%;
}
.outstanding .list .item .desc p {
  line-height: 1.15rem;
  font-size: 0.9rem;
  opacity: 0.7;
  font-style: italic;
}
@media screen and (max-width: 738px) {
  .outstanding .list .item {
    flex-direction: column;
  }
  .outstanding .list .item .img {
    width: 35%;
  }
  .outstanding .list .item .desc {
    width: 100%;
    text-align: center;
  }
}
@media screen and (max-width: 538px) {
  .outstanding .list {
    flex-wrap: wrap;
  }
  .outstanding .list .item {
    flex-direction: row;
    width: 100%;
  }
  .outstanding .list .item .img {
    width: 20%;
    padding: 0.5rem;
  }
  .outstanding .list .item .desc {
    width: 80%;
    text-align: left;
  }
}
</style>
