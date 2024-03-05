import { RouteRecordRaw } from "vue-router";
import LearnIntro from "@/components/learn/LearnIntro.vue";

const route: RouteRecordRaw = {
  path: "/learn",
  component: LearnIntro,
  children: [
    {
      path: "",
      redirect: "learnIntro",
    },
    {
      path: "learnIntro",
      component: LearnIntro,
    },
  ],
};

export default route;
