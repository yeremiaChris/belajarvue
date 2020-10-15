<template>
  <div>
    <b-container class="bv-example-row">
      <h1>Daftar Semua Blogs</h1>
      <div v-bind:key="blog" v-for="blog in blogs" class="blogs">
        <h3>title : {{ blog.title }}</h3>
        <h3>userId : {{ blog.userId }}</h3>
        <h3>body : {{ blog.body }}</h3>
      </div>
    </b-container>
  </div>
</template>

<script>
// Imports
export default {
  data() {
    return {
      blogs: []
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
