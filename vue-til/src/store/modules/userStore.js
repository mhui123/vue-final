import { saveAuthToCookie, saveUserToCookie, getAuthFromCookie, getUserFromCookie } from '@/utils/cookies';
import { loginUser } from '@/api/auth';
const state = {
  username: getUserFromCookie() || '',
  token: getAuthFromCookie() || '',
};

const mutations = {
  setUsername(state, username) {
    state.username = username;
  },
  clearUsername(state) {
    state.username = '';
  },
  clearUserInfo(state) {
    state.username = '';
    state.token = '';
  },
  setToken(state, value) {
    state.token = value;
  },
};
const getters = {
  isLogin(state) {
    return state.username !== '';
  },
};

const actions = {
  async LOGIN({ commit }, userData) {
    const { data } = await loginUser(userData);
    const token = data.token;
    commit('setToken', token);
    commit('setUsername', data.user.username);
    saveAuthToCookie(token);
    // saveUserToCookie(JSON.stringify(data.user));
    saveUserToCookie(data.user.username);
    return data;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
