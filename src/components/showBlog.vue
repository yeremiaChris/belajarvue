<template>
  <div>
    <b-container class="bv-example-row">
      <h1>Daftar Semua Blogs</h1>
      <input type="text" placeholder="search" v-model="search" />
      <div v-bind:key="blog" v-for="blog in filterBlogs" class="blogs">
        <router-link v-bind:to="'/blog/' + blog.id">
          <h3>title : {{ blog.title | toUppercase }}</h3>
        </router-link>
        <h3>userId : {{ blog.userId }}</h3>
        <h3>body : {{ blog.body | snipet }}</h3>
      </div>
    </b-container>
  </div>
</template>

<script>
// Imports
import searchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        //   artinya dia mengambil dari 0 sampe index ke 10 yang pertama
        this.blogs = data.body.slice(0, 10);
        console.log(data);
      });
  },
  mixins: [searchMixin],
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
    snipet(value) {
      return value.slice(0, 100);
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  }
};
</script>

<style scoped>
.blogs {
  border: 1px solid black;
  margin: 20px 0;
  padding: 10px;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  background-color: #eee;
}
</style>
