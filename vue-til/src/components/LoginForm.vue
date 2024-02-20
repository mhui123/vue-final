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
        <button class="btn" type="submit" :disabled="!isUsernameValid || !password" :class="!isUsernameValid || !password ? 'disabled' : null">로그인</button>
        <p class="log">{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';
import { mapActions } from 'vuex';
import bus from '@/utils/bus.js';

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
    ...mapActions(['LOGIN']),
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        // await this.$store.dispatch('LOGIN', userData);
        const response = await this.LOGIN(userData);
        bus.$emit('show:toast', response.message);
        this.$router.push('/main');
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
