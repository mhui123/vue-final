const state = {
  fixItem: new Object(),
};

const mutations = {
  setFixItem(state, fixItem) {
    state.fixItem = fixItem;
  },
  clearFixItem(state) {
    state.fixItem = new Object();
  },
};
const getters = {
  getFixItem(state) {
    return state.fixItem;
  },
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
