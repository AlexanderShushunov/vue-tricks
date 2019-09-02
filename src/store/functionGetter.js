import Vue from 'vue';
import Vuex from 'vuex';
import {enhancedGetters} from 'vuex-strong-cache';
import memoizeOne from 'memoize-one';

Vue.use(Vuex);

const state = {
  counter: 0,
  list: [55, 99, 36]
};

const mutations = {
  addToList(state, value) {
    state.list.push(value);
  },
  incCounter(state) {
    ++state.counter;
  }
};

const stdGetters = {
  getByIndex(state) {
    return index => {
      // eslint-disable-next-line no-console
      console.log('inner getByIndex was invoked');
      if (index >= state.list.length || index < 0) {
        return {value: 'ups'};
      }
      return {value: state.list[index]};
    };
  }
};

const gettersWithCache = enhancedGetters({
  getByIndexCached: stdGetters.getByIndex
});

const gettersWithMem = {
  getByIndexMem(state) {
    let list = state.list; // to "connect" getter and state prop
    console.log('getByIndexMem was invoked');
    return memoizeOne(function (index) {
      console.log('inner getByIndexMem was invoked');
      if (index >= list.length || index < 0) {
        return {value: 'ups'};
      }
      return {value: list[index]};
    });
  }
};


export const functionGetter = {
  namespaced: true,
  state,
  mutations,
  getters: {
    ...stdGetters,
    ...gettersWithCache,
    ...gettersWithMem
  }
};
