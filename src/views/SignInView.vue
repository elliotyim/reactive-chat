<template>
  <v-container fill-height fluid>
    <v-row align="center">
      <v-col cols="3" />
      <v-col cols="6">
        <v-card class="mx-auto">
          <v-card-title>Sign In</v-card-title>
          <v-card-text>
            <v-text-field type="text" label="ID" outlined />
            <v-text-field
              type="password"
              label="Password"
              outlined
              hide-details=""
            />
          </v-card-text>
          <v-card-text>
            <v-btn color="black" dark block @click="signIn">Sign In</v-btn>
          </v-card-text>

          <div class="text-center">
            <h3>OR</h3>
          </div>

          <v-card-text>
            <v-btn outlined block @click="signUp">Sign Up</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3" />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SignInView",
  data() {
    return {};
  },
  methods: {
    signIn() {},
    signUp() {},
  },
};
</script>
