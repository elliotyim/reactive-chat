<template>
  <v-app>
    <AppBar />
    <NavigationDrawer v-if="signedInUser" />

    <v-main>
      <v-container class="" fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { AppBar, NavigationDrawer },
  computed: {
    ...mapGetters(["signedInUser"]),
  },
};
</script>
