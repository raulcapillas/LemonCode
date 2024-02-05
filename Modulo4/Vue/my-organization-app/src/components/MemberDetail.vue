<template>
  <div>
    <router-link :to="{ name: 'Home' }" class="back" id="button">
      <v-btn size="x-small"> ⬅️ Go {{ company }} list </v-btn>
    </router-link>
    <v-card class="mx-auto" max-width="400" :title="`${user.name}`">
      <v-img :src="`${user.avatar_url}`" aspect-ratio="4/3" cover />
      <v-card-subtitle class="pt-4"
        ><b>{{ user.company }} </b></v-card-subtitle
      >
      <v-card-text>
        <div><b>Email:</b> {{ user.email }}</div>
        <div><b>Bio:</b> {{ user.bio }}</div>
        <div><b>Followers:</b> {{ user.followers }}</div>
        <div><b>Following:</b> {{ user.following }}</div>
        <div><b> Created:</b> {{ user.created_at }}</div>
        <div><b>Updated:</b> {{ user.updated_at }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getMemberDetail } from "../services/company";
import { MemberDetailEntity } from "../types";

export default defineComponent({
  name: "member-detail",
  props: ["company"],
  data() {
    return {
      user: {} as MemberDetailEntity,
    };
  },
  methods: {},
  async created() {
    this.user = await getMemberDetail.get(this.$route.params.user as string);
  },
});
</script>

<style scoped>
.back {
  display: block;
  margin: 1rem 0;
}
</style>
