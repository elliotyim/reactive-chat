<template>
  <v-dialog v-model="dialogs[dialogKey]" width="500" :persistent="persistent">
    <v-card>
      <v-card-title class="headline">
        <span>
          {{ title }}
        </span>
      </v-card-title>

      <v-divider />

      <v-card-text class="pa-0">
        <slot name="content"></slot>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <slot name="action"></slot>
        <v-spacer />
        <v-btn
          v-if="closable"
          color="primary"
          text
          @click="turnOffDialog(dialogKey)"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "DialogTemplate",
  props: {
    title: { type: String, required: false },
    persistent: { type: Boolean, required: false },
    dialogKey: { type: String, required: true },
    closable: { type: Boolean, required: false, default: true },
  },
  computed: {
    ...mapGetters(["dialogs"]),
  },
  methods: {
    ...mapMutations(["turnOffDialog", "addDialogState"]),
  },
  created() {
    this.addDialogState(this.dialogKey);
  },
};
</script>
