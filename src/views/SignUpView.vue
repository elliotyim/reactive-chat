<template>
  <v-container fill-height fluid>
    <v-row align="center">
      <v-col cols="3" />
      <v-col cols="6">
        <v-card class="mx-auto">
          <v-card-title>Sign Up</v-card-title>
          <v-card-text>
            <v-text-field type="text" label="Name" outlined />
            <v-text-field type="text" label="ID" outlined />
            <v-text-field
              type="password"
              label="Password"
              outlined
              hide-details
              class="mb-2"
            />
            <v-text-field
              type="password"
              label="Confirm Password"
              outlined
              hide-details
            />
          </v-card-text>
          <v-card-text>
            <v-btn color="black" dark block @click="signUp">Register</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3" />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SignUpView",
  methods: {
    signUp() {
      this.$router.push("/signIn");
    },
  },
};
</script>
