import angular from 'angular';

import {Form} from './app/components/Form/form';
import {Login} from './app/components/Login/login';
import {Register} from './app/components/Register/register';

import {AuthService} from './app/services/authentification';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.css';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('appLogin', Login)
  .component('appRegister', Register)
  .component('appForm', Form)
  .service('AuthService', AuthService);
