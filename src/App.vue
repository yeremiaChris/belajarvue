<template>
  <div id="app">
    <!-- dolar event itu sama dengan value yang kita emit di header  -->
    <app-header v-bind:title="title" v-on:ubah="ubah($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
// import local
import Header from "./components/Header";
import Ninjas from "./components/Ninjas";
import Footer from "./components/Footer.vue";
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-ninjas": Ninjas,
  },
  data() {
    return {
      title: "Ninjas",
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false },
      ],
    };
  },
  methods: {
    ubah: function (update) {
      // update itu sama dengan $event
      this.title = update;
    },
  },
};
</script>


maksud dari scoped adalah kita menscoped stylenya hanya di sini saja
<style scoped>
h1 {
  color: red;
}
</style>
