import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import intro from "@/router/intro";
import learn from "@/router/learn";
import frontend from "@/router/frontend";
import backend from "@/router/backend";
import database from "@/router/database";
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
  frontend,
  backend,
  database,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
