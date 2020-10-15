import showBlog from "./components/showBlog.vue";
import content from "./components/content";
import detailBlog from "./components/detailBlog";
export default [
  { path: "/", component: showBlog },
  { path: "/add", component: content },
  { path: "/blog/:id", component: detailBlog }
];
