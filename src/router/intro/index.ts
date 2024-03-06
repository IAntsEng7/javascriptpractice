import { RouteRecordRaw } from "vue-router";
import CaerusIntro from "@/components/intro/CaerusIntro.vue";
import OtherThing from "@/components/intro/OtherThing.vue";

const route: RouteRecordRaw = {
  path: "/intro",
  component: CaerusIntro,
  children: [
    {
      path: "",
      redirect: "caerusIntro",
    },
    {
      path: "caerusIntro",
      component: CaerusIntro,
    },
    {
      path: "otherThing",
      component: OtherThing,
    },
  ],
};

export default route;
