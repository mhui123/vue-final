import { shallowMount } from '@vue/test-utils';
import SignupForm from './SignupForm.vue';

describe('SignupForm.vue', () => {
  test('ID, PW가 입력되지 않으면 로그인버튼 비활성화', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'a@a.com',
          password: '1234',
        };
      },
    });
    const loginBtn = wrapper.find('.btn');
    // console.log(loginBtn.html().className);
    expect(loginBtn.element.disabled).toBeTruthy();
  });
});
