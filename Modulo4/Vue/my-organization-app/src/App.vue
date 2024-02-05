<template>
  <div id="app">
    <router-view :company="company" v-on:companyChanged="companyChanged" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      company: "Lemoncode",
    };
  },
  methods: {
    companyChanged: function (company: string) {
      this.company = company;
    },
  },
});
</script>
