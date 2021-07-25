import { http } from "@/utils/axios";

export default {
  state: () => ({ signedInUser: null }),
  getters: {
    signedInUser: (state) => {
      return state.signedInUser;
    },
  },
  mutations: {
    setSignedInUser: (state, signedInUser) => {
      state.signedInUser = signedInUser;
    },
  },
  actions: {
    async checkIfSignedIn(context) {
      if (context.getters.signedInUser) return;

      try {
        const response = await http.request({
          url: "/users/signin-check",
          method: "GET",
        });

        if (response.data.message) throw new Error("User not signed in!");

        context.commit("setSignedInUser", response.data);
        return response.data;
      } catch (e) {
        if (e.response) throw new Error(e.response.data.message);
        else throw new Error(e.message);
      }
    },
    async signUp(context, payload) {
      try {
        const response = await http.request({
          url: "/users/signup",
          method: "POST",
          data: payload,
        });
        return response.data;
      } catch (e) {
        if (e.response) throw new Error(e.response.data.message);
        else throw new Error(e.message);
      }
    },
    async signInWithEmail(context, payload) {
      try {
        const response = await http.request({
          url: "/users/signin",
          method: "POST",
          data: payload,
        });
        context.commit("setSignedInUser", response.data);
        return response.data;
      } catch (e) {
        if (e.response) throw new Error(e.response.data.message);
        else throw new Error(e.message);
      }
    },
  },
};
