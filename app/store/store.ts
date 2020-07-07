import Vue from 'vue';
import Vuex from 'vuex';
import audios from './audios';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    audios,
  },
});
