<template>
  <v-row class="fill-height">
    <v-col cols="3" class="chat-list-col px-0 py-0">
      <ChatList />
    </v-col>
    <v-col cols="9" class="px-0 py-0">
      <ChatRoom />
    </v-col>
  </v-row>
</template>

<script>
import ChatList from "../components/chat/ChatList.vue";
import ChatRoom from "../components/chat/ChatRoom.vue";

export default {
  name: "ChatView",
  components: { ChatList, ChatRoom },
};
</script>

<style scoped>
.chat-list-col {
  border-right: 1px solid #e0e0e0;
}
</style>
