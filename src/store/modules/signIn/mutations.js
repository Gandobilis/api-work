const mutations = {
  signIn(state, { token, user }) {
    state.token = token;
    state.user = user;
  },
  signOut(state) {
    state.token = null;
    state.user = null;
  },
};

export default mutations;
