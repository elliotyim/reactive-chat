<template>
  <v-navigation-drawer mini-variant app permanent>
    <v-list-item class="px-2">
      <v-list-item-avatar @click="navigate(`/profile`)" id="profile-img">
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-divider />

    <v-list class="pt-0">
      <v-list-item-group
        v-model="selected"
        mandatory
        active-class="black--text"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="navigate(item.path)"
        >
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
</template>

<script>
export default {
  name: "NavigationDrawer",
  data() {
    return {
      selected: null,
      items: [{ title: "Chat", icon: "mdi-message-text", path: "/chat" }],
    };
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
#profile-img {
  cursor: pointer;
}
</style>
