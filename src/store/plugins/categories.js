import categoriesModule from "../modules/categories";

const categories = (store) => {
  store.registerModule("categories", categoriesModule);
};

export default categories;
