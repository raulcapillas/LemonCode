<template>
  <div class="home">
    <EmployeeList />
    <ProductList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductList from "../components/ProductList.vue";
import EmployeeList from "../components/EmployeeList.vue";

export default defineComponent({
  name: "HomeView",
  components: { ProductList, EmployeeList },
});
</script>
