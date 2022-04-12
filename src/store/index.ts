import { createStore } from "vuex";
import axios from "axios";
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
  actions: {
    async fetching({commit, state}) {
      await axios.get(`https://itunes.apple.com/search?term=${state.input}&entity=album`).then((val) => {
        console.log(val);
        return val.data;
      }) .then((res) => {
        commit("changeData", res.results);
      });
    }
  },
  modules: {},
});
