import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/404View.vue";
import QuizesView from "../views/QuizesView.vue";
import QuizView from "../views/QuizView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    }, {
      path: "/home",
      redirect: "/"
    },
    {
      path: "/quiz",
      name: "quizes",
      component: QuizesView
    }, {
      path: "/quiz/:id",
      name: "quiz",
      component: QuizView
    }, {
      path: "/:catchall(.*)*",
      name: "not found",
      component: NotFoundView
    }
  ]
});

export default router;