<template>
  <header>
    <h1 v-on:click="ubah">{{ title }}</h1>
  </header>
</template>
<script>
import { bus } from "../main";

export default {
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      title: "Vue Ninjas",
    };
  },
  methods: {
    ubah: function () {
      // this.title = "keren";
      // ini adalah event agar kita bisa mengubah ke rootnya juga atau di app
      // this.$emit("ubah", "keren");
      // menggunakan bus
      // ini bisa kita buat sekali klik kita bisa melakukan 2 event
      this.title = "mantap";
      bus.$emit("ubah", "keren");
    },
  },
};
</script>
<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>