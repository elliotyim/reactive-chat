<template>
  <v-app>
    <AppBar />
    <NavigationDrawer v-if="signedInUser" />

    <v-main>
      <v-container fill-height fluid class="pa-0">
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
