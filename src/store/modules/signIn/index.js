import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const signIn = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default signIn;
