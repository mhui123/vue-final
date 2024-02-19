<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <PostListItem v-for="postItem in postItems" :key="postItem._id" :item="postItem" @refresh="fetchData"></PostListItem>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { fetchPosts } from '@/api/posts';
import PostListItem from '@/components/posts/PostListItem';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export default {
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  created() {
    this.fetchData();
  },

  components: {
    PostListItem,
    LoadingSpinner,
  },
  methods: {
    ...mapMutations(['clearFixItem']),
    async fetchData() {
      this.clearFixItem();
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
};
</script>

<style></style>
