<template>
  <div class="contents">
    <h1 class="page-header">수정페이지</h1>
    <div class="form-wrapper">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="titme">Title:</label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea type="text" id="contents" v-model="contents" rows="5" />
          <p class="validation-text warning" v-if="!isContentsValid">Text is too long</p>
        </div>
        <button type="submit" class="btn" :disabled="!title || !contents">Fix</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/posts';
import { mapMutations, mapGetters } from 'vuex';
export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length > 0 && this.contents.length <= 200;
    },
    ...mapGetters(['fixItem']),
  },
  created() {
    this.setTemplate();
  },
  methods: {
    ...mapMutations([]),
    async submitForm() {
      try {
        const postData = { title: this.title, contents: this.contents };
        await createPost(postData);
      } catch (error) {
        this.logMessage = error.response.data.message;
      }
      this.$router.push('/main');
    },
    setTemplate() {
      this.title = this.fixItem.title;
      this.contents = this.fixItem.contents;
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
</style>
