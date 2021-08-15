export default {
  state: () => ({ dialogs: null }),
  getters: {
    dialogs: (state) => {
      return state.dialogs;
    },
  },
  mutations: {
    turnOnDialog: (state, dialogName) => {
      state.dialogs[dialogName] = true;
    },
    turnOffDialog: (state, dialogName) => {
      state.dialogs[dialogName] = false;
    },
    addDialogState: (state, dialogName) => {
      let newDialogs = { ...state.dialogs };
      newDialogs[dialogName] = false;
      state.dialogs = newDialogs;
    },
  },
  actions: {},
};
