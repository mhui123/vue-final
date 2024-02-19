<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <PostListItem v-for="(postItem, idx) in postItems" :key="idx" :item="postItem"></PostListItem>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index';
import PostListItem from '@/components/posts/PostListItem';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { getAuthFromCookie, getUserFromCookie } from '@/utils/cookies';

export default {
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  created() {
    this.fetchData();
    const auth = getAuthFromCookie() || '';
    const user = JSON.parse(getUserFromCookie() || '');

    console.log(`${auth} : ${user}`);
    this.$store.state.username = user.username || '';
    this.$store.state.token = auth;
  },
  components: {
    PostListItem,
    LoadingSpinner,
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
};
</script>

<style></style>
