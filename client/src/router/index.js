import Vue from "vue";
import Router from "vue-router";
import IndexPage from "@/components/home/IndexPage";
import PersonalPage from "@/components/user/PersonalPage";

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
      path: "/user",
      name: "user",
      component: PersonalPage
    }
  ]
});
