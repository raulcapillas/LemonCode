<template>
  <div>
    <v-text-field
      label="Company"
      placeholder="lemoncode"
      outline
      v-model="company"
      clearable
    ></v-text-field>
    <v-btn color="secondary" @click="search">Search</v-btn>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Name</th>
          <th class="text-left">Avatar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in members" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.login }}</td>
          <td>{{ item.avatar_url }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCompanyMembers } from "../services/company";
import { MemberEntity } from "../types";

export default defineComponent({
  data() {
    return {
      headers: [
        { text: "Id", value: "id" },
        { text: "Nombre", value: "login" },
        { text: "avatar_url", value: "avatar_url" },
      ],
      desserts: [
        {
          id: 1,
          login: "Raul",
          avatar_url: "dasd",
        },
      ],
      members: [] as MemberEntity[],
      company: "lemoncode",
    };
  },
  methods: {
    async search() {
      this.members = await getCompanyMembers.get(this.company);
    },
  },
  async created() {
    this.search();
  },
});
</script>
