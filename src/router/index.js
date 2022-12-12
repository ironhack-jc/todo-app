import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProjectsPage from "../views/ProjectsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      component: HomePage,
    },
    {
      path: "/projects",
      name: "projects-index",
      component: ProjectsPage,
    },
  ],
});

export default router;
