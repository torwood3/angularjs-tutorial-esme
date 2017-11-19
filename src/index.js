import angular from 'angular';

import {Form} from './app/Form/form';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.css';

export const app = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('appForm', Form);
