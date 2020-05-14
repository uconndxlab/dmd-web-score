import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';
import initialState from './initialState';

Vue.use(Vuex);


export default new Vuex.Store({
  state: initialState,
  getters,
  mutations,
  actions,
});
