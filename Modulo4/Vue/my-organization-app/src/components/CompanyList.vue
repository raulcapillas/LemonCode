<template>
  <div>
    <v-text-field
      label="Company"
      placeholder="Lemoncode"
      outline
      v-model="company"
      @input="companyUpperCase"
      clearable
    ></v-text-field>
    <v-btn color="secondary" @click="search">Search</v-btn>
    <div v-if="members.length === 0">
      <v-snackbar
        :timeout="3000"
        color="red-lighten-1"
        rounded="pill"
        v-model="snackbar"
        location="top"
      >
        {{ snackbar_text }}
      </v-snackbar>
    </div>
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
              :to="{
                name: 'Detail',
                params: { company: company, user: item.login },
              }"
              id="button"
              ><v-btn icon="mdi-account" size="x-small" />
            </router-link>
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
  name: "company-list",
  data() {
    return {
      headers: [
        { text: "Avatar", value: "avatar_url" },
        { text: "Id", value: "id" },
        { text: "Nombre", value: "login" },
        { text: "Opciones", value: "options" },
      ],
      members: [] as MemberEntity[],

      snackbar: false,
      snackbar_text: "La compañia no existe o no tiene miembros",
      company: "Lemoncode",
    };
  },
  methods: {
    async search() {
      this.members = await getCompanyMembers.get(this.company);

      if (this.members.length === 0) {
        this.snackbar = true;
      }
    },
    companyUpperCase() {
      if (this.company.length === 0) {
        return;
      }
      this.company = this.company[0].toUpperCase() + this.company.slice(1);
    },
  },
  async created() {
    this.company = "Lemoncode";
    this.search();
  },
});
</script>
