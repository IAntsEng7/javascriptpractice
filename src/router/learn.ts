import { RouteRecordRaw } from "vue-router";
import JavaLearn from "../components/learn/JavaLearn.vue";
import JavaScriptLearn from "../components/learn/JavaScriptLearn.vue";

const learnRoutes: RouteRecordRaw[] = [
  { path: "/learn/Java", component: JavaLearn },
  { path: "/learn/JavaScript", component: JavaScriptLearn },
  // 其他 /learn/ 下的子路由配置
];

export default learnRoutes;
