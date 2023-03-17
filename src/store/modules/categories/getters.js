const getters = {
  getSearchName({ searchName }) {
    return searchName;
  },
  getSearchType({ searchType }) {
    return searchType;
  },
  getCategories({ categories }, getters) {
    return categories.filter(
      (c) =>
        c.name.includes(getters.getSearchName) &&
        c.type.includes(getters.getSearchType)
    );
  },
};

export default getters;
