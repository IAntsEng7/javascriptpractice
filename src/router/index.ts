import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeIndex from "../components/HomeIndex.vue";
import LearnRoutes from "./learn";
import IntroRoutes from "./intro";

const routes: RouteRecordRaw[] = [
  { path: "/", component: HomeIndex },
  // 将 /learn/ 下的子路由配置添加到主路由中
  ...LearnRoutes,
  // 将 /intro/ 下的子路由配置添加到主路由中
  ...IntroRoutes,
  // 其他路由配置
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
