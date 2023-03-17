import actions from "./actions";
import getters from "./getters";

const auth = {
  namespaced: true,
  getters,
  actions,
};

export default auth;
