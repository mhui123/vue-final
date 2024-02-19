import axios from 'axios';

import { setInterceptors } from './common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}
const instance = createInstance();

/**
 * 회원가입
 * @param {username: String, password: String, nickname: String} userData
 */
function registerUser(userData) {
  return instance.post('signup', userData);
}

/**
 * 로그인
 * @param {username: String, password: String} userData
 */
function loginUser(userData) {
  return instance.post('login', userData);
}

//데이터조회
function fetchPosts() {
  return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };
