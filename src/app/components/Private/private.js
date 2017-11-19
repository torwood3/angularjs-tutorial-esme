/*
*  For this tutorial, we only use services, but in this kind of case, prefer using bindings
* */

class PrivateCtrl {
  constructor(AuthService) {
    this.username = AuthService.currentUser.username;
  }
}

export const Private = {
  template: require('./private.html'),
  controller: PrivateCtrl
};
