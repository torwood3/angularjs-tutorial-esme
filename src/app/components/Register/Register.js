/*
*  For this tutorial, we only use services, but in this kind of case, prefer using bindings
* */

export const Register = {
  template: require('./register.html'),
  controller($log, AuthService) {
    AuthService.setFormTitle('Register');
    AuthService.setSubmitCallback(user => {
      AuthService.register(user.username, user.password, user.confirmPassword, isLogged => {
        $log.log(isLogged);
      });
    });
  }
};
