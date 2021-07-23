<template>
  <v-container fill-height fluid>
    <v-row align="center">
      <v-col cols="3" />
      <v-col cols="6">
        <v-card class="mx-auto">
          <v-card-title>Sign Up</v-card-title>
          <v-card-text>
            <v-text-field
              type="email"
              label="Email"
              v-model="email"
              @keydown.enter="submit"
              outlined
            />
            <v-text-field
              type="password"
              label="Password"
              class="mb-2"
              v-model="password1"
              @keydown.enter="submit"
              outlined
              hide-details
            />
            <v-text-field
              type="password"
              label="Confirm Password"
              v-model="password2"
              @keydown.enter="submit"
              outlined
            />
            <v-text-field
              type="text"
              label="Name"
              v-model="name"
              @keydown.enter="submit"
              outlined
            />
          </v-card-text>
          <v-card-text>
            <v-btn color="black" dark block @click="submit">Register</v-btn>
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
  name: "SignUpView",
  data() {
    return {
      email: null,
      password1: null,
      password2: null,
      name: null,
    };
  },
  methods: {
    ...mapActions(["signUp"]),
    validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      const isValidEmail = re.test(String(email).toLowerCase());

      if (!isValidEmail) return "Invalid Email!";
      else if (email.length > 50) return "Too long email!";
      else return "success";
    },
    validatePassword(pw1, pw2) {
      if (!pw1 || !pw2) return "Input passwords!";
      else if (pw1.length < 8 || pw2.length < 8) return "Too short passwords!";
      else if (pw1.length > 50 || pw2.length > 50) return "Too long passwords!";
      else if (pw1 != pw2) return "Different passwords provided!";
      else return "success";
    },
    validateName(name) {
      if (!name) return "Input name!";
      else if (name.length > 30) return "Too long name!";
      else return "success";
    },
    async submit() {
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

      message = this.validateName(this.name);
      if (message != "success") {
        alert(message);
        return;
      }

      const payload = {
        email: this.email,
        password: this.password1,
        name: this.name,
      };

      try {
        await this.signUp(payload);
        alert("User registered successfully!");
        this.$router.push("/signIn");
      } catch (e) {
        alert(e);
      }
    },
  },
};
</script>
