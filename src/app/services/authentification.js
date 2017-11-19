/**
 * Created by pamas on 29/04/2017.
 */
export class AuthService {
  /** @ngInject */
  constructor($http, $log, $location) {
    this._http = $http;
    this._log = $log;
    this._location = $location;
    this.userList = [];
    this.form = {title: '', callback: () => {}};
  }

  setFormTitle(title) {
    this.form.title = title;
  }

  getFormTitle() {
    return this.form.title;
  }

  setSubmitCallback(callback) {
    this.form.callback = callback;
  }

  getSubmitCallback() {
    return this.form.callback;
  }

  login(username, password, callback) {
    let found = true;
    for (const user in this.userList) {
      if (this.userList[user].username === username) {
        if (this.userList[user].password === password) {
          callback(true);
          found = false;
        }
      }
    }
    if (found) {
      callback(false);
    }
  }

  register(username, password, confirmPassword) {
    if (password === confirmPassword) {
      this.userList.push({username, password});
    }
  }

  logout() {
    // Logout
  }
}
