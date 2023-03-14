import signUpModule from "../modules/signUp";

const signUp = (store) => {
  store.registerModule("signUp", signUpModule);
};

export default signUp;
