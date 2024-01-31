<template>
  <v-data-table :items="members" :headers="headers" class="elevation-1">
    <template v-slot:items="props">
      <td>{{ props.item.id }}</td>
      <td class="text-xs-right">{{ props.item.login }}</td>
      <td class="text-xs-right">{{ props.item.avatar_url }}</td>
    </template>
  </v-data-table>
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
    };
  },
  async created() {
    this.members = await getCompanyMembers.get("lemoncode");
  },
});
</script>
