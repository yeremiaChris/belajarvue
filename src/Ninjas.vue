<template>
  <div>
    <h1>keren</h1>
    <ul>
      <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["ninjas"],
  data() {
    return {};
  }
};
</script>

<style scoped>
h1 {
  color: brown;
}
</style>
