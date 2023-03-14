import { createStore } from "vuex";
import categoriesPlugin from "./plugins/categories";
import signInPlugin from "./plugins/signIn";
import signUpPlugin from "./plugins/signUp";

const store = createStore({
  plugins: [categoriesPlugin, signInPlugin, signUpPlugin],
});

export default store;
