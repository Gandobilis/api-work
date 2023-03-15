import axios from "axios";

const actions = {
  async auth({commit}, {name, email, password, destination}) {
    const data = name ? {name, email, password} : {email, password}
    const res = await axios.post(`/auth/${destination}`, data);
    if (res.data.status) {
      const {token, user} = res.data;
      commit("SIGN_IN", {
        token,
        user,
      });
    }
  }
};

export default actions;
