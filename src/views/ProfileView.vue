<template>
  <v-container fluid class="py-0 px-0 fill-height">
    <v-row>
      <v-col class="pb-0">
        <v-parallax
          height="300"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          id="parallax-banner"
        />
        <input
          type="file"
          accept="image/*"
          ref="profile"
          @change="onChangeProfile"
          hidden
        />
      </v-col>
    </v-row>

    <v-row class="fill-height">
      <v-col class="py-0">
        <MaterialCard class="v-card-profile fill-height" :avatar="profileImg">
          <v-card-text class="text-center pt-0 mb-5">
            <v-btn color="black" dark @click="selectProfile">
              Change Profile
            </v-btn>
          </v-card-text>
          <v-card-text class="text-center pt-0">
            <v-text-field label="Email" outlined disabled v-model="email" />
            <v-text-field
              label="User Name"
              outlined
              v-model="name"
              @keydown.enter="submit"
            />
            <v-text-field
              type="password"
              label="Password"
              outlined
              v-model="password1"
              @keydown.enter="submit"
            />
            <v-text-field
              type="password"
              label="Password Confirm"
              outlined
              v-model="password2"
              @keydown.enter="submit"
            />

            <v-btn color="success" class="mr-0" @click="submit"> Save </v-btn>
          </v-card-text>
        </MaterialCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

import MaterialCard from "@/components/material/MaterialCard.vue";

import { validatePassword } from "@/utils/validator";

export default {
  name: "ProfileView",
  components: { MaterialCard },
  data() {
    return {
      email: null,
      name: null,
      password1: null,
      password2: null,
      profileImgFile: null,
    };
  },
  computed: {
    ...mapGetters(["signedInUser"]),
    profileImg() {
      return this.signedInUser?.profileImg !== null
        ? this.signedInUser?.profileImg
        : require("@/assets/avatar-url-default.png");
    },
  },
  methods: {
    ...mapMutations(["setSignedInUser"]),
    ...mapActions(["modifyUserInfo"]),
    selectProfile() {
      this.$refs.profile.click();
    },
    onChangeProfile(e) {
      this.profileImgFile = e.target.files[0];
      const url = URL.createObjectURL(this.profileImgFile);
      this.setSignedInUser({ ...this.signedInUser, profileImg: url });
    },
    submit() {
      let message = validatePassword(this.password1, this.password2);
      if (message != "success") {
        alert(message);
        return;
      }

      const payload = new FormData();
      payload.append("id", this.signedInUser?.id);
      payload.append("profileImgFile", this.profileImgFile);
      payload.append("name", this.name?.trim());
      payload.append("password", this.password1);
      try {
        this.modifyUserInfo(payload);
        alert("Changed successfully!");
        location.reload();
      } catch (e) {
        alert(e);
      }
    },
  },
  mounted() {
    this.email = this.signedInUser?.email;
    this.name = this.signedInUser?.name;
  },
};
</script>
