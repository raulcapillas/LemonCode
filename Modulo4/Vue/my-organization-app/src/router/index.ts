import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/ListView.vue"),
    props: true,
  },
  {
    path: "/detail/company/:company?/user/:user",
    name: "Detail",
    component: () => import("../views/DetailView.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
