import Vue from "vue";
import Vuex from "vuex";

import dialog from "@/store/modules/dialog";
import user from "@/store/modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { dialog, user },
});
