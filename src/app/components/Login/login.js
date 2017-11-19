/*
*  For this tutorial, we only use services, but in this kind of case, prefer using bindings
* */

export const Login = {
  template: require('./login.html'),
  controller($log, AuthService) {
    /*
     const vm = this;
     const submitTitle = 'Login';
     const submit = () => {
      // submit login form
     };
     */
    AuthService.login('', '', res => {
      $log.log(res);
    });
  }
};
