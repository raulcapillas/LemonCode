<template>
  <div>
    <router-link :to="{ name: 'Home' }" class="back" id="button">
      <v-btn size="x-small"> ⬅️ Go {{ this.company }} list </v-btn>
    </router-link>
    <v-card class="mx-auto" max-width="400" :title="`${this.user.name}`">
      <v-img :src="`${this.user.avatar_url}`" aspect-ratio="4/3" cover />
      <v-card-subtitle class="pt-4"
        ><b>{{ this.user.company }} </b></v-card-subtitle
      >
      <v-card-text>
        <div><b>Email:</b> {{ this.user.email }}</div>
        <div><b>Bio:</b> {{ this.user.bio }}</div>
        <div><b>Followers:</b> {{ this.user.followers }}</div>
        <div><b>Following:</b> {{ this.user.following }}</div>
        <div><b> Created:</b> {{ this.user.created_at }}</div>
        <div><b>Updated:</b> {{ this.user.updated_at }}</div>
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
  data() {
    return {
      user: {} as MemberDetailEntity,
      company: "" as string,
    };
  },
  methods: {},
  async created() {
    this.user = await getMemberDetail.get(this.$route.params.user as string);
    this.company = this.$route.params.company as string;
  },
});
</script>

<style scoped>
.back {
  display: block;
  margin: 1rem 0;
}
</style>
