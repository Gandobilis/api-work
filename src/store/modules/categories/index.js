import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const categories = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default categories;
