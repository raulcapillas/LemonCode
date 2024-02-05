<template>
  <CompanyList company="Lemoncode" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CompanyList from "../components/CompanyList.vue";

export default defineComponent({
  name: "ListView",
  components: { CompanyList },
});
</script>
