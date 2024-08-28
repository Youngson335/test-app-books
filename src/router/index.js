import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import SettingPage from "../pages/SettingPage.vue";
import ProfilePage from "../pages/ProfilePage.vue";
import PostBookPage from "@/pages/PostBookPage.vue";
import CheckListBookPage from "@/pages/CheckListBookPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingPage,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
    children: [
      {
        path: "post",
        name: "postBook",
        component: PostBookPage,
      },
      {
        path: "check",
        name: "checkList",
        component: CheckListBookPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
