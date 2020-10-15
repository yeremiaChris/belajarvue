<template>
  <div>
    <b-container class="bv-example-row">
      <h3>Detail Blog</h3>
      <div class="blogs">
        <h4>{{ blog.nama }}</h4>
        <p>{{ blog.jurusan }}</p>
        <p>{{ blog.nim }}</p>
        <p v-bind:key="bhs" v-for="bhs in blog.bahasa">{{ bhs }}</p>
        <p>{{ blog.framework }}</p>
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
      .get("https://blogapp-9c239.firebaseio.com/posts/" + this.id + ".json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.blog = data;
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
