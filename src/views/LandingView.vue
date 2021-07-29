<template>
  <v-container fill-height fluid>
    <v-row align="center">
      <v-col cols="3" />
      <v-col cols="6">
        <v-card class="mx-auto">
          <v-card-title>Reactive Chat</v-card-title>
          <v-card-text>
            <v-text-field
              type="email"
              label="Email"
              v-model="email"
              @keydown.enter="signIn"
              outlined
            />
            <v-text-field
              type="password"
              label="Password"
              class="mb-2"
              v-model="password1"
              @keydown.enter="signIn"
              outlined
              hide-details
            />
            <v-text-field
              type="password"
              label="Confirm Password"
              v-model="password2"
              @keydown.enter="signIn"
              outlined
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
import { mapActions } from "vuex";
export default {
  name: "LandingView",
  data() {
    return {
      email: null,
      password1: null,
      password2: null,
    };
  },
  methods: {
    ...mapActions(["signInWithEmail"]),
    validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      const isValidEmail = re.test(String(email).toLowerCase());

      if (!isValidEmail) return "Invalid Email!";
      else if (email.length > 50) return "Too long email!";
      else return "success";
    },
    validatePassword(pw1, pw2) {
      if (!pw1 || !pw2) return "Input passwords!";
      else if (pw1.length > 50 || pw2.length > 50) return "Too long passwords!";
      else if (pw1 != pw2) return "Different passwords provided!";
      else return "success";
    },
    async signIn() {
      let message = this.validateEmail(this.email);
      if (message != "success") {
        alert(message);
        return;
      }

      message = this.validatePassword(this.password1, this.password2);
      if (message != "success") {
        alert(message);
        return;
      }

      const payload = {
        email: this.email,
        password: this.password1,
      };

      try {
        const signedInUser = await this.signInWithEmail(payload);
        alert(`Welcome ${signedInUser.name}!`);
        this.$router.push("/chat");
      } catch (e) {
        alert(e.message);
      }
    },
    signUp() {
      this.$router.push("/signup");
    },
  },
};
</script>
