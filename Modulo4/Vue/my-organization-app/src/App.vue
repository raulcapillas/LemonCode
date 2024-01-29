<template>
  <div id="app">
    <Header />
    <HomeView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import HomeView from "./views/HomeView.vue";

export default defineComponent({
  components: { Header, HomeView },
});
</script>
