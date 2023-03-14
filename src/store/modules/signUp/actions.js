import axios from "axios";
import store from "../signIn";

const actions = {
  async signUp({}, { name, email, password }) {
    const res = await axios.post(
      "/auth/register",
      {
        name,
        email,
        password,
      }
    );
    if (res.data.status) {
      store.commit("signIn", {
        token: res.data.token,
        user: res.data.user,
      });
    } else {
      console.log(res.data.errors);
    }
  },
};

export default actions;
