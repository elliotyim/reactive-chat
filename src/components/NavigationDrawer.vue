<template>
  <v-card>
    <v-navigation-drawer mini-variant app permanent>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item-group
          v-model="selected"
          mandatory
          active-class="black--text"
        >
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data() {
    return {
      selected: null,
      items: [{ title: "Chat", icon: "mdi-message-text" }],
    };
  },
  watch: {
    selected(val) {
      if (val === 0) this.$router.push("/chat");
    },
  },
};
</script>
