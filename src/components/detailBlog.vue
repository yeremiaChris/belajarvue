<template>
  <div>
    <b-container class="bv-example-row">
      <h3>Detail Blog</h3>
      <div class="blogs">
        <h4>{{ blog.title }}</h4>
        <p>{{ blog.body }}</p>
      </div>
    </b-container>
  </div>
</template>

<script>
// Imports
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(function(data) {
        this.blog = data.body;
      });
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
