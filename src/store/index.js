import Vue from 'vue';
import Vuex from 'vuex';
import {functionGetter} from './functionGetter';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    functionGetter
  }
});
