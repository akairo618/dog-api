<template>
  <v-layout wrap justify-space-between>
    <v-flex v-for="(item, i) in breed_list" v-bind:key="i" column xs6 sm4 md3>
      <!-- <a class="button">{{ i }}</a> -->
      <v-btn nuxt-link :to="{ path: 'dogs/'+ i }" style="width: 100%">{{ i }}</v-btn>
    </v-flex>
  </v-layout>
</template>
 
<script>
import dogApi from "@/api/dog";
import { mapState } from "vuex";

export default {
  async fetch({ store }) {
    let json = await dogApi.breeds();
    store.commit("breed_list_update", json);
  },
  computed: mapState(["breed_list"]) // mapState ヘルパー
};
</script>
