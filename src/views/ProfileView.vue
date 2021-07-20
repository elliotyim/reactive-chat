<template>
  <v-container fluid class="py-0 px-0 fill-height">
    <v-row>
      <v-col class="pb-0">
        <v-parallax
          height="300"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          id="parallax-banner"
        ></v-parallax>
      </v-col>
    </v-row>

    <v-row class="fill-height">
      <v-col class="py-0">
        <MaterialCard class="v-card-profile fill-height" :avatar="profileImg">
          <v-card-text class="text-center">
            <h6 class="text-h4 mb-1 grey--text">{{ id }}</h6>

            <h4 class="text-h3 font-weight-light mb-3 black--text">
              {{ name }}
            </h4>

            <p class="font-weight-light grey--text">
              {{ email }}
            </p>

            <v-text-field label="Password" outlined v-model="password" />
            <v-text-field
              label="Password Confirm"
              outlined
              v-model="password2"
            />

            <v-btn color="success" rounded class="mr-0"> Save </v-btn>
          </v-card-text>
        </MaterialCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MaterialCard from "@/components/material/MaterialCard.vue";

export default {
  name: "ProfileView",
  components: { MaterialCard },
  data() {
    return {
      id: "CEO / CO-FOUNDER",
      name: "Alec Thompson",
      email: "alec@email.com",
      password: null,
      password2: null,
      profileImg:
        "https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg",
    };
  },
};
</script>
