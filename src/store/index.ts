import { createStore } from "vuex";

export default createStore({
  state: {
    input: "",
    data: {},
  },
  mutations: {
    changeData(state, newData) {
      state.data = newData;
    }
  },
  actions: {},
  modules: {},
});
