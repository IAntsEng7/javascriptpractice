import { RouteRecordRaw } from "vue-router";
import LearnIntro from "@/components/learn/LearnIntro.vue";
import JavaLearn from "@/components/learn/java/JavaLearn.vue";

const route: RouteRecordRaw = {
  path: "learn",
  component: LearnIntro,
  children: [
    {
      path: "",
      redirect: "learnIntro",
    },
    {
      path: "/learnIntro",
      component: LearnIntro,
    },
    {
      path: "Java",
      component: JavaLearn,
    },
  ],
};

export default route;
