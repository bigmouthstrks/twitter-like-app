export const UserModule = {
    namespaced: true,
  state: {
    user: null
  },

  // Funciones que afectan y cambian el STATE
  mutations: {
    SET_USER(state, user){
      state.user = user;
    }
  },

  // Funciones que ejecutas a través de tu aplicación que ejecutan 'mutations'
  actions: {
    setUser({ commit }, user){
      commit('SET_USER', user);
    }
  },
}