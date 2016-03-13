angular.module('app', ['ngRoute', 'firebase']);

var app = angular.module('app');

app
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: '/public/templates/dashboard.html'
      })
      .when('/registration', {
        controller: 'MyController',
        templateUrl: '/public/templates/registration.html'
      })
      .when('/request', {
        controller: 'MyController',
        templateUrl: '/public/templates/request-form.html'
      })
      .when('/received', {
        controller: 'MyController',
        templateUrl: '/public/templates/request-received-2.html'
      })
      .when('/404', {
        templateUrl: '/public/templates/404.html'
      })
      .otherwise('/404');

  })
  .run([
    '$rootScope',
    'mapFactory',
    // 'APP_VERSION',
    function ($rootScope, mapFactory) {
      // Start Application
      // $rootScope.version = APP_VERSION;
      $rootScope.userId = "-KChM7Gt8GR2p7mJwOiH";
      $rootScope.agentId = "-KChMMjFv1vsqp-2IB0q";
      $rootScope.mapFactory = mapFactory;
    }
  ]);