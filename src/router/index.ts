import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Intro from "@/router/intro";
import Learn from "@/router/learn";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/components/HomeIndex.vue"),
    children: [Intro, Learn],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
