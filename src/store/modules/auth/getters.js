const getters = {
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
};

export default getters;
