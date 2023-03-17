import axios from "axios";

axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;

const actions = {
  async getCategories({commit}) {
    const res = await axios.get(`/categories`);
    if (res.data.success) {
      commit("SAVE_CATEGORIES", res.data.data);
    }
  },
  async addCategory({dispatch}, {name, type}) {
    await axios.post(`/categories`, {name, type});
    dispatch("getCategories");
  },
  async deleteCategory({dispatch}, id) {
    await axios.delete(`/categories/${id}`);
    dispatch("getCategories");
  },
  async editCategory({dispatch}, {id, name, type}) {
    await axios.put(`categories/${id}`, {name, type});
    dispatch("getCategories");
  },
};

export default actions;
