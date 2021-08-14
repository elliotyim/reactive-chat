<template>
  <DialogTemplate :dialogKey="dialogKey" :title="title">
    <template v-slot:content>
      <v-responsive
        id="chatroom-wrapper"
        max-height="500"
        class="overflow-y-auto fill-height px-3 pb-5"
      >
        <v-card flat class="d-flex flex-column fill-height">
          <v-card-title>
            <v-text-field
              v-model="searchKeyword"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            v-model="selectedUsers"
            :headers="headers"
            :items="signedInUser.friends"
            :search="searchKeyword"
            hide-default-footer
            item-key="id"
            show-select
          >
            <template v-slot:[`item.profileImg`]="{ item }">
              <v-avatar size="40">
                <v-img :src="profileImg(item.profileImg)"></v-img>
              </v-avatar>
            </template>
          </v-data-table>
        </v-card>
      </v-responsive>
    </template>
    <template v-slot:action>
      <v-btn color="primary" text @click="create">Create</v-btn>
    </template>
  </DialogTemplate>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import DialogTemplate from "@/components/dialog/DialogTemplate";

export default {
  name: "NewChatDialog",
  components: { DialogTemplate },
  data() {
    return {
      dialogKey: "newChat",
      title: "Create New Chat",
      headers: [
        {
          text: "Profile",
          align: "center",
          width: 50,
          sortable: false,
          value: "profileImg",
        },
        {
          text: "Name",
          align: "center",
          width: 250,
          value: "name",
        },
      ],
      searchKeyword: null,
      selectedUsers: [],
    };
  },
  computed: {
    ...mapGetters(["dialogs", "signedInUser"]),
    dialogVisible() {
      return this.dialogs !== null ? this.dialogs["newChat"] : null;
    },
  },
  methods: {
    ...mapActions(["fetchSignedInUser"]),
    create() {
      console.log(this.selectedUsers);
    },
    profileImg(img) {
      return img !== null ? img : require("@/assets/avatar-url-default.png");
    },
  },
  watch: {
    dialogVisible: {
      handler: async function (visible) {
        if (visible) {
          await this.fetchSignedInUser();
        }
      },
    },
  },
};
</script>
