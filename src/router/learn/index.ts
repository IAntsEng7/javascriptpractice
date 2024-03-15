import { RouteRecordRaw } from "vue-router";
import learningPlan from "@/components/learn/learning-plan.vue";

const route: RouteRecordRaw = {
  path: "/learn",
  component: learningPlan,
  children: [
    {
      path: "", // 將路徑修改為空字符串，表示為預設路徑
      component: () => import("@/components/learn/learning-plan.vue"),
    },
    {
      path: "plan",
      component: () => import("@/components/learn/learning-plan.vue"),
    },
  ],
};

export default route;
