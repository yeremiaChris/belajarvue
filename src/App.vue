
<template>
  <div>
    <!-- berfungsi untuk menjaga agar tetap aktif formnya jadi data yang kita
    tulis dan ketika kita pindah form datanya masih ada -->
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button>
  </div>
</template>

<script>
// Imports
import formOne from "./components/formOne.vue";
import formTwo from "./components/formTwo.vue";
export default {
  components: {
    "form-one": formOne,
    "form-two": formTwo,
  },
  data() {
    return {
      component: "form-one",
    };
  },
  methods: {
    handleSubmit: function () {
      alert("thanks for submitting");
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>