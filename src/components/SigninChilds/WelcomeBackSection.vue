<script setup lang="ts">
import { ref } from "vue";

const isDisplay = ref(false);
const onClose = () => {
  isDisplay.value = false;
};
</script>

<template>
  <div class="welcome-back" v-if="isDisplay">
    <div @click="onClose" class="blur"></div>
    <div class="content container">
      <i @click="onClose" class="fas fa-minus"></i>
      <div class="illustration">
        <img src="/src/images/book (2).png" alt="" />
      </div>
      <div>
        <h3>Chào mừng trở lại với <b class="brand">JCBIBLE</b>&#129395;!</h3>
        <p class="multiline-ellipsis-4">
          <b class="brand">JCBIBLE</b> sẽ luôn chào đón bạn quay trở lại để cùng
          nhau tìm hiểu và học Lời CHÚA. Đừng nản lòng bạn nhé! CHÚA yêu bạn và
          tụi mình cũng yêu bạn rất nhiều &#128536;!
        </p>
        <button>Khám phá</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-back {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.welcome-back .blur {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 19;
  background-color: var(--blur-color);
}
.welcome-back .content {
  width: 70vw;
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 20;
  background-color: var(--bg-primary);
  padding: 2rem 1rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-box);
}
.welcome-back .content .illustration {
  padding-right: 1rem;
}
.welcome-back .content .illustration img {
  filter: var(--filter-inverted);
  transform: rotateY(-180deg);
}
.welcome-back .content .brand {
  font-family: var(--font-mono);
  font-size: 1.3rem;
}
.welcome-back .content i {
  position: absolute;
  top: 5px;
  right: 13px;
  font-size: 1.3rem;
  opacity: 0.5;
  transition: all 0.2s linear;
  cursor: pointer;
}
.welcome-back .content i:hover {
  color: var(--error-color);
}
.welcome-back .content h3 {
  font-size: 1.4rem;
  line-height: 1.6rem;
}
.welcome-back .content h3 b {
  font-size: 1.5rem !important;
  color: var(--warning-color);
}
.welcome-back .content p {
  line-height: 1.4rem;
  margin: 0.5rem 0;
}
.welcome-back .content button {
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  margin-top: 0.5rem;
  border: 1px solid var(--success-color);
  cursor: pointer;
  transition: all 0.2s linear;
  border-radius: var(--border-radius);
  background-color: var(--bg-primary);
  font-weight: 500;
  color: var(--link-color);
}
.welcome-back .content button:hover {
  background-color: var(--success-color);
  border: 1px solid var(--success-color);
  color: white;
}
@media screen and (max-width: 768px) {
  .welcome-back .content {
    width: 90vw;
  }
}
</style>
