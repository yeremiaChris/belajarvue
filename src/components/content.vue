<template>
  <div>
    <b-container class="mt-3">
      <h1>Tambah Mahasiswa</h1>
      <b-form>
        <b-form-group id="input-group-1" label="Nama:" label-for="input-1">
          <b-input
            id="input-1"
            v-model.lazy="data.nama"
            required
            placeholder="Enter Nama"
          ></b-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Jurusan:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="data.jurusan"
            required
            placeholder="Enter Jurusan"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Nim:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="data.nim"
            required
            placeholder="Enter NIM"
          ></b-form-input>
        </b-form-group>
        <p>Bahasa yang di kuasai :</p>
        <label for="php" class="mr-2">PHP</label>
        <input
          id="php"
          type="checkbox"
          value="php"
          class="mr-2"
          v-model="data.bahasa"
        />
        <label for="python" class="mr-2">Python</label>
        <input
          id="python"
          type="checkbox"
          value="python"
          class="mr-2"
          v-model="data.bahasa"
        />
        <label for="javascript" class="mr-2">Javascript</label>
        <input
          id="javascript"
          type="checkbox"
          value="javascript"
          v-model="data.bahasa"
        />

        <div class="preview mb-3">
          <h3>Preview :</h3>
          <p>Nama : {{ data.nama }}</p>
          <p>Jurusan : {{ data.jurusan }}</p>
          <p>NIM : {{ data.nim }}</p>
          <p>Bahasa Pemrograman</p>
          <ul>
            <li v-bind:key="bhs" v-for="bhs in data.bahasa">{{ bhs }}</li>
          </ul>
        </div>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        nama: "",
        jurusan: "",
        nim: "",
        bahasa: []
      }
    };
  },
  methods: {}
};
</script>

<style></style>
