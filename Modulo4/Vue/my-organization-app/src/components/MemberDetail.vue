<template>
  <div>
    <h1>Member Detail</h1>
    <p>Name</p>
    <p>Company: {{ company }}</p>
    <p>Bio</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      company: "lemoncode",
    };
  },
});
</script>
