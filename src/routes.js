import showBlog from "./components/showBlog.vue";
import content from "./components/content";
export default [
  { path: "/", component: showBlog },
  { path: "/add", component: content }
];
