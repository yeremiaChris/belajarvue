<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
// Imports
import addBlog from "./components/addBlog";
import navBar from "./components/navBar";
import content from "./components/content";
import showStudent from "./components/showStudent";
import showBlog from "./components/showBlog";

export default {
  components: {
    "app-addblog": addBlog,
    "nav-bar": navBar,
    "app-content": content,
    "app-showStudent": showStudent,
    "app-showBlog": showBlog
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.preview {
  border: 1px solid rgb(207, 204, 204);
  padding: 10px 20px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
}
</style>
