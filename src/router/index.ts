import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Intro from "@/router/intro";
import Learn from "@/router/learn";
import HomeIndex from "@/components/HomeIndex.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home", // 重定向到 /home 路由
  },
  {
    path: "/home",
    component: HomeIndex, // HomeIndex 作為單獨路由
  },
  Intro,
  Learn,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
