/*
*  For this tutorial, we only use services, but in this kind of case, prefer using bindings
* */

export const Login = {
  template: require('./login.html'),
  controller($log, AuthService, $state) {
    AuthService.setFormTitle('Login');
    AuthService.setSubmitCallback(user => {
      AuthService.login(user.username, user.password, isLogged => {
        if (isLogged) {
          $state.go('private');
        } else {
          $log.log('Error');
        }
      });
    });
  }
};
