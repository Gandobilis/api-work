import axios from "axios";

const actions = {
  async signIn({ commit }, { email, password }) {
    const res = await axios.post("https://items.magischer.de/api/auth/login", {
      email,
      password,
    });
    if (res.data.status) {
      commit("signIn", {
        token: res.data.token,
        user: res.data.user,
      });
    } else {
      console.log(res.data.errors);
    }
  },
};

export default actions;
