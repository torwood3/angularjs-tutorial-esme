import angular from 'angular';

import {Form} from './app/Form/form';
import {Login} from './app/Login/login';
import {Register} from './app/Register/register';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.css';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('appLogin', Login)
  .component('appRegister', Register)
  .component('appForm', Form);
