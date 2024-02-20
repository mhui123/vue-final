import LoginForm from './LoginForm.vue';
import { shallowMount } from '@vue/test-utils';

describe('LoginForm.vue', () => {
  //   test('컴포넌트 마운트시 초기값으로 설정되어야 한다.', () => {
  //     // const instance = new Vue(LoginForm).$mount(); //컴포넌트 생성 및 마운트
  //     // expect(instance).toBeTruthy();
  //     const wrapper = shallowMount(LoginForm); //컴포넌트 생성 및 마운트
  //     expect(wrapper.vm.username).toBe(''); //컴포넌트가 마운트되면
  //   });
  //   test('id는 이메일형식이 아니면 경고메세지 출력.', () => {
  //     const wrapper = shallowMount(LoginForm, {
  //       data() {
  //         return {
  //           username: 'test@naver.com',
  //         };
  //       },
  //     });
  //     // const instance = wrapper.vm;
  //     // const idInput = wrapper.find('#username'); //find() : 요소내부 Element찾기
  //     // expect(idInput.element.value).toBe(instance.isUsernameValid);
  //     const warning = wrapper.find('.warning');
  //     console.log(warning.html());
  //     // expect(warning.exists()).toBeTruthy(); //.toBeTruthy() == 비교값이 true? //exists() : 해당 Element 화면에 존재시 true / false
  //     expect(warning.exists()).toBeNull();
  //   });
  test('ID, PW가 입력되지 않으면 로그인버튼 비활성화', () => {
    const wrapper = shallowMount(LoginForm, {
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
