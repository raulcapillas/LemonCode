<template>
  <div>
    <v-text-field
      label="Company"
      placeholder="Lemoncode"
      outline
      v-model="enterprise"
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
  props: ["company"],
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
      enterprise: this.company,
    };
  },
  methods: {
    async search() {
      this.members = await getCompanyMembers.get(this.enterprise);

      if (this.members.length === 0) {
        this.snackbar = true;
      }
    },
    companyUpperCase() {
      if (this.enterprise.length === 0) {
        return;
      }
      const co = this.enterprise[0].toUpperCase() + this.enterprise.slice(1);
      this.$emit("companyChanged", co);
      this.enterprise = co;
    },
  },
  async created() {
    this.search();
  },
});
</script>
