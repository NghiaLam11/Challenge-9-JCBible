import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import SignUpView from "./views/SignUpView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/sign-up", component: SignUpView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;