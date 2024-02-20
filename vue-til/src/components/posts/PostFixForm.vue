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
import { editPost, getPost } from '@/api/posts';
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
  },
  async created() {
    const id = this.$route.params['id'];
    const { data } = await getPost(id);
    this.title = data.title;
    this.contents = data.contents;
  },
  methods: {
    async submitForm() {
      try {
        const postData = { title: this.title, contents: this.contents };
        await editPost(this.$route.params['id'], postData);
        this.$router.push('/main');
      } catch (error) {
        this.logMessage = error.response.data.message;
      }
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
