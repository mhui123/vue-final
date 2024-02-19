import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '@/api/index';
import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    token: '',
  },
  mutations: {
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
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      const token = data.token;
      commit('setToken', token);
      commit('setUsername', data.user.username);
      saveAuthToCookie(token);
      saveUserToCookie(JSON.stringify(data.user));
      // this.logMessage = `${data.user.username}님 환영합니다`;
      return data;
    },
  },
});
