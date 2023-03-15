import axios from "axios";

const actions = {
  async getCategories({commit}) {
    const res = await axios.get(`/categories`);
    if (res.data.success) {
      commit("SAVE_CATEGORIES", res.data.data);
    }
  },
  async addCategory({dispatch}, name) {
    await axios.post(
      `/categories`,
      {
        name,
        type: "news",
      },
    );
    dispatch("getCategories");
  },
  async deleteCategory({dispatch}, id) {
    await axios.delete(`/categories/${id}`);
    dispatch("getCategories");
  },
  async editCategory({dispatch}, {id, name, type}) {
    await axios.put(
      `categories/${id}`,
      {
        name,
        type,
      },
    );
    dispatch("getCategories");
  },
};

export default actions;
