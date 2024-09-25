<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const breakpoints = {
  // 0px and up
  0: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  // 700px and up
  700: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
};
</script>

<template>
  <section class="lessons">
    <div class="container">
      <div class="title">
        <i class="fas fa-bible"></i>Các bài học có liên quan
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
                <div class="heading-content">
                  <span>Le Tu Cam</span><span>4 ngay truoc</span>
                </div>

                <h3>Walk by faith, not by sight!</h3>
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
.lessons {
  padding: 3rem calc(100% / 5);
}
.lessons .title {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}
.lessons .title i {
  margin-right: 0.4rem;
  color: var(--warning-color);
  font-size: 1.4rem;
}
.lessons .list {
  margin: 0 0.5rem;
}
.lessons .item {
  padding: 0.5rem;
  cursor: pointer;
}
.lessons .item:hover > .content h3 {
  color: var(--success-color);
}
.lessons .item .img img {
  border-radius: var(--border-radius);
}
.lessons .item .content {
  text-align: start;
  padding: 0.2rem;
}
.lessons .item .content span {
  font-size: 0.7rem;
}
.lessons .item .content span:last-child {
  opacity: 0.5;
  font-weight: 200;
}
.lessons .item .content .heading-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.lessons .item .content .heading-content span:first-child {
  font-weight: bold;
  color: var(--text-color);
}
.lessons .item .content h3 {
  line-height: 1.2rem;
}
@media screen and (max-width: 768px) {
  .lessons {
    padding: 3rem calc(100% / 10);
  }
}
@media screen and (max-width: 538px) {
  .lessons {
    padding: 1rem;
  }
  .lessons .item .content h3 {
    line-height: 1.1rem;
    font-size: 0.9rem;
  }
}
</style>
