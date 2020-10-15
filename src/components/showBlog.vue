<template>
  <div>
    <b-container class="bv-example-row">
      <h1>Daftar Semua Blogs</h1>
      <input type="text" placeholder="search" v-model="search" />
      <div v-bind:key="blog" v-for="blog in filterBlogs" class="blogs">
        <router-link v-bind:to="'/blog/' + blog.id">
          <h3>Nama : {{ blog.nama | toUppercase }}</h3>
        </router-link>
        <h3>Bahasa : {{ blog.bahasa }}</h3>
        <h3>Framework : {{ blog.framework | snipet }}</h3>
        <h3>Jurusan : {{ blog.jurusan }}</h3>
        <h3>Nim : {{ blog.nim }}</h3>
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
      .get("https://blogapp-9c239.firebaseio.com/posts.json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        var blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        console.log(blogsArray);
        this.blogs = blogsArray;
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
