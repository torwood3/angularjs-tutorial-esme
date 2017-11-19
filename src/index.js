import angular from 'angular';

import {Form} from './app/components/Form/form';
import {Login} from './app/components/Login/login';
import {Register} from './app/components/Register/register';
import {Private} from './app/components/Private/private';

import {AuthService} from './app/services/authentification';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.css';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .run(($log, $transitions, AuthService) => {
    $transitions.onBefore({ }, trans => {
      $log.log(trans.to().name);
      if (trans.to().authenticate && !AuthService.isAuthenticated()) {
        // User isn’t authenticated
        return trans.router.stateService.target('login');
      }
    });
  })
  .config(routesConfig)
  .component('appLogin', Login)
  .component('appRegister', Register)
  .component('appForm', Form)
  .component('appPrivate', Private)
  .service('AuthService', AuthService);
