const mutations = {
  SAVE_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  CHANGE_SEARCH_NAME(state, searchName) {
    state.searchName = searchName.toLowerCase();
  },
  CHANGE_SEARCH_TYPE(state, searchType) {
    state.searchType = searchType;
  },
};

export default mutations;
