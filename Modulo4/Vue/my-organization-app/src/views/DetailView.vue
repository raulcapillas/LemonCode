<template>
  <MemberDetail :company="company" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MemberDetail from "../components/MemberDetail.vue";

export default defineComponent({
  name: "DetailView",
  components: { MemberDetail },
  props: ["company"],
});
</script>
