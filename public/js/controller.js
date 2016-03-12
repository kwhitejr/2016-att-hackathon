var app = angular.module('app');

app
  .controller('MyController', [
    '$scope',
    'FireBaseService',
    function ($scope, FireBaseService) {
      $scope.FireBaseService = FireBaseService;
    }
  ]);
