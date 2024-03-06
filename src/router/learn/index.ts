import { RouteRecordRaw } from "vue-router";
import IntroLayOut from "@/components/learn/LearnLayout.vue";
import LearnIntro from "@/components/learn/LearnIntro.vue";
import JavaLearn from "@/components/learn/java/JavaLearn.vue";

const route: RouteRecordRaw = {
  path: "/learn",
  component: IntroLayOut, // 引入新的佈局組件
  children: [
    {
      path: "",
      redirect: "/learn/intro", // 修改重定向路徑
    },
    {
      path: "intro",
      component: LearnIntro,
    },
    {
      path: "Java",
      component: JavaLearn,
    },
  ],
};

export default route;
