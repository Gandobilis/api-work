import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const auth = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default auth;
