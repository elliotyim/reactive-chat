<template>
  <v-app>
    <AppBar />
    <NavigationDrawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";

export default {
  name: "App",
  components: { AppBar, NavigationDrawer },
  data: () => ({
    //
  }),
};
</script>
