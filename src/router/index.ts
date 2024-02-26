import { createRouter, createWebHistory } from "vue-router";

import CaerusIntro from "../components/CaerusIntro.vue";
import HomeIndex from "../components/HomeIndex.vue";

const routes = [
  { path: "/", component: HomeIndex },
  { path: "/caerusIntro", component: CaerusIntro },
  // { path: "/component1", component: Component1 },
  // { path: "/component2", component: Component2 },
  // 其他路由配置
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
