import Vue from "vue";
import Router from "vue-router";
import IndexPage from "@/components/home/IndexPage";
import CatalogPage from "@/components/catalog/CatalogPage";
import PersonalPage from "@/components/user/PersonalPage";
import LoginPage from "@/components/auth/LoginPage";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: IndexPage
    },
    {
      path: "/catalog",
      name: "catalog",
      component: CatalogPage
    },
    {
      path: "/user",
      name: "user",
      component: PersonalPage
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage
    }
  ]
});
