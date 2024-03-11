import { RouteRecordRaw } from "vue-router";

const route: RouteRecordRaw = {
  path: "/frontend",
  children: [
    {
      path: "", // 將路徑修改為空字符串，表示為預設路徑
      component: () => import("@/components/learn/frontend/frontend-main.vue"),
    },
    {
      path: "javascript",
      component: () =>
        import("@/components/learn/frontend/javaScript/javascript-intro.vue"),
    },
    {
      path: "typescript",
      component: () =>
        import("@/components/learn/frontend/typescript/typescript-intro.vue"),
    },
    {
      path: "vue3",
      component: () =>
        import("@/components/learn/frontend/vue3/vue3-intro.vue"),
    },
  ],
};

export default route;
