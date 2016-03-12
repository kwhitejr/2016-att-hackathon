angular.module('app', ['ngRoute', 'firebase']);

var app = angular.module('app');

app
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/public/templates/dashboard.html'
      })
      .when('/404', {
        templateUrl: '/public/templates/404.html'
      })
      .otherwise('/404');

  })
  .run([
    '$rootScope',
    // 'APP_VERSION',
    function ($rootScope) {
      // Start Application
      // $rootScope.version = APP_VERSION;
    }
  ]);