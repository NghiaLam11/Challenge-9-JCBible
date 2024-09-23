<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="cate">
      <select>
        <option value="Sáng thế ký">Sáng thế ký</option>
        <option value="Xuat E-dip-to ký">Xuat E-dip-to ký</option>
      </select>
      <select>
        <option value="Sáng thế ký">VIE2010</option>
        <option value="Xuat E-dip-to ký">VIE1925</option>
      </select>
    </div>
    <div class="bible">
      <button class="prev"><i class="fas fa-angle-left"></i></button
      ><button class="next"><i class="fas fa-angle-right"></i></button>
      <h4>Sang the ky 1</h4>
      <div class="para">
        <span v-for="n in 30" :key="n"
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
  </div>
</template>

<style scoped>
.cate {
  margin: 2rem 1rem;
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
  border-bottom: 2px solid var(--border-color);
}
.bible .next,
.prev {
  position: fixed;
  top: 50%;
  background-color: var(--bg-primary);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  font-size: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  opacity: 0.7;
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
  height: 100vh;
  overflow: scroll;
}
</style>
