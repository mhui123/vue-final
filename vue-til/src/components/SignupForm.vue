<template>
  <div class="content">
    <div class="form-wrapper form-wrapper-sm">
      <h1 class="page-header">회원가입 페이지</h1>
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input type="text" id="username" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname:</label>
          <input type="text" id="nickname" v-model="nickname" />
        </div>
        <button class="btn" type="submit" :disabled="!isUsernameValid || !password || !nickname">가입하기</button>
        <p class="log">{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/index.js';
import { validateEmail } from '@/utils/validation';
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
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
