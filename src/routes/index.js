import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("@/views/Home.vue") },
  { path: "/cultura", name: "cultura", component: () => import("@/views/Cultura.vue") },
  { path: "/economia", name: "economia", component: () => import("@/views/Economia.vue") },
  { path: "/esportes", name: "esportes", component: () => import("@/views/Esportes.vue") },
  { path: "/geografia", name: "geografia", component: () => import("@/views/Geografia.vue") },
  { path: "/historia", name: "historia", component: () => import("@/views/Historia.vue") },
  { path: "/infraestrutura", name: "infraestrutura", component: () => import("@/views/Infraestrutura.vue") },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
