import Vue from 'vue';
import VueRouter from 'vue-router';
import userStore from '@/store/modules/userStore';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', //url의 #제거
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
    { path: '/main', component: () => import('@/views/MainPage.vue'), meta: { auth: true } },
    { path: '/add', component: () => import('@/views/PostAddPage.vue'), meta: { auth: true } },
    { path: '/post/:id', component: () => import('@/views/PostFixPage.vue'), meta: { auth: true } },
  ],
});

//네비게이션 가드
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !userStore.getters.isLogin) {
    console.log('인증이 필요합니다.');
    next('/login');
    return false;
  }
  next(); // 다음 동작. (페이지 이동)
});

export default router;
