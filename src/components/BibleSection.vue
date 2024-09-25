<script setup lang="ts">
import { ref } from "vue";
import RelateLessonsSection from "./BibleChilds/RelateLessonsSection.vue";
const isShowBooks = ref(false);
const isShowVersions = ref(false);
const isShowTextSize = ref(false);
const onShowBooks = () => {
  isShowBooks.value = !isShowBooks.value;
};
const onShowVersions = () => {
  isShowVersions.value = !isShowVersions.value;
};
const onShowTextSize = () => {
  isShowTextSize.value = !isShowTextSize.value;
};
const indexOfBook = ref(1);
const onShowChapters = (index: number) => {
  if (indexOfBook.value != index) {
    indexOfBook.value = index;
  } else {
    indexOfBook.value = 0;
  }
};
</script>

<template>
  <div class="container">
    <div class="cate">
      <ul class="select">
        <h4 @click="onShowBooks">
          <span>Sáng thế ký</span
          ><i class="fas fa-caret-up" v-if="isShowBooks"></i>
          <i v-else class="fas fa-caret-down"></i>
        </h4>
        <ul class="list-hidden" v-if="isShowBooks">
          <li v-for="m in 3" :key="m" @click="onShowChapters(m)">
            <h5>Sáng thế ký sáng thế ký</h5>
            <ul class="chapters" v-if="indexOfBook == m">
              <li v-for="n in 15" :key="n">{{ n }}</li>
            </ul>
          </li>
        </ul>
      </ul>
      <ul class="select">
        <h4 @click="onShowVersions">
          <span>VIE2010</span
          ><i class="fas fa-caret-up" v-if="isShowVersions"></i
          ><i v-else class="fas fa-caret-down"></i>
        </h4>
        <ul class="list-hidden" v-if="isShowVersions">
          <li value="Xuat E-dip-to ký">VIE1925</li>
          <li value="Sáng thế ký">VIE2010</li>
          <li value="Xuat E-dip-to ký">VIE1925</li>
        </ul>
      </ul>
      <ul class="select">
        <h4 @click="onShowTextSize">
          <span>20px</span><i class="fas fa-caret-up" v-if="isShowTextSize"></i
          ><i v-else class="fas fa-caret-down"></i>
        </h4>
        <ul class="list-hidden" v-if="isShowTextSize">
          <li>10px</li>
          <li>20px</li>
          <li>30px</li>
          <li>40px</li>
          <li>50px</li>
          <li>60px</li>
        </ul>
      </ul>
    </div>
    <div class="bible">
      <button class="prev"><i class="fas fa-angle-left"></i></button
      ><button class="next"><i class="fas fa-angle-right"></i></button>
      <h4>Sang the ky 1</h4>
      <div class="para">
        <span v-for="n in 20" :key="n"
          ><b
            ><sup
              ><i>{{ n }} </i>
            </sup> </b
          >Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit animi qui incidunt adipisci? Nam neque, doloremque omnis
          blanditiis dignissimos placeat, aut eos reiciendis temporibus, illo
          asperiores nisi architecto aliquam. Animi?</span
        >
      </div>
    </div>
    <RelateLessonsSection></RelateLessonsSection>
  </div>
</template>

<style scoped>
.cate {
  margin: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
}
.cate .select {
  list-style: none;
  position: relative;
  padding-left: 0;
  min-width: 150px;
  margin: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
}
.cate .select:first-child {
  min-width: 250px;
}
.cate .select h4 {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.cate .select h4 span {
  -webkit-line-clamp: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
}
.cate .select .list-hidden {
  position: absolute;
  list-style: none;
  padding-left: 0;
  border: 1px solid var(--border-color);
  background-color: var(--bg-primary);
  width: 100%;
  z-index: 10;
}
.cate .select .list-hidden li {
  cursor: pointer;
  padding: 0.3rem 1rem;
  border-bottom: 1px solid var(--blur-color);
  opacity: 0.8;
  overflow: hidden;
}
.cate .select .list-hidden li:hover {
  opacity: 1;
}
.cate .select .list-hidden li h5 {
  font-size: 1rem;
  padding: 0.1rem 0;
  opacity: 0.9;
}
.cate .select .list-hidden li .chapters {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  padding-left: 0;
}
.cate .select .list-hidden li .chapters li {
  border: 1px solid var(--blur-color);
  font-size: 0.8rem;
}
.bible {
  padding: 1rem calc(100% / 5);
}
::-webkit-scrollbar {
  display: none;
}
.bible h4 {
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-align: center;
  padding: 1rem 0;
}
.bible .next,
.prev {
  position: fixed;
  top: 60%;
  background-color: var(--bg-primary);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  font-size: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  opacity: 0.7;
  cursor: pointer;
}
.bible .next {
  right: 10%;
}
.bible .prev {
  left: 10%;
}
.bible .para {
  padding: 1rem;
  letter-spacing: 0.6px;
  text-align: justify;
  color: var(--text-color);
  font-size: 20px;
}
@media screen and (max-width: 768px) {
  .bible {
    padding: 1rem calc(100% / 10);
  }
}
@media screen and (max-width: 538px) {
  .bible {
    padding: 1rem;
  }
  .bible .next,
  .prev {
    top: 80%;
  }
}
</style>
