<template>
  <v-container class="px-0 py-0 fill-height" fluid>
    <v-row class="fill-height">
      <v-col cols="3" class="py-0">
        <ChatList />
      </v-col>
      <v-col cols="9" class="py-0">
        <ChatRoom />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChatList from "../components/chat/ChatList.vue";
import ChatRoom from "../components/chat/ChatRoom.vue";

export default {
  name: "ChatView",
  components: { ChatList, ChatRoom },
};
</script>
