<template>
  <div>
    <b-container class="bv-example-row">
      <h1>Daftar Semua Blogs</h1>
      <input type="text" placeholder="search" v-model="search" />
      <div v-bind:key="blog" v-for="blog in filterBlogs" class="blogs">
        <h3 v-rainbow>title : {{ blog.title | toUppercase }}</h3>
        <h3>userId : {{ blog.userId }}</h3>
        <h3>body : {{ blog.body | snipet }}</h3>
      </div>
    </b-container>
  </div>
</template>

<script>
// Imports
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
  computed: {
    filterBlogs: function() {
      return this.blogs.filter(blog => {
        //   yang di retrun di bawah ini adalah boolean yang dalamanya ada arary
        // jadi kaloa match biarkan di array kalo tidak, di array nya juga nggak
        return blog.title.match(this.search);
      });
    }
  },
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

<style>
.blogs {
  border: 1px solid black;
  margin: 20px 0;
  padding: 10px;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  background-color: #eee;
}
</style>
