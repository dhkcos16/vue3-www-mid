import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage";
import MathPage from "../views/MathPage";
import EnglishPage from "../views/EnglishPage";
import SpecialtyPage from "../views/SpecialtyPage";
import AdmissionPage from "../views/AdmissionPage";

const routes = [
  { path: "/", name: "home", component: MainPage },
  { path: "/math", name: "math", component: MathPage },
  { path: "/english", name: "english", component: EnglishPage },
  { path: "/specialty", name: "specialty", component: SpecialtyPage },
  { path: "/admission", name: "admission", component: AdmissionPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
