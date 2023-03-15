const state = {
  isAuth: !!localStorage.getItem('token'), // !!null = false
};

export default state;
