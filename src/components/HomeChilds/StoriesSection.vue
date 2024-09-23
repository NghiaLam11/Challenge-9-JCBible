<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const breakpoints = {
  // 0px and up
  0: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  // 538px and up
  538: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  // 700px and up
  700: {
    itemsToShow: 4,
    snapAlign: "start",
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
};
</script>

<template>
  <section class="stories">
    <div class="container">
      <div class="title">
        <i class="fas fa-bible"></i>Mỗi ngày một câu chuyện Thánh Kinh
      </div>
      <div class="list">
        <Carousel :items-to-show="5" :breakpoints="breakpoints">
          <Slide v-for="slide in 10" :key="slide">
            <div class="item">
              <div class="img">
                <img
                  src="/src/images/samuel-lopes-Ip5pvMPwlyo-unsplash.jpg"
                  alt=""
                />
              </div>
              <div class="content multiline-ellipsis-2">
                <span>4 days ago</span>
                <h3>The story of Jacob!</h3>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stories {
  padding: 3rem 0;
}
.stories .title {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}
.stories .title i {
  margin-right: 0.4rem;
  color: var(--warning-color);
  font-size: 1.4rem;
}
.stories .list {
  margin: 0 0.5rem;
}
.stories .item {
  padding: 0.5rem;
  cursor: pointer;
}
.stories .item:hover > .content h3 {
  color: var(--success-color);
}
.stories .item .img img {
  border-radius: var(--border-radius);
}
.stories .item .content {
  text-align: start;
  padding: 0.2rem;
}
.stories .item .content span {
  font-size: 0.7rem;
  opacity: 0.5;
}
.stories .item .content h3 {
  line-height: 1.2rem;
}
</style>
