<script setup lang="ts">
import { ref } from "vue";

const isDisplay = ref(false);
const onClose = () => {
  isDisplay.value = false;
};
</script>

<template>
  <div class="welcome-to" v-if="isDisplay">
    <div @click="onClose" class="blur"></div>
    <div class="content container">
      <i @click="onClose" class="fas fa-minus"></i>
      <div class="illustration">
        <img src="/src/images/book (2).png" alt="" />
      </div>
      <div>
        <h3>Chào mừng bạn đến với <b class="brand">JCBIBLE</b>&#128512;!</h3>
        <p class="multiline-ellipsis-4">
          <b class="brand">JCBIBLE</b> là một trang học Lời Chúa được phát triển
          bởi những người trẻ của CHÚA với mong ước hết thảy quý con cái CHÚA
          được tiếp cận với việc học lời CHÚA dễ dàng hơn và tiện lợi hơn
          &#128519;.
        </p>
        <button>Khám phá</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-to {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.welcome-to .blur {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 19;
  background-color: var(--blur-color);
}
.welcome-to .content {
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
.welcome-to .content .illustration {
  padding-right: 1rem;
}
.welcome-to .content .illustration img {
  filter: var(--filter-inverted);
  transform: rotateY(-180deg);
}
.welcome-to .content .brand {
  font-family: var(--font-mono);
  font-size: 1.3rem;
}
.welcome-to .content i {
  position: absolute;
  top: 5px;
  right: 13px;
  font-size: 1.3rem;
  opacity: 0.5;
  transition: all 0.2s linear;
  cursor: pointer;
}
.welcome-to .content i:hover {
  color: var(--error-color);
}
.welcome-to .content h3 {
  font-size: 1.4rem;
  line-height: 1.6rem;
}
.welcome-to .content h3 b {
  font-size: 1.5rem !important;
  color: var(--warning-color);
}
.welcome-to .content p {
  line-height: 1.4rem;
  margin: 0.5rem 0;
}
.welcome-to .content button {
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
.welcome-to .content button:hover {
  background-color: var(--success-color);
  border: 1px solid var(--success-color);
  color: white;
}
@media screen and (max-width: 768px) {
  .welcome-to .content {
    width: 90vw;
  }
}
</style>
