<template>
  <li>
    <div class="post-title">{{ item.title }}</div>
    <!-- <div class="post-contents" value="item.contents">{{ item.contents }}</div> -->
    <textarea class="post-contents" v-model="item.contents" disabled></textarea>
    <div class="post-time">
      {{ item.createdAt | formatDate }}
      <i class="icon ion-md-create" @click="modifyItem"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  // filters: {
  //   formatDate(date) {
  //     return new Date(date);
  //   },
  // },
  methods: {
    async deleteItem() {
      if (confirm('삭제?')) {
        await deletePost(this.item._id);
        this.$emit('refresh');
      }
    },
    async modifyItem() {
      const sentence = `router.push({ path: '/modify', params: { id: '${this.item._id}'}})`;
      console.log(sentence);
      // const { data } = await getPost(this.item._id);
      // const body = data.posts[0];
      // this.$store.commit('setFixItem', body);
      this.$router.push(`/post/${this.item._id}`);
      // this.$router.push({ path: '/fix', params: { id: '${this.item._id}' } });
    },
  },
};
</script>

<style></style>
