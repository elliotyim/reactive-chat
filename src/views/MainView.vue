<template>
  <div class="fill-height">
    <NavigationDrawer />
    <router-view />
  </div>
</template>

<script>
import NavigationDrawer from "../components/NavigationDrawer.vue";

export default {
  name: "MainView",
  components: { NavigationDrawer },
};
</script>
