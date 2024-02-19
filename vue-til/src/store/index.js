import Vue from 'vue';
import Vuex from 'vuex';
import userStore from '@/store/modules/userStore';
import postStore from '@/store/modules/postStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userStore,
    postStore,
  },
});
