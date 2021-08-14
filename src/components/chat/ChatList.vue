<template>
  <v-responsive id="chatroom-wrapper" class="overflow-y-hidden fill-height">
    <v-card flat class="d-flex flex-column fill-height">
      <v-card-text class="flex-grow-1 overflow-y-auto pa-0">
        <v-list three-line>
          <v-list-item-group v-model="selected" mandatory>
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                v-text="item.header"
              />

              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              />

              <v-list-item v-else :key="item.title">
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card-text>
      <v-card-text class="flex-shrink-1 pa-0">
        <v-btn dark tile block @click="showNewChatModal"> New Chat </v-btn>
      </v-card-text>
    </v-card>
    <NewChatDialog />
  </v-responsive>
</template>

<script>
import NewChatDialog from "@/components/dialog/chat/NewChatDialog";
import { mapMutations } from "vuex";

export default {
  name: "ChatList",
  components: { NewChatDialog },
  data() {
    return {
      selected: null,
      items: [
        { header: "Today" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["turnOnDialog"]),
    showNewChatModal() {
      this.turnOnDialog("newChat");
    },
  },
};
</script>
