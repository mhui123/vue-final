<template>
  <div>
    <h1>로그인페이지</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">id:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">pw:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit" :disabled="!isUsernameValid || !password">로그인</button>
      <p>{{ logMessage }}</p>
    </form>
  </div>
</template>

<script>
import { loginUser } from '@/api/index.js';
import { validateEmail } from '@/utils/validation';
export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        this.logMessage = `${data.user.username}님 환영합니다`;
      } catch (error) {
        console.log(error);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
    validateEmail() {},
  },
};
</script>

<style></style>
