const mutations = {
  SIGN_IN(state, { token, user }) {
    state.token = token;
    state.user = user;
  },
  SIGN_OUT(state) {
    state.token = null;
    state.user = null;
  },
};

export default mutations;
