<template>
  <CompanyList :company="company" v-on:companyChanged="companyChanged" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CompanyList from "../components/CompanyList.vue";

export default defineComponent({
  name: "ListView",
  components: { CompanyList },
  props: ["company", "companyChanged"],
});
</script>
