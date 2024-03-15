import { RouteRecordRaw } from "vue-router";
import AboutMe from "@/components/intro/about-me.vue";

const route: RouteRecordRaw = {
  path: "/intro",
  component: AboutMe,
  children: [
    {
      path: "",
      component: () => import("@/components/intro/about-me.vue"),
    },
    {
      path: "about-me",
      component: () => import("@/components/intro/about-me.vue"),
    },
  ],
};

export default route;
