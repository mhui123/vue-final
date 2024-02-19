<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <h1 class="page-header">로그인페이지</h1>
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
        <button class="btn" type="submit" :disabled="!isUsernameValid || !password">로그인</button>
        <p class="log">{{ logMessage }}</p>
      </form>
    </div>
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
        this.$router.push('/main');
        // this.logMessage = `${data.user.username}님 환영합니다`;
        this.$store.commit('setUsername', data.user.username);
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
