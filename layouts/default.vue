<template>
  <v-app>
    <AppHeader />
    <v-container>
      <nuxt />
    </v-container>
  </v-app>
</template>
 
<script>
import Vuetify from "vuetify";
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader
  }
};
</script>