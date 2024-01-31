<template>
  <div class="home">
    <EmployeeList />
    <ProductList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EmployeeList from "../components/CompanyList.vue";

export default defineComponent({
  name: "HomeView",
  components: { EmployeeList },
});
</script>
