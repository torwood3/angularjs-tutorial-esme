export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/',
      component: 'appLogin',
      authenticate: false
    })
    .state('register', {
      url: '/register',
      component: 'appRegister',
      authenticate: false
    })
    .state('private', {
      url: '/private',
      component: 'appPrivate',
      authenticate: true
    });
}
