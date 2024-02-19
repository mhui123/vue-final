// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { posts } from './index';

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
  return posts.get('/');
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
  return posts.post('/', postData);
}

// 학습 노트 데이터를 삭제하는 API
function deletePost(postId) {
  return posts.delete(postId);
}

//수정대상 데이터 조회
function getPost(postId) {
  return posts.get('/', postId);
}
function modifyPost(postData) {
  return posts.put('/', postData);
}

export { fetchPosts, createPost, deletePost, getPost, modifyPost };
