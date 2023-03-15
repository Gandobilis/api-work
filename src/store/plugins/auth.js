import authModule from "../modules/auth";

const auth = (store) => {
  store.registerModule("auth", authModule);
};

export default auth;
