import Vue from "vue";
import App from "./App.vue";
// import component secara global
// import Ninjas from "./Ninjas.vue";
// Vue.component("ninjas", Ninjas);

// bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// http
import VueResource from "vue-resource";
Vue.use(VueResource);

export const bus = new Vue();

// filter globally
// Vue.filter("uppercase", function(value) {
//   return value.toUpperCase();
// });

// Vue.filter("snipet", function(value) {
//   return value.slice(0, 100);
// });\

// router
import VueRouter from "vue-router";
import Routers from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routers
});

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
