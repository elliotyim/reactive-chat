import { http } from "@/utils/axios";

export default {
  state: () => ({}),
  mutations: {},
  actions: {
    async signUp(context, payload) {
      try {
        const response = await http.request({
          url: "/users",
          method: "POST",
          data: payload,
        });
        return response.data;
      } catch (e) {
        if (e.response) throw new Error(e.response.data.message);
        else throw new Error(e.message);
      }
    },
  },
};
