import { createWebHistory, createRouter } from "vue-router";

import HomePage from "../views/HomePage.vue";
import DocView from "../views/DocView.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/docs", component: DocView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
