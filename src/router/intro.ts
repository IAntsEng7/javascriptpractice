import { RouteRecordRaw } from "vue-router";
import CaerusIntro from "../components/intro/CaerusIntro.vue";
import OtherThing from "../components/intro/OtherThing.vue";

const introRoutes: RouteRecordRaw[] = [
  { path: "/intro/CaerusIntro", component: CaerusIntro },
  { path: "/intro/OtherThing", component: OtherThing },
  // 其他 /intro/ 下的子路由配置
];

export default introRoutes;
