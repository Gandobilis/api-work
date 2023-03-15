import {createStore} from "vuex";
import categoriesPlugin from "./plugins/categories";
import authPlugin from "./plugins/auth";

const store = createStore({
  plugins: [categoriesPlugin, authPlugin],
});

export default store;
