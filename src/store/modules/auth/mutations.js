const mutations = {
  SIGN_IN({}, {token, user}) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  },
  SIGN_OUT() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};

export default mutations;
