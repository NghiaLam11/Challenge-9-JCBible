<script setup lang="ts">
import { onMounted } from "vue";

function openCity(evt: Event, cityName: any) {
  // Declare all variables
  var i: any, tabcontent: any, tablinks: any;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  const idContentTab: any = document.getElementById(cityName);
  const eventTargetTab: any = evt?.currentTarget;
  // Show the current tab, and add an "active" class to the link that opened the tab
  idContentTab.style.display = "flex";
  eventTargetTab.className += " active";
}
onMounted(() => {});
</script>

<template>
  <div class="charts container">
    <div class="cate">
      <ul class="cate-list tab">
        <li class="tablinks active" @click="openCity($event, 'All')">Tất cả</li>
        <li class="tablinks" @click="openCity($event, 'Mindmaps')">
          Biểu đồ tư duy
        </li>
        <li class="tablinks" @click="openCity($event, 'Timeline')">
          Biểu đồ thời gian
        </li>
        <li class="tablinks" @click="openCity($event, 'Circle')">
          Biểu đồ tròn
        </li>
        <li class="tablinks" @click="openCity($event, 'Column')">
          Biểu đồ cột
        </li>
      </ul>
    </div>
    <!-- <div class="nothing">
      <img src="/src/images/no-task.png" alt="" />
      <h3>Thêm biểu đồ thôi nào!</h3>
      <button>Thêm biểu đồ</button>
    </div> -->
    <div class="store">
      <ul class="cate-mobile tab">
        <li class="tablinks active" @click="openCity($event, 'All')">Tất cả</li>
        <li class="tablinks" @click="openCity($event, 'Mindmaps')">
          Biểu đồ tư duy
        </li>
        <li class="tablinks" @click="openCity($event, 'Timeline')">
          Biểu đồ thời gian
        </li>
        <li class="tablinks" @click="openCity($event, 'Circle')">
          Biểu đồ tròn
        </li>
        <li class="tablinks" @click="openCity($event, 'Column')">
          Biểu đồ cột
        </li>
      </ul>
      <div class="store-list tabcontent" id="All">
        <div class="item" v-for="n in 5" :key="n">
          <iframe
            src=""
            title="W3Schools Free Online Web Tutorials"
            allowpaymentrequest="true"
          ></iframe>
          <h5 class="multiline-ellipsis-1">
            W3Schools Free Online Web Tutorials
          </h5>
        </div>
      </div>
      <div class="store-list tabcontent" id="Mindmaps">
        <div class="item" v-for="n in 5" :key="n">
          <iframe
            src=""
            title="W3Schools Free Online Web Tutorials"
            allowpaymentrequest="true"
          ></iframe>
          <h5 class="multiline-ellipsis-1">
            W2Schools Free Online Web Tutorials 2
          </h5>
        </div>
      </div>
      <div class="store-list tabcontent" id="Timeline">Timeline empty</div>
      <div class="store-list tabcontent" id="Circle">Circle empty</div>
      <div class="store-list tabcontent" id="Column">Column empty</div>
    </div>
  </div>
</template>

<style scoped>
.active {
  color: var(--success-color);
  font-weight: bold;
}
.charts {
  display: flex;
  margin-top: 0.5rem;
}
.charts .cate {
  width: 25%;
}
.charts .cate .cate-list {
  background-color: var(--bg-secondary);
  box-shadow: var(--shadow-box);
  list-style: none;
  margin: 1rem;
  margin-right: 0;
  padding: 2rem 1rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  min-height: 90vh;
}
.charts .cate .cate-list li {
  font-size: 0.8rem;
  line-height: 1.3rem;
  letter-spacing: 2px;
  padding: 0.5rem 0;
  cursor: pointer;
  text-transform: uppercase;
}
.charts .cate .cate-list li:hover {
  color: var(--success-color);
}
.store {
  width: 75%;
  height: 90vh;
  overflow-y: scroll;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: var(--bg-secondary);
  box-shadow: var(--shadow-box);
  margin: 1rem 0.3rem;
  margin-right: 1rem;
}
.store-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
}
.tabcontent {
  display: none;
}
#All {
  display: flex;
}
.store-list .item {
  width: calc(100% / 3);
  padding: 1rem 0.3rem;
  cursor: pointer;
}
.store-list .item iframe {
  border-radius: var(--border-radius);
  width: 100%;
}
.store-list .item h5 {
  font-size: 1rem;
}
.store-list .item:hover h5 {
  color: var(--success-color);
}
.store .cate-mobile {
  display: none;
}
.nothing {
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  height: 90vh;
  max-height: 100vh;
  overflow-y: scroll;
}
.nothing img {
  filter: var(--filter-inverted);
  width: 150px;
  transform: translateX(15px);
}
.nothing h3 {
  padding: 1rem;
}
.nothing button {
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: var(--bg-primary);
  color: var(--text-color);
}
.nothing button:hover {
  color: var(--success-color);
  border: 1px solid var(--success-color);
}
@media screen and (max-width: 738px) {
  .store {
    width: 100%;
    background-color: transparent;
    box-shadow: none;
  }
  .store-list .item {
    width: calc(100% / 2);
  }

  .charts .cate {
    display: none;
  }
  .store .cate-mobile {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
  .store .cate-mobile li {
    padding: 0.3rem 0.5rem;
  }
}
</style>
