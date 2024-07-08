import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/index.vue"),
    },
    {
      path: "/color-picker",
      name: "colorPicker",
      component: () => import("@/views/colorPicker/index.vue"),
    },
    {
      path: "/weather",
      name: "weather",
      component: () => import("@/views/weather/index.vue"),
    },
    {
      path: "/hots",
      name: "hots",
      component: () => import("@/views/hots/index.vue"),
    },
  ],
});

export default router;
