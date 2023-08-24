import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../page/MainPage.vue"),
  },
  {
    path: "/test",
    component: () => import("../page/TestPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
