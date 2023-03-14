import signInModule from "../modules/signIn";

const signIn = (store) => {
  store.registerModule("signIn", signInModule);
};

export default signIn;
