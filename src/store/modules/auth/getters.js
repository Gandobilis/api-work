const getters = {
  isSignedIn({isAuth}) {
    return isAuth;
  },
  getToken() {
    return localStorage.getItem("token");
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
};

export default getters;
