import audios from '../data/audios';

const state = {
  all: [],
};

const mutations = {
  SET_AUDIOS(state, all) {
    state.all = all;
  },
};

const actions = {
  fetchAudios({ commit }) {
    commit('SET_AUDIOS', audios);
  },
};

export default {
  state,
  mutations,
  actions,
};
