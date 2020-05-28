import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  userName: '',
  id: '',
  lastpath: '',
};
export default new Vuex.Store({
  state,
  mutations: {
    initData(state, data) {
      data = JSON.parse(data);
      state.userName = data.userName;
      state.id = data._id;
    },
    getPath(state, data) {
      state.lastpath = data;
    },
  },
  actions: {},
  modules: {},
});
