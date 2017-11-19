export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  /* Not use
  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    });
  */
}
