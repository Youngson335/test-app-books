import { createStore } from "vuex";

export default createStore({
  state: {
    books: [],
  },
  mutations: {
    saveNewBook(state, val) {
      state.books = val;
    },
  },
  getters: {
    getListBooks(state) {
      return state.books;
    },
  },
  actions: {},
  modules: {},
});
