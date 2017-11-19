import angular from 'angular';

export const Form = {
  template: require('./form.html'),
  controller(AuthService) {
    const vm = this;
    vm.isRegister = (AuthService.getFormTitle() === 'Register');
    vm.submitTitle = AuthService.getFormTitle();
    vm.submit = AuthService.getSubmitCallback();

    vm.reset = () => {
      vm.user = angular.copy({
        username: '',
        password: '',
        confirmPassword: ''
      });
    };

    vm.reset();
  }
};
