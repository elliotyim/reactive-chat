<template>
  <v-system-bar window dark app>
    <v-icon>mdi-message</v-icon>
    <span>10 unread messages</span>
    <v-spacer></v-spacer>
    <v-icon>mdi-minus</v-icon>
    <v-icon>mdi-checkbox-blank-outline</v-icon>
    <v-icon @click="close">mdi-close</v-icon>
  </v-system-bar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AppBar",
  methods: {
    ...mapActions(["signOut"]),
    async close() {
      await this.signOut();
      this.$router.push("/");
    },
  },
};
</script>
