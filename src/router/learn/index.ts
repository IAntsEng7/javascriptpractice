import { RouteRecordRaw } from "vue-router";
import IntroLayOut from "@/components/learn/LearnLayout.vue";

const route: RouteRecordRaw = {
  path: "/learn",
  component: IntroLayOut,
  children: [
    {
      path: "", // 將路徑修改為空字符串，表示為預設路徑
      component: () => import("@/components/learn/LearnLayout.vue"),
    },
    {
      path: "layout",
      component: () => import("@/components/learn/LearnLayout.vue"),
    },
  ],
};

export default route;
