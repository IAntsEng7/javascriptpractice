import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import intro from "@/router/intro";
import learn from "@/router/learn";
import homeIndex from "@/components/homeIndex.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home", // 重定向到 /home 路由
  },
  {
    path: "/home",
    component: homeIndex, // HomeIndex 作為單獨路由
  },
  intro,
  learn,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
