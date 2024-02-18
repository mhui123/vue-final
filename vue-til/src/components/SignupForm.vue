<template>
  <div>
    <h1>회원가입 페이지</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">id:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">pw:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <label for="nickname">nickname:</label>
        <input type="text" id="nickname" v-model="nickname" />
      </div>
      <button type="submit">가입하기</button>
      <p>{{ logMessage }}</p>
    </form>
  </div>
</template>

<script>
import { registerUser } from '@/api/index.js';
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      console.log(data.username);
      this.logMessage = `${data.username} 의 회원가입이 완료되었습니다.`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
