export const Auth = {
  namespaced: true,

  state: {
    user: Object()
  },

  mutations: {
    SET_USER_DATA(state, value) {
      state.user = value;
    },

  },

  actions: {
    setUser({ commit }, { value }) {
      commit("SET_USER_DATA", value);
    },
  }
};
