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
          <th v-for="item in headers" :key="item.value" class="text-left">
            <b>{{ item.text }}</b>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in members" :key="item.id">
          <td>
            <v-avatar :image="`${item.avatar_url}`" size="80"></v-avatar>
          </td>
          <td>{{ item.id }}</td>
          <td>{{ item.login }}</td>
          <td>
            <router-link
              :to="{ name: 'Detail', params: { id: item.login } }"
              id="button"
              ><v-btn icon="mdi-account" size="x-small"></v-btn
            ></router-link>
          </td>
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
  name: "CompanyList",
  data() {
    return {
      headers: [
        { text: "Avatar", value: "avatar_url" },
        { text: "Id", value: "id" },
        { text: "Nombre", value: "login" },
        { text: "Opciones", value: "options" },
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
