<template>
  <v-card>
    <v-navigation-drawer v-model="drawer" mini-variant app permanent>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Chat", icon: "mdi-message-text" },
        // { title: "My Account", icon: "mdi-account" },
        // { title: "Users", icon: "mdi-account-multiple" },
        // { title: "Settings", icon: "mdi-cog" },
      ],
    };
  },
  watch: {
    drawer(val) {
      console.log(val);
    },
  },
};
</script>
