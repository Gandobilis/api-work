import axios from "axios";
import store from "../../../store";

const actions = {
  async signUp({}, { name, email, password }) {
    const res = await axios.post(
      "https://items.magischer.de/api/auth/register",
      {
        name,
        email,
        password,
      }
    );
    if (res.data.status) {
      store.commit("signIn/signIn", {
        token: res.data.token,
        user: res.data.user,
      });
    } else {
      console.log(res.data.errors);
    }
  },
};

export default actions;
