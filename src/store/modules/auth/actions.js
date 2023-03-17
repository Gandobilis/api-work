import axios from "axios";

const actions = {
  async auth({ dispatch }, { data, destination }) {
    const res = await axios.post(`/auth/${destination}`, data);
    if (res.data.status) {
      const { token, user } = res.data;
      await dispatch("signIn", {
        token,
        user,
      });
    }
  },
  signIn({}, { token, user }) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  },
  signOut() {
    localStorage.clear();
  },
};

export default actions;
