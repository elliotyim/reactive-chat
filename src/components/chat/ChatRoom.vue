<template>
  <div>
    <v-responsive
      v-if="activeChat"
      id="chatroom-wrapper"
      class="overflow-y-hidden fill-height"
    >
      <v-card flat class="d-flex flex-column fill-height">
        <v-card-title> john doe </v-card-title>
        <v-card-text class="flex-grow-1 overflow-y-auto">
          <template v-for="(msg, i) in messages">
            <div :class="{ 'd-flex flex-row-reverse': msg.me }" :key="i">
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-list-item-avatar v-if="!msg.me">
                    <v-img :src="msg.avatar" />
                  </v-list-item-avatar>
                  <v-hover v-slot:default="{ hover }">
                    <v-chip
                      :color="msg.me ? 'primary' : ''"
                      dark
                      style="height: auto; white-space: normal"
                      class="pa-4 mt-2 mb-1"
                      v-on="on"
                    >
                      {{ msg.content }}
                      <sub class="ml-2" style="font-size: 0.5rem">{{
                        msg.created_at
                      }}</sub>
                      <v-icon v-if="hover" small> mdi-chevron-down </v-icon>
                    </v-chip>
                  </v-hover>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>delete</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </template>
        </v-card-text>
        <v-card-text class="flex-shrink-1">
          <v-text-field
            v-model="messageForm.content"
            label="Type A Message"
            type="text"
            no-details
            outlined
            append-outer-icon="mdi-send"
            @keyup.enter="messages.push(messageForm)"
            @click:append-outer="messages.push(messageForm)"
            hide-details
          />
        </v-card-text>
      </v-card>
    </v-responsive>
  </div>
</template>

<script>
export default {
  name: "ChatRoom",
  data() {
    return {
      activeChat: 1,
      parents: [
        {
          id: 1,
          title: "john doe",
          active: true,
        },
        {
          id: 3,
          title: "scarlett",
          active: false,
        },
        {
          id: 4,
          title: "scarlett",
          active: false,
        },
        {
          id: 5,
          title: "scarlett",
          active: false,
        },
        {
          id: 6,
          title: "scarlett",
          active: false,
        },
        {
          id: 7,
          title: "scarlett",
          active: false,
        },
        {
          id: 8,
          title: "scarlett",
          active: false,
        },
        {
          id: 9,
          title: "scarlett",
          active: false,
        },
        {
          id: 10,
          title: "scarlett",
          active: false,
        },
        {
          id: 11,
          title: "scarlett",
          active: false,
        },
        {
          id: 12,
          title: "scarlett",
          active: false,
        },
        {
          id: 13,
          title: "scarlett",
          active: false,
        },
        {
          id: 14,
          title: "scarlett",
          active: false,
        },
      ],
      messages: [
        {
          content: "lorem ipsum",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          me: true,
          created_at: "11:11am",
        },
        {
          content: "dolor",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          me: false,
          created_at: "11:11am",
        },
        {
          content: "dolor",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          me: false,
          created_at: "11:11am",
        },
        {
          content: "dolor",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          me: false,
          created_at: "11:11am",
        },
        {
          content: "dolor",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          me: true,
          created_at: "11:11am",
        },
        {
          content: "dolor",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          me: false,
          created_at: "11:12am",
        },
        {
          content: "dolor",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          me: false,
          created_at: "11:14am",
        },
      ],
      messageForm: {
        content: "",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        me: true,
        created_at: "11:11am",
      },
    };
  },
};
</script>

<style scoped>
#chatroom-wrapper {
  height: calc(100vh - 32px);
}
</style>
