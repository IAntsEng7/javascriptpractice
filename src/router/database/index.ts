import { RouteRecordRaw } from "vue-router";

const route: RouteRecordRaw = {
  path: "/database",
  children: [
    {
      path: "", // 將路徑修改為空字符串，表示為預設路徑
      component: () => import("@/components/learn/database/database-main.vue"),
    },
    {
      path: "dbms",
      component: () =>
        import("@/components/learn/database/dbms/dbms-intro.vue"),
    },
    {
      path: "nosql",
      component: () =>
        import("@/components/learn/database/nosql/nosql-intro.vue"),
    },
    {
      path: "newsql",
      component: () =>
        import("@/components/learn/database/newsql/newsql-intro.vue"),
    },
  ],
};

export default route;
