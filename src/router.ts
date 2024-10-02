import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import SignUpView from "./views/SignUpView.vue";
import SignInView from "./views/SignInView.vue";
import BibleView from "./views/BibleView.vue";
import ChartView from "./views/ChartView.vue";
import NotesView from "./views/NotesView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/sign-up", component: SignUpView },
  { path: "/sign-in", component: SignInView },
  { path: "/bible", component: BibleView },
  { path: "/charts", component: ChartView },
  { path: "/notes", component: NotesView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
