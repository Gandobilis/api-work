import axios from "axios";
import store from "../../../store";

const actions = {
  async getCategories({ commit }) {
    const res = await axios.get(`/categories`);
    if (res.data.success) {
      commit("SAVE_CATEGORIES", res.data.data);
    }
  },
  async addCategory({ dispatch }, name) {
    await axios.post(
      `/categories`,
      {
        name,
        type: "news",
      },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${store.getters["signIn/getToken"]}`,
        },
      }
    );
    dispatch("getCategories");
  },
  async deleteCategory({ dispatch }, id) {
    await axios.delete(`/categories/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${store.getters["signIn/getToken"]}`,
      },
    });
    dispatch("getCategories");
  },
  async editCategory({ dispatch }, { id, name, type }) {
    await axios.put(
      `categories/${id}`,
      {
        name,
        type,
      },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${store.getters["signIn/getToken"]}`,
        },
      }
    );
    dispatch("getCategories");
  },
};

export default actions;
