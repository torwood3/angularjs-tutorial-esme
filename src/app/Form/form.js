import angular from 'angular';

export const Form = {
  template: require('./form.html'),
  controller() {
    const vm = this;
    vm.isRegister = false;
    vm.submitTitle = 'Login';
    vm.submit = () => {

    };

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
