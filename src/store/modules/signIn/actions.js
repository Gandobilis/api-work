import axios from "axios";

const actions = {
  async signIn({ commit }, { email, password }) {
    const res = await axios.post("/auth/login", {
      email,
      password,
    });
    if (res.data.status) {
      commit("SIGN_IN", {
        token: res.data.token,
        user: res.data.user,
      });
    } else {
      console.log(res.data.errors);
    }
  },
};

export default actions;
