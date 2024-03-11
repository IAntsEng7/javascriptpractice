import { RouteRecordRaw } from "vue-router";

const route: RouteRecordRaw = {
  path: "/backend",
  children: [
    {
      path: "", // 將路徑修改為空字符串，表示為預設路徑
      component: () => import("@/components/learn/backend/backend-main.vue"),
    },
    {
      path: "java",
      component: () => import("@/components/learn/backend/java/java-intro.vue"),
    },
    {
      path: "python",
      component: () =>
        import("@/components/learn/backend/python/python-intro.vue"),
    },
    {
      path: "rust",
      component: () => import("@/components/learn/backend/rust/rust-intro.vue"),
    },
  ],
};

export default route;
