<template>
  <div class="container">
    <router-link to="/" class="back">⬅️ Go Company List</router-link>
    <article>
      <h1>Member Detail</h1>
      <p>Id: {{ this.$route.params.id }}</p>
      <p>Name</p>
      <p>Company: {{ company }}</p>
      <p>Bio</p>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteLocation } from "vue-router";

// const id = String((this.$route as RouteLocation).params.id);

export default defineComponent({
  data() {
    return {
      company: "lemoncode",
    };
  },
});
</script>

<style scoped>
.back {
  display: block;
  margin: 1rem 0;
}
</style>
