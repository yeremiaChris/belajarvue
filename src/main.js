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

// custom directive
Vue.directive("rainbow", {
  bind(el, binding, vnode) {
    el.style.color =
      "#" +
      Math.random()
        .toString()
        .slice(2, 8);
  }
});

Vue.directive("theme", {
  bind(el, binding, vnode) {
    // if (binding.value == `wide`) {
    //   el.style.maxWidth = "1200px";
    // }
    if (binding.arg == "column") {
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
